export const capabilities = [
  {
    title: '设备平台抽象',
    summary: '把设备模型、数据映射、OTA、规则引擎和 Open API 组织成可复用的平台能力。',
    facets: ['Device Model', 'Telemetry', 'OTA', 'Rule Engine', 'Open API'],
    signal: '平台化'
  },
  {
    title: '协议理解',
    summary: '围绕 Modbus、MQTT、LoRa、BLE、RS485 等设备接入问题建立工程判断。',
    facets: ['Modbus', 'MQTT', 'LoRa', 'RS485', 'Gateway'],
    signal: '接入层'
  },
  {
    title: '边缘智能',
    summary: '处理断网、本地规则、缓存补传、低延迟控制和云边协同的产品边界。',
    facets: ['Edge Gateway', 'Offline', 'Local Rules', 'Cache', 'Sync'],
    signal: '端边云'
  },
  {
    title: 'AI 辅助 PM',
    summary: '用事实采集、原型验证、攻防共识和知识回写提高需求质量。',
    facets: ['Evidence', 'Prototype', 'Red Team', 'PRD', 'Acceptance'],
    signal: '方法论'
  }
];

export const projectPatterns = [
  {
    title: '农业物联网平台',
    summary: '设备接入、数据模型、边缘网关和规则联动组成灌溉闭环。',
    flow: ['传感', '网关', '模型', '规则', '执行'],
    focus: ['设备标准模型', '数据映射', '智能网关', '规则引擎']
  },
  {
    title: 'PaaS 设备和连接管理',
    summary: 'DMP、CMP、FOTA、统一登录和 Open API 形成多租户平台能力。',
    flow: ['设备', '连接', '固件', '账号', 'API'],
    focus: ['DMP', 'CMP', 'FOTA', 'SSO']
  },
  {
    title: '消费级智能硬件应用',
    summary: '配网、直播、回放、订阅和 AI 识别共同影响用户体验。',
    flow: ['配网', '预览', '回放', '订阅', '识别'],
    focus: ['低学习成本', '稳定连接', '异常解释', '订阅路径']
  },
  {
    title: '车载边缘计算',
    summary: '车端、路侧和云端共同承担实时决策、数据闭环和运营协同。',
    flow: ['车端', '路侧', '网关', '云端', '运营'],
    focus: ['低延迟', '弱网可用', '数据闭环', 'OTA']
  }
];

export const knowledgeNodes = [
  { id: 'platform', label: '设备平台', type: 'capability', x: 18, y: 28, links: ['protocol', 'edge', 'method'] },
  { id: 'protocol', label: '工业协议', type: 'protocol', x: 72, y: 22, links: ['platform', 'edge'] },
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
