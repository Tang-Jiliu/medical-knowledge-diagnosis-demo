const chapterIntro = `
  <section class="note-section">
    <h2>细胞的电活动</h2>
    <div class="video-placeholder">
      <strong>视频学习窗口</strong>
      <p>后续可在这里嵌入本节讲解视频。学生先看视频，再读可编辑笔记并完成巩固测试。</p>
    </div>
    <p><strong>细胞生物电</strong>：细胞在生命活动中伴随的电现象。</p>
    <p><strong>膜电位</strong>：Na+、K+、Cl-、Ca2+ 等带电离子跨膜流动形成的跨膜电位，主要表现为静息电位和动作电位。</p>
    <div class="mini-diagram">
      <div>离子浓度差</div>
      <span>+</span>
      <div>膜通透性</div>
      <span>→</span>
      <div>膜电位变化</div>
    </div>
  </section>
`;

const sections = [
  {
    id: "resting",
    title: "静息电位",
    profile: "静息电位",
    notes: `
      <section class="note-section" id="note-resting-basic">
        <h2>静息电位：内负外正</h2>
        <p>静息电位是细胞静息状态下膜两侧存在的内负外正电位差。神经细胞约 -70 mV，骨骼肌约 -90 mV，平滑肌约 -55 mV，红细胞约 -10 mV。</p>
        <table class="mini-table">
          <thead><tr><th>术语</th><th>含义</th></tr></thead>
          <tbody>
            <tr><td>极化</td><td>静息时内负外正的稳定状态</td></tr>
            <tr><td>超极化</td><td>静息电位绝对值增大</td></tr>
            <tr><td>去极化</td><td>静息电位绝对值减小</td></tr>
            <tr><td>反极化/超射</td><td>膜内电位变正；高于 0 mV 的部分称超射</td></tr>
            <tr><td>复极化</td><td>去极化后向静息电位恢复</td></tr>
          </tbody>
        </table>
      </section>
      <section class="note-section" id="note-resting-mechanism">
        <h2>形成机制：浓度差 + K+ 高通透性</h2>
        <p>Na+-K+ 泵维持细胞内高 K+、细胞外高 Na+。静息时膜对 K+ 通透性最高，K+ 顺浓度差外流，使膜内相对变负。</p>
        <p>静息时膜对 Na+ 仍有少量通透性，因此静息电位接近但不完全等于 K+ 平衡电位。</p>
        <div class="memory-card"><div><strong>口诀</strong><button class="recite-button" type="button">背</button></div><span>钠泵建差，钾漏成负；钠漏掺一脚，接近不等钾。</span></div>
      </section>
      <section class="note-section" id="note-resting-factors">
        <h2>影响因素</h2>
        <table class="mini-table">
          <thead><tr><th>因素</th><th>变化</th><th>结果</th></tr></thead>
          <tbody>
            <tr><td>外液 K+ 升高</td><td>K+ 外流动力减弱</td><td>静息电位绝对值减小，去极化</td></tr>
            <tr><td>K+ 通透性增大</td><td>更接近 K+ 平衡电位</td><td>静息电位绝对值增大</td></tr>
            <tr><td>钠泵增强</td><td>生电效应增强</td><td>一定程度超极化</td></tr>
          </tbody>
        </table>
      </section>
    `,
    questions: [
      {
        level: "易",
        source: "真题考法锚定：306 常考静息电位主导离子与 K+ 平衡电位",
        stem: "关于神经细胞静息电位形成机制，下列哪项最准确？",
        options: [
          "主要由 Na+ 内流形成，因此接近 Na+ 平衡电位",
          "静息时膜对 K+ 通透性高，K+ 外流使膜内相对带负电",
          "完全由 Na+-K+ 泵直接形成",
          "静息时膜只允许 K+ 通过，Na+ 完全不能通过",
          "外液 K+ 升高使静息电位绝对值增大"
        ],
        answer: 1,
        anchor: "note-resting-mechanism",
        errorMap: {
          0: ["主导离子混淆", "静息电位主要看 K+ 外流，动作电位快速去极化才主要看 Na+ 内流。"],
          2: ["钠泵作用误判", "钠泵主要维持浓度差，并有一定生电效应，不是静息电位的全部直接来源。"],
          3: ["平衡电位关系不清", "静息时 Na+ 仍有少量通透性，所以接近但不等于 K+ 平衡电位。"],
          4: ["外液 K+ 方向错误", "外液 K+ 升高使 K+ 外流动力减弱，静息电位绝对值减小。"]
        }
      },
      {
        level: "难",
        source: "真题考法锚定：外液 K+ 变化与静息电位方向判断",
        stem: "细胞外液 K+ 浓度升高时，神经细胞静息电位最可能出现的变化是：",
        options: [
          "绝对值增大，发生超极化",
          "绝对值减小，发生去极化",
          "不变，因为静息电位只由钠泵决定",
          "变得更接近 Na+ 平衡电位",
          "立即产生超射"
        ],
        answer: 1,
        anchor: "note-resting-factors",
        errorMap: {
          0: ["外液 K+ 方向错误", "外 K+ 升高会减小内外 K+ 浓度差，使 K+ 外流动力减弱。"],
          2: ["钠泵决定论", "钠泵维持浓度差，但静息电位大小还受外液 K+ 和膜通透性影响。"],
          3: ["平衡电位牵引混淆", "静息电位主要受 K+ 平衡电位牵引。"],
          4: ["超射概念误用", "超射属于动作电位峰值高于 0 mV 的部分。"]
        }
      }
    ]
  },
  {
    id: "action",
    title: "动作电位",
    profile: "动作电位",
    notes: `
      <section class="note-section" id="note-action-basic">
        <h2>动作电位：迅速、可传播的膜电位波动</h2>
        <p>可兴奋细胞在静息电位基础上接受有效刺激后产生动作电位。标志是锋电位，特点是全或无、不衰减传播、脉冲式发放。</p>
        <div class="ap-flow">
          <div class="ap-step"><span>a</span><strong>阈电位</strong><small>Na+ 通道正反馈启动</small></div>
          <div class="ap-arrow">→</div>
          <div class="ap-step up"><span>b-c</span><strong>快速去极化</strong><small>Na+ 大量内流</small></div>
          <div class="ap-arrow">→</div>
          <div class="ap-step down"><span>c-d</span><strong>复极化</strong><small>K+ 快速外流</small></div>
          <div class="ap-arrow">→</div>
          <div class="ap-step after"><span>d-e</span><strong>后超极化</strong><small>低于静息后恢复</small></div>
        </div>
      </section>
      <section class="note-section" id="note-action-mechanism">
        <h2>产生机制：Na+ 内流去极化，K+ 外流复极化</h2>
        <p>有效刺激使少量 Na+ 通道开放，局部电位达到阈电位后，Na+ 通道大量开放形成正反馈，Na+ 大量内流产生快速去极化和反极化。随后 Na+ 通道关闭，K+ 通道开放，K+ 外流导致复极化和后超极化。</p>
        <p>动作电位产生本身不耗能；恢复离子分布需要 Na+-K+ 泵耗能。河豚毒素阻断 Na+ 通道，四乙胺阻断 K+ 通道。</p>
      </section>
      <section class="note-section" id="note-action-conduction">
        <h2>传播：局部电流和再生性传导</h2>
        <p>同一细胞上的动作电位传播实质是膜上依次再生动作电位。无髓鞘纤维传导慢、耗能多；有髓鞘纤维在郎飞结处跳跃式传导，速度快、耗能少。</p>
      </section>
    `,
    questions: [
      {
        level: "易",
        source: "真题考法锚定：动作电位离子机制",
        stem: "神经细胞动作电位快速去极化的主要原因是：",
        options: ["K+ 外流", "Na+ 快速内流", "Cl- 内流", "Na+-K+ 泵增强", "Ca2+ 外流"],
        answer: 1,
        anchor: "note-action-mechanism",
        errorMap: {
          0: ["去极化/复极化混淆", "K+ 外流主要参与复极化。"],
          3: ["能量过程混淆", "动作电位产生本身主要由通道开放和离子顺梯度流动完成，恢复离子分布才依赖钠泵。"]
        }
      },
      {
        level: "难",
        source: "真题考法锚定：阈电位、全或无、传导方式",
        stem: "关于动作电位传播，下列哪项正确？",
        options: [
          "动作电位幅度随传播距离逐渐衰减",
          "动作电位可以叠加形成更大幅度",
          "有髓鞘纤维在郎飞结处跳跃式传导，速度快且耗能少",
          "阈下刺激也可引起完整动作电位",
          "动作电位没有不应期"
        ],
        answer: 2,
        anchor: "note-action-conduction",
        errorMap: {
          0: ["传播特性混淆", "动作电位不衰减传播，局部电位才衰减。"],
          1: ["全或无特性不清", "动作电位不叠加，一旦产生即最大幅度。"],
          3: ["阈刺激概念错误", "动作电位需阈刺激及以上触发。"],
          4: ["不应期遗漏", "动作电位后有绝对不应期和相对不应期。"]
        }
      }
    ]
  },
  {
    id: "local",
    title: "局部电位和电紧张电位",
    profile: "局部电位",
    notes: `
      <section class="note-section" id="note-local-basic">
        <h2>局部电位：等级性、衰减性、可叠加</h2>
        <p>局部电位是细胞受刺激后，由部分离子通道开放形成的不能远距离传播的膜电位改变。少量 Na+ 通道激活产生的去极化称局部兴奋。</p>
        <table class="mini-table">
          <thead><tr><th>局部电位</th><th>动作电位</th></tr></thead>
          <tbody>
            <tr><td>阈下刺激即可引起</td><td>阈刺激及以上引起</td></tr>
            <tr><td>等级性，幅度小，可叠加</td><td>全或无，不叠加</td></tr>
            <tr><td>衰减性传播，无不应期</td><td>不衰减传播，有不应期</td></tr>
            <tr><td>电紧张扩布</td><td>局部电流再生性传播</td></tr>
          </tbody>
        </table>
      </section>
      <section class="note-section" id="note-local-examples">
        <h2>常见例子与兴奋性变化</h2>
        <p>局部去极化包括终板电位、兴奋性突触后电位、发生器电位；局部超极化包括抑制性突触后电位和感光细胞受光照产生的感受器电位。</p>
        <p>绝对不应期兴奋性为零；相对不应期兴奋性低于正常，需要更强刺激才能再次兴奋。电紧张电位具有等级性、衰减性传导、电位可融合。</p>
      </section>
    `,
    questions: [
      {
        level: "易",
        source: "真题考法锚定：局部电位与动作电位比较",
        stem: "下列哪项属于局部电位的特点？",
        options: ["全或无", "不衰减传播", "有绝对不应期", "可发生时间总和和空间总和", "一旦产生即最大幅度"],
        answer: 3,
        anchor: "note-local-basic",
        errorMap: {
          0: ["局部电位/动作电位混淆", "全或无是动作电位特点。"],
          1: ["传播方式混淆", "局部电位衰减性传播，动作电位不衰减传播。"],
          2: ["不应期混淆", "局部电位无不应期，可叠加。"],
          4: ["等级性不清", "局部电位为等级性电位，幅度随刺激改变。"]
        }
      },
      {
        level: "难",
        source: "真题考法锚定：局部电位例子和兴奋性变化",
        stem: "关于局部电位和兴奋性变化，下列哪项正确？",
        options: [
          "兴奋性突触后电位属于动作电位",
          "绝对不应期内加强刺激仍可再次兴奋",
          "局部电位无不应期，反应可以叠加",
          "终板电位具有全或无特点",
          "电紧张电位不具有衰减性"
        ],
        answer: 2,
        anchor: "note-local-examples",
        errorMap: {
          0: ["例子归类错误", "兴奋性突触后电位是局部去极化。"],
          1: ["不应期概念错误", "绝对不应期兴奋性为零。"],
          3: ["终板电位归类错误", "终板电位属于局部电位，具有等级性。"],
          4: ["电紧张电位特征错误", "电紧张电位具有衰减性传导。"]
        }
      }
    ]
  }
];

const finalQuestions = [
  {
    source: "本节混合题：静息电位 + 动作电位 + 局部电位",
    stem: "下列关于细胞电活动的综合叙述，哪项正确？",
    options: [
      "静息电位主要由 Na+ 内流形成，动作电位复极化主要由 Na+ 外流形成",
      "局部电位具有全或无特点，动作电位可以叠加",
      "静息电位主要接近 K+ 平衡电位，动作电位去极化主要由 Na+ 内流形成，局部电位可叠加",
      "有髓鞘纤维传导慢且耗能多",
      "绝对不应期内只要刺激足够强即可再次兴奋"
    ],
    answer: 2,
    anchor: "note-resting-mechanism",
    errorMap: {
      0: ["主导离子系统性混淆", "静息看 K+，去极化看 Na+，复极化看 K+。"],
      1: ["局部电位/动作电位特征对调", "局部电位可叠加，动作电位全或无。"],
      3: ["传导方式错误", "有髓鞘纤维跳跃式传导，速度快、耗能少。"],
      4: ["不应期错误", "绝对不应期兴奋性为零。"]
    }
  },
  {
    source: "本节混合题：双变量机制迁移",
    stem: "若外液 K+ 适度升高且未导致 Na+ 通道失活，同时外液 Na+ 升高，则最可能出现：",
    options: [
      "静息电位绝对值增大，动作电位幅度减小",
      "静息电位绝对值减小，动作电位幅度增大",
      "静息电位不变，动作电位幅度不变",
      "局部电位转变为全或无",
      "绝对不应期消失"
    ],
    answer: 1,
    anchor: "note-resting-factors",
    errorMap: {
      0: ["外液 K+ 方向错误", "外 K+ 升高使 K+ 外流动力减弱，静息电位绝对值减小。"],
      2: ["影响因素忽略", "外 K+ 和外 Na+ 改变都会影响膜电活动。"],
      3: ["局部电位特征混淆", "局部电位不会因外液离子改变就变成全或无。"],
      4: ["不应期概念误用", "不应期由通道功能状态决定。"]
    }
  }
];

const legacyRestingQuestions = [
  {
    level: "提升",
    source: "原三题保留 1：静息电位形成和维持机制综合定位",
    stem: "关于神经细胞静息电位形成和维持机制，下列哪项叙述最准确？",
    options: [
      "静息电位主要由 Na+ 内流形成，因为细胞外 Na+ 浓度高，Na+ 顺浓度梯度进入细胞，使膜内带负电",
      "静息电位的形成依赖细胞内外 Na+、K+ 浓度差；静息时膜对 K+ 通透性明显高于 Na+，K+ 外流使膜内相对带负电，少量 Na+ 内流使静息电位接近但不等于 K+ 平衡电位",
      "静息电位完全由 Na+-K+ 泵直接形成，因为钠泵每次将 3 个 Na+ 泵出、2 个 K+ 泵入，使膜内持续失去正电荷",
      "只要存在细胞内高 K+、细胞外高 Na+ 的浓度差，即使细胞膜对 Na+ 和 K+ 通透性相同，也能形成接近 K+ 平衡电位的静息电位",
      "Na+-K+ 泵只负责动作电位后恢复离子分布，静息状态下不参与静息电位的形成和维持"
    ],
    answer: 1,
    anchor: "note-resting-mechanism",
    errorMap: {
      0: ["主导离子混淆", "先判断：静息电位主要由哪种离子外流形成？"],
      2: ["钠泵作用夸大", "先判断：钠泵主要是直接产生静息电位，还是维持离子浓度差？"],
      3: ["忽略选择性通透性", "先判断：膜电位更接近哪种平衡电位，是否取决于膜对该离子的通透性？"],
      4: ["钠泵维持作用遗漏", "先判断：静息状态下钠泵是否仍持续工作？"]
    }
  },
  {
    level: "提升",
    source: "原三题保留 2：静息电位机制迁移验证",
    stem: "关于神经细胞静息电位及其影响因素，下列哪项叙述正确？",
    options: [
      "若静息时膜对 Na+ 和 K+ 通透性相同，静息电位仍主要接近 K+ 平衡电位",
      "抑制 Na+-K+ 泵后，短时间内静息电位立即消失，长期则基本不影响离子浓度差",
      "静息电位接近 K+ 平衡电位，是因为静息时膜对 K+ 的通透性远高于 Na+",
      "细胞外 K+ 浓度升高会增强 K+ 外流，使静息电位绝对值增大",
      "少量 Na+ 内流会使静息电位比 K+ 平衡电位更负"
    ],
    answer: 2,
    anchor: "note-resting-mechanism",
    errorMap: {
      0: ["相对通透性不稳", "先判断：膜电位更靠近谁，主要看浓度差还是相对通透性？"],
      1: ["钠泵时间尺度混淆", "先判断：抑制钠泵后短时间浓度差是否立即消失？"],
      3: ["外液 K+ 方向错误", "先判断：外 K+ 升高后 K+ 外流动力增强还是减弱？"],
      4: ["少量 Na+ 内流方向错误", "先判断：Na+ 内流会让膜内更负还是没那么负？"]
    }
  },
  {
    level: "最难",
    source: "原三题保留 3：外液 K+ 和 Na+ 双变量提升验证",
    stem: "人工适度增加离体神经纤维浸浴液中的 K+ 和 Na+ 浓度（未导致 Na+ 通道失活）后，关于该神经纤维静息电位和动作电位变化机制的叙述，下列哪项最准确？",
    options: [
      "外液 K+ 浓度升高使细胞内外 K+ 浓度差增大，K+ 外流增加，静息电位绝对值增大；外液 Na+ 浓度升高使 Na+ 内流增加，动作电位幅度增大",
      "外液 K+ 浓度升高使细胞内外 K+ 浓度差减小，K+ 外流动力减弱，静息电位绝对值减小；外液 Na+ 浓度升高使 Na+ 内流动力增强，动作电位幅度增大",
      "外液 K+ 浓度升高主要影响动作电位上升支，外液 Na+ 浓度升高主要影响静息电位，因此静息电位绝对值增大，动作电位幅度减小",
      "由于静息状态下细胞膜对 Na+ 通透性最高，所以外液 Na+ 浓度升高可明显增加静息电位绝对值；外液 K+ 浓度升高对静息电位影响较小",
      "只要外液 Na+ 浓度升高，动作电位幅度一定增大，与静息膜电位和 Na+ 通道状态无关"
    ],
    answer: 1,
    anchor: "note-resting-factors",
    errorMap: {
      0: ["外液 K+ 方向回退", "先拆 K+：外 K+ 升高后，内外 K+ 浓度差是变大还是变小？"],
      2: ["K+/Na+ 影响对象对调", "先判断：静息电位主要看 K+，动作电位上升支主要看 Na+。"],
      3: ["静息时 Na+ 通透性误判", "先判断：静息状态下膜对 K+ 还是 Na+ 通透性最高？"],
      4: ["忽略通道状态限制", "先判断：动作电位幅度是否还受 Na+ 通道失活状态影响？"]
    }
  }
];

sections[0].questions.push(legacyRestingQuestions[1]);
finalQuestions.push(legacyRestingQuestions[0], legacyRestingQuestions[2]);

const courseChapters = [
  {
    id: "chapter-1",
    title: "第一章 绪论",
    status: "可编辑模板",
    description: "先搭建一级到四级考点结构，后续同事可补充笔记、图片和题目。",
    topics: [
      {
        level1: "生理学总论",
        level2: "生命活动的基本特征",
        level3: "新陈代谢、兴奋性、适应性、生殖",
        level4: "概念辨析与选择题常见陷阱"
      },
      {
        level1: "机体功能调节",
        level2: "神经调节、体液调节、自身调节",
        level3: "反馈控制",
        level4: "负反馈、正反馈、前馈的判断"
      },
      {
        level1: "内环境与稳态",
        level2: "内环境概念",
        level3: "稳态维持机制",
        level4: "稳态破坏与调节环节定位"
      }
    ]
  },
  {
    id: "chapter-2",
    title: "第二章 细胞的基本功能",
    status: "可编辑模板",
    description: "为跨膜转运、受体信号、肌肉收缩等内容预留编辑和命题空间。",
    topics: [
      {
        level1: "细胞膜物质转运",
        level2: "单纯扩散、易化扩散、主动转运",
        level3: "通道、载体和泵",
        level4: "顺/逆浓度梯度与耗能判断"
      },
      {
        level1: "细胞信号转导",
        level2: "受体与第二信使",
        level3: "G 蛋白、酶耦联受体、离子通道受体",
        level4: "信号放大与效应器定位"
      },
      {
        level1: "肌细胞收缩",
        level2: "兴奋-收缩耦联",
        level3: "钙离子、肌丝滑行、横桥循环",
        level4: "骨骼肌与平滑肌差异"
      }
    ]
  },
  {
    id: "chapter-3",
    title: "第三章 细胞的电活动",
    status: "已接入闭环样板",
    description: "保留当前已做好的视频、笔记、巩固题、错因追问、章节总复习流程。",
    topics: [
      {
        level1: "细胞的电活动",
        level2: "静息电位",
        level3: "形成机制与影响因素",
        level4: "K+ 平衡电位、Na+-K+ 泵、外液 K+ 改变"
      },
      {
        level1: "细胞的电活动",
        level2: "动作电位",
        level3: "离子机制与传播",
        level4: "Na+ 内流、K+ 外流、阈电位、跳跃式传导"
      },
      {
        level1: "细胞的电活动",
        level2: "局部电位和电紧张电位",
        level3: "等级性、衰减性、可叠加",
        level4: "与动作电位的对比"
      }
    ]
  }
];

const state = {
  mode: "intro",
  chapterIndex: 0,
  sectionIndex: 0,
  questionIndex: 0,
  finalIndex: 0,
  completed: new Set(),
  tags: new Set(["未测"]),
  review: [],
  wrongNotes: [],
  profile: "未测",
  highlightAnchor: "",
  pendingReturn: null
};

const els = {
  main: document.querySelector("#mainPanel"),
  stage: document.querySelector("#stageLabel"),
  progress: document.querySelector("#progressLabel"),
  profile: document.querySelector("#profileLabel"),
  sectionList: document.querySelector("#sectionList"),
  tagGrid: document.querySelector("#tagGrid"),
  wrongNoteLog: document.querySelector("#wrongNoteLog"),
  reviewLog: document.querySelector("#reviewLog"),
  restartBtn: document.querySelector("#restartBtn")
};

function render() {
  renderStatus();
  renderSidebars();
  if (state.mode === "intro") return renderIntro();
  if (state.mode === "chapterEditor") return renderChapterEditor();
  if (state.mode === "learn") return renderLearn();
  if (state.mode === "test") return renderQuestion(false);
  if (state.mode === "final") return renderQuestion(true);
  if (state.mode === "reviewReady") return renderReviewReady();
  renderDone();
}

function renderStatus() {
  const labels = { intro: "课程编辑总览", chapterEditor: "考点编辑", learn: "笔记学习", test: "巩固测试", reviewReady: "章节总复习", final: "混合总结题", done: "完成" };
  els.stage.textContent = labels[state.mode] || "学习";
  els.progress.textContent = state.mode === "intro" || state.mode === "chapterEditor"
    ? `${courseChapters.length} 章模板`
    : `${state.completed.size}/${sections.length}`;
  els.profile.textContent = state.profile;
}

function renderSidebars() {
  els.sectionList.innerHTML = state.mode === "intro" || state.mode === "chapterEditor"
    ? courseChapters.map((chapter, i) => {
      const cls = i === state.chapterIndex ? "active" : "";
      return `<li class="${cls}">${chapter.title}<br><small>${chapter.status}</small></li>`;
    }).join("")
    : sections.map((s, i) => {
      const cls = state.completed.has(s.id) ? "done" : i === state.sectionIndex ? "active" : "";
      return `<li class="${cls}">${s.title}</li>`;
    }).join("");
  els.tagGrid.innerHTML = [...state.tags].map(t => `<span>${t}</span>`).join("");
  els.wrongNoteLog.innerHTML = state.wrongNotes.length
    ? state.wrongNotes.map(n => `
      <div class="wrong-note">
        <strong>${n.section}</strong>
        <p>${n.stem}</p>
        <ol class="option-mini-list">
          ${n.options.map((opt, i) => `<li class="${i === n.answer ? "correct" : i === n.selected ? "selected" : ""}">${String.fromCharCode(65 + i)}. ${opt}</li>`).join("")}
        </ol>
        <p>${n.reason}</p>
      </div>
    `).join("")
    : "<p>错题加入笔记后会出现在这里，学生可在笔记页继续编辑。</p>";
  els.reviewLog.innerHTML = state.review.length
    ? state.review.map(r => `<p>${r}</p>`).join("")
    : "<p>完成测试后，这里会记录每一步诊断。</p>";
}

function renderIntro() {
  els.main.innerHTML = `
    <div class="note-document">
      <section class="note-section course-hero">
        <p class="eyebrow">306 考研医学 · 生理学内容搭建台</p>
        <h2>前三章考点编辑总览</h2>
        <p>先按一级、二级、三级、四级考点搭结构；每个考点下预留笔记、图片和题目配置空位。第三章保留现有闭环，作为可运行样板。</p>
      </section>
      <div class="chapter-grid">
        ${courseChapters.map((chapter, i) => `
          <button class="chapter-card" data-chapter="${i}">
            <span>${chapter.status}</span>
            <strong>${chapter.title}</strong>
            <p>${chapter.description}</p>
          </button>
        `).join("")}
      </div>
    </div>
  `;
  document.querySelectorAll("[data-chapter]").forEach(btn => btn.addEventListener("click", () => {
    state.chapterIndex = Number(btn.dataset.chapter);
    state.mode = "chapterEditor";
    state.profile = "内容编辑中";
    render();
  }));
}

function renderChapterEditor() {
  const chapter = courseChapters[state.chapterIndex];
  els.main.innerHTML = `
    <article class="note-document">
      <div class="question-head">
        <div>
          <p class="eyebrow">可编辑考点结构</p>
          <h2 contenteditable="true">${chapter.title}</h2>
          <p contenteditable="true">${chapter.description}</p>
        </div>
        <button class="secondary-button" id="backCourseBtn">返回首页</button>
      </div>
      <div class="topic-editor-grid">
        ${chapter.topics.map((topic, index) => renderTopicEditor(chapter, topic, index)).join("")}
      </div>
      ${chapter.id === "chapter-3" ? renderChapterThreeEntry() : renderEmptyChapterNotice()}
    </article>
  `;
  document.querySelector("#backCourseBtn").addEventListener("click", () => {
    state.mode = "intro";
    render();
  });
  bindDraftEditors();
  document.querySelectorAll("[data-preview-image]").forEach(btn => btn.addEventListener("click", () => previewImage(btn.dataset.previewImage)));
  document.querySelectorAll("[data-start-section]").forEach(btn => btn.addEventListener("click", () => startSection(Number(btn.dataset.startSection))));
}

function renderTopicEditor(chapter, topic, index) {
  const key = `${chapter.id}-${index + 1}`;
  return `
    <section class="topic-editor-card">
      <div class="topic-levels">
        <label>一级考点<input data-draft="${key}-level1" value="${escapeAttr(getDraft(`${key}-level1`, topic.level1))}" aria-label="一级考点"></label>
        <label>二级考点<input data-draft="${key}-level2" value="${escapeAttr(getDraft(`${key}-level2`, topic.level2))}" aria-label="二级考点"></label>
        <label>三级考点<input data-draft="${key}-level3" value="${escapeAttr(getDraft(`${key}-level3`, topic.level3))}" aria-label="三级考点"></label>
        <label>四级考点<input data-draft="${key}-level4" value="${escapeAttr(getDraft(`${key}-level4`, topic.level4))}" aria-label="四级考点"></label>
      </div>
      <div class="editor-slot">
        <strong>流程笔记空位</strong>
        <div class="editable-slot" data-draft="${key}-note" contenteditable="true">${getDraft(`${key}-note`, "在这里插入该考点的文字笔记、表格、口诀或讲解提示。")}</div>
      </div>
      <div class="editor-slot">
        <strong>图片/表格/视频素材空位</strong>
        <div class="media-slot">
          <input id="image-${key}" data-draft="${key}-image" type="url" value="${escapeAttr(getDraft(`${key}-image`, ""))}" placeholder="粘贴图片 URL，或后续替换为上传控件">
          <button class="secondary-button" data-preview-image="image-${key}" type="button">预览图片</button>
        </div>
        <div class="image-preview" id="preview-image-${key}">素材预览区</div>
      </div>
      <div class="editor-slot">
        <strong>题目设置空位</strong>
        <textarea data-draft="${key}-question" placeholder="题干：&#10;A. &#10;B. &#10;C. &#10;D. &#10;E. &#10;答案：&#10;解析：&#10;错因追问：">${getDraft(`${key}-question`, "")}</textarea>
      </div>
    </section>
  `;
}

function getDraft(key, fallback) {
  return localStorage.getItem(`draft:${key}`) ?? fallback;
}

function bindDraftEditors() {
  document.querySelectorAll("[data-draft]").forEach(el => {
    const save = () => {
      const value = el.isContentEditable ? el.innerHTML : el.value;
      localStorage.setItem(`draft:${el.dataset.draft}`, value);
    };
    el.addEventListener("input", save);
    el.addEventListener("blur", save);
  });
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderChapterThreeEntry() {
  return `
    <section class="note-section existing-demo">
      <div>
        <p class="eyebrow">已保留的闭环样板</p>
        <h2>第三章现有学习流程</h2>
        <p>下面入口仍然进入原来的“视频窗口 → 笔记 → 巩固题 → 错因二选一追问 → 回笔记/下一题 → 章节总复习”闭环。</p>
      </div>
      <div class="section-grid">
        ${sections.map((s, i) => `<button class="section-card" data-start-section="${i}"><strong>${s.title}</strong><span>进入现有闭环</span></button>`).join("")}
      </div>
    </section>
  `;
}

function renderEmptyChapterNotice() {
  return `
    <section class="note-section empty-flow-note">
      <h2>流程预留</h2>
      <p>本章暂不生成正式知识点和题目，先保留编辑槽位。等同事补齐内容后，可以把这里接入与第三章相同的诊断闭环。</p>
    </section>
  `;
}

function previewImage(inputId) {
  const input = document.querySelector(`#${inputId}`);
  const preview = document.querySelector(`#preview-${inputId}`);
  const url = input.value.trim();
  preview.innerHTML = url ? `<img src="${url}" alt="素材预览">` : "素材预览区";
}

function renderLearn() {
  const section = sections[state.sectionIndex];
  els.main.innerHTML = `
    <article class="note-document">
      <div class="question-head">
        <div>
          <p class="eyebrow">可编辑笔记</p>
          <h2>${section.title}</h2>
        </div>
        <button class="secondary-button" id="backIntroBtn">返回总览</button>
      </div>
      <div class="editable-note" contenteditable="true">${section.notes}</div>
      ${state.wrongNotes.filter(n => n.sectionId === section.id).map(renderWrongNoteEditor).join("")}
      ${state.pendingReturn ? renderReturnPanel() : ""}
      <div class="actions">
        <button class="primary-button" id="learnedBtn">我已学完，进入巩固测试</button>
      </div>
    </article>
  `;
  document.querySelector("#learnedBtn").addEventListener("click", () => {
    state.mode = "test";
    state.questionIndex = 0;
    render();
  });
  document.querySelector("#backIntroBtn").addEventListener("click", () => {
    state.mode = "intro";
    render();
  });
  document.querySelector("#returnQuestionBtn")?.addEventListener("click", returnToPendingQuestion);
  document.querySelector("#continueQuestionBtn")?.addEventListener("click", continueFromPendingQuestion);
  if (state.highlightAnchor) {
    document.querySelector(`#${state.highlightAnchor}`)?.classList.add("highlight-note");
    state.highlightAnchor = "";
  }
  bindReciteButtons();
}

function renderWrongNoteEditor(note) {
  return `
    <section class="wrong-note-editor">
      <h3>错题笔记：${note.reason}</h3>
      <p>${note.stem}</p>
      <ol class="option-mini-list">
        ${note.options.map((opt, i) => `<li class="${i === note.answer ? "correct" : i === note.selected ? "selected" : ""}">${String.fromCharCode(65 + i)}. ${opt}</li>`).join("")}
      </ol>
      <textarea>${note.studentNote}</textarea>
    </section>
  `;
}

function renderQuestion(isFinal) {
  const section = sections[state.sectionIndex];
  const question = isFinal ? finalQuestions[state.finalIndex] : section.questions[state.questionIndex];
  els.main.innerHTML = `
    <section class="question-panel compact">
      <div class="question-meta">
        <span>${isFinal ? "混合总结题" : section.title}</span>
        <span>${question.source}</span>
        ${question.level ? `<span>难度：${question.level}</span>` : ""}
      </div>
      <h2>${question.stem}</h2>
      <div class="options">
        ${question.options.map((opt, i) => `<button class="option-button" data-answer="${i}"><span class="option-key">${String.fromCharCode(65 + i)}</span><span class="option-text">${opt}</span></button>`).join("")}
      </div>
      <div class="feedback" id="feedbackBox" hidden></div>
      <div class="actions utility-actions">
        <button class="secondary-button" id="prevQuestionBtn">上一题</button>
        <button class="secondary-button" id="retryQuestionBtn">重新回答</button>
      </div>
      <div class="actions" id="actionBox"></div>
    </section>
  `;
  document.querySelectorAll("[data-answer]").forEach(btn => btn.addEventListener("click", () => submitAnswer(Number(btn.dataset.answer), isFinal)));
  document.querySelector("#prevQuestionBtn").disabled = !canGoPrevious(isFinal);
  document.querySelector("#prevQuestionBtn").addEventListener("click", () => goPreviousQuestion(isFinal));
  document.querySelector("#retryQuestionBtn").addEventListener("click", () => renderQuestion(isFinal));
}

function submitAnswer(choice, isFinal) {
  const section = sections[state.sectionIndex];
  const question = isFinal ? finalQuestions[state.finalIndex] : section.questions[state.questionIndex];
  const correct = choice === question.answer;
  const feedback = document.querySelector("#feedbackBox");
  const actions = document.querySelector("#actionBox");
  document.querySelectorAll("[data-answer]").forEach(btn => btn.disabled = true);
  feedback.hidden = false;

  if (correct) {
    feedback.className = "feedback done";
    feedback.textContent = "答对。可以继续下一步。";
    state.review.push(`${isFinal ? "混合题" : section.title}：第 ${isFinal ? state.finalIndex + 1 : state.questionIndex + 1} 题答对`);
    state.profile = isFinal ? "综合迁移通过" : "当前小节通过中";
    state.tags = new Set(["答题正确", "可继续推进"]);
    actions.innerHTML = `<button class="primary-button" id="continueBtn">继续</button>`;
    document.querySelector("#continueBtn").addEventListener("click", () => advanceAfterCorrect(isFinal));
    renderStatus();
    renderSidebars();
    return;
  }

  const [reason, prompt] = question.errorMap[choice] || ["错因待定位", "先回到笔记，找到本题对应机制。"];
  feedback.className = "feedback wrong";
  feedback.innerHTML = `
    <p><strong>错因：</strong>${reason}</p>
    <p><strong>引导：</strong>${prompt}</p>
    <p><strong>下一步：</strong>先做一个更小的问题，或者把错题加入笔记并回跳对应笔记。</p>
  `;
  state.profile = isFinal ? "综合迁移不稳" : "需要回炉";
  state.tags = new Set([reason, "已生成错题笔记", "需回跳笔记"]);
  state.review.push(`${isFinal ? "混合题" : section.title}：错选 ${String.fromCharCode(65 + choice)}，${reason}`);
  actions.innerHTML = `
    <button class="primary-button" id="addWrongBtn">错题加入笔记并回到笔记</button>
    <button class="secondary-button" id="guideBtn">下一题</button>
  `;
  document.querySelector("#addWrongBtn").addEventListener("click", () => addWrongAndJump(question, section, reason, prompt, choice, isFinal));
  document.querySelector("#guideBtn").addEventListener("click", () => renderGuidedQuestion(question, section, reason, prompt, choice, isFinal));
  renderStatus();
  renderSidebars();
}

function renderGuidedQuestion(question, section, reason, prompt, choice, isFinal) {
  const probe = buildProbe(reason, prompt);
  const feedback = document.querySelector("#feedbackBox");
  const actions = document.querySelector("#actionBox");
  feedback.className = "feedback wrong";
  feedback.innerHTML = `
    <div class="guided-question">
      <div class="guided-head">
        <p><strong>小问题：</strong>${probe.stem}</p>
        <button class="secondary-button" id="reviewFromProbeBtn">回笔记复习</button>
      </div>
      <div class="guided-choice-grid">
        ${probe.options.map((opt, index) => `<button class="guided-choice" data-probe="${index}">${String.fromCharCode(65 + index)}. ${opt}</button>`).join("")}
      </div>
      <p class="probe-feedback" id="probeFeedback"></p>
    </div>
  `;
  actions.innerHTML = `<button class="primary-button" id="nextAfterGuide">下一题</button>`;
  document.querySelector("#reviewFromProbeBtn").addEventListener("click", () => addWrongAndJump(question, section, reason, prompt, choice, isFinal));
  document.querySelectorAll("[data-probe]").forEach(btn => btn.addEventListener("click", () => handleProbeAnswer(Number(btn.dataset.probe), probe)));
  document.querySelector("#nextAfterGuide").addEventListener("click", () => advanceAfterCorrect(isFinal));
}

function buildProbe(reason, prompt) {
  if (reason.includes("外液 K+") || reason.includes("外 K+") || prompt.includes("K+ 外流动力")) {
    return {
      stem: prompt,
      options: ["外液 K+ 升高会减小 K+ 外流动力", "外液 K+ 升高会增大 K+ 外流动力"],
      answer: 0
    };
  }
  if (reason.includes("钠泵") || prompt.includes("钠泵")) {
    return {
      stem: prompt,
      options: ["钠泵主要维持 Na+、K+ 浓度差", "静息电位完全由钠泵直接形成"],
      answer: 0
    };
  }
  if (reason.includes("通透性") || prompt.includes("通透性")) {
    return {
      stem: prompt,
      options: ["静息电位更接近膜通透性最高离子的平衡电位", "只要有浓度差，通透性相同也能接近 K+ 平衡电位"],
      answer: 0
    };
  }
  if (reason.includes("局部电位")) {
    return {
      stem: prompt,
      options: ["局部电位有等级性、可叠加", "局部电位全或无、不可叠加"],
      answer: 0
    };
  }
  if (reason.includes("不应期")) {
    return {
      stem: prompt,
      options: ["绝对不应期兴奋性为零", "绝对不应期强刺激仍可再次兴奋"],
      answer: 0
    };
  }
  if (reason.includes("Na+") || prompt.includes("Na+")) {
    return {
      stem: prompt,
      options: ["动作电位去极化主要看 Na+ 内流", "静息电位主要由 Na+ 内流形成"],
      answer: 0
    };
  }
  return {
    stem: prompt,
    options: ["先拆机制，再判断选项", "直接记住本题正确答案即可"],
    answer: 0
  };
}

function handleProbeAnswer(choice, probe) {
  const feedback = document.querySelector("#probeFeedback");
  document.querySelectorAll("[data-probe]").forEach(btn => btn.classList.remove("correct", "wrong"));
  const selected = document.querySelector(`[data-probe="${choice}"]`);
  selected.classList.add(choice === probe.answer ? "correct" : "wrong");
  feedback.textContent = choice === probe.answer
    ? "对，这个小点抓住了。可以继续下一题，也可以回笔记巩固。"
    : "这里还不稳，建议先回笔记复习对应机制，再回到原题。";
}

function advanceAfterCorrect(isFinal) {
  if (isFinal) {
    state.finalIndex += 1;
    if (state.finalIndex >= finalQuestions.length) {
      state.mode = "done";
    }
    render();
    return;
  }

  const section = sections[state.sectionIndex];
  state.questionIndex += 1;
  if (state.questionIndex < section.questions.length) {
    render();
    return;
  }

  state.completed.add(section.id);
  const nextIndex = state.sectionIndex + 1;
  if (nextIndex < sections.length) {
    state.sectionIndex = nextIndex;
    state.mode = "learn";
    state.profile = "上一小节通过";
  } else {
    state.mode = "reviewReady";
    state.finalIndex = 0;
    state.profile = "小题完成，等待总复习";
  }
  render();
}

function canGoPrevious(isFinal) {
  if (isFinal) return state.finalIndex > 0;
  return state.questionIndex > 0;
}

function goPreviousQuestion(isFinal) {
  if (isFinal) {
    if (state.finalIndex > 0) state.finalIndex -= 1;
    render();
    return;
  }
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    render();
    return;
  }
  state.mode = "learn";
  render();
}

function renderReturnPanel() {
  return `
    <section class="return-panel">
      <div>
        <strong>刚才的题目已定位到这里</strong>
        <p>复习完这段笔记后，可以直接回到原题，也可以从下一题继续探索。</p>
      </div>
      <div class="return-actions">
        <button class="secondary-button" id="returnQuestionBtn">回到原题</button>
        <button class="primary-button" id="continueQuestionBtn">继续下一题</button>
      </div>
    </section>
  `;
}

function returnToPendingQuestion() {
  const target = state.pendingReturn;
  if (!target) return;
  state.pendingReturn = null;
  state.sectionIndex = target.sectionIndex;
  state.questionIndex = target.questionIndex;
  state.finalIndex = target.finalIndex;
  state.mode = target.isFinal ? "final" : "test";
  render();
}

function continueFromPendingQuestion() {
  const target = state.pendingReturn;
  if (!target) return;
  state.pendingReturn = null;
  state.sectionIndex = target.sectionIndex;
  state.questionIndex = target.questionIndex;
  state.finalIndex = target.finalIndex;
  state.mode = target.isFinal ? "final" : "test";
  advanceAfterCorrect(target.isFinal);
}

function addWrongAndJump(question, section, reason, explanation, choice, isFinal) {
  const targetSectionIndex = isFinal ? findSectionByAnchor(question.anchor) : state.sectionIndex;
  const targetSection = sections[targetSectionIndex];
  state.pendingReturn = {
    isFinal,
    sectionIndex: state.sectionIndex,
    questionIndex: state.questionIndex,
    finalIndex: state.finalIndex
  };
  state.wrongNotes.push({
    sectionId: targetSection.id,
    section: targetSection.title,
    stem: question.stem,
    options: question.options,
    selected: choice,
    answer: question.answer,
    reason,
    explanation,
    studentNote: `我的补充：这题错在「${reason}」。${explanation}`
  });
  state.sectionIndex = targetSectionIndex;
  state.highlightAnchor = question.anchor;
  state.mode = "learn";
  render();
}

function renderReviewReady() {
  els.main.innerHTML = `
    <section class="note-document">
      ${chapterIntro}
      <div class="feedback done">三个小节的小题已经学完。现在回到章节开头，开始章节总复习。</div>
      <div class="actions">
        <button class="primary-button" id="chapterReviewBtn">章节总复习</button>
        <button class="secondary-button" id="skipReviewBtn">先去下一章</button>
      </div>
    </section>
  `;
  document.querySelector("#chapterReviewBtn").addEventListener("click", () => {
    state.mode = "final";
    state.finalIndex = 0;
    state.profile = "进入章节总复习";
    render();
  });
  document.querySelector("#skipReviewBtn").addEventListener("click", () => {
    state.mode = "done";
    state.profile = "小题已完成，待总复习";
    render();
  });
}

function findSectionByAnchor(anchor) {
  const idx = sections.findIndex(s => s.notes.includes(`id="${anchor}"`));
  return idx >= 0 ? idx : 0;
}

function startSection(index) {
  state.sectionIndex = index;
  state.questionIndex = 0;
  state.mode = "learn";
  render();
}

function renderDone() {
  els.main.innerHTML = `
    <section class="note-document">
      <h2>该部分已全部学习完毕</h2>
      <p>过两天记得回来复习哦，快开始下一章的学习吧。</p>
      <div class="feedback done">最终画像：${state.profile}</div>
      <div class="actions"><button class="primary-button" id="againBtn">重新开始本节</button></div>
    </section>
  `;
  document.querySelector("#againBtn").addEventListener("click", restart);
}

function bindReciteButtons() {
  document.querySelectorAll(".memory-card").forEach(card => {
    if (card.querySelector(".recite-button")) return;
    const strong = card.querySelector("strong");
    if (!strong) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recite-button";
    button.textContent = "背";
    strong.insertAdjacentElement("afterend", button);
    button.addEventListener("click", () => card.classList.toggle("masked"));
  });
  document.querySelectorAll(".recite-button").forEach(button => {
    button.onclick = () => button.closest(".memory-card")?.classList.toggle("masked");
  });
}

function restart() {
  state.mode = "intro";
  state.chapterIndex = 0;
  state.sectionIndex = 0;
  state.questionIndex = 0;
  state.finalIndex = 0;
  state.completed = new Set();
  state.tags = new Set(["未测"]);
  state.review = [];
  state.wrongNotes = [];
  state.profile = "未测";
  state.highlightAnchor = "";
  state.pendingReturn = null;
  render();
}

els.restartBtn.addEventListener("click", restart);
render();
