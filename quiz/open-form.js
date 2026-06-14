const openFormBank = [
  {
    prompt: "Обмеження щодо використання стільникових телефонів.",
    correct: ["Не використовувати мобільні телефони у зоні бойових дій", "Не передавати координати, фото, відео і бойові завдання", "Здавати телефони при вході на режимні об'єкти", "Пам'ятати, що радіовипромінювання телефону демаскує підрозділ"],
    distractors: ["Використовувати телефон тільки для фотофіксації позицій", "Тримати телефон увімкненим для постійної геолокації", "Передавати координати через месенджер без шифрування"],
  },
  {
    prompt: "Що наноситься на картку вогню стрільця?",
    correct: ["Орієнтири на місцевості", "Сектори обстрілу", "Межі відкриття вогню", "Порядок дій у разі виявлення противника"],
    distractors: ["Список особистих речей стрільця", "Графік харчування підрозділу", "Номери телефонів особового складу"],
  },
  {
    prompt: "Оборона має на меті:",
    correct: ["Відбиття наступу противника", "Утримання зайнятих рубежів", "Нанесення противнику втрат", "Створення умов для переходу в наступ"],
    distractors: ["Негайне залишення зайнятих позицій", "Рух колоною без спостереження", "Повна відмова від маневру силами"],
  },
  {
    prompt: "Наступ полягає:",
    correct: ["Рішуче ураження противника", "Захоплення вигідних рубежів або районів", "Знищення живої сили та техніки противника", "Досягнення поставленої тактичної або оперативної мети"],
    distractors: ["Утримання позицій без просування", "Очікування противника без активних дій", "Відхід у тил після першого контакту"],
  },
  {
    prompt: "Основні демаскуючі ознаки.",
    correct: ["Дим, пил, шум, блиск", "Переміщення особового складу або техніки", "Спалахи пострілів", "Радіовипромінювання"],
    distractors: ["Наявність паперової карти в підсумку", "Однаковий розмір взуття у бійців", "Позивний, записаний у блокноті"],
  },
  {
    prompt: "Положення для стрільби.",
    correct: ["З положення лежачи", "З коліна", "Стоячи", "Положення обирається залежно від обстановки і укриття"],
    distractors: ["Тільки сидячи на відкритій місцевості", "Тільки під час руху строєм", "Тільки з положення спиною до цілі"],
  },
  {
    prompt: "Види кровотеч.",
    correct: ["Артеріальна", "Венозна", "Капілярна", "Паренхіматозна"],
    distractors: ["Компресійна", "Ротаційна", "Сигнальна"],
  },
  {
    prompt: "Завдання штурмової групи.",
    correct: ["Прорив оборони противника", "Штурм укріплених об'єктів", "Зачистка приміщень", "Зачистка траншей"],
    distractors: ["Охорона складу майна в тилу", "Ведення тільки адміністративного обліку", "Прокладання маршруту для колони постачання"],
  },
  {
    prompt: "Міжнародні правила поводження зі зброєю.",
    correct: ["Завжди вважай зброю зарядженою", "Не направляй зброю на те, у що не готовий стріляти", "Палець поза спусковим гачком до моменту пострілу", "Переконуйся у цілі та тлі"],
    distractors: ["Тримай палець на спуску під час переміщення", "Перевіряй зброю, направивши її на побратима", "Стріляй, не перевіряючи фон за ціллю"],
  },
  {
    prompt: "Види юридичної відповідальності військовослужбовців.",
    correct: ["Дисциплінарна", "Адміністративна", "Кримінальна", "Матеріальна"],
    distractors: ["Технічна", "Метеорологічна", "Картографічна"],
  },
  {
    prompt: "Способи орієнтування на місцевості.",
    correct: ["За компасом", "За картою", "За Сонцем", "За зорями або місцевими ознаками"],
    distractors: ["За кольором спорядження", "За кількістю магазинів", "За номером відділення"],
  },
  {
    prompt: "Способи визначення відстані.",
    correct: ["За допомогою мірника", "Візуально", "За картою", "Розрахунковим методом"],
    distractors: ["За кольором цілі", "За номером орієнтира без вимірювання", "За часом прийому їжі"],
  },
  {
    prompt: "Фортифікаційне обладнання одиночного та парного окопу.",
    correct: ["Позначення меж", "Копання з положення стоячи, з коліна, лежачи", "Облаштування ніші для боєприпасів", "Маскування"],
    distractors: ["Залишення відкритих блискучих предметів", "Розміщення окопу без урахування сектору", "Відмова від маскування після копання"],
  },
  {
    prompt: "Індивідуальне маскування військовослужбовця.",
    correct: ["Врахування місцевості", "Зміна силуету", "Обмеження руху та блиску", "Використання маск-сітки, гілок, тканини або бруду"],
    distractors: ["Носіння яскравих світловідбивних елементів", "Рух відкритим місцем без потреби", "Використання ліхтаря для позначення себе"],
  },
  {
    prompt: "Дії на замінованій ділянці.",
    correct: ["Негайна зупинка", "Повідомлення командиру", "Позначення мінного поля", "Обхід або знешкодження сапером"],
    distractors: ["Продовжити рух тією самою стежкою", "Самостійно розібрати підозрілий предмет", "Зібрати особовий склад у центрі ділянки"],
  },
  {
    prompt: "Порядок виходу з замінованої ділянки.",
    correct: ["Вихід назад по своїх слідах", "Маркування небезпечного шляху", "Не торкатися підозрілих предметів", "Рухатися обережно з контролем кожного кроку"],
    distractors: ["Бігти навпростець до найближчої дороги", "Пересувати підозрілі предмети ногою", "Зрізати маршрут через невідому ділянку"],
  },
  {
    prompt: "Вміст індивідуальної медичної аптечки.",
    correct: ["Турнікет", "Гемостатичний засіб", "Серветки, джгут, рукавички", "Знеболювальне"],
    distractors: ["Особистий телефон", "Компас і карта", "Запасні шкарпетки"],
  },
  {
    prompt: "Дії з пораненим під вогнем.",
    correct: ["Надати вогневе прикриття", "Евакуювати в укриття", "Зупинити кровотечу", "Перевірити дихання"],
    distractors: ["Проводити повний огляд на відкритому місці", "Залишити зброю без контролю", "Вести довгу радіодоповідь без укриття"],
  },
  {
    prompt: "Засоби РЕБ.",
    correct: ["Станції радіоподавлення", "Засоби виявлення сигналів", "Засоби впливу на GPS", "Створення перешкод або підміна сигналів"],
    distractors: ["Засоби копання окопів", "Особиста медична аптечка", "Маскувальна фарба для обличчя"],
  },
  {
    prompt: "Дозорне відділення: призначення.",
    correct: ["Ведення спостереження", "Виявлення противника", "Забезпечення безпеки головних сил", "Своєчасне повідомлення про загрози"],
    distractors: ["Організація харчування всієї роти", "Зберігання особистих документів", "Проведення стройового огляду"],
  },
  {
    prompt: "Порядок розміщення особового складу.",
    correct: ["У захисних укриттях", "У розосередженні", "З дотриманням секторів спостереження", "З дотриманням зони відповідальності"],
    distractors: ["У щільній групі на відкритій місцевості", "Без секторів і зон відповідальності", "Тільки біля дороги для швидкого виходу"],
  },
  {
    prompt: "Що входить до складу загальновійськового бою.",
    correct: ["Вогневий вплив", "Маневр силами", "Взаємодія між підрозділами", "Узгоджені дії різних сил і засобів"],
    distractors: ["Тільки індивідуальна стрільба", "Тільки рух без вогневого впливу", "Тільки адміністративна перевірка"],
  },
  {
    prompt: "Види маскування.",
    correct: ["Звукове маскування", "Світлове маскування", "Приглушення шумів і переміщення", "Вимкнення ліхтарів і приховування вогню"],
    distractors: ["Підсилення блиску спорядження", "Свідоме створення шуму біля позиції", "Використання відкритого світла без потреби"],
  },
  {
    prompt: "Довідка за результатами спостереження.",
    correct: ["Дата і час спостереження", "Що саме виявлено", "Напрямок або орієнтир", "Відстань і готовність підрозділу"],
    distractors: ["Особисті оцінки без фактів", "Список цивільних речей", "Прогноз погоди без прив'язки до події"],
  },
  {
    prompt: "Що таке засідка і її призначення.",
    correct: ["Форма бойових дій", "Приховане очікування противника", "Раптове ураження", "Захоплення або знищення противника"],
    distractors: ["Відкрите шикування перед противником", "Рух колоною без охорони", "Планове технічне обслуговування зброї"],
  },
  {
    prompt: "Методи подавання сигналів та команд у бойовій обстановці.",
    correct: ["Голосом", "Жестами", "Світловими сигналами", "Піротехнічними засобами або радіозв'язком"],
    distractors: ["Через відкриті соціальні мережі", "Через випадкових цивільних", "Через довгі неузгоджені повідомлення"],
  },
  {
    prompt: "Дії військовослужбовця при контакті з ворожим БпЛА.",
    correct: ["Негайно замаскуватися", "Припинити рух і зв'язок", "Змінити положення", "Доповісти командиру"],
    distractors: ["Увімкнути ліхтар для позначення себе", "Зібратися щільною групою", "Продовжити відкритий рух без змін"],
  },
  {
    prompt: "Бойові порядки відділення.",
    correct: ["В одну лінію", "Клин", "Колона", "Розосереджений або змішаний порядок"],
    distractors: ["Коло для відпочинку", "Черга біля складу", "Шеренга для стройового огляду"],
  },
  {
    prompt: "Завдання вогневої та маневрової групи.",
    correct: ["Вогнева група: прикриття", "Вогнева група: знищення або подавлення вогневих точок", "Маневрова група: охоплення або обхід", "Маневрова група: штурм або фланговий удар"],
    distractors: ["Вогнева група веде тільки облік майна", "Маневрова група не змінює положення", "Обидві групи діють без взаємодії"],
  },
  {
    prompt: "Протокол доповіді 3D.",
    correct: ["Distance - відстань до противника", "Direction - напрямок", "Description - опис цілі", "Опис містить кількість і тип цілі"],
    distractors: ["Dinner - час прийому їжі", "Dress - форма одягу", "Delay - час відпочинку"],
  },
  {
    prompt: "Протокол доповіді ACE.",
    correct: ["Ammunition - боєприпаси", "Casualties - втрати", "Equipment - стан озброєння або техніки", "Дає оцінку поточного стану підрозділу"],
    distractors: ["Altitude - висота хмар", "Color - колір спорядження", "Entry - місце шикування"],
  },
  {
    prompt: "Дії під обстрілом.",
    correct: ["Впасти і знайти укриття", "Відкрити вогонь у відповідь за командою", "Розосередитись", "Доповісти і за потреби евакуювати поранених"],
    distractors: ["Зібратися в одну щільну групу", "Стояти на відкритому місці", "Самовільно залишити позицію без доповіді"],
  },
  {
    prompt: "Що таке марш і які його види.",
    correct: ["Організоване переміщення підрозділу", "Переміщення до району бойових дій", "Марш у пішому порядку", "Марш на БТТ або комбінований"],
    distractors: ["Нерегульований рух без маршруту", "Тільки стройова підготовка на плацу", "Тільки евакуація поранених"],
  },
  {
    prompt: "Дії при наближенні до населеного пункту або будівлі.",
    correct: ["Перевірка підходів: вікна, двері", "Спостереження за дахами та флангами", "Маскування", "Готовність до ближнього бою"],
    distractors: ["Рух по центру дороги без огляду", "Ігнорування дахів і флангів", "Вхід без прикриття і перевірки"],
  },
  {
    prompt: "Вхід до приміщення і пересування по сходах.",
    correct: ["Перевірка гранатою або оптикою", "Вхід з різних боків і прикриття", "Один прикриває, інший заходить", "Пересування вздовж стін, не по центру"],
    distractors: ["Усі заходять одночасно без прикриття", "Рух по центру сходів без огляду", "Ігнорування дверей і кутів"],
  },
  {
    prompt: "Дії при виявленні ручної гранати поруч.",
    correct: ["Упасти в укриття обличчям донизу", "Відірватися від гранати мінімум на 5 м", "Зберегти зброю", "Повідомити побратимів"],
    distractors: ["Підійти і роздивитися гранату", "Кинути зброю і бігти без попередження", "Зібрати людей навколо гранати"],
  },
  {
    prompt: "Види протипіхотних мін.",
    correct: ["Міна направленої дії: МОН-50", "Осколкові натискні: ПМН-2", "Осколкові розтяжки: ОЗМ-72", "Міни з дистанційним керуванням"],
    distractors: ["ТМ-62 як основна протипіхотна міна", "Магнітна міна для ураження піхоти", "Сигнальна ракета як протипіхотна міна"],
  },
  {
    prompt: "Види протитанкових мін.",
    correct: ["Протитанкова натискна: ТМ-62", "Магнітна міна", "Протитанкова з запалом від натискання чи гусениці", "Міни з невидимим датчиком: магнітні або інфрачервоні"],
    distractors: ["ПМН-2 як основна протитанкова міна", "МОН-50 як протитанкова натискна", "ОЗМ-72 як міна проти гусениць"],
  },
  {
    prompt: "Заходи безпеки при зберіганні ядерної зброї.",
    correct: ["Доступ лише для уповноважених осіб", "Постійна охорона і сигналізація", "Контроль цілісності пломб і сейфів", "Окреме приміщення і жорсткий облік"],
    distractors: ["Вільний доступ для всього особового складу", "Зберігання без пломб і обліку", "Розміщення разом із побутовим майном"],
  },
  {
    prompt: "Правила при подоланні зараженої місцевості.",
    correct: ["Мінімальна зупинка і швидке просування", "Використання ЗЗК або ОЗК", "Дихати через фільтр або ПМГ", "Після виходу провести санітарну обробку"],
    distractors: ["Знімати засоби захисту для швидкості", "Зупинятися без потреби на зараженій ділянці", "Не проводити обробку після виходу"],
  },
];

const state = {
  mode: "cards",
  order: [...openFormBank.keys()],
  index: 0,
  revealed: false,
  checked: false,
  cards: { know: 0, repeat: 0, fail: 0 },
  pick: { correct: 0, done: 0 },
};

const trainerEl = document.querySelector("#trainer");
const progressEl = document.querySelector("#openProgress");
const cardsModeButton = document.querySelector("#cardsModeButton");
const pickModeButton = document.querySelector("#pickModeButton");
const shuffleButton = document.querySelector("#shuffleButton");

function seededRandom(seed) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return function random() {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function shuffle(items, seed = Date.now()) {
  const random = seededRandom(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function currentQuestion() {
  return openFormBank[state.order[state.index]];
}

function setMode(mode) {
  state.mode = mode;
  state.index = 0;
  state.revealed = false;
  state.checked = false;
  cardsModeButton.classList.toggle("active", mode === "cards");
  pickModeButton.classList.toggle("active", mode === "pick");
  render();
}

function render() {
  progressEl.textContent = `${state.index + 1} / ${state.order.length}`;
  if (state.mode === "cards") {
    renderCardMode();
  } else {
    renderPickMode();
  }
}

function renderCardMode() {
  const question = currentQuestion();
  const answer = question.correct.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  trainerEl.innerHTML = `
    <article class="trainer-card">
      <p class="mode-kicker">Картка ${state.index + 1} з ${state.order.length}</p>
      <h2>${escapeHtml(question.prompt)}</h2>
      <div class="answer-panel ${state.revealed ? "" : "hidden-answer"}">
        <ul>${answer}</ul>
      </div>
      <div class="actions">
        <button id="prevButton" type="button">Назад</button>
        <button id="revealButton" type="button" class="primary">${state.revealed ? "Сховати відповідь" : "Показати відповідь"}</button>
        <button id="nextButton" type="button">Далі</button>
      </div>
      <div class="self-grade">
        <button data-grade="know" type="button">Знав</button>
        <button data-grade="repeat" type="button">Повторити</button>
        <button data-grade="fail" type="button">Не знав</button>
      </div>
      <p class="muted">Знав: ${state.cards.know} · Повторити: ${state.cards.repeat} · Не знав: ${state.cards.fail}</p>
    </article>
  `;
}

function renderPickMode() {
  const question = currentQuestion();
  const options = shuffle([...question.correct, ...question.distractors], state.order[state.index] + 1000)
    .map((option, index) => {
      const id = `pick-${state.index}-${index}`;
      return `
        <label class="answer pick-option" for="${id}" data-option="${escapeAttr(option)}">
          <input id="${id}" type="checkbox" value="${escapeAttr(option)}">
          <span>${escapeHtml(option)}</span>
        </label>
      `;
    })
    .join("");

  trainerEl.innerHTML = `
    <article class="trainer-card">
      <p class="mode-kicker">Вибери рівно 4 правильні пункти</p>
      <h2>${escapeHtml(question.prompt)}</h2>
      <div class="pick-list">${options}</div>
      <p id="pickHint" class="muted">Обрано: 0 / 4</p>
      <div class="actions">
        <button id="prevButton" type="button">Назад</button>
        <button id="checkPickButton" type="button" class="primary">Перевірити</button>
        <button id="nextButton" type="button">Далі</button>
      </div>
      <p id="pickScore" class="muted">Правильно пройдено: ${state.pick.correct} з ${state.pick.done}</p>
    </article>
  `;
}

function move(delta) {
  state.index = (state.index + delta + state.order.length) % state.order.length;
  state.revealed = false;
  state.checked = false;
  render();
}

function checkPick() {
  if (state.checked) return;
  const question = currentQuestion();
  const correctSet = new Set(question.correct);
  const selected = [...document.querySelectorAll(".pick-option input:checked")].map((input) => input.value);
  const exact = selected.length === 4 && selected.every((item) => correctSet.has(item));

  document.querySelectorAll(".pick-option").forEach((label) => {
    const option = label.dataset.option;
    const input = label.querySelector("input");
    if (correctSet.has(option)) label.classList.add("correct");
    if (input.checked && !correctSet.has(option)) label.classList.add("wrong");
  });

  state.pick.done += 1;
  if (exact) state.pick.correct += 1;
  state.checked = true;
  document.querySelector("#pickHint").textContent = exact
    ? "Точно. Усі 4 пункти вибрані правильно."
    : "Є помилка. Зеленим підсвічені правильні пункти.";
  document.querySelector("#pickScore").textContent = `Правильно пройдено: ${state.pick.correct} з ${state.pick.done}`;
}

function updatePickHint() {
  const count = document.querySelectorAll(".pick-option input:checked").length;
  const hint = document.querySelector("#pickHint");
  if (hint) hint.textContent = `Обрано: ${count} / 4`;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

cardsModeButton.addEventListener("click", () => setMode("cards"));
pickModeButton.addEventListener("click", () => setMode("pick"));
shuffleButton.addEventListener("click", () => {
  state.order = shuffle([...openFormBank.keys()]);
  state.index = 0;
  state.revealed = false;
  state.checked = false;
  render();
});

trainerEl.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.id === "prevButton") move(-1);
  if (target.id === "nextButton") move(1);
  if (target.id === "revealButton") {
    state.revealed = !state.revealed;
    render();
  }
  if (target.id === "checkPickButton") checkPick();
  if (target.dataset.grade) {
    state.cards[target.dataset.grade] += 1;
    move(1);
  }
});

trainerEl.addEventListener("change", (event) => {
  if (event.target.matches(".pick-option input")) updatePickHint();
});

render();
