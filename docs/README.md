<section class="atlas-hero home-page">
  <div class="atlas-hero__copy">
    <p class="hero-label">Product Knowledge Atlas</p>
    <h1>把物联网产品经验，沉成可复用的知识地图</h1>
    <p class="hero-lede">面向设备平台、边缘智能、工业协议和 AI 产品工作流的长期知识库。</p>
    <div class="hero-actions">
      <a class="home-action home-action--primary" href="#/README?id=知识地图">看知识地图</a>
      <a class="home-action home-action--secondary" href="#/AI_PM_Workflow">读产品工作流</a>
    </div>
  </div>
  <div class="atlas-hero__visual" aria-label="知识地图概览">
    <svg class="node-map" viewBox="0 0 520 420" role="img" aria-label="端边云产品能力图">
      <defs>
        <linearGradient id="atlasGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f766e" stop-opacity="0.92" />
          <stop offset="1" stop-color="#99f6e4" stop-opacity="0.66" />
        </linearGradient>
      </defs>
      <rect x="22" y="22" width="476" height="376" rx="34" fill="rgba(255,255,255,.72)" />
      <path d="M138 120 C210 56 312 56 382 124" class="map-link" />
      <path d="M382 124 C438 202 390 324 274 332" class="map-link" />
      <path d="M274 332 C156 324 86 230 138 120" class="map-link" />
      <path d="M138 120 L260 214 L382 124" class="map-link map-link--thin" />
      <path d="M260 214 L274 332" class="map-link map-link--thin" />
      <g class="map-core">
        <circle cx="260" cy="214" r="70" fill="url(#atlasGlow)" />
        <text x="260" y="206" text-anchor="middle">IoT</text>
        <text x="260" y="236" text-anchor="middle">Product</text>
      </g>
      <g class="map-node">
        <circle cx="138" cy="120" r="54" />
        <text x="138" y="114" text-anchor="middle">平台抽象</text>
        <text x="138" y="138" text-anchor="middle">DMP / CMP</text>
      </g>
      <g class="map-node">
        <circle cx="382" cy="124" r="54" />
        <text x="382" y="118" text-anchor="middle">设备协议</text>
        <text x="382" y="142" text-anchor="middle">Modbus / MQTT</text>
      </g>
      <g class="map-node">
        <circle cx="274" cy="332" r="54" />
        <text x="274" y="326" text-anchor="middle">边缘智能</text>
        <text x="274" y="350" text-anchor="middle">Gateway / AI</text>
      </g>
    </svg>
  </div>
</section>

<section class="profile-signal" aria-label="能力摘要">
  <div class="signal-copy">
    <p class="section-kicker">Product operating system</p>
    <h2>一个端边云产品经理的知识结构</h2>
    <p>长期处理智能硬件、物联网平台和 PaaS 产品中的复杂协作问题，关注设备接入、平台抽象、边缘自治、AI 辅助决策和交付闭环。</p>
  </div>
  <div class="signal-metrics" aria-label="能力信号">
    <div><strong>7年+</strong><span>智能硬件与 IoT 产品经验</span></div>
    <div><strong>0→1</strong><span>平台、应用、解决方案落地</span></div>
    <div><strong>端-边-云</strong><span>设备、网关、平台协同建模</span></div>
    <div><strong>AI PM</strong><span>用原型和证据压缩决策周期</span></div>
  </div>
</section>

<section class="system-strip" aria-label="知识库定位">
  <div>
    <strong>能力图谱</strong>
    <span>把项目经验抽象成可迁移的产品判断模型。</span>
  </div>
  <div>
    <strong>技术路径</strong>
    <span>把协议、边缘计算和平台能力串成学习路径。</span>
  </div>
  <div>
    <strong>表达系统</strong>
    <span>用流程、模型、图卡和案例结构降低阅读成本。</span>
  </div>
</section>

## 能力画布

<section class="capability-canvas">
  <article class="capability-card capability-card--large">
    <div>
      <h3>设备平台抽象</h3>
      <p>从设备模型、数据映射、OTA、规则引擎到 Open API，把离散设备能力整理成平台能力。</p>
    </div>
    <div class="mini-architecture" aria-label="平台抽象结构">
      <span>Device</span><i></i><span>Model</span><i></i><span>Rule</span><i></i><span>API</span>
    </div>
  </article>
  <article class="capability-card">
    <h3>协议理解</h3>
    <p>关注 Modbus、MQTT、LoRa、BLE、RS485 等设备接入中的地址、状态、异常和网关策略。</p>
    <div class="chip-row"><span>Modbus</span><span>MQTT</span><span>LoRa</span></div>
  </article>
  <article class="capability-card capability-card--dark">
    <h3>边缘智能</h3>
    <p>把断网、本地推理、规则缓存和设备联动变成可落地的产品边界。</p>
    <div class="edge-sketch" aria-hidden="true"><b></b><b></b><b></b></div>
  </article>
  <article class="capability-card">
    <h3>交付协同</h3>
    <p>用 PRD、原型、验收标准和决策日志把跨团队协作从口头共识变成可执行资产。</p>
    <div class="chip-row"><span>PRD</span><span>Prototype</span><span>Acceptance</span></div>
  </article>
</section>

## 产品方法

<section class="method-lane" aria-label="AI 产品经理工作流">
  <a href="#/AI_PM_Workflow" class="lane-card">
    <strong>采集事实</strong>
    <span>页面、接口、源码、反馈先成为证据。</span>
  </a>
  <a href="#/AI_PM_Workflow" class="lane-card">
    <strong>沉淀上下文</strong>
    <span>术语、字段、状态和业务背景进入知识库。</span>
  </a>
  <a href="#/AI_PM_Workflow" class="lane-card">
    <strong>攻防共识</strong>
    <span>Builder、Red Team、Judge 暴露风险。</span>
  </a>
  <a href="#/AI_PM_Workflow" class="lane-card">
    <strong>原型验证</strong>
    <span>交互、异常、边界用可见方案决策。</span>
  </a>
  <a href="#/AI_PM_Workflow" class="lane-card">
    <strong>交付回写</strong>
    <span>PRD、验收、测试和上线差异持续更新。</span>
  </a>
</section>

<section class="schema-card">
  <div>
    <p class="section-kicker">Reusable schema</p>
    <h3>我更关心需求背后的证据链</h3>
    <p>工作流不是为了更快生成长文档，而是为了让事实、判断、原型、决策和验收可以互相追溯。</p>
  </div>
  <pre><code>requirement
  context
  evidence
  prototype
  attackRegister
  decisionLog
  acceptance
  wikiBackfill</code></pre>
</section>

## 项目模式

<section class="case-mosaic">
  <article class="case-tile case-tile--wide">
    <div>
      <p class="section-kicker">IoT Platform</p>
      <h3>农业物联网平台和智能灌溉闭环</h3>
      <p>设备接入、数据模型、边缘网关和规则联动组成一条完整闭环，适合沉淀为平台能力和现场交付模板。</p>
    </div>
    <div class="case-diagram" aria-label="智能灌溉产品闭环">
      <span>传感</span><span>网关</span><span>模型</span><span>规则</span><span>执行</span>
    </div>
  </article>
  <article class="case-tile">
    <h3>PaaS 设备和连接管理</h3>
    <p>DMP、CMP、FOTA、统一登录、Open API 等能力，适合抽象为多租户平台与客户集成问题。</p>
    <div class="object-grid"><span>Device</span><span>SIM</span><span>Firmware</span><span>Account</span></div>
  </article>
  <article class="case-tile">
    <h3>消费级智能硬件应用</h3>
    <p>配网、直播、回放、订阅和 AI 识别，核心是低学习成本、稳定连接和异常状态解释。</p>
    <div class="object-grid"><span>Pair</span><span>View</span><span>Replay</span><span>Subscribe</span></div>
  </article>
</section>

## 知识地图

<section class="knowledge-routes" id="知识地图">
  <a class="route-card route-card--workflow" href="#/AI_PM_Workflow">
    <span>方法</span>
    <strong>AI 辅助产品经理工作流</strong>
    <p>事实采集、攻防共识、原型验证和 PRD 沉淀的一套闭环。</p>
    <b>进入工作流</b>
  </a>
  <a class="route-card" href="#/Modbus">
    <span>协议</span>
    <strong>Modbus 工程知识</strong>
    <p>数据区、功能码、帧结构、地址换算、异常码和网关方案。</p>
    <b>查看协议卡</b>
  </a>
  <a class="route-card" href="#/EC_on_Viechle">
    <span>场景</span>
    <strong>车载边缘计算</strong>
    <p>从产品经理视角理解车载边缘节点、数据链路和 V2X 协同。</p>
    <b>打开学习笔记</b>
  </a>
  <a class="route-card" href="#/ECDef">
    <span>概念</span>
    <strong>边缘计算基本概念</strong>
    <p>低延迟、本地处理、带宽优化、隐私保护和分布式协作。</p>
    <b>读概念入口</b>
  </a>
  <a class="route-card" href="#/VECAttr">
    <span>属性</span>
    <strong>车载边缘计算特点</strong>
    <p>实时性、可靠性、多传感器融合、低功耗和系统集成。</p>
    <b>看属性图谱</b>
  </a>
</section>

<section class="focus-banner">
  <div>
    <p class="section-kicker">Knowledge assets</p>
    <h2>让经验变成可讨论、可转发、可继续生长的知识资产</h2>
  </div>
  <div class="focus-cards">
    <span>复杂需求拆解</span>
    <span>设备平台抽象</span>
    <span>协议上云路径</span>
    <span>边缘智能落地</span>
    <span>AI 辅助 PM</span>
  </div>
</section>

## 相关链接

<div class="link-board">
  <a href="https://github.com/HawZZ">GitHub Profile</a>
  <a href="https://github.com/HawZZ/PersonalLib">PersonalLib Repository</a>
</div>
