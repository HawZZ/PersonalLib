export const heroProfile = {
  label: 'AIoT Product Portfolio',
  title: 'AIoT / 智能硬件 / 设备平台产品经理',
  summary: '7年+智能硬件与物联网平台经验，覆盖设备接入、移动 App、PaaS 平台和边缘智能。',
  position: '面向消费电子与智能硬件方向，擅长把设备、连接、影像交互、AI 能力和平台能力组织成可交付的产品系统。',
  roleFit: ['AIoT 产品经理', '智能硬件产品经理', '设备平台产品经理', '技术型产品经理']
};

export const careerSignals = [
  {
    label: '经验方向',
    value: '7年+',
    detail: '智能硬件、物联网平台、消费级 IoT App 和 PaaS 产品经验'
  },
  {
    label: '产品阶段',
    value: '0-1 / 迭代',
    detail: '参与平台、应用和解决方案从定义、原型、交付到持续迭代'
  },
  {
    label: '协作对象',
    value: '跨团队',
    detail: '研发、测试、嵌入式、硬件、算法、交付和运营多角色协同'
  },
  {
    label: '岗位适配',
    value: 'AIoT',
    detail: '设备生命周期、连接通信、影像交互、AI 识别和边缘智能场景'
  }
];

export const jdFitSignals = [
  {
    title: '平台规划与产品设计',
    summary: '有设备管理平台、连接管理平台、FOTA、规则引擎和 Open API 的平台产品经验，能从平台视角梳理通用能力。',
    proof: ['DMP / CMP / FOTA', '设备模型与数据映射', 'Open API 与统一登录', '路线图与里程碑']
  },
  {
    title: '多品类 IoT 产品协同',
    summary: '覆盖农业设备、工业采集设备、消费级摄像机和智能网关等项目类型，理解设备差异背后的共性产品能力。',
    proof: ['传感器 / 网关 / 执行设备', 'Modbus 设备上云', '消费级摄像机 App', '智能网关']
  },
  {
    title: '移动端交互与原型能力',
    summary: '长期负责需求分析、竞品研究、PRD、原型设计和功能流程定义，熟悉从用户路径到研发落地的表达方式。',
    proof: ['Axure', 'Figma', 'Mastergo', 'KANO / PRD / Prototype']
  },
  {
    title: 'AI 与设备场景结合',
    summary: '有 AI 识别、预测性维护、联邦学习和离线智能灌溉相关项目经历，关注算法能力、硬件约束和体验价值的平衡。',
    proof: ['AI 识别', '预测性维护', '联邦学习', '离线智能控制']
  },
  {
    title: '连接通信与边缘计算',
    summary: '熟悉 MQTT、Modbus、LoRa、WiFi、BLE、RS485、OTA 和边缘网关相关产品设计问题。',
    proof: ['MQTT', 'Modbus', 'LoRa', 'WiFi / BLE', 'Edge Gateway']
  },
  {
    title: '交付与资源整合',
    summary: '有跨团队资源协调、多产品线迭代、海外需求对接和复杂项目交付经验，能把技术方案推进为可验收结果。',
    proof: ['跨部门协作', '多产品线迭代', '海外需求对接', '验收闭环']
  }
];

export const capabilities = [
  {
    title: '设备平台抽象',
    summary: '把设备模型、数据映射、OTA、规则引擎和 Open API 组织成可复用的平台能力。',
    facets: ['Device Model', 'Telemetry', 'OTA', 'Rule Engine', 'Open API'],
    signal: '平台化'
  },
  {
    title: '连接与通信协议',
    summary: '围绕 Modbus、MQTT、LoRa、BLE、WiFi、RS485 等设备接入问题建立工程判断。',
    facets: ['Modbus', 'MQTT', 'LoRa', 'BLE / WiFi', 'Gateway'],
    signal: '接入层'
  },
  {
    title: '边缘智能与设备自治',
    summary: '处理断网、本地规则、缓存补传、低延迟控制和云边协同的产品边界。',
    facets: ['Edge Gateway', 'Offline', 'Local Rules', 'Cache', 'Sync'],
    signal: '端边云'
  },
  {
    title: 'AI 辅助产品方法',
    summary: '用事实采集、原型验证、攻防共识和知识回写提高需求质量。',
    facets: ['Evidence', 'Prototype', 'Red Team', 'PRD', 'Acceptance'],
    signal: '方法论'
  }
];

export const projectPatterns = [
  {
    title: '农业物联网平台与智能灌溉',
    role: '核心产品负责人 / 平台产品经理',
    stage: '0-1 平台建设与场景落地',
    summary: '围绕传感器、边缘网关、执行设备和后台平台，完成设备接入、数据模型、规则联动和现场交付闭环。',
    flow: ['传感', '网关', '模型', '规则', '执行'],
    focus: ['设备标准模型', '数据映射', '智能网关', '规则引擎'],
    evidence: ['主导通用 IoT 模块建设', '定义智能网关软件能力', '设计 LoRa / MQTT 通信与离线控制逻辑', '参与多系统集成和大屏规划'],
    jdFit: '对应 AIoT 平台规划、设备生命周期、边缘计算和 AI 与设备场景结合能力。'
  },
  {
    title: 'PaaS 设备与连接管理平台',
    role: '平台产品经理 / 产品团队管理',
    stage: '多产品线迭代与客户集成',
    summary: '围绕 DMP、CMP、FOTA、统一登录和 Open API 建设平台能力，支持设备生命周期、连接管理和第三方集成。',
    flow: ['设备', '连接', '固件', '账号', 'API'],
    focus: ['DMP', 'CMP', 'FOTA', 'SSO'],
    evidence: ['规划 PaaS 产品路线图与关键里程碑', '主导 Open API 上线', '推进统一登录和第三方认证集成', '协调研发测试资源完成交付'],
    jdFit: '对应平台通用能力规划、多产品线管理、跨部门协作和可靠落地能力。'
  },
  {
    title: '消费级智能摄像机 App',
    role: '应用产品经理',
    stage: '0-1 移动端应用研发',
    summary: '负责配网、设备管理、直播、回放、云存储和 AI 识别等核心路径，连接硬件能力与用户体验。',
    flow: ['配网', '预览', '回放', '订阅', '识别'],
    focus: ['低学习成本', '稳定连接', '异常解释', '订阅路径'],
    evidence: ['负责竞品分析与需求管理', '输出原型和功能流程', '参与固件唤醒、事件触发和录像上传逻辑设计', '按 KANO 分层梳理核心与增值功能'],
    jdFit: '对应消费电子、移动端交互、影像交互、AI 识别和智能硬件体验设计能力。'
  },
  {
    title: 'Modbus 设备上云与预测性维护',
    role: '解决方案型产品经理',
    stage: '海外需求对接与云-网关-终端方案设计',
    summary: '围绕工业设备采集、网关传输和云端监控，设计远程监控与预测性维护相关产品方案。',
    flow: ['设备', '采集', '网关', '云端', '维护'],
    focus: ['Modbus', '多通道数据', '远程监控', '预测性维护'],
    evidence: ['对接海外客户需求', '设计云-网关-终端产品方案', '解决多通道数据传输问题', '沉淀 Modbus 接入知识'],
    jdFit: '对应 IoT 通信协议、设备状态预测、技术预研和复杂方案落地能力。'
  }
];

export const knowledgeNodes = [
  { id: 'platform', label: '设备平台', type: 'capability', x: 18, y: 28, links: ['protocol', 'edge', 'method'] },
  { id: 'protocol', label: '通信协议', type: 'protocol', x: 72, y: 22, links: ['platform', 'edge'] },
  { id: 'edge', label: '边缘智能', type: 'scenario', x: 64, y: 72, links: ['platform', 'vehicle'] },
  { id: 'method', label: 'AI PM 工作流', type: 'method', x: 24, y: 76, links: ['platform'] },
  { id: 'vehicle', label: '车载边缘', type: 'scenario', x: 48, y: 50, links: ['edge', 'protocol'] }
];

export const readingPaths = [
  {
    title: '先看产品方法',
    summary: '适合想理解需求工作方式的人。',
    href: './notes/ai-pm-workflow/'
  },
  {
    title: '先看设备接入',
    summary: '适合从协议和网关切入的人。',
    href: './notes/modbus/'
  },
  {
    title: '先看边缘计算',
    summary: '适合理解端边云产品边界的人。',
    href: './notes/edge-computing/'
  }
];
