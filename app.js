const demo = {
  flow: [
    "五选一定位题",
    "二选一拆解追问",
    "最小讲解与微验证",
    "五选一变式验证",
    "错因追问",
    "最终判定"
  ],
  nodes: {
    q1: {
      stage: "定位题",
      type: "五选一定位题",
      point: "静息电位的产生机制",
      title: "关于静息电位的形成机制，下列哪项叙述最准确？",
      stem: "本题用于判断学生是否能区分静息电位、动作电位去极化和复极化的主导离子。",
      options: [
        ["A", "静息电位主要由 Na+ 内流形成，因此接近 Na+ 平衡电位"],
        ["B", "静息电位主要由 K+ 外流形成，因此接近但不等于 K+ 平衡电位"],
        ["C", "静息电位完全等于 K+ 平衡电位，因为静息时细胞膜只允许 K+ 通过"],
        ["D", "细胞外 K+ 浓度升高时，K+ 外流动力增大，静息电位绝对值增大"],
        ["E", "钠泵活动只维持离子浓度差，不直接影响静息电位大小"]
      ],
      answer: "B",
      correctNext: "q2",
      wrongNext: "p1",
      correctFeedback: "答对。先标记为疑似掌握，需要再做一道变式题排除蒙对。",
      wrongFeedback: "答错。初步提示：静息电位主要不是 Na+ 内流，而是 K+ 外流；下面用二选一拆解定位错因。",
      wrongTag: "静息/动作电位主导离子混淆"
    },
    p1: {
      stage: "拆解追问",
      type: "二选一追问",
      point: "主导离子识别",
      title: "静息状态下，细胞膜对哪种离子的通透性最高？",
      stem: "先判断静息电位形成时哪种离子最容易跨膜流动。",
      options: [["A", "K+"], ["B", "Na+"]],
      answer: "A",
      correctNext: "p2",
      wrongNext: "p2",
      correctFeedback: "对。静息状态下膜对 K+ 通透性最高。",
      wrongFeedback: "错。静息状态下膜对 K+ 通透性最高，这是静息电位形成的核心。",
      wrongTag: "静息状态 K+ 通透性最高未掌握"
    },
    p2: {
      stage: "拆解追问",
      type: "二选一追问",
      point: "动作电位对照",
      title: "动作电位快速去极化的主要原因是：",
      stem: "通过对照动作电位，确认学生是否把 Na+ 和 K+ 的作用对调了。",
      options: [["A", "Na+ 快速内流"], ["B", "K+ 快速外流"]],
      answer: "A",
      correctNext: "micro1",
      wrongNext: "micro1",
      correctFeedback: "对。动作电位快速去极化主要是 Na+ 快速内流。",
      wrongFeedback: "错。动作电位快速去极化主要是 Na+ 内流；K+ 外流主要参与复极化。",
      wrongTag: "动作电位去极化机制混淆"
    },
    micro1: {
      stage: "微验证",
      type: "二选一微型验证",
      point: "静息电位主因回扣",
      title: "某神经细胞处于安静状态时，膜电位为内负外正。此状态主要与下列哪项有关？",
      stem: "最小知识卡：静息电位看 K+ 外流；动作电位快速去极化看 Na+ 内流；复极化看 K+ 外流。",
      options: [["A", "K+ 外流"], ["B", "Na+ 内流"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明主导离子的核心点已被纠正，但仍需变式验证。",
      wrongFeedback: "仍错。该知识点需要先进入基础讲解包，不建议继续加难度。",
      wrongTag: "最小纠正后仍未掌握"
    },
    q2: {
      stage: "变式验证",
      type: "五选一变式题",
      point: "外液 K+ 对静息电位的影响",
      title: "若细胞外液 K+ 浓度升高，其他条件不变，则静息电位的变化最可能是：",
      stem: "本题验证学生能否把 K+ 浓度梯度变化迁移到静息电位方向判断。",
      options: [
        ["A", "静息电位绝对值增大，细胞膜发生超级化"],
        ["B", "静息电位绝对值减小，细胞膜发生去极化"],
        ["C", "静息电位绝对值不变，因为静息电位只由钠泵决定"],
        ["D", "静息电位变得更接近 Na+ 平衡电位"],
        ["E", "静息电位立即产生超射"]
      ],
      answer: "B",
      correctNext: "finalPass",
      wrongNext: "k1",
      correctFeedback: "答对。定位题和变式题均通过，可判定该知识点当场通过。",
      wrongFeedback: "答错。薄弱点转向：外液 K+ 升高后，浓度梯度和静息电位方向判断不稳。",
      wrongTag: "外液 K+ 升高影响方向错误"
    },
    k1: {
      stage: "错因追问",
      type: "二选一追问",
      point: "K+ 浓度梯度",
      title: "细胞外 K+ 浓度升高时，细胞内外 K+ 浓度差会：",
      stem: "细胞内本来高 K+，细胞外 K+ 升高后，两边差距被拉近。",
      options: [["A", "变小"], ["B", "变大"]],
      answer: "A",
      correctNext: "k2",
      wrongNext: "k2",
      correctFeedback: "对。内外 K+ 浓度差变小。",
      wrongFeedback: "错。外 K+ 升高后，内外 K+ 浓度差会变小。",
      wrongTag: "K+ 浓度梯度变化判断错误"
    },
    k2: {
      stage: "错因追问",
      type: "二选一追问",
      point: "K+ 外流动力",
      title: "如果细胞内 K+ 浓度很高，细胞外 K+ 浓度也升高，那么 K+ 从细胞内向细胞外扩散的动力会：",
      stem: "差距变小，扩散动力减弱；差距变大，扩散动力增强。",
      options: [["A", "减弱"], ["B", "增强"]],
      answer: "A",
      correctNext: "micro2",
      wrongNext: "analogy",
      correctFeedback: "对。K+ 外流动力减弱。",
      wrongFeedback: "错。这里先用一个生活类比重建直觉。",
      wrongTag: "扩散动力逻辑未建立"
    },
    analogy: {
      stage: "错因追问",
      type: "二选一类比题",
      point: "浓度差直觉",
      title: "如果房间里人很多，走廊里人很少，大家从房间往走廊走的趋势很强。现在走廊里人也变多了，这种趋势会：",
      stem: "类比只服务于理解“差距变小，外流趋势减弱”。",
      options: [["A", "减弱"], ["B", "增强"]],
      answer: "A",
      correctNext: "micro2",
      wrongNext: "finalWeak",
      correctFeedback: "对。把这个直觉迁回 K+ 外流即可。",
      wrongFeedback: "仍错。说明基础扩散逻辑也需要补。",
      wrongTag: "基础浓度差逻辑薄弱"
    },
    micro2: {
      stage: "微验证",
      type: "二选一微型验证",
      point: "外液 K+ 影响回扣",
      title: "细胞外 K+ 浓度升高时，K+ 外流动力减弱，因此静息电位会：",
      stem: "外 K+ 升高 → K+ 外流动力减弱 → 膜内没那么负 → 静息电位绝对值减小 → 去极化。",
      options: [["A", "绝对值减小，发生去极化"], ["B", "绝对值增大，发生超级化"]],
      answer: "A",
      correctNext: "finalUnstable",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明纠正后能回到医学表述，但应标记为掌握不稳。",
      wrongFeedback: "仍错。需要进入基础讲解包，并安排稍后复测。",
      wrongTag: "外液 K+ 影响纠正失败"
    },
    finalPass: {
      final: true,
      stage: "最终判定",
      title: "知识点当场通过",
      result: "定位题与变式验证题均答对，暂定为当场通过。建议 1-3 天后延迟复测，确认稳定掌握。",
      mastery: "当场通过",
      tags: ["疑似稳定掌握", "建议延迟复测"]
    },
    finalUnstable: {
      final: true,
      stage: "最终判定",
      title: "掌握不稳，纠正后可答对",
      result: "学生经拆解追问后能答对微验证题。建议标记为掌握不稳，10-30 分钟后推送同考点变式复测。",
      mastery: "掌握不稳",
      tags: ["Na+/K+ 机制混淆", "外液 K+ 影响方向不稳", "纠正后可答对"]
    },
    finalWeak: {
      final: true,
      stage: "最终判定",
      title: "基础薄弱，进入讲解包",
      result: "学生在最小拆解后仍无法答对，需要先补充基础讲解，再进行二选一确认题和延迟复测。",
      mastery: "明确薄弱",
      tags: ["基础概念薄弱", "需要讲解包", "暂不加难度"]
    }
  }
};

const state = {
  currentId: "q1",
  selected: "",
  history: [],
  tags: new Set(["未测"]),
  mastery: "未测",
  lastError: "待观察"
};

const els = {
  stageLabel: document.querySelector("#stageLabel"),
  masteryLabel: document.querySelector("#masteryLabel"),
  errorLabel: document.querySelector("#errorLabel"),
  questionType: document.querySelector("#questionType"),
  questionPoint: document.querySelector("#questionPoint"),
  questionTitle: document.querySelector("#questionTitle"),
  questionStem: document.querySelector("#questionStem"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  submitBtn: document.querySelector("#submitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  flowList: document.querySelector("#flowList"),
  knowledgeCard: document.querySelector("#knowledgeCard"),
  tagGrid: document.querySelector("#tagGrid"),
  reviewLog: document.querySelector("#reviewLog")
};

function render() {
  const node = demo.nodes[state.currentId];
  state.selected = "";
  els.feedbackBox.hidden = true;
  els.feedbackBox.className = "feedback";
  els.nextBtn.hidden = true;
  els.submitBtn.disabled = true;

  renderStatus(node);
  renderFlow(node);
  renderTags();
  renderReview();

  if (node.final) {
    renderFinal(node);
    return;
  }

  els.questionType.textContent = node.type;
  els.questionPoint.textContent = node.point;
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
  els.questionTitle.textContent = node.title;
  els.questionStem.textContent = node.result;
  els.optionsList.innerHTML = "";
  els.submitBtn.hidden = true;
  els.nextBtn.hidden = true;
  els.feedbackBox.hidden = false;
  els.feedbackBox.className = node.mastery === "当场通过" ? "feedback done" : "feedback wrong";
  els.feedbackBox.textContent = makeFinalAdvice(node.mastery);
  renderReview();
}

function makeFinalAdvice(mastery) {
  if (mastery === "当场通过") {
    return "系统动作：进入延迟复测队列，1-3 天后再测同知识点。";
  }
  if (mastery === "掌握不稳") {
    return "系统动作：10-30 分钟后推同考点变式题；再次答对后进入延迟复测。";
  }
  return "系统动作：推送最小讲解卡和基础二选一确认题，暂不推高难综合题。";
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
  state.history.push({
    title: node.point,
    choice: state.selected,
    correct,
    note
  });

  if (correct) {
    state.mastery = state.currentId === "q1" ? "疑似掌握" : state.mastery;
  } else {
    state.mastery = "诊断中";
    state.lastError = node.wrongTag || "待定位";
    state.tags.delete("未测");
    state.tags.add(node.wrongTag || "错因待定位");
  }

  els.feedbackBox.hidden = false;
  els.feedbackBox.className = correct ? "feedback" : "feedback wrong";
  els.feedbackBox.textContent = note;
  els.submitBtn.disabled = true;
  els.nextBtn.hidden = false;
  els.nextBtn.dataset.next = correct ? node.correctNext : node.wrongNext;
  renderStatus(node);
  renderTags();
  renderReview();
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
  state.tags = new Set(["未测"]);
  state.mastery = "未测";
  state.lastError = "待观察";
  render();
}

els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", goNext);
els.restartBtn.addEventListener("click", restart);

render();
