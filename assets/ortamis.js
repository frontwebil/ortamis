(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // hero entrance: once fonts are ready (or after a short cap), so lines never jump
  const start = () => requestAnimationFrame(() => root.classList.add('is-in'));
  if (document.fonts && document.fonts.ready) Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 600))]).then(start);
  else start();

  // top bar turns solid once the hero's top has scrolled under it
  const top = document.querySelector('[data-top]');
  const callbar = document.querySelector('.callbar');
  const hero = document.querySelector('.hero');
  const endTel = document.querySelector('.end');
  const onScroll = () => {
    const y = scrollY;
    top.classList.toggle('is-solid', y > 40);
    const pastHero = hero.getBoundingClientRect().bottom < innerHeight * .4;
    const atEnd = endTel.getBoundingClientRect().top < innerHeight * .8;
    callbar.classList.toggle('is-on', pastHero && !atEnd);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // services index: the row's photo follows the pointer (pointer devices only)
  const index = document.querySelector('[data-index]');
  const peek = document.querySelector('[data-peek]');
  if (index && peek && matchMedia('(hover: hover) and (min-width: 901px)').matches) {
    const img = peek.querySelector('img');
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, on = false;
    const loop = () => {
      const k = reduce ? 1 : .18;
      x += (tx - x) * k; y += (ty - y) * k;
      peek.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${on ? 1 : .85})`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 || on ? requestAnimationFrame(loop) : 0;
    };
    index.querySelectorAll('li').forEach(li => {
      const src = li.dataset.img;
      const pre = new Image(); pre.src = src;
      li.addEventListener('pointerenter', e => {
        if (img.getAttribute('src') !== src) img.src = src;
        if (!on) { x = tx = e.clientX + 180; y = ty = e.clientY; }
        on = true; peek.classList.add('is-on');
        if (!raf) raf = requestAnimationFrame(loop);
      });
    });
    index.addEventListener('pointermove', e => { tx = e.clientX + 180; ty = e.clientY; if (!raf) raf = requestAnimationFrame(loop); });
    index.addEventListener('pointerleave', () => { on = false; peek.classList.remove('is-on'); });
  }

  // implant steps: the step in the middle of the screen lights and swaps the sticky photo
  const steps = [...document.querySelectorAll('[data-step]')];
  const imgs = [...document.querySelectorAll('[data-step-img]')];
  if ('IntersectionObserver' in window && steps.length) {
    const set = i => {
      steps.forEach((s, j) => s.classList.toggle('is-on', j === i));
      imgs.forEach((m, j) => m.classList.toggle('is-on', j === i));
    };
    set(0);
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) set(+en.target.dataset.step); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(s => io.observe(s));
  } else root.classList.add('no-io');

  // price filter
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const groups = [...document.querySelectorAll('[data-group]')];
  buttons.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    groups.forEach(g => { g.hidden = !(f === 'all' || g.dataset.group === f); });
  }));
})();
