const questionBank = [
  {
    id: "q1",
    text: "Який калібр ПКМ?",
    correct: "7,62x54",
    options: ["7,62x54", "7,62x39", "5,45x39", "12,7x108"],
  },
  {
    id: "q2",
    text: "Скільки становить боєкомплект АК-74?",
    correct: "450 патронів",
    options: ["450 патронів", "300 патронів", "360 патронів", "540 патронів"],
  },
  {
    id: "q3",
    text: "Магнітний азимут - це кут від якого напрямку на ціль?",
    correct: "Північного",
    options: ["Північного", "Південного", "Напрямку руху", "Лінії горизонту"],
  },
  {
    id: "q4",
    text: "Який калібр РПГ-7?",
    correct: "40 мм",
    options: ["40 мм", "30 мм", "73 мм", "85 мм"],
  },
  {
    id: "q5",
    text: "Яка прицільна дальність стрільби з АК-74?",
    correct: "1000 м",
    options: ["1000 м", "500 м", "800 м", "1200 м"],
  },
  {
    id: "q6",
    text: "У якому разі використовується декомпресійна голка?",
    correct: "При напруженому пневмотораксі",
    options: [
      "При напруженому пневмотораксі",
      "При відкритому переломі кінцівки",
      "При масивній зовнішній кровотечі",
      "При опіковому ураженні грудної клітки",
    ],
  },
  {
    id: "q7",
    text: "Картою називається:",
    correct: "Зменшене узагальнене зображення земної поверхні на площині",
    options: [
      "Зменшене узагальнене зображення земної поверхні на площині",
      "Деталізоване фото місцевості без умовних позначень і масштабу",
      "Схема району дій із нанесеними маршрутами одного підрозділу",
      "Опис місцевості у вигляді таблиці координат і орієнтирів",
    ],
  },
  {
    id: "q8",
    text: "Чи потрібно виставляти чергового спостерігача за полем бою під час артилерійського обстрілу позицій?",
    correct: "Так, потрібно",
    options: ["Так, потрібно", "Ні, особовий склад повністю перебуває в укритті", "Тільки після завершення обстрілу", "Тільки за наявності оптичних приладів"],
  },
  {
    id: "q9",
    text: "До якого типу відноситься граната РГД-5?",
    correct: "Наступальна",
    options: ["Наступальна", "Оборонна", "Осколково-фугасна оборонна", "Сигнальна"],
  },
  {
    id: "q10",
    text: "Яке основне призначення РПГ-7?",
    correct: "Боротьба з броньованими засобами противника та живою силою в легких укриттях",
    options: [
      "Боротьба з броньованими засобами противника та живою силою в легких укриттях",
      "Ураження живої сили противника на відкритій місцевості тільки осколковою дією",
      "Підтримка підрозділу димовими пострілами та освітленням місцевості",
      "Знищення повітряних цілей на малих висотах у ближній зоні",
    ],
  },
  {
    id: "q11",
    text: "Бій може бути:",
    correct: "Загальновійськовим, зенітним, протиповітряним, повітряним і морським",
    options: [
      "Загальновійськовим, зенітним, протиповітряним, повітряним і морським",
      "Загальновійськовим, оборонним, наступальним, зустрічним і рейдовим",
      "Наземним, повітряним, морським, спеціальним і розвідувальним",
      "Пішим, механізованим, танковим, артилерійським і десантним",
    ],
  },
  {
    id: "q12",
    text: "Який інтервал між солдатами, що наступають?",
    correct: "5-7 м",
    options: ["5-7 м", "2-4 м", "8-10 м", "10-15 м"],
  },
  {
    id: "q13",
    text: "Що таке СВП?",
    correct: "Спеціальний вибуховий пристрій",
    options: [
      "Спеціальний вибуховий пристрій",
      "Саморобний вибуховий пристрій",
      "Стаціонарний вибуховий пристрій",
      "Сигнальний вибуховий пристрій",
    ],
  },
  {
    id: "q14",
    text: "В якій послідовності влаштовується одиночний окоп для стрільця?",
    correct: "З положення стоячи, з коліна, з положення лежачи",
    options: [
      "З положення стоячи, з коліна, з положення лежачи",
      "З положення лежачи, з коліна, з положення стоячи",
      "З положення з коліна, лежачи, потім стоячи",
      "З положення стоячи, лежачи, потім з коліна",
    ],
  },
  {
    id: "q15",
    text: "Інженерні загородження поділяються на:",
    correct: "Протитанкові, протипіхотні та комбіновані",
    options: [
      "Протитанкові, протипіхотні та комбіновані",
      "Протитанкові, протипіхотні та сигнальні",
      "Мінні, дротові та фортифікаційні",
      "Основні, запасні та хибні",
    ],
  },
  {
    id: "q16",
    text: "Під час ведення відкритих переговорів забороняється:",
    correct: "Вказувати координати вогневих позицій дружніх підрозділів",
    options: [
      "Вказувати координати вогневих позицій дружніх підрозділів",
      "Підтверджувати отримання команди встановленим сигналом",
      "Передавати короткі повідомлення за таблицею сигналів",
      "Повторювати команду командира для підтвердження прийому",
    ],
  },
  {
    id: "q19",
    text: "Що може впливати на точність показів компасу?",
    correct: "Лінії електропередачі",
    options: ["Лінії електропередачі", "Масштаб карти", "Хмарність і опади", "Колір умовних знаків"],
  },
  {
    id: "q20",
    text: "Які матеріали застосовуються для захисту від тепловізорів?",
    correct: "Медична теплозберігаюча накидка",
    options: [
      "Медична теплозберігаюча накидка",
      "Звичайна плащ-накидка без теплоізоляційного шару",
      "Прозора поліетиленова плівка поверх спорядження",
      "Світловідбивна стрічка на відкритих частинах спорядження",
    ],
  },
  {
    id: "q21",
    text: "Критичні зони пораненого, які підлягають особливому огляду:",
    correct: "Голова, шийний хребет, грудна клітка, кінцівки",
    options: [
      "Голова, шийний хребет, грудна клітка, кінцівки",
      "Голова, плечовий пояс, живіт, спорядження",
      "Обличчя, руки, стопи, кишені одягу",
      "Грудна клітка, спина, ремінь, підсумки",
    ],
  },
  {
    id: "q22",
    text: "Найменшим тактичним підрозділом механізованих військ є:",
    correct: "Відділення",
    options: ["Відділення", "Бойова група", "Взвод", "Екіпаж"],
  },
  {
    id: "q23",
    text: "Способами ведення військової розвідки є:",
    correct: "Огляд, ведення пошуку противника, отримання даних",
    options: [
      "Огляд, ведення пошуку противника, отримання даних",
      "Спостереження, маскування, інженерне обладнання позицій",
      "Пошук, марш, привал і зміна району розташування",
      "Огляд місцевості, зміна позицій, організація охорони",
    ],
  },
  {
    id: "q24",
    text: "Який тип спостереження зображено в описаній ситуації?",
    correct: "Наземне спостереження з укриття",
    scenario:
      "Боєць перебуває низько над землею за природним або підготовленим прикриттям. Корпус майже не виступає над лінією місцевості, зброя поруч, погляд спрямований у бік імовірного противника через оптичний прилад. Позиція обрана так, щоб мати сектор огляду й водночас не відкриватися на повний зріст.",
    options: [
      "Наземне спостереження з укриття",
      "Наземне спостереження з відкритої позиції",
      "Приховане висування до спостережного рубежу",
      "Візуальне орієнтування під час руху",
    ],
  },
  {
    id: "q25",
    text: "Які дії зображено в описаній ситуації?",
    correct: "Пригнутись",
    scenario:
      "Під час загрози обстрілу військовослужбовець різко зменшує силует, опускає корпус нижче, тримає зброю під контролем і намагається швидко зайняти безпечніше положення відносно укриття. Рух короткий, без випрямлення на повний зріст і без виходу на відкрите місце.",
    options: ["Пригнутись", "Змінити магазин", "Подати сигнал рукою", "Розпочати рух строєм"],
  },
];

const variants = {
  1: { questionSeed: 11, optionSeed: 101 },
  2: { questionSeed: 23, optionSeed: 203 },
  3: { questionSeed: 37, optionSeed: 307 },
  4: { questionSeed: 53, optionSeed: 401 },
};

const state = {
  questions: [],
  checked: false,
};

const quizEl = document.querySelector("#quiz");
const resultEl = document.querySelector("#result");
const variantSelect = document.querySelector("#variantSelect");
const progressText = document.querySelector("#progressText");
const checkButton = document.querySelector("#checkButton");
const clearButton = document.querySelector("#clearButton");
const restartButton = document.querySelector("#restartButton");

function seededRandom(seed) {
  let value = seed >>> 0;
  return function random() {
    value += 0x6D2B79F5;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(items, seed) {
  const random = seededRandom(seed);
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildVariant(variantId) {
  const variant = variants[variantId];
  return shuffleWithSeed(questionBank, variant.questionSeed).map((question, index) => ({
    ...question,
    displayNumber: index + 1,
    options: placeCorrectOption(
      shuffleWithSeed(question.options, variant.optionSeed + index * 17),
      question.correct,
      balancedCorrectPosition(index, variant.optionSeed)
    ),
  }));
}

function balancedCorrectPosition(index, seed) {
  const group = Math.floor(index / 4);
  const pattern = shuffleWithSeed([0, 1, 2, 3], seed + group * 97);
  return pattern[index % 4];
}

function placeCorrectOption(options, correct, targetIndex) {
  const currentIndex = options.indexOf(correct);
  if (currentIndex < 0 || currentIndex === targetIndex) return options;

  const copy = [...options];
  [copy[currentIndex], copy[targetIndex]] = [copy[targetIndex], copy[currentIndex]];
  return copy;
}

function renderQuiz() {
  quizEl.innerHTML = state.questions
    .map((question) => {
      const scenario = renderScenario(question.scenario);
      const answers = question.options
        .map((option, optionIndex) => {
          const inputId = `${question.id}-${optionIndex}`;
          return `
            <label class="answer" for="${inputId}" data-question-id="${question.id}" data-option="${escapeAttr(option)}">
              <input id="${inputId}" type="radio" name="${question.id}" value="${escapeAttr(option)}">
              <span>${option}</span>
            </label>
          `;
        })
        .join("");

      return `
        <article class="question" data-question-id="${question.id}">
          <div class="question-head">
            <span class="number">${question.displayNumber}</span>
            <p class="question-title">${question.text}</p>
          </div>
          ${scenario}
          <div class="answers">${answers}</div>
        </article>
      `;
    })
    .join("");

  state.checked = false;
  resultEl.hidden = true;
  resultEl.innerHTML = "";
  updateProgress();
}

function renderScenario(text) {
  if (!text) return "";

  return `
    <div class="scenario">
      <span class="scenario-label">Опис зображення</span>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function getSelectedAnswer(questionId) {
  const selected = document.querySelector(`input[name="${questionId}"]:checked`);
  return selected ? selected.value : "";
}

function updateProgress() {
  const answered = state.questions.filter((question) => getSelectedAnswer(question.id)).length;
  progressText.textContent = `${answered} / ${state.questions.length}`;
}

function clearMarks() {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.remove("correct", "wrong");
  });
  document.querySelectorAll(".question").forEach((question) => {
    question.classList.remove("unanswered");
  });
}

function checkAnswers() {
  clearMarks();

  let correctCount = 0;
  const mistakes = [];
  const unanswered = [];

  state.questions.forEach((question) => {
    const selected = getSelectedAnswer(question.id);
    const questionEl = document.querySelector(`.question[data-question-id="${question.id}"]`);

    if (!selected) {
      unanswered.push(question);
      questionEl.classList.add("unanswered");
    }

    document.querySelectorAll(`.answer[data-question-id="${question.id}"]`).forEach((answerEl) => {
      const option = answerEl.dataset.option;
      if (option === question.correct) {
        answerEl.classList.add("correct");
      }
      if (selected && option === selected && selected !== question.correct) {
        answerEl.classList.add("wrong");
      }
    });

    if (selected === question.correct) {
      correctCount += 1;
    } else {
      mistakes.push({ question, selected });
    }
  });

  const percent = Math.round((correctCount / state.questions.length) * 100);
  const unansweredText = unanswered.length ? ` Без відповіді: ${unanswered.length}.` : "";
  const mistakeItems = mistakes
    .map(({ question, selected }) => {
      const selectedText = selected || "немає відповіді";
      return `
        <li>
          <strong>${question.displayNumber}. ${question.text}</strong><br>
          <span class="muted">Твоя відповідь:</span> ${selectedText}<br>
          <span class="muted">Правильно:</span> ${question.correct}
        </li>
      `;
    })
    .join("");

  resultEl.innerHTML = `
    <h2>${correctCount} з ${state.questions.length} правильних</h2>
    <p>${percent}% результату.${unansweredText}</p>
    ${mistakes.length ? `<ul class="mistakes">${mistakeItems}</ul>` : "<p>Усі відповіді правильні.</p>"}
  `;
  resultEl.hidden = false;
  resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
  state.checked = true;
}

function resetCurrentAnswers() {
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
  clearMarks();
  resultEl.hidden = true;
  resultEl.innerHTML = "";
  state.checked = false;
  updateProgress();
}

function loadSelectedVariant() {
  state.questions = buildVariant(variantSelect.value);
  renderQuiz();
}

quizEl.addEventListener("change", updateProgress);
variantSelect.addEventListener("change", loadSelectedVariant);
restartButton.addEventListener("click", loadSelectedVariant);
clearButton.addEventListener("click", resetCurrentAnswers);
checkButton.addEventListener("click", checkAnswers);

loadSelectedVariant();
