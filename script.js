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
const PROJECTS = {
  tanks: {
    num: '01',
    title: 'Командный штурм × Мир танков',
    category: 'Айдентика / культурный проект',
    year: '2026',
    role: 'Айдентика, мерч, рекламные материалы',
    text: [
      'Визуальная система для командного события, сочетающая игровую динамику, соревновательный характер и выразительную типографику.',
      'Эмблема турнира собрана как геральдический знак: жёсткая гексагональная форма, силуэты машин и вспышка выстрела в центре. Внутри системы работает пара «графит + сигнальный оранжевый» — она читается и на тёмном текстиле, и в мелком масштабе на бирке.',
      'Система разошлась на мерч (худи, футболки, кепки, носки, рюкзаки, брелоки), навигацию площадки и рекламные макеты для игровой аудитории.'
    ],
    images: [
      { src: 'assets/projects/tanks-04.jpg', alt: 'Лист дизайн-системы «Командного штурма»: эмблема турнира, знаки различия, рамки для карточек, стрелки-шевроны, вспышки и камуфляжные паттерны' },
      { src: 'assets/projects/tanks-02.jpg', alt: 'Рекламный постер «Мира танков» с эмблемой турнира, слоганом «Твой танк ждёт!» и инвайт-кодом' },
      { src: 'assets/projects/tanks-03.jpg', alt: 'Раскладка мерча «Командный штурм»: худи, футболка, кепка, носки, брелок и мешок с эмблемой' }
    ]
  },

  vois: {
    num: '02',
    title: 'VOIS',
    category: 'Упаковка',
    year: '2026',
    role: 'Дизайн упаковки, линейка, допечатная подготовка',
    text: [
      'Упаковочная система для продукта с чистой архитектурой, выразительной цветовой логикой и акцентом на узнаваемость на полке.',
      'Линейка различается только цветом и растительным паттерном — логотип, сетка и положение текста остаются неизменными. Так покупатель находит нужный вкус за секунду, а полка целиком читается как один бренд.',
      'Крупный вертикальный логотип занимает большую часть тубы: он остаётся заметным даже когда на полке видна лишь узкая полоса упаковки.'
    ],
    images: [
      { src: 'assets/projects/vois-01.jpg', alt: 'Три тубы бальзама для губ VOIS: розовая, белая и охристая, с растительным паттерном' },
      { src: 'assets/projects/vois-02.jpg', alt: 'Коробка набора VOIS The Essential Lip Set: синяя, с вертикальным логотипом и перечнем вкусов — вишня, ваниль, масло ши' },
      { src: 'assets/projects/vois-03.jpg', alt: 'Развёртка коробки VOIS под вырубной штамп: раскладка панелей, состав каждого бальзама, QR-код и линии биговки' }
    ]
  },

  stihl: {
    num: '03',
    title: 'STIHL — каталог',
    category: 'Editorial / многостраничная вёрстка',
    year: '2023',
    role: 'Дизайн и вёрстка издания, ~400 полос',
    text: [
      'Дизайн и вёрстка каталога объёмом около 400 страниц: логичная навигация, модульная система и работа с большим объёмом информации.',
      'Основная задача — сделать технический справочник читаемым. Каждый разворот держится на одной сетке: колонка описания, блок характеристик с артикулами и линейка пиктограмм. Разделы различаются цветными полями и корешковыми маркерами, поэтому нужная глава находится на ощупь, без оглавления.',
      'Стили абзацев и объектов собраны в единую библиотеку InDesign — каталог обновляется под новый сезон без пересборки макета.'
    ],
    images: [
      { src: 'assets/projects/stihl-02.jpg', alt: 'Разворот каталога STIHL с таблицами технических характеристик' },
      { src: 'assets/projects/stihl-03.jpg', alt: 'Разворот каталога STIHL с фотографиями техники и описаниями' },
      { src: 'assets/projects/stihl-05.jpg', alt: 'Разворот «Новинки. Главное»: полосный кадр природы, крупный заголовок и сетка из пяти карточек новых моделей со ссылками на страницы' },
      { src: 'assets/projects/stihl-06.jpg', alt: 'Разворот раздела «Аккумуляторная техника»: четыре колонки описаний, таблица времени работы на одном заряде и боковой указатель раздела' }
    ]
  },

  asiatiq: {
    num: '04',
    title: 'ASIATIQ',
    category: 'Digital / электронное меню',
    year: '2024',
    role: 'Электронное и печатное меню, иллюстрации',
    text: [
      'Электронное меню для ресторана с эмоциональной визуальной подачей, удобной структурой и вниманием к гастрономическому образу бренда.',
      'Строгая типографическая сетка соседствует с карандашными иллюстрациями — ветки сливы, горы, панды. Это удерживает меню в азиатской теме, не скатываясь в этнический орнамент.',
      'Одна система работает и на экране, и в печати: цены, размеры порций и составы уложены в единый ритм, который одинаково читается с телефона и с бумажного разворота.'
    ],
    images: [
      { src: 'assets/projects/asiatiq-02.jpg', alt: 'Вертикальный разворот меню ASIATIQ с иллюстрациями и структурой блюд' },
      { src: 'assets/projects/asiatiq-03.jpg', alt: 'Меню ASIATIQ: страница с разделом блюд и фотографиями' },
      { src: 'assets/projects/asiatiq-04.jpg', alt: 'Меню десертов моти для ASIATIQ: одиннадцать вкусов с фотографиями и ценой за штуку и за сет' }
    ]
  },

  starlex: {
    num: '05',
    title: 'STARLEX',
    category: 'Event identity / мерч / стенд',
    year: '2026',
    role: 'Оформление стенда, навигация, мерч, полиграфия',
    text: [
      'Визуальная система для форума: оформление стенда, мерч, навигация и набор коммуникационных материалов.',
      'Стенд построен на рельефной белой поверхности с диагональным рисунком — отсылка к гибке листового металла, которой занимается компания. Белое поле работает фоном для продукции и делает красный фирменный блок единственным ярким пятном в зоне.',
      'Помимо конструкции — блок «области применения», схемы линий обработки, печатные материалы для переговорной зоны и мерч для команды на площадке.'
    ],
    images: [
      { src: 'assets/projects/starlex-02.jpg', alt: 'Стенд STARLEX: общий вид экспозиции на выставке' },
      { src: 'assets/projects/starlex-03.jpg', alt: 'Стенд STARLEX: переговорная зона и информационный блок' },
      { src: 'assets/projects/starlex-04.jpg', alt: 'Мерч STARLEX для команды на площадке' },
      { src: 'assets/projects/starlex-05.jpg', alt: 'Печатные материалы STARLEX для выставочной зоны' }
    ]
  },

  cards: {
    num: '06',
    title: 'Визитки для салона красоты',
    category: 'Типографический эксперимент',
    year: '2025',
    role: 'Логотип, визитки, тактильная печать',
    text: [
      'Серия визиток, построенная на выразительной типографике, тактильности и нестандартном ритме информации.',
      'Логотип набран мягкими объёмными формами и напечатан выборочным лаком с серебром — знак читается не столько цветом, сколько отражением и рельефом. Тёмный дизайнерский картон усиливает эффект.',
      'На обороте информация развёрнута на 90°: имя мастера набрано крупно и работает как второй акцент, услуги уходят в тонкую строку по верхнему краю.'
    ],
    images: [
      { src: 'assets/projects/cards-02.jpg', alt: 'Визитки студии красоты: объёмный серебряный логотип на тёмном картоне' },
      { src: 'assets/projects/cards-03.jpg', alt: 'Визитки студии красоты: оборотная сторона с контактами' },
      { src: 'assets/projects/cards-04.jpg', alt: 'Стопка визиток студии красоты крупным планом' }
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

    revealTargets.forEach(function (el) { io.observe(el); });
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

    const gallery = p.images.map(function (img) {
      return '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">';
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
      '<div class="modal__gallery">' + gallery + '</div>'
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
