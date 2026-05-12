(function(){
  const cards = [];
  let sharedIdx = 0;
  document.querySelectorAll('.price-card[data-prices]').forEach((card) => {
    let prices;
    try { prices = JSON.parse(card.dataset.prices.replace(/'/g,'"')); } catch(e){ return; }
    const numEl = card.querySelector('.price-num');
    const periodEl = card.querySelector('.price-period');
    if(!numEl||!periodEl) return;
    periodEl.removeAttribute('data-i18n');
    numEl.style.transition = 'opacity .35s ease, transform .35s ease';
    periodEl.style.transition = 'opacity .35s ease';
    const state = { prices, numEl, periodEl };
    cards.push(state);
    state.apply = () => {
      const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
      const t = (typeof translations !== 'undefined') ? translations[lang] : null;
      const [key, val] = state.prices[sharedIdx];
      state.periodEl.textContent = (t && t[key]) ? t[key] : key;
      state.numEl.textContent = val;
    };
    state.apply();
  });
  const len = cards[0] ? cards[0].prices.length : 0;
  if (len) setInterval(() => {
    sharedIdx = (sharedIdx + 1) % len;
    cards.forEach(c => {
      c.numEl.style.opacity='0'; c.numEl.style.transform='translateY(-6px)';
      c.periodEl.style.opacity='0';
    });
    setTimeout(() => {
      cards.forEach(c => {
        c.apply();
        c.numEl.style.opacity='1'; c.numEl.style.transform='translateY(0)';
        c.periodEl.style.opacity='1';
      });
    }, 360);
  }, 3800);
  // Hook setLang so changing language re-renders rotating prices
  if (typeof window.setLang === 'function') {
    const orig = window.setLang;
    window.setLang = function(lang){
      const r = orig.apply(this, arguments);
      cards.forEach(c => c.apply());
      return r;
    };
  }
})();
