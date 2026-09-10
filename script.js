/* ==========================================================================
   Елизавета Зайцева — портфолио
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
  tanks: {
    num: '01',
    title: 'Командный штурм × Мир танков',
    category: 'Айдентика / культурный проект',
    year: '2026',
    role: 'Айдентика, мерч, рекламные материалы',
    text: [
      'Эмблема турнира собрана как&nbsp;геральдический знак: жёсткая гексагональная форма, силуэты машин и&nbsp;вспышка выстрела в&nbsp;центре. Внутри системы работает пара «графит + сигнальный оранжевый». Она читается и&nbsp;на&nbsp;тёмном текстиле, и&nbsp;в&nbsp;мелком масштабе на&nbsp;бирке.',
      'Система разошлась на мерч (худи, футболки, кепки, носки, рюкзаки, брелоки), навигацию площадки и рекламные макеты для игровой аудитории.'
    ],
    images: [
      { src: 'assets/projects/tanks-01.jpg', w: 1663, h: 935, alt: 'Лист дизайн-системы «Командного штурма»: эмблема турнира, знаки различия, рамки для карточек, стрелки-шевроны, вспышки и камуфляжные паттерны' },
      { src: 'assets/projects/tanks-02.jpg', w: 1100, h: 1467, alt: 'Рекламный постер «Мира танков» с эмблемой турнира, слоганом «Твой танк ждёт!» и инвайт-кодом' },
      { src: 'assets/projects/tanks-03.jpg', w: 1600, h: 900, alt: 'Раскладка мерча «Командный штурм»: худи, футболка, кепка, носки, брелок и мешок с эмблемой' },
      { src: 'assets/projects/tanks-04.jpg', w: 1600, h: 900, alt: 'Промо турнира «Командный штурм»: пост во «ВКонтакте» на экране телефона и афиша с расписанием, призами и списком команд' }
    ]
  },

  vois: {
    num: '02',
    title: 'VOIS',
    category: 'Упаковка',
    year: '2026',
    role: 'Дизайн упаковки, линейка, допечатная подготовка',
    text: [
      'Линейка различается только цветом и&nbsp;растительным паттерном. Логотип, сетка и&nbsp;положение текста остаются неизменными. Так покупатель находит нужный вкус за&nbsp;секунду, а&nbsp;полка целиком читается как&nbsp;один бренд.',
      'Крупный вертикальный логотип занимает большую часть тубы: он остаётся заметным даже когда на полке видна лишь узкая полоса упаковки.'
    ],
    images: [
      { src: 'assets/projects/vois-01.jpg', w: 1500, h: 1125, alt: 'Три тубы бальзама для губ VOIS: розовая, белая и охристая, с растительным паттерном' },
      { src: 'assets/projects/vois-02.jpg', w: 1024, h: 1024, alt: 'Коробка набора VOIS The Essential Lip Set: синяя, с вертикальным логотипом и перечнем вкусов: вишня, ваниль, масло ши' },
      { src: 'assets/projects/vois-03.jpg', w: 1500, h: 907, alt: 'Развёртка коробки VOIS под вырубной штамп: раскладка панелей, состав каждого бальзама, QR-код и линии биговки' }
    ]
  },

  stihl: {
    num: '03',
    title: 'Каталог STIHL',
    category: 'Editorial / многостраничная вёрстка',
    year: '2023',
    role: 'Дизайн и вёрстка издания, ~400 полос',
    text: [
      'Главная задача была сделать технический справочник читаемым. Каждый разворот держится на&nbsp;одной сетке: колонка описания, блок характеристик с&nbsp;артикулами и&nbsp;линейка пиктограмм. Разделы различаются цветными полями и&nbsp;корешковыми маркерами, поэтому нужная глава находится на&nbsp;ощупь, без&nbsp;оглавления.',
      'Стили абзацев и объектов собраны в единую библиотеку InDesign, поэтому каталог обновляется под новый сезон без пересборки макета.'
    ],
    images: [
      { src: 'assets/projects/stihl-01.jpg', w: 1470, h: 1800, alt: 'Раскрытый каталог STIHL в руках: разворот раздела AP-системы с фотографиями моделей и описаниями' },
      { src: 'assets/projects/stihl-02.jpg', w: 1300, h: 918, alt: 'Разворот каталога STIHL с таблицами технических характеристик' },
      { src: 'assets/projects/stihl-03.jpg', w: 1300, h: 920, alt: 'Разворот каталога STIHL с фотографиями техники и описаниями' },
      { src: 'assets/projects/stihl-04.jpg', w: 1324, h: 936, alt: 'Разворот «Новинки. Главное»: полосный кадр природы, крупный заголовок и сетка из пяти карточек новых моделей со ссылками на страницы' },
      { src: 'assets/projects/stihl-05.jpg', w: 1325, h: 937, alt: 'Разворот раздела «Аккумуляторная техника»: четыре колонки описаний, таблица времени работы на одном заряде и боковой указатель раздела' },
      { src: 'assets/projects/stihl-06.jpg', w: 1152, h: 807, alt: 'Разворот каталога про AP-систему: схема совместимости аккумуляторов, инструментов и адаптеров с подписями моделей' }
    ]
  },

  asiatiq: {
    num: '04',
    title: 'ASIATIQ',
    category: 'Digital / электронное меню',
    year: '2024',
    role: 'Электронное меню, иллюстрации',
    text: [
      'Меню открывается на&nbsp;телефоне и&nbsp;листается одной длинной лентой. Разделы различаются цветом фона: комбо жёлтое, моти розовое. Нужный находишь прокруткой, не&nbsp;возвращаясь в&nbsp;оглавление.',
      'Рисунки сделаны в современном азиатском стиле: мультяшные моти в повязках, иероглифы кистью, волна лапши по нижнему краю. Они задают тон и не дают меню превратиться в прайс-лист из фотографий и цен.'
    ],
    images: [
      { src: 'assets/projects/asiatiq-01.jpg', w: 790, h: 1800, alt: 'Экран меню ASIATIQ «Комбо»: шесть сетов на жёлтом фоне, фотографии блюд и цены на белых ярлычках' },
      { src: 'assets/projects/asiatiq-02.jpg', w: 1000, h: 1600, alt: 'Меню ASIATIQ на экране телефона: раздел «Комбо» листается одной лентой' },
      { src: 'assets/projects/asiatiq-03.jpg', w: 1100, h: 2395, alt: 'Меню десертов моти для ASIATIQ: одиннадцать вкусов с фотографиями и ценой за штуку и за сет' }
    ]
  },

  starlex: {
    num: '05',
    title: 'STARLEX',
    category: 'Event identity / мерч / стенд',
    year: '2026',
    role: 'Оформление стенда, навигация, мерч, полиграфия',
    text: [
      'Стенд построен на&nbsp;рельефной белой поверхности с&nbsp;диагональным рисунком. Это отсылка к&nbsp;гибке листового металла, которой занимается компания. Белое поле работает фоном для&nbsp;продукции и&nbsp;делает красный фирменный блок единственным ярким пятном в&nbsp;зоне.',
      'Кроме конструкции, в проект вошли блок «области применения», схемы линий обработки, печатные материалы для переговорной зоны и мерч для команды на площадке.'
    ],
    images: [
      { src: 'assets/projects/starlex-01.jpg', w: 1600, h: 893, alt: 'Стенд STARLEX с рельефной белой поверхностью: гранёный диагональный рисунок, переговорная зона и блок «области применения»' },
      { src: 'assets/projects/starlex-02.jpg', w: 1400, h: 781, alt: 'Стенд STARLEX: общий вид экспозиции на выставке' },
      { src: 'assets/projects/starlex-03.jpg', w: 1400, h: 781, alt: 'Стенд STARLEX: переговорная зона и информационный блок' },
      { src: 'assets/projects/starlex-04.jpg', w: 1400, h: 1128, alt: 'Мерч STARLEX для команды на площадке' },
      { src: 'assets/projects/starlex-05.jpg', w: 1600, h: 1289, alt: 'Фирменный пакет STARLEX: чёрный, с красным блоком и фотографией лазерного станка' }
    ]
  },

  cards: {
    num: '06',
    title: 'Визитки для салона красоты',
    category: 'Типографический эксперимент',
    year: '2025',
    role: 'Логотип с нуля, визитки, тактильная печать',
    text: [
      'Логотип придуман с&nbsp;нуля: мягкие объёмные формы, набранные под&nbsp;печать выборочным лаком с&nbsp;серебром. Знак читается не&nbsp;столько цветом, сколько отражением и&nbsp;рельефом, а&nbsp;тёмный дизайнерский картон усиливает эффект.',
      'На обороте информация развёрнута на 90°: имя мастера набрано крупно и работает как второй акцент, услуги уходят в тонкую строку по верхнему краю.'
    ],
    images: [
      { src: 'assets/projects/cards-01.jpg', w: 1400, h: 781, alt: 'Стопка визиток студии красоты крупным планом' },
      { src: 'assets/projects/cards-02.jpg', w: 1400, h: 1128, alt: 'Визитки студии красоты: объёмный серебряный логотип на тёмном картоне' },
      { src: 'assets/projects/cards-03.jpg', w: 1400, h: 781, alt: 'Визитки студии красоты: оборотная сторона с контактами' }
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

    return (
      '<p class="modal__index">Кейс ' + p.num + '</p>' +
      '<h2 class="modal__title" id="modalTitle">' + p.title + '</h2>' +
      '<dl class="modal__facts">' +
        '<div class="modal__fact"><dt>Направление</dt><dd>' + p.category + '</dd></div>' +
        '<div class="modal__fact"><dt>Год</dt><dd>' + p.year + '</dd></div>' +
        '<div class="modal__fact"><dt>Роль</dt><dd>' + p.role + '</dd></div>' +
      '</dl>' +
      paragraphs +
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
