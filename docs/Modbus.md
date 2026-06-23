# Modbus 知识库

Modbus 是一种面向工业设备通信的应用层协议，最常见于 PLC、仪表、传感器、网关、变频器、冷柜、能源表计和各类边缘采集设备。它的核心价值不是复杂，而是简单、稳定、易集成。

这篇笔记按工程落地视角整理：先理解基本原理，再看数据帧、地址字典、执行逻辑、RTU/TCP 应用方式，最后总结常见解决方案。

<section class="knowledge-visual protocol-stack">
  <div>
    <span>应用层对象</span>
    <strong>Coil / Discrete Input / Input Register / Holding Register</strong>
  </div>
  <i></i>
  <div>
    <span>PDU</span>
    <strong>Function Code + Data</strong>
  </div>
  <i></i>
  <div>
    <span>ADU</span>
    <strong>RTU: Address + PDU + CRC / TCP: MBAP + PDU</strong>
  </div>
  <i></i>
  <div>
    <span>工程落地</span>
    <strong>地址换算 / 字节序 / 轮询策略 / 异常处理</strong>
  </div>
</section>

## 1. Modbus 基本原理

### 1.1 通信模型

Modbus 采用典型的 **Client / Server** 模型。在传统串口语境里也常被称为 **Master / Slave**。

- Client/Master：主动发起请求的一方，例如 PLC、SCADA、边缘网关、上位机。
- Server/Slave：被动响应请求的一方，例如传感器、仪表、控制器、执行器。
- 一次事务：Client 发送请求，Server 处理后返回响应。
- Server 不会主动上报数据，除非上层系统另外设计了轮询、网关转发或事件上报机制。

### 1.2 协议分层

Modbus 的应用层核心是 **PDU（Protocol Data Unit）**：

```text
PDU = Function Code + Data
```

不同传输方式会在 PDU 外面包一层 **ADU（Application Data Unit）**：

```text
ADU = Address / Header + PDU + Error Check
```

因此，Modbus RTU、Modbus ASCII、Modbus TCP 的功能码和数据模型基本一致，区别主要在传输层封装、地址字段、校验方式和连接管理。

### 1.3 数据模型

Modbus 把设备数据抽象成四类对象。

<section class="register-map">
  <div>
    <b>0xxxx</b>
    <strong>Coil</strong>
    <span>1 bit，读写，控制量或开关状态。</span>
  </div>
  <div>
    <b>1xxxx</b>
    <strong>Discrete Input</strong>
    <span>1 bit，只读，离散输入状态。</span>
  </div>
  <div>
    <b>3xxxx</b>
    <strong>Input Register</strong>
    <span>16 bit，只读，采样值或测量值。</span>
  </div>
  <div>
    <b>4xxxx</b>
    <strong>Holding Register</strong>
    <span>16 bit，读写，配置、状态字或控制参数。</span>
  </div>
</section>

| 数据区 | 传统地址前缀 | 访问类型 | 单位 | 常用功能码 |
| --- | --- | --- | --- | --- |
| Coil | 0xxxx | 读/写 | 1 bit | `0x01`、`0x05`、`0x0F` |
| Discrete Input | 1xxxx | 只读 | 1 bit | `0x02` |
| Input Register | 3xxxx | 只读 | 16 bit | `0x04` |
| Holding Register | 4xxxx | 读/写 | 16 bit | `0x03`、`0x06`、`0x10`、`0x16` |

工程上最容易出错的是地址表达方式：

- 协议帧里的地址通常是 **0-based offset**，例如第一个 Holding Register 的地址是 `0x0000`。
- 文档里的地址常写成 **4xxxx**，例如 `40001` 往往对应协议地址 `0x0000`。
- 有些厂商文档直接写 0-based 地址，有些写 1-based 地址，需要在接入前确认。

### 1.4 常见功能码

| 功能码 | 名称 | 用途 |
| --- | --- | --- |
| `0x01` | Read Coils | 读取线圈状态 |
| `0x02` | Read Discrete Inputs | 读取离散输入 |
| `0x03` | Read Holding Registers | 读取保持寄存器 |
| `0x04` | Read Input Registers | 读取输入寄存器 |
| `0x05` | Write Single Coil | 写单个线圈 |
| `0x06` | Write Single Register | 写单个保持寄存器 |
| `0x0F` | Write Multiple Coils | 写多个线圈 |
| `0x10` | Write Multiple Registers | 写多个保持寄存器 |
| `0x16` | Mask Write Register | 按位掩码写保持寄存器 |

### 1.5 异常响应

当 Server 无法正常处理请求时，会返回异常响应：

```text
异常功能码 = 原功能码 + 0x80
```

例如请求 `0x03` 失败，响应功能码会变成 `0x83`。

常见异常码：

| 异常码 | 含义 | 常见原因 |
| --- | --- | --- |
| `0x01` | Illegal Function | 设备不支持该功能码 |
| `0x02` | Illegal Data Address | 地址越界或寄存器不存在 |
| `0x03` | Illegal Data Value | 数量、长度或写入值非法 |
| `0x04` | Server Device Failure | 设备内部处理失败 |
| `0x06` | Server Device Busy | 设备忙，稍后重试 |

## 2. Modbus 数据帧结构

### 2.1 Modbus 基本帧

Modbus 的通用逻辑可以理解为：

<section class="frame-diagram">
  <div>
    <span>Client 请求</span>
    <strong>Slave / Unit</strong>
    <strong>Function Code</strong>
    <strong>Address</strong>
    <strong>Quantity / Value</strong>
  </div>
  <div>
    <span>Server 响应</span>
    <strong>Function Code</strong>
    <strong>Byte Count</strong>
    <strong>Data</strong>
    <strong>Exception</strong>
  </div>
</section>

```text
请求：读/写哪个设备、哪个数据区、从哪个地址开始、读/写多少数据
响应：返回执行结果、数据内容或异常码
```

#### Modbus PDU

| 字段 | 长度 | 说明 |
| --- | --- | --- |
| Function Code | 1 byte | 功能码，表示读、写或诊断操作 |
| Data | N bytes | 地址、数量、字节数、寄存器值等 |

#### Modbus RTU ADU

```text
Slave Address | Function Code | Data | CRC16
```

| 字段 | 长度 | 说明 |
| --- | --- | --- |
| Slave Address | 1 byte | 从站地址，常用 `1-247`，`0` 通常为广播 |
| Function Code | 1 byte | 功能码 |
| Data | N bytes | PDU 数据 |
| CRC16 | 2 bytes | 低字节在前，高字节在后 |

示例：读取从站 `1` 的 Holding Register，从地址 `0x0000` 开始读取 `2` 个寄存器。

```text
01 03 00 00 00 02 C4 0B
```

含义：

| 字节 | 含义 |
| --- | --- |
| `01` | 从站地址 |
| `03` | 读 Holding Register |
| `00 00` | 起始地址 |
| `00 02` | 读取 2 个寄存器 |
| `C4 0B` | CRC16，低字节在前 |

#### Modbus TCP ADU

```text
MBAP Header | Function Code | Data
```

MBAP Header 长度固定为 7 bytes。

| 字段 | 长度 | 说明 |
| --- | --- | --- |
| Transaction ID | 2 bytes | 事务编号，用于匹配请求和响应 |
| Protocol ID | 2 bytes | 协议标识，Modbus 固定为 `0x0000` |
| Length | 2 bytes | 后续字节长度，包含 Unit ID + PDU |
| Unit ID | 1 byte | 单元标识，常用于网关后面的 RTU 从站地址 |

示例：Modbus TCP 读取 Holding Register。

```text
00 01 00 00 00 06 01 03 00 00 00 02
```

含义：

| 字节 | 含义 |
| --- | --- |
| `00 01` | Transaction ID |
| `00 00` | Protocol ID |
| `00 06` | 后续长度为 6 |
| `01` | Unit ID |
| `03` | 读 Holding Register |
| `00 00` | 起始地址 |
| `00 02` | 读取 2 个寄存器 |

### 2.2 Modbus MASK 计算

这里的 MASK 计算，指的是在 Modbus 字典中对某个寄存器的 bit 位进行判断。常见场景是：一个寄存器不是单一数值，而是一个状态字或告警字，每个 bit 表示一个独立状态。

例如寄存器 A 的值是：

```text
value = 0xFF = 0b11111111
```

如果要判断 bit3 是否为 1，先生成 bit3 对应的 mask：

```text
mask = 1 << 3 = 0b00001000 = 0x08
```

再执行按位与：

```text
result = value AND mask
       = 0xFF AND 0x08
       = 0x08
       = 0b00001000
```

因为结果不为 0，所以 bit3 为 `true`。

> 这里采用常见的 0-based bit 编号：最低位是 bit0，因此 `0b00001000` 表示 bit3。

#### 2.2.1 单 bit 判断

单 bit 判断公式：

```text
bit_value = (register_value AND mask) != 0
```

示例：

| 寄存器值 | 二进制 | Mask | 计算结果 | 判断 |
| --- | --- | --- | --- | --- |
| `0xFF` | `0b11111111` | `0x08` | `0x08` | bit3 = true |
| `0xF7` | `0b11110111` | `0x08` | `0x00` | bit3 = false |
| `0x09` | `0b00001001` | `0x08` | `0x08` | bit3 = true |
| `0x01` | `0b00000001` | `0x08` | `0x00` | bit3 = false |

Python 示例：

```python
def read_bit(register_value: int, bit_index: int) -> bool:
    mask = 1 << bit_index
    return (register_value & mask) != 0


value = 0xFF
print(read_bit(value, 3))  # True
```

#### 2.2.2 多 bit 判断

如果一个 Mask 覆盖多个 bit，需要先明确业务语义。

判断任意 bit 命中：

```text
any_match = (register_value AND mask) != 0
```

判断所有 bit 命中：

```text
all_match = (register_value AND mask) == mask
```

提取多 bit 字段值：

```text
field_value = (register_value AND mask) >> offset
```

示例：寄存器值 `0b10110100`，要提取 bit2-bit4：

```text
register_value = 0b10110100
mask           = 0b00011100
offset         = 2

field_value = (0b10110100 AND 0b00011100) >> 2
            = 0b00010100 >> 2
            = 0b00000101
            = 5
```

#### 2.2.3 字典中的 MASK 表达

在设备字典里，MASK 通常用于把一个寄存器拆成多个布尔点位。

示例：寄存器 `40010` 是告警字。

| 点位名称 | 寄存器 | 原始值示例 | Bit | Mask | 计算 | 结果 |
| --- | --- | --- | --- | --- | --- | --- |
| 高温告警 | `40010` | `0xFF` | bit3 | `0x08` | `0xFF & 0x08 = 0x08` | true |
| 门开告警 | `40010` | `0xFF` | bit1 | `0x02` | `0xFF & 0x02 = 0x02` | true |
| 压缩机故障 | `40010` | `0xF7` | bit3 | `0x08` | `0xF7 & 0x08 = 0x00` | false |

字典字段可以这样定义：

```text
point_name: high_temperature_alarm
register: 40010
data_type: uint16
bit_index: 3
mask: 0x08
true_value: true
false_value: false
```

#### 2.2.4 与其他概念的区别

- RTU 帧的 CRC16 是通信校验，不属于这里的 MASK 计算。
- 功能码 `0x16 Mask Write Register` 是按掩码写保持寄存器，用于修改 bit；本文这里的 MASK 计算主要是按 bit 读取和判断。
- 如果厂商文档使用 bit1-bit16 编号，需要先确认最低位到底叫 bit0 还是 bit1，再换算 mask。

### 2.3 Modbus 字典

Modbus 字典是设备接入的核心文档。它定义了每个点位如何从寄存器中读取、解析、换算和写入。

一个可落地的 Modbus 字典至少应包含：

| 字段 | 示例 | 说明 |
| --- | --- | --- |
| 点位名称 | `cabinet_temperature` | 平台内部字段名 |
| 中文名称 | 冷柜温度 | 展示名称 |
| 功能码 | `0x03` | 读 Holding Register |
| 地址 | `40001` / `0x0000` | 必须明确是文档地址还是协议地址 |
| 寄存器数量 | `1` / `2` | 16 bit 为 1 个寄存器，32 bit 常占 2 个 |
| 数据类型 | `int16` / `uint16` / `float32` | 解析方式 |
| 字节序 | `ABCD` / `CDAB` / `BADC` / `DCBA` | 多寄存器数据必须明确 |
| Bit / Mask | `bit3` / `0x08` | 状态字、告警字的 bit 位解析 |
| 倍率 | `0.1` | 原始值到工程值的转换 |
| 单位 | `℃` / `kWh` / `%` | 数据单位 |
| 读写属性 | `R` / `RW` | 是否允许写 |
| 采集周期 | `5s` / `60s` | 网关轮询策略 |
| 合法范围 | `-40~80` | 数据质量判断 |
| 默认值策略 | `保持上次值` / `置空` | 读取失败时如何处理 |

示例字典：

| 点位 | 功能码 | 地址 | 类型 | 倍率 | 单位 | 说明 |
| --- | --- | --- | --- | --- | --- | --- |
| 温度 | `0x03` | `40001` | `int16` | `0.1` | `℃` | 原始值 `253` 表示 `25.3℃` |
| 湿度 | `0x03` | `40002` | `uint16` | `0.1` | `%RH` | 原始值 `605` 表示 `60.5%RH` |
| 运行状态 | `0x01` | `00001` | `bool` | `1` | - | `1` 运行，`0` 停止 |
| 高温告警 | `0x04` | `30010` | `bool` | `0x08` | - | `value & 0x08 != 0` 表示 true |

字典设计原则：

- 地址必须同时保留厂商文档地址和协议实际 offset。
- 多寄存器数据必须明确字节序。
- 写操作必须标记权限、范围和安全保护。
- 告警、状态、模式字段最好拆成枚举或 bit 位说明。
- 同一设备型号的字典要做版本管理，避免固件升级后点位错位。

## 3. Modbus 执行逻辑

### 3.1 读取流程

典型读取流程：

```text
加载设备字典
  -> 按设备和功能码合并相邻寄存器
  -> 生成读请求
  -> 发送 Modbus 帧
  -> 等待响应
  -> 校验响应地址、功能码、长度、CRC/MBAP
  -> 解析原始值
  -> 按字典做字节序、倍率、单位、枚举转换
  -> 写入平台数据模型
```

### 3.2 写入流程

典型写入流程：

```text
校验写权限
  -> 校验值范围和业务状态
  -> 根据字典转换为原始寄存器值
  -> 选择 0x05 / 0x06 / 0x0F / 0x10 / 0x16
  -> 发送写请求
  -> 校验写响应
  -> 读取回读值确认
  -> 记录操作日志
```

写操作建议加保护：

- 白名单点位才允许写。
- 写入前做范围校验。
- 对控制类命令做二次确认或权限控制。
- 写入后回读确认。
- 保留操作人、时间、原值、新值、结果和失败原因。

### 3.3 轮询策略

轮询不是简单地“每个点位单独读一次”。更合理的方式是：

- 按设备分组。
- 按功能码分组。
- 合并连续地址，减少请求次数。
- 对高频点位和低频点位设置不同采集周期。
- 对失败设备做退避，避免阻塞整个采集链路。

示例：

```text
温度、湿度、压力：5s
电能、累计量：60s
设备参数：5min
固件版本、型号：启动时读取或每日读取
```

### 3.4 超时与重试

常见策略：

- 单次请求超时：RTU 常见 `500ms-2s`，TCP 常见 `1s-5s`，按现场网络调整。
- 重试次数：通常 `1-3` 次。
- 连续失败：设备标记离线，降低轮询频率。
- 恢复成功：恢复正常采集周期。

RTU 场景下，一个串口总线上的所有从站共享链路，某个设备长期超时会拖慢整个总线，因此需要做好失败隔离和轮询调度。

### 3.5 异常处理

异常处理要区分：

- 通信异常：串口断开、TCP 连接失败、超时、CRC 错误。
- 协议异常：功能码不支持、地址非法、长度不匹配。
- 业务异常：值越界、枚举未知、数据质量差。
- 设备异常：设备忙、内部故障、正在升级或重启。

平台侧建议保留三类状态：

- 原始通信状态：是否成功收到响应。
- 数据质量状态：数据是否可信。
- 业务状态：设备是否离线、告警、锁定、维护中。

## 4. Modbus 应用

### 4.1 RTU

Modbus RTU 通常运行在 RS-485 或 RS-232 串口链路上，其中 RS-485 最常见。

#### RTU 特点

- 使用二进制帧，传输效率高。
- 通过 CRC16 做错误检查。
- 一个总线上通常有一个 Master 和多个 Slave。
- 从站地址用于区分设备。
- 半双工 RS-485 场景下，同一时刻只能有一个设备发送数据。

#### 串口参数

接入前必须确认：

- 波特率：如 `9600`、`19200`、`115200`
- 数据位：通常 `8`
- 停止位：`1` 或 `2`
- 校验位：`None`、`Even`、`Odd`
- 从站地址：`1-247`
- 接线方式：A/B 极性、终端电阻、屏蔽接地

#### RTU 工程注意点

- 总线两端通常需要终端电阻。
- A/B 线接反会导致无法通信。
- 从站地址冲突会导致响应混乱。
- 波特率、校验位不一致会表现为超时或 CRC 错误。
- 查询频率过高会造成总线拥塞。
- 线缆过长、干扰强、接地不良会导致随机错误。

#### RTU 适用场景

- 工业现场仪表采集。
- 低成本多设备组网。
- 变频器、温控器、电表、水表、传感器接入。
- 边缘网关对多个串口设备做集中采集。

### 4.2 TCP

Modbus TCP 通常运行在以太网 TCP/IP 网络上，默认端口是 `502`。

#### TCP 特点

- 使用 MBAP Header，不使用 RTU 的 CRC16。
- 借助 TCP 连接进行传输。
- 支持更高带宽和更灵活的网络拓扑。
- 常用于 PLC、SCADA、边缘网关、工业 PC、云边协同系统。

#### Unit ID 的作用

在纯 Modbus TCP 设备里，Unit ID 有时不关键；但在 TCP-to-RTU 网关中，Unit ID 通常用于表示网关后面的 RTU 从站地址。

```text
Client -> Modbus TCP Gateway -> Modbus RTU Slave
              Unit ID = RTU Slave Address
```

#### TCP 工程注意点

- 端口 `502` 可能需要管理员权限或防火墙放行。
- 需要处理 TCP 连接断开、重连和半开连接。
- Transaction ID 要能匹配请求和响应。
- 同一个设备是否支持多连接，取决于设备实现。
- 工业现场不应直接把 Modbus TCP 暴露到公网。

#### TCP 适用场景

- PLC 与上位机通信。
- SCADA/HMI 采集设备数据。
- 边缘网关采集以太网设备。
- 产线设备接入工厂局域网。
- 多系统之间做轻量级实时数据交换。

## 5. Modbus 常见解决方案

### 5.1 单设备直连采集

适用于设备数量少、网络简单的场景。

```text
平台 / 上位机 -> Modbus TCP 设备
```

优点：

- 架构简单。
- 调试成本低。
- 不需要额外网关。

限制：

- 设备必须支持 TCP。
- 安全隔离和网络管理要单独设计。

### 5.2 RTU 多设备采集

适用于多个串口设备集中采集。

```text
边缘网关 RS-485 -> 多个 Modbus RTU 从站
```

关键设计：

- 每个从站地址唯一。
- 按从站和功能码排队轮询。
- 控制单个请求的寄存器数量。
- 对超时设备做退避处理。

### 5.3 RTU 转 TCP 网关

适用于平台只支持 TCP，但现场设备是 RTU 的场景。

```text
平台 / SCADA -> Modbus TCP 网关 -> RS-485 -> Modbus RTU 设备
```

关键点：

- Unit ID 映射 RTU 从站地址。
- 网关需要处理 TCP 请求到 RTU 请求的串行化。
- 多个 TCP Client 并发访问时，需要避免总线拥塞。
- 网关侧最好支持连接数限制、超时配置和访问控制。

### 5.4 Modbus 到 MQTT / HTTP 云接入

适用于物联网平台、设备云管理、远程运维。

```text
Modbus 设备 -> 边缘网关 -> MQTT / HTTP -> 云平台
```

边缘网关职责：

- 根据 Modbus 字典采集点位。
- 做数据清洗、倍率换算、枚举转换。
- 缓存断网期间的数据。
- 上报设备状态、告警、事件和遥测数据。
- 接收云端命令并转换为 Modbus 写操作。

### 5.5 协议转换与设备模型标准化

适用于设备型号多、厂商多、点位不统一的场景。

方案核心：

- 设备侧保留厂商 Modbus 字典。
- 平台侧定义统一设备模型。
- 网关或平台做字段映射。
- 将寄存器点位转换为标准遥测、属性、事件、命令。

示例：

```text
40001 temperature_raw -> telemetry.temperature
40002 humidity_raw    -> telemetry.humidity
00001 run_status      -> property.running
40010 alarm_word      -> event.alarm
```

### 5.6 安全与运维方案

Modbus 本身缺少认证、加密和细粒度权限控制，工业现场需要在系统层补足安全能力。

建议：

- Modbus TCP 只放在内网或专用 VPN 内。
- 通过防火墙限制 Client IP。
- 对写操作做白名单、权限和审计。
- 关键控制命令加二次确认。
- 网关和平台记录原始帧、解析值、异常码和重试日志。
- 对设备字典做版本管理和灰度发布。

## 参考资料

- [Modbus Protocol Specification](https://www.modbus.org/file/secure/modbusprotocolspecification.pdf)
- [Modbus over Serial Line Specification and Implementation Guide](https://www.modbus.org/file/secure/modbusoverserial.pdf)
- [Modbus Messaging on TCP/IP Implementation Guide](https://www.modbus.org/file/secure/messagingimplementationguide.pdf)
