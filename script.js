/* ==========================================================================
   Лиза Зайцева, портфолио
   script.js  —  ванильный JS, без библиотек и сборки.

   Содержание:
     01. ДАННЫЕ КЕЙСОВ  ← ВСЕ ПУТИ К КАРТИНКАМ И ТЕКСТЫ ПРОЕКТОВ ЗДЕСЬ
     02. Общие утилиты
     03. Шапка при скролле
     04. Мобильное меню
     05. Reveal-анимации
     06. Параллакс облаков
     07. Приглушение неба в секции работ
     08. Заполнение линии процесса
     09. Модальное окно кейса
   ========================================================================== */

/* 01. ДАННЫЕ КЕЙСОВ =======================================================
   Чтобы заменить работу: положите файлы в assets/projects/ и поправьте пути
   и тексты ниже. Ключ объекта совпадает с data-project у кнопки в index.html.
   ========================================================================= */
/* Версия картинок кейсов. Нужна из-за того, что файлы в assets/projects
   переименованы: адреса остались прежними, а содержимое под ними поменялось.
   Браузер об этом не знает, а в _headers для /assets/* стоит кеш на год
   с immutable — без метки версии вернувшийся посетитель увидел бы старые
   кадры и не обновил бы их никогда.

   Поднимайте число, если переименовываете или заменяете файлы в
   assets/projects под теми же именами. Добавление новых файлов с новыми
   именами метки не требует. */
const IMG_V = '3';

const PROJECTS = {
  emra: {
    num: '02',
    cover: { src: 'assets/projects/emra-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса EMRA: флакон CRYO STORM и постер на ледяной поверхности, рядом визитка с монограммой E' },
    title: 'EMRA',
    category: 'Брендбук / фирменный стиль',
    year: '2026',
    role: 'Концепция, дизайн, вёрстка документа, подготовка файлов к печати',
    text: [
      'EMRA делает пасты, пенки, щётки и&nbsp;аксессуары для&nbsp;ухода за&nbsp;полостью рта и&nbsp;держится выше масс-маркета, не&nbsp;играя при&nbsp;этом в&nbsp;люкс. Мне нужно было собрать визуальный язык, который читается и&nbsp;на&nbsp;упаковке, и&nbsp;на&nbsp;сайте, и&nbsp;на&nbsp;мелком носителе вроде визитки.',
      'В&nbsp;основе один приём: крио-волна проходит сквозь продукт и&nbsp;крупную типографику. Она появляется на&nbsp;макете ровно один раз, поэтому даже плотные страницы остаются спокойными. Для&nbsp;фонов я&nbsp;сделала два бесшовных паттерна, волну и&nbsp;иней, чтобы носителям было чем дышать без&nbsp;дополнительных эффектов.',
      'Получилось 37 страниц в&nbsp;десяти разделах: от&nbsp;позиционирования, логотипа и&nbsp;монограммы до&nbsp;tone of voice, носителей и&nbsp;digital. Палитра описана в&nbsp;HEX, CMYK и&nbsp;с&nbsp;ориентиром по&nbsp;Pantone, контраст всех текстовых пар проверен по&nbsp;WCAG. К&nbsp;документу идут готовые файлы: визитка к&nbsp;печати и&nbsp;её редактируемая версия, бланк в&nbsp;PDF и&nbsp;docx, плитки паттернов и&nbsp;мастер&#8209;слайды презентации.'
    ],
    images: [
      { src: 'assets/projects/emra-01.jpg', w: 1400, h: 1096, alt: 'Обложка брендбука EMRA и постер пенки CRYO STORM: флакон, сквозь который проходит голубая волна' },
      { src: 'assets/projects/emra-02.jpg', w: 1400, h: 1050, alt: 'Страница брендбука EMRA «Логотип, цвет и типографика»: вордмарк, монограмма E, шесть цветов палитры и начертания шрифта' },
      { src: 'assets/projects/emra-03.jpg', w: 1400, h: 1050, alt: 'Страница брендбука EMRA «Один приём на весь макет»: ключевой визуал, первый экран сайта и паттерны «волна» и «иней»' },
      { src: 'assets/projects/emra-04.jpg', w: 1400, h: 1050, alt: 'Страница брендбука EMRA «От сайта до визитки»: визитка, сити-формат и POS на полке, ниже миниатюры всех разделов' }
    ]
  },

  multplast: {
    num: '01',
    cover: { src: 'assets/projects/multplast-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса «Мультпласт»: брендбук, куртка монтажной службы и лист с паттернами на рёбрах полипропиленовой ёмкости' },
    title: 'Мультпласт',
    category: 'Брендбук / архитектура бренда',
    year: '2026',
    role: 'Фирменный элемент, паттерны, брендбук, носители',
    text: [
      'Мультпласт производит септики, станции очистки и&nbsp;ёмкости из&nbsp;полипропилена и&nbsp;выпускает три товарных знака: ТЕРМИТ, ЭРГОБОКС и&nbsp;ПЕЛИКАН. Задача была собрать производителя и&nbsp;три марки в&nbsp;одну систему и&nbsp;при&nbsp;этом сохранить узнаваемость каждой.',
      'Фирменный элемент взят из&nbsp;самого изделия. Корпуса отливают во&nbsp;вращающейся печи, форму им&nbsp;держат рёбра жёсткости. Из&nbsp;рёбер выросли уголок и&nbsp;три стрелки, которые работают со&nbsp;всеми четырьмя знаками. Паттерны тоже сняты с&nbsp;корпусов: у&nbsp;каждой марки свой рисунок и&nbsp;своя шкала из&nbsp;пяти оттенков.',
      'В&nbsp;брендбуке 52 страницы: логотипы и&nbsp;охранное поле, цвет и&nbsp;шрифты, паттерны, иконки, подпись производителя на&nbsp;товарных знаках и&nbsp;носители от&nbsp;деловой документации до&nbsp;выставок, транспорта и&nbsp;спецодежды. Клиент получил его в&nbsp;PDF и&nbsp;в&nbsp;Figma, где тексты редактируются, а&nbsp;логотипы, стрелки и&nbsp;колонтитулы собраны в&nbsp;компоненты.'
    ],
    images: [
      { src: 'assets/projects/multplast-01.jpg', w: 1800, h: 1012, alt: 'Обложка брендбука «Мультпласт 2.0» на тёмно-синем фоне цеха с логотипами Multplast, ТЕРМИТ, ЭРГОБОКС и Пеликан' },
      { src: 'assets/projects/multplast-02.jpg', w: 1800, h: 1012, alt: 'Фирменный элемент «Стрелки из рёбер жёсткости»: уголок и три стрелки рядом с каждым из четырёх знаков' },
      { src: 'assets/projects/multplast-03.jpg', w: 1800, h: 1012, alt: 'Пять паттернов, снятых с корпусов изделий, и шкалы из пяти оттенков для каждой марки' },
      { src: 'assets/projects/multplast-04.jpg', w: 1800, h: 1012, alt: 'Носители «Мультпласт»: фургон, каталог продукции, сайт на ноутбуке, куртка монтажной службы и фирменный пакет' }
    ]
  },

  laktazar: {
    num: '06',
    cover: { src: 'assets/projects/laktazar-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса «Лактазар»: телефон с карточкой товара для Ozon, карточки серии и коробка на синем фоне' },
    title: 'Лактазар',
    category: 'Маркетплейсы / карточки товара',
    year: '2026',
    role: 'Концепция серии, дизайн карточек, ретушь',
    text: [
      'Концепт серии карточек для&nbsp;Ozon на&nbsp;биологически активную добавку Лактазар. Шесть изображений 900&nbsp;×&nbsp;1200&nbsp;px, и&nbsp;каждое отвечает на&nbsp;один вопрос покупателя: что это за&nbsp;товар, зачем он нужен, как работает, где встречается лактоза, как принимать и&nbsp;сколько капсул в&nbsp;упаковке.',
      'Рамки были жёсткие: главное фото без&nbsp;рекламных надписей, никаких цен и&nbsp;призывов к&nbsp;покупке, а&nbsp;надпись «БАД. Не&nbsp;является лекарственным средством» занимает не&nbsp;меньше 10% площади каждой карточки. Все факты я&nbsp;взяла из&nbsp;листка-вкладыша, цвета с&nbsp;упаковки, чтобы карточки выглядели её продолжением. Шрифт Onest, одна гарнитура на&nbsp;всю серию.',
      '«Лактазу» и&nbsp;«лактозу» легко перепутать, поэтому я&nbsp;подсветила букву, которой они отличаются. Верх карточки оставила свободным под&nbsp;кнопки Ozon и&nbsp;проверила читаемость на&nbsp;телефоне и&nbsp;компьютере. Сцены сгенерированы нейросетью и&nbsp;доработаны вручную в&nbsp;Photoshop, макеты собраны в&nbsp;Figma на&nbsp;компонентах и&nbsp;стилях.'
    ],
    images: [
      { src: 'assets/projects/laktazar-01.jpg', w: 1616, h: 1264, alt: 'Веер карточек Лактазар для Ozon на синем фоне: главное фото, «Как работает» и «Где прячется лактоза»' },
      { src: 'assets/projects/laktazar-02.jpg', w: 1800, h: 1350, alt: 'Серия из шести карточек Лактазар: главное фото, зачем, как работает, где лактоза, как принимать, упаковка' },
      { src: 'assets/projects/laktazar-03.jpg', w: 1800, h: 1350, alt: 'Визуальная система карточек: цвета с коробки, подсвеченная буква в словах «лактаза» и «лактоза», шрифт Onest' },
      { src: 'assets/projects/laktazar-04.jpg', w: 1800, h: 1350, alt: 'Карточки Лактазар на экранах двух телефонов: свободный верх под кнопки маркетплейса и крупный текст' }
    ]
  },

  starlex: {
    num: '04',
    cover: { src: 'assets/projects/starlex-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса STARLEX: стенд «Старлекс групп» с красной волной, на переднем плане рука с белым пакетом' },
    title: 'STARLEX',
    category: 'Выставочный стенд / мерч',
    year: '2026',
    role: 'Оформление стенда, навигация, мерч, полиграфия',
    text: [
      '«Старлекс групп» поставляет оборудование для&nbsp;обработки листового металла. Для&nbsp;выставки нужен был стенд, на&nbsp;котором продукция и&nbsp;переговорная зона не&nbsp;теряются в&nbsp;шуме павильона. Главную стену я&nbsp;проработала в&nbsp;трёх вариантах: рельефный диагональный рисунок как&nbsp;отсылка к&nbsp;гибке металла, тонкие красные линии и&nbsp;крупная волна.',
      'Во&nbsp;всех вариантах красный блок с&nbsp;логотипом остаётся единственным ярким пятном и&nbsp;виден из&nbsp;прохода. Боковая стена отдана под&nbsp;«Области применения» и&nbsp;схемы автоматических линий, чтобы о&nbsp;технике можно было рассказать, не&nbsp;открывая каталог.',
      'Кроме конструкции, в&nbsp;проект вошли футболки для&nbsp;команды на&nbsp;площадке и&nbsp;фирменные пакеты в&nbsp;чёрном и&nbsp;белом вариантах с&nbsp;лазерной головкой и&nbsp;красным углом.'
    ],
    images: [
      { src: 'assets/projects/starlex-stand-01.jpg', w: 1800, h: 1004, alt: 'Стенд STARLEX с рельефной белой стеной: гранёный диагональный рисунок, переговорная зона и блок «Области применения»' },
      { src: 'assets/projects/starlex-stand-02.jpg', w: 1800, h: 1004, alt: 'Вариант стенда STARLEX с тонкими красными линиями на белой стене и деревянными столами переговорной зоны' },
      { src: 'assets/projects/starlex-stand-03.jpg', w: 1800, h: 1004, alt: 'Вариант стенда STARLEX с крупной красной волной на главной стене' },
      { src: 'assets/projects/starlex-stand-04.jpg', w: 1800, h: 1450, alt: 'Сотрудник в белой футболке STARLEX с красным линейным рисунком в офисе' },
      { src: 'assets/projects/starlex-stand-05.jpg', w: 1800, h: 1450, alt: 'Белый фирменный пакет STARLEX с лазерной головкой, QR-кодом и красным углом' },
      { src: 'assets/projects/starlex-stand-06.jpg', w: 1800, h: 1450, alt: 'Чёрный фирменный пакет STARLEX с лазерной головкой и красным углом на фоне выставки' }
    ]
  },

  stihl: {
    num: '05',
    cover: { src: 'assets/projects/stihl-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса STIHL: раскрытый каталог в руках над тёмно-зелёной поверхностью' },
    title: 'Каталог STIHL',
    category: 'Editorial / многостраничная вёрстка',
    year: '2023',
    role: 'Дизайн и вёрстка издания, ~400 полос',
    text: [
      'Каталог STIHL примерно на&nbsp;400 полос: от&nbsp;аккумуляторной техники до&nbsp;сувенирной продукции. Главная задача была сделать технический справочник читаемым, чтобы в&nbsp;нём было одинаково удобно и&nbsp;выбирать модель, и&nbsp;сверять артикулы.',
      'Каждый разворот держится на&nbsp;одной сетке: колонка описания, блок характеристик с&nbsp;артикулами и&nbsp;линейка пиктограмм. Разделы открываются полосными фотографиями и&nbsp;различаются цветными полями и&nbsp;корешковыми маркерами, поэтому нужная глава находится на&nbsp;ощупь, без&nbsp;оглавления.',
      'Стили абзацев и&nbsp;объектов собраны в&nbsp;единую библиотеку InDesign, поэтому каталог обновляется под&nbsp;новый сезон без&nbsp;пересборки макета.'
    ],
    images: [
      { src: 'assets/projects/stihl-catalog-01.jpg', w: 1470, h: 1264, alt: 'Раскрытый каталог STIHL в руках на зелёном фоне: разворот раздела «АК-система»' },
      { src: 'assets/projects/stihl-catalog-02.jpg', w: 1400, h: 989, alt: 'Разворот-оглавление каталога STIHL: полосный кадр «Время для работы на природе» и оранжевое поле с разделами' },
      { src: 'assets/projects/stihl-catalog-03.jpg', w: 1400, h: 991, alt: 'Разворот «Аккумуляторная AP-система»: мотопила MSA 300 C-O с выносками и режимами работы' },
      { src: 'assets/projects/stihl-catalog-04.jpg', w: 1324, h: 936, alt: 'Разворот «Новинки. Главное»: полосный кадр природы, крупный заголовок и сетка из пяти карточек новых моделей' },
      { src: 'assets/projects/stihl-catalog-05.jpg', w: 1325, h: 937, alt: 'Разворот раздела «Аккумуляторная техника»: четыре колонки описаний и таблица времени работы на одном заряде' },
      { src: 'assets/projects/stihl-06.jpg', w: 1152, h: 807, alt: 'Разворот каталога про AP-систему: схема совместимости аккумуляторов, инструментов и адаптеров с подписями моделей' }
    ]
  },

  vois: {
    num: '03',
    cover: { src: 'assets/projects/vois-cover.jpg', w: 2000, h: 1493, alt: 'Обложка кейса VOIS: коробка The Essential Lip Set и три тубы бальзама на сиреневом фоне с тенями листьев' },
    title: 'VOIS',
    category: 'Упаковка',
    year: '2026',
    role: 'Дизайн упаковки, линейка, допечатная подготовка',
    text: [
      'Линейка бальзамов для&nbsp;губ из&nbsp;трёх вкусов и&nbsp;подарочный набор The Essential Lip Set. Тубы должны были отличаться друг от&nbsp;друга с&nbsp;первого взгляда, а&nbsp;полка при&nbsp;этом читаться как&nbsp;один бренд.',
      'Поэтому вкусы различаются только цветом и&nbsp;растительным паттерном: вишня, ваниль, масло ши. Логотип, сетка и&nbsp;положение текста не&nbsp;меняются. Крупный вертикальный логотип занимает большую часть тубы и&nbsp;остаётся заметным, даже когда на&nbsp;полке видна лишь узкая полоса упаковки.',
      'Для&nbsp;набора я&nbsp;подготовила развёртку коробки под&nbsp;вырубной штамп: раскладку панелей, состав каждого бальзама, QR-код и&nbsp;линии биговки.'
    ],
    images: [
      { src: 'assets/projects/vois-pack-01.jpg', w: 993, h: 676, alt: 'Набор VOIS: синяя коробка The Essential Lip Set и три тубы бальзама, розовая, охристая и белая' },
      { src: 'assets/projects/vois-pack-02.jpg', w: 1500, h: 1125, alt: 'Три тубы бальзама для губ VOIS: розовая, белая и охристая, с растительным паттерном' },
      { src: 'assets/projects/vois-pack-03.jpg', w: 1024, h: 1024, alt: 'Коробка набора VOIS The Essential Lip Set: синяя, с вертикальным логотипом и перечнем вкусов' },
      { src: 'assets/projects/vois-03.jpg', w: 1500, h: 907, alt: 'Развёртка коробки VOIS под вырубной штамп: раскладка панелей, состав каждого бальзама, QR-код и линии биговки' }
    ]
  }
};

/* 02. ОБЩИЕ УТИЛИТЫ ======================================================= */
(function () {
  'use strict';

  // Класс js теперь стоит прямо в разметке (<html class="js">) — иначе между
  // отрисовкой стилей и загрузкой этого файла мигало неанимированное
  // содержимое. Здесь оставляем страховку на случай, если атрибут потеряют.
  document.documentElement.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile     = window.matchMedia('(max-width: 760px)');

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.prototype.slice.call((ctx || document).querySelectorAll(sel));

  /* 03. ШАПКА ПРИ СКРОЛЛЕ ================================================= */
  const header = $('#header');
  function updateHeader() {
    header.classList.toggle('is-stuck', window.scrollY > 40);
    // Передний слой облаков включается за первым экраном
    if (skyFront) {
      skyFront.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.6);
    }
  }

  /* 04. МОБИЛЬНОЕ МЕНЮ ==================================================== */
  const menuToggle = $('#menuToggle');
  const nav        = $('#nav');

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('is-menu-open', open);
  }

  menuToggle.addEventListener('click', function () {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  // Закрываем меню после перехода по ссылке
  $$('a', nav).forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  /* 05. REVEAL-АНИМАЦИИ =================================================== */
  const revealTargets = $$('[data-reveal], [data-reveal-img]');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    // Без анимации — просто показываем всё сразу
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);       // анимация проигрывается один раз
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    // Всё, что попадает в первый экран, показываем сразу, не дожидаясь
    // прокрутки. Условия наблюдателя (отступ снизу 12% плюс порог 8%)
    // рассчитаны на блоки, которые въезжают снизу: элемент у нижнего края
    // в них не проходит. Кнопки первого экрана из-за этого оставались
    // невидимыми до первой прокрутки — а прокручивать, не увидев их,
    // никто не станет.
    revealTargets.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-visible');
      } else {
        io.observe(el);
      }
    });
  }

  /* 06. ПАРАЛЛАКС ОБЛАКОВ ===============================================
     Слои двигаются не «на скорость», а по нормализованному прогрессу
     страницы: каждый проходит заданный путь в vh от начала до конца скролла.
     Так облака остаются в кадре на всём пути, а не улетают на первом экране.
     ====================================================================== */
  // Стартовая высота и длина пути каждого слоя заданы в разметке
  // (data-start / data-travel в vh) — так слои легко переставлять,
  // не трогая скрипт. Видимость на мобильных регулирует CSS.
  // Только заднее небо: облака переднего слоя намеренно неподвижны.
  const clouds = $$('#sky .cloud').map(function (el) {
    return {
      el:     el,
      start:  parseFloat(el.dataset.start)  || 0,
      travel: parseFloat(el.dataset.travel) || 320
    };
  });

  // Облака на обложках кейсов: каждое привязано к своей обложке и заплывает
  // на неё, пока обложка проходит через экран.
  const coverClouds = $$('.work__cloud');

  const runner    = $('#processRunner');

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      // try/finally обязателен: если что-то бросит исключение, флаг ticking
      // останется true и обработка скролла умрёт до перезагрузки страницы.
      try {
        updateHeader();
        updateProcess();

        // Сложный параллакс отключён при reduced-motion и на мобильных
        if (!reduceMotion.matches && !isMobile.matches) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          const p   = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;

          clouds.forEach(function (c) {
            const y = c.start - c.travel * p;
            c.el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'vh,0)';
          });

          // 0 — обложка только показалась снизу, 1 — облако заплыло.
          // Множитель 1.7: облако доходит до места, когда обложка в середине
          // экрана, и дальше стоит, а не уплывает обратно.
          const vh = window.innerHeight;
          coverClouds.forEach(function (el) {
            const r = el.parentNode.getBoundingClientRect();
            const t = Math.min(Math.max((vh - r.top) / (vh + r.height) * 1.7, 0), 1);
            el.style.setProperty('--t', t.toFixed(3));
          });

        }

      } finally {
        ticking = false;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* 07. ПРИГЛУШЕНИЕ НЕБА В СЕКЦИИ РАБОТ ===================================
     В зоне проектов облака уходят на второй план — важнее фотографии. */
  const sky      = $('#sky');
  const skyFront = $('.sky--front');
  const worksSec = $('#works');

  if (sky && worksSec && 'IntersectionObserver' in window) {
    const dimObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        sky.classList.toggle('is-dim', entry.isIntersecting);
      });
    }, { rootMargin: '-15% 0px -15% 0px' });
    dimObserver.observe(worksSec);
  }

  /* 09. ЗАПОЛНЕНИЕ ЛИНИИ ПРОЦЕССА ========================================= */
  const track = $('#processTrack');
  const steps = $$('.step');

  let lastProgress = 0;
  let runStopTimer = null;

  function updateProcess() {
    if (!track) return;
    const r  = track.getBoundingClientRect();
    const vh = window.innerHeight;

    // 0 — блок только показался снизу, 1 — прошёл середину экрана
    let p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
    p = Math.min(Math.max(p, 0), 1);
    track.style.setProperty('--progress', p.toFixed(3));

    // Позицию бегуна задаём здесь, а не в CSS: значение из CSS-переменной
    // не запускает transition и залипает на прошлом кадре.
    if (runner) runner.style.left = (p * 100).toFixed(2) + '%';

    steps.forEach(function (step, i) {
      step.classList.toggle('is-reached', p >= (i + 0.5) / steps.length);
    });

    // Человечек «бежит», только пока заполнение реально меняется:
    // на паузе он замирает в первой позе.
    if (runner && !reduceMotion.matches) {
      if (Math.abs(p - lastProgress) > 0.0006) {
        runner.classList.add('is-running');
        window.clearTimeout(runStopTimer);
        runStopTimer = window.setTimeout(function () {
          runner.classList.remove('is-running');
        }, 260);
      }
      lastProgress = p;
    }
  }


  /* 09б. КНОПКИ ЛЕНТЫ «ЕЩЁ РАБОТЫ» =======================================
     Колесо мыши ленту не листает, поэтому для мыши есть стрелки. Шаг —
     четыре пятых ширины ленты: последний видимый кадр остаётся на экране
     и служит опорой, откуда продолжать смотреть. */
  const stripTrack = $('#stripTrack');
  const stripBtns  = $$('.strip__btn');

  function updateStripBtns() {
    if (!stripTrack) return;
    const max = stripTrack.scrollWidth - stripTrack.clientWidth - 2;
    stripBtns.forEach(function (b) {
      b.disabled = b.dataset.dir === '-1' ? stripTrack.scrollLeft <= 2 : stripTrack.scrollLeft >= max;
    });
  }

  if (stripTrack) {
    stripBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        stripTrack.scrollBy({
          left: Number(b.dataset.dir) * stripTrack.clientWidth * 0.8,
          behavior: reduceMotion.matches ? 'auto' : 'smooth'
        });
      });
    });
    stripTrack.addEventListener('scroll', updateStripBtns, { passive: true });
    window.addEventListener('resize', updateStripBtns, { passive: true });
    updateStripBtns();
  }


  /* 10. МОДАЛЬНОЕ ОКНО КЕЙСА ==============================================
     Закрытие: кнопка, клик по подложке, Escape. Фокус удерживается внутри
     окна и возвращается на кнопку, с которой его открыли. */
  const modal     = $('#modal');
  const modalBody = $('#modalBody');
  const dialog    = $('.modal__dialog', modal);
  let lastFocused = null;

  function renderProject(key) {
    const p = PROJECTS[key];
    if (!p) return '';

    const paragraphs = p.text.map(function (t) {
      return '<p class="modal__text">' + t + '</p>';
    }).join('');

    // Кадры укладываются рядами: ряд занимает всю ширину, а внутри ряда у всех
    // кадров одинаковая высота. Ширины раздаются пропорционально пропорциям
    // самих изображений (flex-grow: --ar в стилях), поэтому ничего не режется
    // и пустых мест не остаётся.
    //
    // Сколько кадров в ряду:
    //   горизонтальные — не больше двух. Три разворота в ряд дают по 250px
    //   высоты каждый, вёрстка в них уже нечитаема и кадры выглядят сплющенными;
    //   вертикальные — можно по три: они узкие и рядом стоят естественно;
    //   при нечётном числе первый кадр идёт во всю ширину ведущим. Ведущим
    //   он ставится в начало, а не в конец: тяжёлый кадр внизу перевешивает
    //   страницу, а сверху читается как открывающий.
    const items = p.images.map(function (img) {
      return { img: img, ar: (img.w && img.h) ? img.w / img.h : 1.5 };
    });
    const rows = [];

    if (items.length && items.every(function (it) { return it.ar < 1; })) {
      for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
    } else {
      let rest = items.slice();
      if (rest.length % 2 === 1 && rest.length > 1) {
        let leadAt = 0;
        // вертикальный кадр во всю ширину вытянулся бы на два экрана,
        // поэтому ведущим берём самый широкий из имеющихся
        if (rest[0].ar < 1.1) {
          rest.forEach(function (it, i) { if (it.ar > rest[leadAt].ar) leadAt = i; });
        }
        rows.push([rest[leadAt]]);
        rest = rest.filter(function (_, i) { return i !== leadAt; });
      }
      for (let i = 0; i < rest.length; i += 2) rows.push(rest.slice(i, i + 2));
    }

    const gallery = rows.map(function (r) {
      const cells = r.map(function (c) {
        return '<img src="' + c.img.src + '?v=' + IMG_V + '" alt="' + c.img.alt + '"' +
               (c.img.w ? ' width="' + c.img.w + '" height="' + c.img.h + '"' : '') +
               ' loading="lazy" style="--ar:' + c.ar.toFixed(4) + '">';
      }).join('');
      return '<div class="modal__row">' + cells + '</div>';
    }).join('');

    // Кейс открывается обложкой, а не текстом: работа видна сразу, ещё до
    // чтения. Ниже две колонки — факты слева, рассказ справа, — чтобы текст
    // не шёл узкой полосой с пустой половиной окна.
    const cover = p.cover
      ? '<figure class="modal__cover">' +
          '<div class="work__clip"><img src="' + p.cover.src + '" alt="' + p.cover.alt + '"' +
          ' width="' + p.cover.w + '" height="' + p.cover.h + '"></div>' +
          '<svg class="work__frame" aria-hidden="true" focusable="false"><use href="#cover-frame-a"/></svg>' +
        '</figure>'
      : '';

    return (
      cover +
      '<header class="modal__head">' +
        '<p class="modal__index">Кейс ' + p.num + '</p>' +
        '<h2 class="modal__title" id="modalTitle">' + p.title + '</h2>' +
      '</header>' +
      '<div class="modal__layout">' +
        '<dl class="modal__facts">' +
          '<div class="modal__fact"><dt>Направление</dt><dd>' + p.category + '</dd></div>' +
          '<div class="modal__fact"><dt>Год</dt><dd>' + p.year + '</dd></div>' +
          '<div class="modal__fact modal__fact--wide"><dt>Роль</dt><dd>' + p.role + '</dd></div>' +
        '</dl>' +
        '<div class="modal__story">' + paragraphs + '</div>' +
      '</div>' +
      (gallery ? '<div class="modal__grid">' + gallery + '</div>' : '')
    );
  }

  function openModal(key, trigger) {
    lastFocused = trigger || document.activeElement;
    modalBody.innerHTML = renderProject(key);
    modal.hidden = false;

    // Блокируем прокрутку фона, компенсируя ширину скроллбара
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (sbw > 0) document.body.style.paddingRight = sbw + 'px';

    // Форсируем reflow, чтобы сработал transition открытия
    void modal.offsetWidth;
    modal.classList.add('is-open');
    dialog.scrollTop = 0;
    dialog.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    const finish = function () {
      modal.hidden = true;
      modalBody.innerHTML = '';
      if (lastFocused) lastFocused.focus();
    };

    if (reduceMotion.matches) finish();
    else window.setTimeout(finish, 380);
  }

  $$('[data-project]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-project'), btn);
    });
  });

  $$('[data-close]', modal).forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (modal.hidden) {
      // Escape закрывает и мобильное меню
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        menuToggle.focus();
      }
      return;
    }

    if (e.key === 'Escape') { closeModal(); return; }

    // Удерживаем фокус внутри окна
    if (e.key !== 'Tab') return;
    const focusable = $$(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      dialog
    ).filter(function (el) { return el.offsetParent !== null; });

    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  /* Первый расчёт при загрузке */
  updateHeader();
  updateProcess();
  onScroll();
})();
