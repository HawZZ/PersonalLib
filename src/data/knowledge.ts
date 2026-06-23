export const heroProfile = {
  label: 'Product portfolio',
  title: '把设备、平台和现场问题做成产品',
  summary: '7年+ AIoT / 智能硬件产品经验，做过平台、App、网关和设备上云。',
  position: '我擅长把硬件约束、现场反馈和多团队协作收束成清晰版本，而不是只停在概念和路线图。',
  roleFit: ['DMP / CMP / FOTA', '消费级摄像机 App', '智能网关 / 离线控制', 'Modbus 设备上云']
};

export const workTraits = [
  {
    title: 'Creativity',
    headline: '把非标场景产品化',
    detail: '断网灌溉、冷柜上云、摄像机订阅都不是标准模板。我的工作是找到可复用的产品路径。'
  },
  {
    title: 'Leadership',
    headline: '从路线图推进到验收',
    detail: '负责过路线图、PRD、原型、评审、里程碑和交付协调，关注需求最后能不能被用起来。'
  },
  {
    title: 'Teamwork',
    headline: '不把需求丢给研发',
    detail: '和 App、云端、嵌入式、测试、交付一起拆边界，提前处理状态、异常和验收口径。'
  },
  {
    title: 'Cross-function',
    headline: '连接硬件、算法、平台和业务',
    detail: '能在硬件成本、算法可行性、平台复用和用户体验之间做取舍。'
  },
  {
    title: 'Agile',
    headline: '让反馈进入下一版',
    detail: '客户集成、现场问题、设备状态和运营表现会回到版本计划里，而不是停在复盘文档里。'
  }
];

export const productPrinciples = [
  {
    title: '平台能力从共性问题长出来',
    summary: '做过 DMP、CMP、FOTA、设备模型、规则引擎和 Open API。重点不是把模块列满，而是判断哪些能力应该沉到平台。',
    proof: ['设备生命周期', '连接管理', '固件升级', '能力开放']
  },
  {
    title: 'App 体验从设备状态开始设计',
    summary: '摄像机 App 的配网、直播、回放、云存储和 AI 识别，都要处理真实设备状态，而不是只画理想路径。',
    proof: ['配网', '直播 / 回放', '云存储', 'AI 识别']
  },
  {
    title: 'AI 先落到设备场景里',
    summary: '做过 AI 识别、预测性维护、联邦学习和离线智能控制相关产品工作，关注算法价值能否被设备和用户体验承接。',
    proof: ['AI 识别', '预测性维护', '联邦学习', '离线控制']
  },
  {
    title: '协议理解服务产品判断',
    summary: '熟悉 MQTT、Modbus、LoRa、WiFi、BLE、RS485、OTA 和边缘网关相关问题，用来判断接入成本、实时性和交付风险。',
    proof: ['MQTT', 'Modbus', 'LoRa', 'WiFi / BLE', 'Gateway']
  },
  {
    title: '协作前置到评审阶段',
    summary: '复杂智能硬件项目不能等研发后期再对齐。硬件、嵌入式、云端、App、算法、测试和交付需要在方案阶段一起收敛。',
    proof: ['PRD', '原型', 'UI 评审', '联调边界']
  },
  {
    title: '交付不是尾声',
    summary: '现场问题、客户集成和设备数据会改变下一版优先级。好产品不是一次性交付，而是把反馈变成迭代节奏。',
    proof: ['版本拆分', '现场反馈', '验收闭环', '迭代计划']
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
    focus: ['Creativity', 'Leadership', 'Agile'],
    evidence: ['主导通用 IoT 模块建设', '定义智能网关软件能力', '设计 LoRa / MQTT 通信与离线控制逻辑', '参与多系统集成和大屏规划'],
    lesson: '能处理网络不稳定、设备类型多、执行链路长的现场问题。'
  },
  {
    title: 'PaaS 设备与连接管理平台',
    role: '平台产品经理 / 产品团队管理',
    stage: '多产品线迭代与客户集成',
    summary: '围绕 DMP、CMP、FOTA、统一登录和 Open API 建设平台能力，支持设备生命周期、连接管理和第三方集成。',
    flow: ['设备', '连接', '固件', '账号', 'API'],
    focus: ['Leadership', 'Cross-function', 'Teamwork'],
    evidence: ['规划 PaaS 产品路线图与关键里程碑', '主导 Open API 上线', '推进统一登录和第三方认证集成', '协调研发测试资源完成交付'],
    lesson: '能把客户集成和平台通用能力放进同一张路线图。'
  },
  {
    title: '消费级智能摄像机 App',
    role: '应用产品经理',
    stage: '0-1 移动端应用研发',
    summary: '负责配网、设备管理、直播、回放、云存储和 AI 识别等核心路径，连接硬件能力与用户体验。',
    flow: ['配网', '预览', '回放', '订阅', '识别'],
    focus: ['Creativity', 'Agile', 'Teamwork'],
    evidence: ['负责竞品分析与需求管理', '输出原型和功能流程', '参与固件唤醒、事件触发和录像上传逻辑设计', '按 KANO 分层梳理核心与增值功能'],
    lesson: '能在硬件状态、用户路径和增值服务之间设计产品闭环。'
  },
  {
    title: 'Modbus 设备上云与预测性维护',
    role: '解决方案型产品经理',
    stage: '海外需求对接与云-网关-终端方案设计',
    summary: '围绕工业设备采集、网关传输和云端监控，设计远程监控与预测性维护相关产品方案。',
    flow: ['设备', '采集', '网关', '云端', '维护'],
    focus: ['Cross-function', 'Technical judgment', 'Teamwork'],
    evidence: ['对接海外客户需求', '设计云-网关-终端产品方案', '解决多通道数据传输问题', '沉淀 Modbus 接入知识'],
    lesson: '能把协议、网关和云端维护场景翻译成产品方案。'
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
    title: '产品工作流',
    summary: '事实采集、原型验证、PRD 和验收口径。',
    href: './notes/ai-pm-workflow/'
  },
  {
    title: '设备接入',
    summary: '从协议、网关和数据采集理解接入成本。',
    href: './notes/modbus/'
  },
  {
    title: '边缘计算',
    summary: '端边云分工、弱网和本地自治。',
    href: './notes/edge-computing/'
  }
];
