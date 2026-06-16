const demo = {
  flow: [
    "五选一定位题",
    "错选项追问",
    "最小提示与再追问",
    "五选一变式验证",
    "最终判定"
  ],
  nodes: {
    q1: {
      stage: "定位题",
      type: "五选一定位题",
      point: "静息电位的产生机制",
      source: "真题参考：2016 年 306 西医综合第 2 题考查 Na+/K+ 分布；本题为同考点改编",
      title: "关于静息电位形成机制，下列哪项叙述最准确？",
      stem: "本题用于定位学生是否能把静息电位的主导离子、平衡电位关系和钠泵作用区分清楚。",
      options: [
        ["A", "静息电位主要由 Na+ 内流形成，因此接近 Na+ 平衡电位"],
        ["B", "静息电位主要由 K+ 外流形成，因此接近但不等于 K+ 平衡电位"],
        ["C", "静息电位完全等于 K+ 平衡电位，因为静息时细胞膜只允许 K+ 通过"],
        ["D", "细胞外 K+ 浓度升高时，K+ 外流动力增大，静息电位绝对值增大"],
        ["E", "钠泵活动只维持离子浓度差，不直接影响静息电位大小"]
      ],
      answer: "B",
      correctNext: "q2",
      wrongNext: {
        A: "q1WrongA",
        C: "q1WrongC",
        D: "q1WrongD",
        E: "q1WrongE"
      },
      correctFeedback: "答对。先标记为疑似掌握，继续做一道真题风格变式题，排除蒙对。",
      wrongFeedback: "答错。先不直接讲全套解析，系统会根据你选错的选项追问一个更小的问题。",
      wrongTag: "静息电位机制混淆"
    },
    q1WrongA: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 A：Na+ 内流误判",
      source: "由错选项 A 自动生成",
      title: "你选择了 A。静息电位主要应该看哪种离子的跨膜流动？",
      stem: "A 的问题在于把静息电位和动作电位快速去极化混在一起。",
      options: [["A", "K+ 外流"], ["B", "Na+ 内流"]],
      answer: "A",
      correctNext: "q1HintIon",
      wrongNext: "finalWeak",
      correctFeedback: "对。静息电位主要看 K+ 外流，下一步确认你能不能区分动作电位。",
      wrongFeedback: "仍错。已经能判断你对静息电位主导离子掌握不足，先进入讲解包更合适。",
      wrongTag: "把静息电位误认为 Na+ 内流"
    },
    q1WrongC: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 C：完全等于 K+ 平衡电位",
      source: "由错选项 C 自动生成",
      title: "你选择了 C。静息时细胞膜是否只允许 K+ 通过？",
      stem: "C 的问题在于忽略了静息时膜对 Na+ 仍有少量通透性。",
      options: [["A", "不是，Na+ 仍有少量通透性"], ["B", "是，只允许 K+ 通过"]],
      answer: "A",
      correctNext: "q1HintIon",
      wrongNext: "finalWeak",
      correctFeedback: "对。静息电位接近 K+ 平衡电位，但不完全等于它。",
      wrongFeedback: "仍错。说明你对“接近但不等于 K+ 平衡电位”的原因掌握不足。",
      wrongTag: "静息电位与 K+ 平衡电位关系不清"
    },
    q1WrongD: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 D：外液 K+ 影响方向",
      source: "由错选项 D 自动生成",
      title: "你选择了 D。细胞外 K+ 浓度升高后，细胞内外 K+ 浓度差会怎样？",
      stem: "D 的问题在于把外液 K+ 升高理解成 K+ 外流动力增强。",
      options: [["A", "变小"], ["B", "变大"]],
      answer: "A",
      correctNext: "q1HintK",
      wrongNext: "finalWeak",
      correctFeedback: "对。浓度差变小后，K+ 外流动力会减弱。",
      wrongFeedback: "仍错。已经能判断你对外液 K+ 变化和扩散动力的关系掌握不足。",
      wrongTag: "外液 K+ 升高影响方向错误"
    },
    q1WrongE: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 E：钠泵生电效应",
      source: "由错选项 E 自动生成",
      title: "你选择了 E。钠泵活动增强时，膜电位更可能出现哪种变化？",
      stem: "E 的问题在于忽略了钠泵除维持离子浓度差外，还有一定生电效应。",
      options: [["A", "一定程度超级化"], ["B", "立即产生超射"]],
      answer: "A",
      correctNext: "q1HintIon",
      wrongNext: "finalWeak",
      correctFeedback: "对。钠泵活动增强可使膜发生一定程度超级化。",
      wrongFeedback: "仍错。说明你对钠泵影响静息电位的方式掌握不足。",
      wrongTag: "钠泵生电效应不清"
    },
    q1HintIon: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "静息电位与动作电位区分",
      source: "错后最小提示",
      title: "动作电位快速去极化的主要原因是：",
      stem: "提示：静息电位看 K+ 外流；动作电位快速去极化看 Na+ 内流。",
      options: [["A", "Na+ 快速内流"], ["B", "K+ 快速外流"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。错因已初步纠正，但仍需做变式验证。",
      wrongFeedback: "仍错。两步追问后仍不能区分 Na+/K+ 作用，判定为掌握不足。",
      wrongTag: "静息电位与动作电位离子机制混淆"
    },
    q1HintK: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "外液 K+ 对静息电位的影响",
      source: "错后最小提示",
      title: "细胞外 K+ 升高，K+ 外流动力减弱，因此静息电位会：",
      stem: "提示：外液 K+ 升高 -> 内外 K+ 浓度差变小 -> K+ 外流动力减弱 -> 膜内没那么负。",
      options: [["A", "绝对值减小，发生去极化"], ["B", "绝对值增大，发生超级化"]],
      answer: "A",
      correctNext: "q2",
      wrongNext: "finalWeak",
      correctFeedback: "答对。错因已初步纠正，但仍需做变式验证。",
      wrongFeedback: "仍错。两步追问后仍不能判断外液 K+ 影响方向，判定为掌握不足。",
      wrongTag: "外液 K+ 影响方向掌握不足"
    },
    q2: {
      stage: "变式验证",
      type: "五选一变式题",
      point: "外液 K+ 对静息电位与动作电位幅度的影响",
      source: "真题参考：2019 年 306 西医综合回忆版，细胞外 K+ 浓度升高相关考法改编",
      title: "人工增加离体神经纤维浸浴液中的 K+ 浓度，则该神经纤维静息电位绝对值和动作电位幅度最可能如何变化？",
      stem: "本题用于验证学生能否把 K+ 浓度梯度变化迁移到真题常见问法。",
      options: [
        ["A", "二者均增大"],
        ["B", "二者均减小"],
        ["C", "静息电位绝对值增大，动作电位幅度减小"],
        ["D", "静息电位绝对值减小，动作电位幅度增大"],
        ["E", "静息电位绝对值不变，动作电位幅度增大"]
      ],
      answer: "B",
      correctNext: "finalPass",
      wrongNext: {
        A: "q2WrongA",
        C: "q2WrongC",
        D: "q2WrongD",
        E: "q2WrongE"
      },
      correctFeedback: "答对。定位题和变式题均通过，可判定该知识点当场通过。",
      wrongFeedback: "答错。先根据错选项追问一个最小问题，判断是方向错还是动作电位幅度理解错。",
      wrongTag: "外液 K+ 变式题错误"
    },
    q2WrongA: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 A：二者均增大误判",
      source: "由错选项 A 自动生成",
      title: "外液 K+ 升高时，静息电位绝对值首先会：",
      stem: "A 的问题在于把外液 K+ 升高理解为静息电位更负。",
      options: [["A", "减小"], ["B", "增大"]],
      answer: "A",
      correctNext: "q2HintAmplitude",
      wrongNext: "finalWeak",
      correctFeedback: "对。静息电位绝对值减小，细胞去极化。",
      wrongFeedback: "仍错。说明外液 K+ 对静息电位方向的影响掌握不足。",
      wrongTag: "外液 K+ 对静息电位方向判断错误"
    },
    q2WrongC: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 C：静息电位绝对值方向错",
      source: "由错选项 C 自动生成",
      title: "外液 K+ 升高后，K+ 外流动力会：",
      stem: "C 的问题在于静息电位绝对值方向判断反了。",
      options: [["A", "减弱"], ["B", "增强"]],
      answer: "A",
      correctNext: "q2HintAmplitude",
      wrongNext: "finalWeak",
      correctFeedback: "对。K+ 外流动力减弱，静息电位绝对值减小。",
      wrongFeedback: "仍错。说明浓度差和外流动力这一步没有打通。",
      wrongTag: "K+ 外流动力判断错误"
    },
    q2WrongD: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 D：动作电位幅度误判",
      source: "由错选项 D 自动生成",
      title: "静息电位绝对值减小后，离 Na+ 平衡电位的距离通常会：",
      stem: "D 的问题在于动作电位幅度方向判断反了。",
      options: [["A", "变小"], ["B", "变大"]],
      answer: "A",
      correctNext: "q2HintAmplitude",
      wrongNext: "finalWeak",
      correctFeedback: "对。起点没那么负，动作电位幅度通常减小。",
      wrongFeedback: "仍错。说明动作电位幅度与起点/峰值关系掌握不足。",
      wrongTag: "动作电位幅度判断错误"
    },
    q2WrongE: {
      stage: "错选项追问",
      type: "二选一追问 1/2",
      point: "针对错选 E：静息电位不变误判",
      source: "由错选项 E 自动生成",
      title: "静息电位大小是否会受细胞外 K+ 浓度影响？",
      stem: "E 的问题在于忽略了静息电位接近 K+ 平衡电位。",
      options: [["A", "会"], ["B", "不会"]],
      answer: "A",
      correctNext: "q2HintAmplitude",
      wrongNext: "finalWeak",
      correctFeedback: "对。外液 K+ 改变会明显影响静息电位。",
      wrongFeedback: "仍错。说明静息电位与 K+ 平衡电位关系掌握不足。",
      wrongTag: "外液 K+ 与静息电位关系不清"
    },
    q2HintAmplitude: {
      stage: "最小提示与再追问",
      type: "二选一追问 2/2",
      point: "动作电位幅度回扣",
      source: "错后最小提示",
      title: "外液 K+ 升高使静息电位绝对值减小，动作电位幅度通常会：",
      stem: "提示：静息电位从 -70 mV 变成 -55 mV，起点更接近 0，动作电位从起点到峰值的幅度会变小。",
      options: [["A", "减小"], ["B", "增大"]],
      answer: "A",
      correctNext: "finalUnstable",
      wrongNext: "finalWeak",
      correctFeedback: "答对。说明经提示后可纠正，标记为掌握不稳。",
      wrongFeedback: "仍错。两步追问后仍无法回扣机制，判定为掌握不足。",
      wrongTag: "动作电位幅度机制掌握不足"
    },
    finalPass: {
      final: true,
      stage: "最终判定",
      title: "知识点当场通过",
      result: "定位题与真题风格变式题均答对，暂定为当场通过。建议 1-3 天后延迟复测，确认稳定掌握。",
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
  tags: new Set(["未测"]),
  mastery: "未测",
  lastError: "待观察",
  currentAnsweredCorrect: false
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
  return `
    <p><strong>系统动作：</strong>推送基础笔记或视频讲解，暂不推高难综合题。</p>
    <div class="remedial-pack">
      <h3>基础笔记：静息电位先抓 K+</h3>
      <p>静息电位的核心是：静息状态下细胞膜对 K+ 通透性最高，K+ 顺浓度差外流，使膜内相对变负。因此静息电位接近 K+ 平衡电位，但因 Na+ 仍有少量通透性，所以不完全相等。</p>
      <table class="mini-table">
        <thead>
          <tr>
            <th>场景</th>
            <th>主导离子</th>
            <th>结果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>静息电位</td>
            <td>K+ 外流</td>
            <td>膜内相对变负</td>
          </tr>
          <tr>
            <td>动作电位快速去极化</td>
            <td>Na+ 内流</td>
            <td>膜内迅速变正</td>
          </tr>
          <tr>
            <td>复极化</td>
            <td>K+ 外流</td>
            <td>膜电位回落</td>
          </tr>
        </tbody>
      </table>
      <div class="memory-card">
        <strong>口诀</strong>
        <span>静息看钾外流，去极看钠内流；外钾升高，静息绝对值变小。</span>
      </div>
      <div class="media-placeholder">
        <span>视频讲解占位</span>
        <p>这里可接入 2-3 分钟微课：静息电位、动作电位与外液 K+ 变化。</p>
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
    if (state.currentId === "q1") state.mastery = "疑似掌握";
    els.noteBtn.hidden = false;
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
  state.tags = new Set(["未测"]);
  state.mastery = "未测";
  state.lastError = "待观察";
  state.currentAnsweredCorrect = false;
  render();
}

els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", goNext);
els.noteBtn.addEventListener("click", addNote);
els.restartBtn.addEventListener("click", restart);

render();
