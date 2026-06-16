const demo = {
  flow: [
    "五选一定位题",
    "错选项追问",
    "最小提示与再追问",
    "五选一变式验证",
    "双变量提升验证",
    "最终判定"
  ],
  nodes: {
    q1: {
      stage: "定位题",
      type: "五选一定位题",
      point: "神经细胞静息电位的形成和维持机制",
      source: "真题参考：2016 年 306 西医综合第 2 题考查 Na+/K+ 分布；本题为同考点综合改编",
      title: "关于神经细胞静息电位形成和维持机制，下列哪项叙述最准确？",
      stem: "本题综合定位：离子浓度差、膜对 K+/Na+ 的相对通透性、K+ 平衡电位、少量 Na+ 内流和 Na+-K+ 泵的维持作用。",
      options: [
        ["A", "静息电位主要由 Na+ 内流形成，因为细胞外 Na+ 浓度高，Na+ 顺浓度梯度进入细胞，使膜内带负电"],
        ["B", "静息电位的形成依赖细胞内外 Na+、K+ 浓度差；静息时膜对 K+ 通透性明显高于 Na+，K+ 外流使膜内相对带负电，少量 Na+ 内流使静息电位接近但不等于 K+ 平衡电位"],
        ["C", "静息电位完全由 Na+-K+ 泵直接形成，因为钠泵每次将 3 个 Na+ 泵出、2 个 K+ 泵入，使膜内持续失去正电荷"],
        ["D", "只要存在细胞内高 K+、细胞外高 Na+ 的浓度差，即使细胞膜对 Na+ 和 K+ 通透性相同，也能形成接近 K+ 平衡电位的静息电位"],
        ["E", "Na+-K+ 泵只负责动作电位后恢复离子分布，静息状态下不参与静息电位的形成和维持"]
      ],
      answer: "B",
      correctNext: "q2",
      wrongNext: {
        A: "q1WrongA",
        C: "q1WrongC",
        D: "q1WrongD",
        E: "q1WrongE"
      },
      correctFeedback: "答对。B 同时抓住了三个核心：浓度差提供动力，静息时 K+ 通透性最高，Na+-K+ 泵维持离子浓度差；少量 Na+ 内流使静息电位接近但不完全等于 K+ 平衡电位。",
      wrongFeedback: "答错。系统会先针对你选错的选项追问一个更小的问题，判断你卡在主导离子、钠泵作用，还是通透性条件。",
      wrongTag: "静息电位形成和维持机制混淆"
    },
    q1WrongA: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 A：Na+ 内流误判",
      source: "由错选项 A 自动生成",
      title: "你选择了 A。静息状态下，形成膜内相对负电的主要跨膜流动是：",
      stem: "A 的问题有两个：Na+ 内流会使膜内正电增加，不会使膜内带负电；静息电位的主导离子也不是 Na+，而是 K+。",
      options: [["A", "K+ 外流"], ["B", "Na+ 内流"]],
      answer: "A",
      correctNext: "q1HintIon",
      wrongNext: "finalWeak",
      correctFeedback: "对。K+ 外流使膜内相对缺少正电荷，所以膜内相对变负。",
      wrongFeedback: "仍错。说明你把静息电位的主导离子误认为 Na+，该点需要先看基础笔记或视频讲解。",
      wrongTag: "把静息电位误认为 Na+ 内流"
    },
    q1WrongC: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 C：钠泵直接形成误判",
      source: "由错选项 C 自动生成",
      title: "你选择了 C。静息电位主要是由钠泵直接泵电形成，还是由离子扩散和平衡电位决定？",
      stem: "C 夸大了 Na+-K+ 泵的直接生电效应。钠泵重要，但主要作用是建立和维持 Na+、K+ 浓度差。",
      options: [["A", "主要由 K+ 扩散及膜通透性决定"], ["B", "完全由钠泵直接形成"]],
      answer: "A",
      correctNext: "q1HintPump",
      wrongNext: "finalWeak",
      correctFeedback: "对。钠泵不是静息电位的唯一直接来源，它主要维持浓度差，并有一定生电效应。",
      wrongFeedback: "仍错。说明你把钠泵的维持作用误解成了静息电位的全部直接来源。",
      wrongTag: "钠泵直接形成静息电位误判"
    },
    q1WrongD: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 D：忽略相对通透性",
      source: "由错选项 D 自动生成",
      title: "你选择了 D。静息电位接近 K+ 平衡电位，关键条件除了浓度差，还需要：",
      stem: "D 的问题在于只强调浓度差，忽略了静息时膜对 K+ 的通透性明显高于 Na+。",
      options: [["A", "膜对 K+ 通透性明显高于 Na+"], ["B", "膜对 Na+ 和 K+ 通透性相同"]],
      answer: "A",
      correctNext: "q1HintPermeability",
      wrongNext: "finalWeak",
      correctFeedback: "对。只有 K+ 通透性占优势，膜电位才会主要被 K+ 平衡电位牵引。",
      wrongFeedback: "仍错。说明你对“浓度差必须结合选择性通透性”这一层掌握不足。",
      wrongTag: "忽略膜对 K+ 的高通透性"
    },
    q1WrongE: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 E：钠泵不参与误判",
      source: "由错选项 E 自动生成",
      title: "你选择了 E。Na+-K+ 泵在静息状态下是否参与静息电位的维持？",
      stem: "E 的问题在于把钠泵只看成动作电位后的恢复工具，忽略了它在静息状态下持续维持 Na+、K+ 浓度差。",
      options: [["A", "参与，持续维持离子浓度差"], ["B", "不参与，只在动作电位后工作"]],
      answer: "A",
      correctNext: "q1HintPump",
      wrongNext: "finalWeak",
      correctFeedback: "对。钠泵持续工作，维持内高 K+、外高 Na+ 的浓度差。",
      wrongFeedback: "仍错。说明你对钠泵在静息状态下的维持作用掌握不足。",
      wrongTag: "钠泵静息维持作用不清"
    },
    q1HintIon: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "静息电位与动作电位区分",
      source: "错后最小提示",
      title: "动作电位快速去极化的主要原因是：",
      stem: "提示：静息电位主要看 K+ 外流；动作电位快速去极化主要看 Na+ 内流。",
      options: [["A", "Na+ 快速内流"], ["B", "K+ 快速外流"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明经提示后能区分静息电位和动作电位，继续做变式验证。",
      wrongFeedback: "仍错。两步追问后仍不能区分 Na+/K+ 作用，判定为基础薄弱。",
      wrongTag: "静息电位与动作电位离子机制混淆"
    },
    q1HintPump: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "Na+-K+ 泵作用回扣",
      source: "错后最小提示",
      title: "Na+-K+ 泵对静息电位最核心的作用是：",
      stem: "提示：钠泵持续把 3 个 Na+ 泵出、2 个 K+ 泵入，既维持离子浓度差，也有一定生电效应，但静息电位主要仍由 K+ 扩散决定。",
      options: [["A", "维持 Na+、K+ 浓度差"], ["B", "完全直接产生静息电位"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明钠泵的维持作用已初步纠正，继续做变式验证。",
      wrongFeedback: "仍错。两步追问后仍不能定位钠泵作用，判定为基础薄弱。",
      wrongTag: "Na+-K+ 泵作用定位错误"
    },
    q1HintPermeability: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "浓度差与通透性回扣",
      source: "错后最小提示",
      title: "如果静息时膜对 Na+ 和 K+ 通透性相同，静息电位还会接近 K+ 平衡电位吗？",
      stem: "提示：膜电位更接近哪种离子的平衡电位，取决于膜对哪种离子的通透性更高。",
      options: [["A", "不会"], ["B", "会"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明你已经抓到“浓度差 + 选择性通透性”这组关键条件。",
      wrongFeedback: "仍错。两步追问后仍忽略相对通透性，判定为基础薄弱。",
      wrongTag: "相对通透性决定膜电位方向未掌握"
    },
    q2: {
      stage: "变式验证",
      type: "五选一变式题",
      point: "静息电位机制的迁移验证",
      source: "真题参考：306 西医综合生理学常考静息电位机制；本题为同考点变式改编",
      title: "关于神经细胞静息电位及其影响因素，下列哪项叙述正确？",
      stem: "本题用于验证学生是否真正掌握“浓度差 + 选择性通透性 + 钠泵维持 + 少量 Na+ 通透性”的完整机制。",
      options: [
        ["A", "若静息时膜对 Na+ 和 K+ 通透性相同，静息电位仍主要接近 K+ 平衡电位"],
        ["B", "抑制 Na+-K+ 泵后，短时间内静息电位立即消失，长期则基本不影响离子浓度差"],
        ["C", "静息电位接近 K+ 平衡电位，是因为静息时膜对 K+ 的通透性远高于 Na+"],
        ["D", "细胞外 K+ 浓度升高会增强 K+ 外流，使静息电位绝对值增大"],
        ["E", "少量 Na+ 内流会使静息电位比 K+ 平衡电位更负"]
      ],
      answer: "C",
      correctNext: "q3",
      wrongNext: {
        A: "q2WrongA",
        B: "q2WrongB",
        C: "q2WrongC",
        D: "q2WrongD",
        E: "q2WrongE"
      },
      correctFeedback: "答对。C 抓住了静息电位接近 K+ 平衡电位的关键条件：静息时膜对 K+ 的通透性远高于 Na+。继续做最后一道更难的双变量提升验证。",
      wrongFeedback: "答错。系统会根据错选项判断你是忽略相对通透性、误解钠泵、误判外液 K+，还是误判少量 Na+ 内流的方向。",
      wrongTag: "静息电位机制迁移错误"
    },
    q2WrongA: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 A：忽略相对通透性",
      source: "由错选项 A 自动生成",
      title: "你选择了 A。膜电位更接近哪种离子的平衡电位，主要取决于：",
      stem: "A 的问题在于假设 Na+ 和 K+ 通透性相同时，膜电位仍会主要被 K+ 决定。",
      options: [["A", "膜对该离子的相对通透性"], ["B", "该离子名称是否是 K+"]],
      answer: "A",
      correctNext: "q2HintMechanism",
      wrongNext: "finalWeak",
      correctFeedback: "对。静息时 K+ 通透性远高于 Na+，所以静息电位才接近 K+ 平衡电位。",
      wrongFeedback: "仍错。说明你还没有抓住“相对通透性决定膜电位靠近谁”的核心。",
      wrongTag: "相对通透性理解不足"
    },
    q2WrongB: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 B：钠泵短期和长期作用混淆",
      source: "由错选项 B 自动生成",
      title: "你选择了 B。抑制 Na+-K+ 泵后，短时间内静息电位会立即完全消失吗？",
      stem: "B 把短期和长期影响说反了。短期内既有浓度差仍存在，长期则会破坏 Na+、K+ 浓度差。",
      options: [["A", "不会立即完全消失"], ["B", "会立即完全消失"]],
      answer: "A",
      correctNext: "q2HintMechanism",
      wrongNext: "finalWeak",
      correctFeedback: "对。钠泵被抑制后，短时间内浓度差尚在；长期会逐渐破坏离子分布。",
      wrongFeedback: "仍错。说明你对钠泵“维持浓度差”的时间尺度理解不足。",
      wrongTag: "钠泵短期和长期作用混淆"
    },
    q2WrongC: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "正确选项",
      source: "系统保护分支",
      title: "C 是正确选项",
      stem: "如果进入该分支，说明系统状态异常；请重新开始。",
      options: [["A", "重新开始"], ["B", "重新开始"]],
      answer: "A",
      correctNext: "finalPass",
      wrongNext: "finalPass",
      correctFeedback: "C 为正确选项。",
      wrongFeedback: "C 为正确选项。",
      wrongTag: "无"
    },
    q2WrongD: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 D：外液 K+ 影响方向错误",
      source: "由错选项 D 自动生成",
      title: "你选择了 D。细胞外 K+ 浓度升高后，K+ 外流动力会：",
      stem: "D 的问题在于把外液 K+ 升高理解成 K+ 外流增强。实际上外液 K+ 升高会减小内外 K+ 浓度差。",
      options: [["A", "减弱"], ["B", "增强"]],
      answer: "A",
      correctNext: "q2HintMechanism",
      wrongNext: "finalWeak",
      correctFeedback: "对。外液 K+ 升高使 K+ 外流动力减弱，静息电位绝对值减小，发生去极化。",
      wrongFeedback: "仍错。说明你对外液 K+ 浓度变化和 K+ 外流动力的关系掌握不足。",
      wrongTag: "外液 K+ 升高方向判断错误"
    },
    q2WrongE: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 E：少量 Na+ 内流影响方向错误",
      source: "由错选项 E 自动生成",
      title: "你选择了 E。少量 Na+ 内流会使膜内负电位：",
      stem: "E 的问题在于方向反了。Na+ 内流带入正电荷，会抵消一部分 K+ 外流造成的内负。",
      options: [["A", "减小，使静息电位比 K+ 平衡电位不那么负"], ["B", "增大，使静息电位比 K+ 平衡电位更负"]],
      answer: "A",
      correctNext: "q2HintMechanism",
      wrongNext: "finalWeak",
      correctFeedback: "对。少量 Na+ 内流使静息电位绝对值略小于 K+ 平衡电位的绝对值。",
      wrongFeedback: "仍错。说明你对少量 Na+ 通透性为何导致“接近但不等于 K+ 平衡电位”掌握不足。",
      wrongTag: "少量 Na+ 内流影响方向错误"
    },
    q2HintMechanism: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "静息电位机制回扣",
      source: "错后最小提示",
      title: "静息电位接近但不等于 K+ 平衡电位，最主要是因为：",
      stem: "提示：K+ 高通透性让膜电位接近 K+ 平衡电位；少量 Na+ 通透性会把膜电位从 K+ 平衡电位方向拉回来一点。",
      options: [["A", "膜对 K+ 通透性高，同时对 Na+ 仍有少量通透性"], ["B", "膜只允许 K+ 通过，Na+ 完全不能通过"]],
      answer: "A",
      correctNext: "finalUnstable",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明经提示后可纠正，标记为掌握不稳。",
      wrongFeedback: "仍错。两步追问后仍无法回扣静息电位核心机制，判定为基础薄弱。",
      wrongTag: "静息电位核心机制回扣失败"
    },
    q3: {
      stage: "双变量提升验证",
      type: "五选一提升题",
      point: "外液 K+ 与 Na+ 同时升高的综合判断",
      source: "用户改题：双变量综合迁移，难度高于第 2 题",
      title: "人工适度增加离体神经纤维浸浴液中的 K+ 和 Na+ 浓度（未导致 Na+ 通道失活）后，关于该神经纤维静息电位和动作电位变化机制的叙述，下列哪项最准确？",
      stem: "本题同时考查外液 K+ 对静息电位的影响、外液 Na+ 对动作电位上升幅度的影响，以及 Na+ 通道未失活这一限制条件。",
      options: [
        ["A", "外液 K+ 浓度升高使细胞内外 K+ 浓度差增大，K+ 外流增加，静息电位绝对值增大；外液 Na+ 浓度升高使 Na+ 内流增加，动作电位幅度增大"],
        ["B", "外液 K+ 浓度升高使细胞内外 K+ 浓度差减小，K+ 外流动力减弱，静息电位绝对值减小；外液 Na+ 浓度升高使 Na+ 内流动力增强，动作电位幅度增大"],
        ["C", "外液 K+ 浓度升高主要影响动作电位上升支，外液 Na+ 浓度升高主要影响静息电位，因此静息电位绝对值增大，动作电位幅度减小"],
        ["D", "由于静息状态下细胞膜对 Na+ 通透性最高，所以外液 Na+ 浓度升高可明显增加静息电位绝对值；外液 K+ 浓度升高对静息电位影响较小"],
        ["E", "只要外液 Na+ 浓度升高，动作电位幅度一定增大，与静息膜电位和 Na+ 通道状态无关"]
      ],
      answer: "B",
      correctNext: "finalPass",
      wrongNext: {
        A: "q3WrongA",
        C: "q3WrongC",
        D: "q3WrongD",
        E: "q3WrongE"
      },
      correctFeedback: "答对。B 同时判断对了两条链：外 K+ 升高使 K+ 外流动力减弱，静息电位绝对值减小；外 Na+ 升高且 Na+ 通道未失活时，Na+ 内流动力增强，动作电位幅度增大。",
      wrongFeedback: "答错。系统会根据错选项判断你卡在外 K+、外 Na+、主导通透性，还是“通道状态限制条件”。",
      wrongTag: "双变量综合迁移错误"
    },
    q3WrongA: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 A：外液 K+ 方向判断反了",
      source: "由错选项 A 自动生成",
      title: "你选择了 A。外液 K+ 浓度升高后，细胞内外 K+ 浓度差会：",
      stem: "A 的后半句关于外 Na+ 的方向基本正确，主要错误在前半句：外液 K+ 升高不会增大 K+ 外流动力。",
      options: [["A", "减小"], ["B", "增大"]],
      answer: "A",
      correctNext: "q3HintDual",
      wrongNext: "finalComplexWeak",
      correctFeedback: "对。外 K+ 升高使 K+ 浓度差减小，K+ 外流动力减弱，静息电位绝对值减小。",
      wrongFeedback: "仍错。说明你对外液 K+ 升高和 K+ 外流动力的方向关系掌握不足。",
      wrongTag: "外液 K+ 升高方向判断错误"
    },
    q3WrongC: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 C：K+/Na+ 影响对象对调",
      source: "由错选项 C 自动生成",
      title: "你选择了 C。静息电位主要受哪种离子的通透性和浓度梯度影响？",
      stem: "C 把外液 K+ 和外液 Na+ 的主要影响对象对调了。静息电位主要看 K+，动作电位上升幅度主要看 Na+。",
      options: [["A", "K+"], ["B", "Na+"]],
      answer: "A",
      correctNext: "q3HintDual",
      wrongNext: "finalComplexWeak",
      correctFeedback: "对。静息电位主要受 K+ 影响；动作电位上升支主要受 Na+ 内流影响。",
      wrongFeedback: "仍错。说明你仍在混淆静息电位和动作电位的主导离子。",
      wrongTag: "静息电位和动作电位主导离子对调"
    },
    q3WrongD: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 D：静息时 Na+ 通透性误判",
      source: "由错选项 D 自动生成",
      title: "你选择了 D。静息状态下，细胞膜对哪种离子的通透性最高？",
      stem: "D 的核心错误是把静息状态下的主导通透性说成 Na+。静息时膜对 K+ 通透性明显高于 Na+。",
      options: [["A", "K+"], ["B", "Na+"]],
      answer: "A",
      correctNext: "q3HintDual",
      wrongNext: "finalComplexWeak",
      correctFeedback: "对。静息状态下膜对 K+ 通透性最高，所以外液 K+ 对静息电位影响明显。",
      wrongFeedback: "仍错。说明你对静息电位的主导通透性掌握不足。",
      wrongTag: "静息时 Na+ 通透性误判"
    },
    q3WrongE: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 E：忽略通道状态限制",
      source: "由错选项 E 自动生成",
      title: "你选择了 E。动作电位幅度是否只由外液 Na+ 浓度决定？",
      stem: "E 的错误是把“外液 Na+ 升高”说成无条件一定增大动作电位幅度，忽略了静息膜电位和 Na+ 通道失活状态。",
      options: [["A", "不是，还受静息膜电位和 Na+ 通道状态影响"], ["B", "是，只由外液 Na+ 浓度决定"]],
      answer: "A",
      correctNext: "q3HintDual",
      wrongNext: "finalComplexWeak",
      correctFeedback: "对。题干特意说明未导致 Na+ 通道失活，就是为了限定可以按 Na+ 内流动力增强来判断。",
      wrongFeedback: "仍错。说明你没有识别“未导致 Na+ 通道失活”这个限制条件。",
      wrongTag: "忽略 Na+ 通道状态限制"
    },
    q3HintDual: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "双变量机制回扣",
      source: "错后最小提示",
      title: "外液 K+ 和 Na+ 同时适度升高且 Na+ 通道未失活时，最合理的方向判断是：",
      stem: "提示：外 K+ 升高 -> K+ 外流动力减弱 -> 静息电位绝对值减小；外 Na+ 升高且通道未失活 -> Na+ 内流动力增强 -> 动作电位幅度增大。",
      options: [["A", "静息电位绝对值减小，动作电位幅度增大"], ["B", "静息电位绝对值增大，动作电位幅度减小"]],
      answer: "A",
      correctNext: "finalComplexUnstable",
      wrongNext: "finalComplexWeak",
      correctFeedback: "答对。说明经提示后能把双变量方向纠正回来：基础概念可识别，但复杂情境迁移不稳。",
      wrongFeedback: "仍错。前两题可答对，但双变量情境下连续回退，判定为复杂迁移失败，需要变量拆解训练。",
      wrongTag: "双变量机制回扣失败"
    },
    finalPass: {
      final: true,
      stage: "最终判定",
      title: "知识点当场通过",
      result: "定位题、中等变式题和双变量提升题均答对，暂定为当场通过。建议 1-3 天后延迟复测，确认稳定掌握。",
      mastery: "当场通过",
      tags: ["疑似稳定掌握", "建议延迟复测"]
    },
    finalUnstable: {
      final: true,
      stage: "最终判定",
      title: "掌握不稳，提示后可答对",
      result: "学生在定位题或变式题中出错，但经过两步以内追问后可以答对。建议标记为掌握不稳，稍后推同考点复测。",
      mastery: "掌握不稳",
      tags: ["提示后可答对", "需要延迟复测", "错因已定位"]
    },
    finalComplexUnstable: {
      final: true,
      stage: "最终判定",
      title: "诊断：复杂情境下掌握不稳",
      result: "学生前两题答对，说明基础概念可识别；第三题在双变量和限制条件混合时出错，但经提示可纠正，判断为复杂情境迁移不稳。",
      mastery: "复杂迁移不稳",
      tags: ["基础概念可识别", "复杂情境迁移不稳", "双变量整合需训练", "暂不判定稳定掌握"]
    },
    finalComplexWeak: {
      final: true,
      stage: "最终判定",
      title: "诊断：复杂迁移失败",
      result: "学生前两题答对，但第三题及后续追问仍错，说明不是完全无基础，而是在双变量、长选项和限制条件混合时发生知识回退。",
      mastery: "复杂迁移薄弱",
      tags: ["单点题可答对", "复杂选项下知识回退", "需训练变量拆解", "不进入更高难度题"]
    },
    finalWeak: {
      final: true,
      stage: "最终判定",
      title: "诊断：该生基础薄弱",
      result: "学生在针对错选项的追问或最小提示后仍无法答对，说明该知识点基础薄弱，需推送笔记或视频讲解。",
      mastery: "明确薄弱",
      tags: ["两步追问仍错", "需要讲解包", "暂不加难度"]
    }
  }
};

const state = {
  currentId: "q1",
  selected: "",
  history: [],
  notes: [],
  correctIds: new Set(),
  tags: new Set(["未测"]),
  mastery: "未测",
  lastError: "待观察",
  currentAnsweredCorrect: false,
  complexRegression: false
};

const els = {
  stageLabel: document.querySelector("#stageLabel"),
  masteryLabel: document.querySelector("#masteryLabel"),
  errorLabel: document.querySelector("#errorLabel"),
  questionType: document.querySelector("#questionType"),
  questionPoint: document.querySelector("#questionPoint"),
  questionSource: document.querySelector("#questionSource"),
  questionTitle: document.querySelector("#questionTitle"),
  questionStem: document.querySelector("#questionStem"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  submitBtn: document.querySelector("#submitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  noteBtn: document.querySelector("#noteBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  flowList: document.querySelector("#flowList"),
  tagGrid: document.querySelector("#tagGrid"),
  reviewLog: document.querySelector("#reviewLog"),
  noteLog: document.querySelector("#noteLog")
};

function render() {
  const node = demo.nodes[state.currentId];
  state.selected = "";
  state.currentAnsweredCorrect = false;
  els.feedbackBox.hidden = true;
  els.feedbackBox.className = "feedback";
  els.nextBtn.hidden = true;
  els.noteBtn.hidden = true;
  els.noteBtn.disabled = false;
  els.noteBtn.textContent = "加入笔记";
  els.submitBtn.disabled = true;

  renderStatus(node);
  renderFlow(node);
  renderTags();
  renderReview();
  renderNotes();

  if (node.final) {
    renderFinal(node);
    return;
  }

  els.questionType.textContent = node.type;
  els.questionPoint.textContent = node.point;
  els.questionSource.textContent = node.source;
  els.questionTitle.textContent = node.title;
  els.questionStem.textContent = node.stem;
  els.submitBtn.hidden = false;
  els.optionsList.innerHTML = "";

  node.options.forEach(([key, text]) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.dataset.key = key;
    button.innerHTML = `<span class="option-key">${key}</span><span class="option-text">${text}</span>`;
    button.addEventListener("click", () => selectOption(key));
    els.optionsList.appendChild(button);
  });
}

function renderStatus(node) {
  els.stageLabel.textContent = node.stage;
  els.masteryLabel.textContent = state.mastery;
  els.errorLabel.textContent = state.lastError;
}

function renderFlow(node) {
  const activeIndex = Math.max(0, demo.flow.indexOf(node.stage));
  els.flowList.innerHTML = "";
  demo.flow.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (index < activeIndex) li.className = "done";
    if (index === activeIndex) li.className = "active";
    els.flowList.appendChild(li);
  });
}

function renderTags() {
  els.tagGrid.innerHTML = "";
  [...state.tags].forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    els.tagGrid.appendChild(span);
  });
}

function renderReview() {
  if (!state.history.length) {
    els.reviewLog.innerHTML = "<p>学生作答后，这里会记录每一步的判断依据。</p>";
    return;
  }

  els.reviewLog.innerHTML = "";
  state.history.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item.title}：选 ${item.choice}，${item.correct ? "正确" : "错误"}。${item.note}`;
    els.reviewLog.appendChild(p);
  });
}

function renderNotes() {
  if (!state.notes.length) {
    els.noteLog.innerHTML = "<p>答对题目后，可把该题加入笔记。</p>";
    return;
  }

  els.noteLog.innerHTML = "";
  state.notes.forEach((note) => {
    const p = document.createElement("p");
    p.textContent = `${note.point}：${note.title}`;
    els.noteLog.appendChild(p);
  });
}

function renderFinal(node) {
  state.mastery = node.mastery;
  state.tags = new Set(node.tags);
  els.stageLabel.textContent = node.stage;
  els.masteryLabel.textContent = state.mastery;
  els.errorLabel.textContent = node.tags[0] || "已判定";
  renderFlow(node);
  renderTags();

  els.questionType.textContent = "闭环完成";
  els.questionPoint.textContent = "诊断结果";
  els.questionSource.textContent = "系统判定";
  els.questionTitle.textContent = node.title;
  els.questionStem.textContent = node.result;
  els.optionsList.innerHTML = "";
  els.submitBtn.hidden = true;
  els.nextBtn.hidden = true;
  els.noteBtn.hidden = true;
  els.feedbackBox.hidden = false;
  els.feedbackBox.className = node.mastery === "当场通过" ? "feedback done" : "feedback wrong";
  els.feedbackBox.innerHTML = makeFinalAdvice(node.mastery);
  renderReview();
  renderNotes();
}

function makeFinalAdvice(mastery) {
  if (mastery === "当场通过") {
    return "系统动作：进入延迟复测队列，1-3 天后再测同知识点。";
  }
  if (mastery === "掌握不稳") {
    return "系统动作：10-30 分钟后推同考点变式题；再次答对后进入延迟复测。";
  }
  if (mastery === "复杂迁移不稳" || mastery === "复杂迁移薄弱") {
    return `
      <p><strong>系统动作：</strong>不清空前两题成绩，将学生画像降级为“基础可识别，复杂迁移不稳”，推送变量拆解训练。</p>
      <div class="remedial-pack">
        <h3>变量拆解提示卡：先拆 K+，再拆 Na+</h3>
        <table class="mini-table">
          <thead>
            <tr>
              <th>变量</th>
              <th>先判断什么</th>
              <th>结论</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>外液 K+ 升高</td>
              <td>内外 K+ 浓度差变小</td>
              <td>K+ 外流动力减弱，静息电位绝对值减小</td>
            </tr>
            <tr>
              <td>外液 Na+ 升高</td>
              <td>Na+ 内流动力增强</td>
              <td>Na+ 通道未失活时，动作电位幅度增大</td>
            </tr>
            <tr>
              <td>限制条件</td>
              <td>是否导致 Na+ 通道失活</td>
              <td>若失活，不能机械判定动作电位幅度增大</td>
            </tr>
          </tbody>
        </table>
        <div class="memory-card">
          <strong>纠偏口诀</strong>
          <span>外钾升，钾外流弱；外钠升，钠内流强；通道若失活，幅度另商量。</span>
        </div>
      </div>
    `;
  }
  return `
    <p><strong>系统动作：</strong>推送基础笔记或视频讲解，暂不推高难综合题。</p>
    <div class="remedial-pack">
      <h3>基础笔记：静息电位形成 = 浓度差 + 选择性通透性 + 钠泵维持</h3>
      <p>静息电位不是单纯由 Na+ 内流或钠泵直接形成。钠泵长期维持细胞内高 K+、细胞外高 Na+ 的浓度差；静息时膜对 K+ 通透性明显高于 Na+，K+ 顺浓度差外流，使膜内相对变负。由于静息时仍有少量 Na+ 内流，静息电位接近但不完全等于 K+ 平衡电位。</p>
      <table class="mini-table">
        <thead>
          <tr>
            <th>环节</th>
            <th>关键点</th>
            <th>易错点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>离子基础</td>
            <td>内高 K+，外高 Na+</td>
            <td>只记浓度差，忘记膜通透性</td>
          </tr>
          <tr>
            <td>主要机制</td>
            <td>K+ 外流，膜内相对变负</td>
            <td>误认为 Na+ 内流形成内负</td>
          </tr>
          <tr>
            <td>钠泵作用</td>
            <td>维持浓度差，并有一定生电效应</td>
            <td>误认为完全由钠泵直接形成，或认为静息时不参与</td>
          </tr>
          <tr>
            <td>平衡电位</td>
            <td>接近但不等于 K+ 平衡电位</td>
            <td>忽略少量 Na+ 通透性</td>
          </tr>
        </tbody>
      </table>
      <div class="memory-card">
        <strong>口诀</strong>
        <span>钠泵建差，钾漏成负；钠漏掺一脚，接近不等钾。</span>
      </div>
      <div class="media-placeholder">
        <span>图片/视频讲解占位</span>
        <p>这里可接入一张“Na+-K+ 泵 + K+ 漏通道”示意图，或 2-3 分钟微课：静息电位为什么接近但不等于 K+ 平衡电位。</p>
      </div>
    </div>
  `;
}

function selectOption(key) {
  state.selected = key;
  els.submitBtn.disabled = false;
  document.querySelectorAll(".option-button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.key === key);
  });
}

function submitAnswer() {
  const node = demo.nodes[state.currentId];
  if (!state.selected || node.final) return;

  const correct = state.selected === node.answer;
  const note = correct ? node.correctFeedback : node.wrongFeedback;
  state.currentAnsweredCorrect = correct;
  state.history.push({
    title: node.point,
    choice: state.selected,
    correct,
    note
  });

  if (correct) {
    state.correctIds.add(state.currentId);
    if (state.currentId === "q1") state.mastery = "疑似掌握";
    els.noteBtn.hidden = false;
  } else {
    const hadQ1Q2Correct = state.correctIds.has("q1") && state.correctIds.has("q2");
    const isQ3Regression = state.currentId === "q3" && hadQ1Q2Correct;
    state.complexRegression = state.complexRegression || isQ3Regression;
    state.mastery = isQ3Regression ? "复杂迁移不稳" : "诊断中";
    state.lastError = node.wrongTag || "待定位";
    state.tags.delete("未测");
    if (isQ3Regression) {
      state.tags = new Set([
        "基础概念可识别",
        "复杂情境迁移不稳",
        node.wrongTag || "双变量错因待定位",
        "需训练变量拆解"
      ]);
    } else {
      state.tags.add(node.wrongTag || "错因待定位");
    }
  }

  els.feedbackBox.hidden = false;
  els.feedbackBox.className = correct ? "feedback" : "feedback wrong";
  els.feedbackBox.textContent = note;
  els.submitBtn.disabled = true;
  els.nextBtn.hidden = false;
  els.nextBtn.dataset.next = getNextNodeId(node, correct, state.selected);
  renderStatus(node);
  renderTags();
  renderReview();
}

function getNextNodeId(node, correct, selected) {
  const next = correct ? node.correctNext : node.wrongNext;
  if (typeof next === "string") return next;
  return next[selected] || "finalWeak";
}

function addNote() {
  const node = demo.nodes[state.currentId];
  if (!state.currentAnsweredCorrect || node.final) return;

  const alreadyAdded = state.notes.some((note) => note.id === state.currentId);
  if (!alreadyAdded) {
    state.notes.push({
      id: state.currentId,
      point: node.point,
      title: node.title
    });
  }
  els.noteBtn.textContent = "已加入";
  els.noteBtn.disabled = true;
  renderNotes();
}

function goNext() {
  const next = els.nextBtn.dataset.next;
  if (!next) return;
  state.currentId = next;
  render();
}

function restart() {
  state.currentId = "q1";
  state.selected = "";
  state.history = [];
  state.notes = [];
  state.correctIds = new Set();
  state.tags = new Set(["未测"]);
  state.mastery = "未测";
  state.lastError = "待观察";
  state.currentAnsweredCorrect = false;
  state.complexRegression = false;
  render();
}

els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", goNext);
els.noteBtn.addEventListener("click", addNote);
els.restartBtn.addEventListener("click", restart);

render();
