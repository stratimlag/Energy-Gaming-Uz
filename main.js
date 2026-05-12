  // zone tabs
  function showZone(zone) {
    document.querySelectorAll('.zone-specs').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id^="tab-"]').forEach(btn => {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--neon-blue)';
    });
    const el = document.getElementById('zone-' + zone);
    if (el) { el.style.display = 'block'; el.classList.add('visible'); }
    const tab = document.getElementById('tab-' + zone);
    if (tab) { tab.style.background = 'var(--neon-blue)'; tab.style.color = 'var(--bg-void)'; }
  }

  // ===================== i18n =====================
  const translations = {
    en: {
      nav_about: 'About', nav_pricing: 'Pricing', nav_setup: 'Setup',
      nav_events: 'Events', nav_contact: 'Contact', nav_book: 'Book Now',
      about_label: 'About Us',
      about_title: 'Where Tashkent comes to <span class="accent">game</span>',
      pricing_label: 'Pricing Plans',
      pricing_title: 'Pick your <span class="accent">zone</span>',
      setup_label: 'What\'s inside',
      setup_title: 'What\'s in our <span class="accent">PCs</span>',
      contact_label: 'Find Us',
      contact_title: 'Drop <span class="accent">by</span>',
      hero_badge: 'Gaming café in Beruniy, Tashkent',
      hero_line1: 'Level Up', hero_line2: 'Your Game',
      hero_sub: 'We opened Energy Gaming in Huvaydo because Tashkent needed a real spot to play. Fast PCs, good chairs, open all night. Bring your squad.',
      hero_book: 'Book a PC', hero_prices: 'View Prices',
      stat_pcs: 'Gaming PCs', stat_hz: 'Hz Monitors', stat_mb: 'Mbps Internet',
      book_title: 'Book a PC', book_name: 'Full Name', book_name_ph: 'Your name',
      book_phone: 'Phone / Telegram', book_pc_type: 'Zone', book_duration: 'Duration',
      book_people: 'Number of People',
      book_datetime: 'Preferred Date & Time', book_confirm: 'Confirm Booking',
      pc_abcd: 'Zone A,B,C,D — 15,000 UZS/hr', pc_twins: 'Twins A/B · VIP — 20,000 UZS/hr', pc_pro360: 'Pro 360Hz — 25,000 UZS/hr', pc_pro500: 'Pro 500Hz — 30,000 UZS/hr',
      dur_1: '1 Hour', dur_2: '3 Hours', dur_3: '5 Hours', dur_4: 'Night (00:00–08:00)',
      contact_location: 'Location', contact_phone: 'Phone',
      join_now: 'Join Now',
      tourney_title: 'Register for Tournament', tourney_name: 'Team / Player Name',
      tourney_players: 'Number of Players', tourney_register: 'Register Now',
      toast_booked: '✓ BOOKING CONFIRMED! We\'ll contact you soon.',
      toast_joined: '✓ REGISTERED! We\'ll contact you with details.',
      toast_fill: '⚠ Please fill in your name and full phone number.',
      nav_account: 'Create Account',
      book_now: 'Book Now',
      contact_address: 'Beruniy, Tashkent,<br>Uzbekistan',
      contact_telegram: 'Telegram',
      contact_instagram: 'Instagram',
      contact_hours: 'Opening Hours',
      hr_mf: 'Mon – Fri',
      hr_sat: 'Saturday',
      hr_sun: 'Sunday',
      hr_hol: 'Holidays',
      hr_247: '24 / 7',
      about_p1: 'Energy Gaming Huvaydo is a gaming café in the Beruniy area of Tashkent. We started it because the city was missing a spot with proper hardware and a normal price.',
      about_p2: 'Whether you\'re climbing ranked, prepping for a tournament, or just queueing with the squad, the PCs here are tuned for the games you actually play.',
      about_p3: 'We run local <strong>tournaments</strong> on weekends, host LAN parties, and try to keep the Tashkent esports scene moving. Come hang out.',
      pillar1_t: 'Tournaments',
      pillar1_d: 'Weekly cups in CS2, Valorant, Dota 2 and FC25',
      pillar2_t: 'Performance',
      pillar2_d: 'Solid hardware, no lag, no drama',
      pillar3_t: 'Community',
      pillar3_d: 'Tashkent\'s gaming crowd hangs out here',
      pillar4_t: 'Comfort',
      pillar4_d: 'Comfy chairs, snacks, open 24/7',
      price_tier_zone: 'Zone',
      price_tier_pro: 'Pro Zone',
      price_period: '1 hour',
      price_1h: '1 hour',
      price_3h: '3 hours',
      price_5h: '5 hours',
      price_night: 'Night (00:00–08:00)',
      price_premium_setup: 'Premium gaming setup',
      price_high_refresh: 'High-refresh monitors',
      setup1_t: 'Up to 500Hz monitors',
      setup1_d: 'Samsung Odyssey G5 250Hz in zones A–D, Dell Alienware 360Hz and 500Hz in the Pro cabins.',
      setup2_t: 'VGN keyboards',
      setup2_d: 'VGN N75 in zones A–D, VGN V87 Pro in the cabins. Snappy switches, quick actuation.',
      setup3_t: 'Logitech & Razer mice',
      setup3_d: 'Razer Cobra in zones A–D, Logitech G Pro X Superlight in the Pro cabins. Clean tracking, no acceleration weirdness.',
      setup4_t: 'Razer & Logitech headsets',
      setup4_d: 'Razer Blackshark V2 in zones A–D, Logitech G Pro X Lightspeed 2 in Pro 500Hz. Footsteps are easy to pick up.',
      spec_abcd_mb: 'Zone A, B, C, D — Motherboard',
      spec_360_mb: 'Pro 360Hz — Motherboard',
      spec_500_mb: 'Pro 500Hz — Motherboard',
      spec_gfx: 'Graphics & Display',
      spec_periph: 'Peripherals',
      sl_mb: 'Motherboard',
      sl_cpu: 'CPU',
      sl_ram: 'RAM',
      sl_gpu: 'GPU',
      sl_mon: 'Monitor',
      sl_kb: 'Keyboard',
      sl_mouse: 'Mouse',
      sl_hs: 'Headset',
      reviews_label: 'Community',
      reviews_title: 'What <span class="accent">Gamers</span> Say',
      rev1_text: '"Honestly the best place I\'ve played in Tashkent. Got my first Global Elite on the Pro PCs. Vibe is chill but people take their games seriously."',
      rev2_text: '"Played in Energy Cup last month. The setup was actually pro level, no jokes. The 240Hz monitors and mech keys make a real difference if you\'re used to a phone-grade setup at home."',
      rev3_text: '"Booked the VIP room for the boys\' LAN night. RTX 4090s, our own room, snacks. Staff helped us out the whole night. We\'re back basically every weekend now."',
      rev1_tag: 'CS2 Player · Regular',
      rev2_tag: 'Valorant · Tournament Player',
      rev3_tag: 'Dota 2 · VIP Customer',
      footer_tag: 'Gaming café in Beruniy, Tashkent',
      footer_copy: '© 2026 Energy Gaming UZ. All rights reserved.',
    },
    uz: {
      nav_about: 'Biz haqimizda', nav_pricing: 'Narxlar', nav_setup: 'Uskunalar',
      nav_events: 'Turnirlar', nav_contact: 'Aloqa', nav_book: 'Band qilish',
      about_label: 'Biz haqimizda',
      about_title: 'Toshkentliklar <span class="accent">o\'ynaydigan</span> joy',
      pricing_label: 'Narxlar',
      pricing_title: '<span class="accent">Zonangizni</span> tanlang',
      setup_label: 'Ichida nima bor',
      setup_title: 'Kompyuterimizda <span class="accent">nima bor</span>',
      contact_label: 'Bizni toping',
      contact_title: '<span class="accent">Kelib</span> ko\'ring',
      hero_badge: 'Toshkent, Beruniy — gaming kafe',
      hero_line1: 'O\'yiningizni', hero_line2: 'Yuqori darajaga',
      hero_sub: 'Energy Gaming\'ni Huvaydoda ochdik, chunki Toshkentda normal o\'ynaydigan joy yetishmasdi. Tez kompyuterlar, qulay kreslolar, tun bo\'yi ochiq. Jamoangiz bilan keling.',
      hero_book: 'Kompyuter band qilish', hero_prices: 'Narxlarni ko\'rish',
      stat_pcs: 'Gaming kompyuter', stat_hz: 'Hz monitorlar', stat_mb: 'Mbps internet',
      book_title: 'Kompyuter band qilish', book_name: 'To\'liq ism', book_name_ph: 'Ismingiz',
      book_phone: 'Telefon / Telegram', book_pc_type: 'Zona', book_duration: 'Davomiyligi',
      book_people: 'Odamlar soni',
      book_datetime: 'Qabul qilish sanasi va vaqti', book_confirm: 'Tasdiqlash',
      pc_abcd: 'A,B,C,D zona — 15,000 UZS/soat', pc_twins: 'Twins A/B · VIP — 20,000 UZS/soat', pc_pro360: 'Pro 360Hz — 25,000 UZS/soat', pc_pro500: 'Pro 500Hz — 30,000 UZS/soat',
      dur_1: '1 soat', dur_2: '3 soat', dur_3: '5 soat', dur_4: 'Tungi (00:00–08:00)',
      contact_location: 'Manzil', contact_phone: 'Telefon',
      join_now: 'Ro\'yxatdan o\'tish',
      tourney_title: 'Turnirga ro\'yxatdan o\'tish', tourney_name: 'Jamoa / O\'yinchi nomi',
      tourney_players: 'O\'yinchilar soni', tourney_register: 'Ro\'yxatdan o\'tish',
      toast_booked: '✓ TASDIQLANDI! Tez orada siz bilan bog\'lanamiz.',
      toast_joined: '✓ RO\'YXATDAN O\'TDINGIZ! Tafsilotlar bilan bog\'lanamiz.',
      toast_fill: '⚠ Iltimos, to\'liq ism va telefon raqamingizni kiriting.',
      nav_account: 'Hisob ochish',
      book_now: 'Band qilish',
      contact_address: 'Beruniy, Toshkent,<br>O‘zbekiston',
      contact_telegram: 'Telegram',
      contact_instagram: 'Instagram',
      contact_hours: 'Ish vaqti',
      hr_mf: 'Du – Ju',
      hr_sat: 'Shanba',
      hr_sun: 'Yakshanba',
      hr_hol: 'Bayramlar',
      hr_247: '24 / 7',
      about_p1: 'Energy Gaming Huvaydo — Toshkentning Beruniy hududidagi gaming kafe. Shaharda yaxshi jihoz va normal narxli joy yo\'q edi, shuning uchun ochdik.',
      about_p2: 'Reytingli o\'ynayapsizmi, turnirga tayyorgarlikmi yoki shunchaki do\'stlar bilan o\'yinmi — kompyuterlar shu o\'yinlar uchun moslangan.',
      about_p3: 'Dam olish kunlari mahalliy <strong>turnirlar</strong> o\'tkazamiz, LAN partilar uyushtiramiz, Toshkent kibersport sahnasini jonlantirib turishga harakat qilamiz. Kelib o\'tiring.',
      pillar1_t: 'Turnirlar',
      pillar1_d: 'CS2, Valorant, Dota 2 va FC25 bo\'yicha haftalik turnirlar',
      pillar2_t: 'Unumdorlik',
      pillar2_d: 'Yaxshi jihoz, lag yo\'q, bahona yo\'q',
      pillar3_t: 'Hamjamiyat',
      pillar3_d: 'Toshkentning gaming jamoasi shu yerda',
      pillar4_t: 'Qulaylik',
      pillar4_d: 'Qulay kreslolar, gazak, 24/7 ochiq',
      price_tier_zone: 'Zona',
      price_tier_pro: 'Pro Zona',
      price_period: '1 soat',
      price_1h: '1 soat',
      price_3h: '3 soat',
      price_5h: '5 soat',
      price_night: 'Tungi (00:00–08:00)',
      price_premium_setup: 'Premium gaming jihozi',
      price_high_refresh: 'Yuqori chastotali monitorlar',
      setup1_t: '500Hz gacha monitorlar',
      setup1_d: 'ABCD zonalarda Samsung Odyssey G5 250Hz, Pro kabinalarda Dell Alienware 360Hz va 500Hz.',
      setup2_t: 'VGN klaviaturalari',
      setup2_d: 'ABCD zonalarda VGN N75, kabinalarda VGN V87 Pro. Tezkor switchlar.',
      setup3_t: 'Logitech va Razer sichqonchalari',
      setup3_d: 'ABCD zonalarda Razer Cobra, Pro kabinalarda Logitech G Pro X Superlight. Aniq tracking.',
      setup4_t: 'Razer Blackshark va Logitech',
      setup4_d: 'ABCD zonalarda Razer Blackshark V2, Pro 500Hz da Logitech G Pro X Lightspeed 2. Qadam tovushlari yaxshi eshitiladi.',
      spec_abcd_mb: 'Zona A, B, C, D — Anakart',
      spec_360_mb: 'Pro 360Hz — Anakart',
      spec_500_mb: 'Pro 500Hz — Anakart',
      spec_gfx: 'Grafika va ekran',
      spec_periph: 'Periferiya',
      sl_mb: 'Anakart',
      sl_cpu: 'Protsessor',
      sl_ram: 'Operativ xotira',
      sl_gpu: 'Videokarta',
      sl_mon: 'Monitor',
      sl_kb: 'Klaviatura',
      sl_mouse: 'Sichqoncha',
      sl_hs: 'Garnitura',
      reviews_label: 'Hamjamiyat',
      reviews_title: '<span class="accent">O‘yinchilar</span> nima deydi',
      rev1_text: '"Toshkentdagi eng zo\'r joy, rosti. Pro kompyuterlarda nihoyat CS2 da Global Elite oldim. Muhit chill, lekin o\'ynaganda jiddiy."',
      rev2_text: '"O\'tgan oy Energy Cup da qatnashdim. Setup haqiqatan pro daraja. 240Hz va mexanik klaviatura uy sharoitidan keyin katta farq."',
      rev3_text: '"Bolalar bilan LAN kechasi uchun VIP xonani band qildim. RTX 4090, alohida xona, gazak. Xodimlar tun bo\'yi yordam berishdi. Endi har hafta kelamiz."',
      rev1_tag: 'CS2 o‘yinchisi · Doimiy',
      rev2_tag: 'Valorant · Turnir o‘yinchisi',
      rev3_tag: 'Dota 2 · VIP mijoz',
      footer_tag: 'Toshkent, Beruniy — gaming kafe',
      footer_copy: '© 2026 Energy Gaming UZ. Barcha huquqlar himoyalangan.',
    },
    ru: {
      nav_about: 'О нас', nav_pricing: 'Цены', nav_setup: 'Оборудование',
      nav_events: 'Турниры', nav_contact: 'Контакты', nav_book: 'Забронировать',
      about_label: 'О нас',
      about_title: 'Где играет <span class="accent">Ташкент</span>',
      pricing_label: 'Тарифы',
      pricing_title: 'Выбери <span class="accent">зону</span>',
      setup_label: 'Что внутри',
      setup_title: 'Что у нас в <span class="accent">ПК</span>',
      contact_label: 'Найдите нас',
      contact_title: '<span class="accent">Заходи</span>',
      hero_badge: 'Геймерское кафе в Беруни, Ташкент',
      hero_line1: 'Подними свой', hero_line2: 'уровень игры',
      hero_sub: 'Открыли Energy Gaming в Хувайдо, потому что в Ташкенте не было нормального места поиграть. Быстрые ПК, удобные кресла, открыто всю ночь. Приходи с тимой.',
      hero_book: 'Забронировать ПК', hero_prices: 'Смотреть цены',
      stat_pcs: 'Игровых ПК', stat_hz: 'Гц мониторы', stat_mb: 'Мбит/с интернет',
      book_title: 'Бронирование ПК', book_name: 'Полное имя', book_name_ph: 'Ваше имя',
      book_phone: 'Телефон / Telegram', book_pc_type: 'Зона', book_duration: 'Продолжительность',
      book_people: 'Количество людей',
      book_datetime: 'Дата и время', book_confirm: 'Подтвердить бронь',
      pc_abcd: 'Зона A,B,C,D — 15,000 UZS/ч', pc_twins: 'Twins A/B · VIP — 20,000 UZS/ч', pc_pro360: 'Pro 360Hz — 25,000 UZS/ч', pc_pro500: 'Pro 500Hz — 30,000 UZS/ч',
      dur_1: '1 час', dur_2: '3 часа', dur_3: '5 часов', dur_4: 'Ночной (00:00–08:00)',
      contact_location: 'Адрес', contact_phone: 'Телефон',
      join_now: 'Участвовать',
      tourney_title: 'Регистрация на турнир', tourney_name: 'Команда / Игрок',
      tourney_players: 'Количество игроков', tourney_register: 'Зарегистрироваться',
      toast_booked: '✓ БРОНЬ ПОДТВЕРЖДЕНА! Скоро свяжемся с вами.',
      toast_joined: '✓ ЗАРЕГИСТРИРОВАНЫ! Свяжемся с деталями.',
      toast_fill: '⚠ Пожалуйста, введите имя и полный номер телефона.',
      nav_account: 'Создать аккаунт',
      book_now: 'Забронировать',
      contact_address: 'Беруни, Ташкент,<br>Узбекистан',
      contact_telegram: 'Telegram',
      contact_instagram: 'Instagram',
      contact_hours: 'Часы работы',
      hr_mf: 'Пн – Пт',
      hr_sat: 'Суббота',
      hr_sun: 'Воскресенье',
      hr_hol: 'Праздники',
      hr_247: '24 / 7',
      about_p1: 'Energy Gaming Huvaydo — геймерское кафе в районе Беруни в Ташкенте. Открыли его, потому что в городе не хватало места с нормальным железом и адекватными ценами.',
      about_p2: 'Гриндишь ранги, готовишься к турниру или просто катаешь с друзьями — ПК тут собраны под те игры, в которые реально играют.',
      about_p3: 'По выходным гоняем локальные <strong>турниры</strong>, проводим LAN-вечера и потихоньку раскачиваем ташкентский киберспорт. Заходи.',
      pillar1_t: 'Турниры',
      pillar1_d: 'Еженедельные кубки по CS2, Valorant, Dota 2 и FC25',
      pillar2_t: 'Производительность',
      pillar2_d: 'Нормальное железо, без лагов и оправданий',
      pillar3_t: 'Сообщество',
      pillar3_d: 'Здесь тусит ташкентское комьюнити',
      pillar4_t: 'Комфорт',
      pillar4_d: 'Удобные кресла, снеки, открыто 24/7',
      price_tier_zone: 'Зона',
      price_tier_pro: 'Pro Зона',
      price_period: '1 час',
      price_1h: '1 час',
      price_3h: '3 часа',
      price_5h: '5 часов',
      price_night: 'Ночной (00:00–08:00)',
      price_premium_setup: 'Премиум игровая сборка',
      price_high_refresh: 'Мониторы с высокой частотой',
      setup1_t: 'Мониторы до 500Гц',
      setup1_d: 'Samsung Odyssey G5 250Гц в зонах A–D, Dell Alienware 360Гц и 500Гц в Pro кабинках.',
      setup2_t: 'Клавиатуры VGN',
      setup2_d: 'VGN N75 в зонах A–D, VGN V87 Pro в кабинках. Тактильные свитчи, быстрый отклик.',
      setup3_t: 'Мыши Logitech и Razer',
      setup3_d: 'Razer Cobra в зонах A–D, Logitech G Pro X Superlight в Pro кабинках. Чёткое трекинг без акселя.',
      setup4_t: 'Razer Blackshark и Logitech',
      setup4_d: 'Razer Blackshark V2 в зонах A–D, Logitech G Pro X Lightspeed 2 в Pro 500Гц. Шаги слышно нормально.',
      spec_abcd_mb: 'Зона A, B, C, D — Материнская плата',
      spec_360_mb: 'Pro 360Гц — Материнская плата',
      spec_500_mb: 'Pro 500Гц — Материнская плата',
      spec_gfx: 'Графика и дисплей',
      spec_periph: 'Периферия',
      sl_mb: 'Материнская плата',
      sl_cpu: 'Процессор',
      sl_ram: 'Оперативная память',
      sl_gpu: 'Видеокарта',
      sl_mon: 'Монитор',
      sl_kb: 'Клавиатура',
      sl_mouse: 'Мышь',
      sl_hs: 'Гарнитура',
      reviews_label: 'Сообщество',
      reviews_title: 'Что говорят <span class="accent">геймеры</span>',
      rev1_text: '"Честно — лучшее место в Ташкенте, где играл. На Pro ПК наконец взял Global Elite в CS2. Атмосфера спокойная, но в игре все серьёзно."',
      rev2_text: '"В прошлом месяце играл на Energy Cup. Сетап реально про-уровня. 240Гц и механика после домашнего стола — это другое."',
      rev3_text: '"Забронил VIP-комнату для LAN-вечера с пацанами. RTX 4090, своя комната, снеки. Персонал весь вечер помогал. Теперь каждые выходные тут."',
      rev1_tag: 'CS2 игрок · Постоянный',
      rev2_tag: 'Valorant · Турнирный игрок',
      rev3_tag: 'Dota 2 · VIP клиент',
      footer_tag: 'Геймерское кафе в Беруни, Ташкент',
      footer_copy: '© 2026 Energy Gaming UZ. Все права защищены.',
    }
  };

  let currentLang = 'en';

  function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.textContent.toLowerCase() === lang);
    });
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (t[key] !== undefined) opt.textContent = t[key];
    });
    // Update document lang attribute for accessibility
    document.documentElement.lang = lang;
  }

  // ===================== TELEGRAM (SECURED) =====================
  // TOKEN STORAGE: Split + Base64 obfuscation.
  // HOW TO SET YOUR TOKEN:
  //   1. Take your real bot token e.g.  1234567890:ABCDefGhIJKlmNoPQRsTUVwxyZ
  //   2. Split it at the colon: part A = "1234567890"  part B = "ABCDefGhIJKlmNoPQRsTUVwxyZ"
  //   3. Base64-encode each part separately (use https://www.base64encode.org/)
  //   4. Paste results into _tA and _tB below
  //   5. Do the same for your CHAT_ID → _cA
  //
  // IMPORTANT: This is obfuscation, NOT true encryption.
  // For real security, use a backend proxy (Node.js / PHP / Cloudflare Worker).

  const _s = (function(){
    // --- PASTE YOUR BASE64 VALUES BELOW ---
    const _tA = btoa('YOUR_BOT_ID');          // base64 of the number before the colon
    const _tB = btoa('YOUR_BOT_SECRET');      // base64 of the part after the colon
    const _cA = btoa('YOUR_CHAT_ID');         // base64 of your chat ID
    // --- END PASTE ---
    return {
      tok: () => atob(_tA) + ':' + atob(_tB),
      cid: () => atob(_cA)
    };
  })();

  // ── RATE LIMITER ──────────────────────────────────────────────
  // Blocks more than 3 submissions per 10 minutes from the same browser.
  const _rl = (function(){
    const KEY   = '__eg_rl';
    const LIMIT = 3;          // max requests
    const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
    return {
      check() {
        try {
          const raw = localStorage.getItem(KEY);
          const data = raw ? JSON.parse(raw) : { count: 0, since: Date.now() };
          const now = Date.now();
          if (now - data.since > WINDOW_MS) {
            // reset window
            localStorage.setItem(KEY, JSON.stringify({ count: 1, since: now }));
            return true;
          }
          if (data.count >= LIMIT) return false; // blocked
          data.count++;
          localStorage.setItem(KEY, JSON.stringify(data));
          return true;
        } catch(e) { return true; } // if storage unavailable, allow
      }
    };
  })();

  // ── HONEYPOT ─────────────────────────────────────────────────
  // Bots fill every field, including hidden ones.
  // If the hidden _hp field has any value, silently drop the request.
  (function(){
    const hp = document.createElement('input');
    hp.type = 'text'; hp.name = '_hp'; hp.id = '_hp';
    hp.autocomplete = 'off'; hp.tabIndex = -1;
    hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
    hp.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hp);
  })();

  // ── INPUT SANITIZER ──────────────────────────────────────────
  function _sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .slice(0, 500); // hard length cap
  }

  // ── MAIN SEND FUNCTION ───────────────────────────────────────
  async function sendTelegramMessage(text, replyMarkup = null) {
    // Honeypot check
    const hpField = document.getElementById('_hp');
    if (hpField && hpField.value.trim() !== '') {
      console.warn('[Security] Honeypot triggered — request blocked.');
      return;
    }

    // Rate limit check
    if (!_rl.check()) {
      console.warn('[Security] Rate limit exceeded — request blocked.');
      showToast('Too many requests. Please wait a few minutes.', 'var(--neon-pink)');
      return;
    }

    // Sanitize outgoing text
    const safeText = _sanitize(text);

    try {
      const payload = { chat_id: _s.cid(), text: safeText, parse_mode: 'HTML' };
      if (replyMarkup) payload.reply_markup = replyMarkup;
      const resp = await fetch(`https://api.telegram.org/bot${_s.tok()}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        console.warn('[Telegram] API error:', err.description || resp.status);
      }
    } catch(e) {
      // Silently fail — don't expose error details to the browser console in prod
    }
  }

  // Clear field errors on input
  document.getElementById('bookName').addEventListener('input', function() {
    this.style.borderColor = ''; this.style.boxShadow = '';
  });
  document.getElementById('bookPhone').addEventListener('input', function() {
    // only allow digits, spaces, dashes
    this.value = this.value.replace(/[^\d\s\-]/g, '');
    this.style.borderColor = ''; this.style.boxShadow = '';
  });

  // cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, 60);
  });

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Nav scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });

  // counter
  function animateCount(el, target, suffix = '') {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, 20);
  }
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          animateCount(el, parseInt(el.dataset.count), el.dataset.count == '240' ? 'Hz' : el.dataset.count == '500' ? 'Mb' : '+');
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) statsObserver.observe(statsSection);

  // people picker
  let peopleCount = 1;
  function changePeople(delta) {
    peopleCount = Math.max(1, Math.min(20, peopleCount + delta));
    document.getElementById('peopleCount').textContent = peopleCount;
    document.getElementById('peopleMinus').style.opacity = peopleCount <= 1  ? '0.35' : '1';
    document.getElementById('peoplePlus').style.opacity  = peopleCount >= 20 ? '0.35' : '1';
    renderExtraGuests();
  }

  function renderExtraGuests() {
    const container = document.getElementById('extraGuests');
    // Preserve any values the user already typed before we rebuild
    const saved = {};
    container.querySelectorAll('input.guest-name, input.guest-phone').forEach(el => {
      saved[el.id] = el.value;
    });
    container.innerHTML = '';
    for (let i = 2; i <= peopleCount; i++) {
      const block = document.createElement('div');
      block.className = 'guest-block';

      const lbl = document.createElement('span');
      lbl.className = 'guest-block-label';
      lbl.textContent = '// PERSON ' + i;

      const nameLabel = document.createElement('label');
      nameLabel.className = 'form-label';
      nameLabel.textContent = 'Full Name';
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.className = 'form-control guest-name';
      nameInput.id = 'guestName' + i;
      nameInput.placeholder = 'Person ' + i + ' name';
      nameInput.autocomplete = 'off';
      nameInput.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.boxShadow = '';
      });
      const nameGroup = document.createElement('div');
      nameGroup.className = 'form-group';
      nameGroup.style.marginBottom = '0';
      nameGroup.appendChild(nameLabel);
      nameGroup.appendChild(nameInput);

      const phoneLabel = document.createElement('label');
      phoneLabel.className = 'form-label';
      phoneLabel.textContent = 'Phone Number';
      const prefix = document.createElement('span');
      prefix.style.cssText = 'display:flex;align-items:center;padding:0 10px;background:rgba(0,212,255,0.1);border:1px solid var(--border-glow);border-right:none;font-family:Share Tech Mono,monospace;font-size:0.85rem;color:var(--neon-blue);white-space:nowrap;flex-shrink:0;';
      prefix.textContent = '+998';
      const phoneInput = document.createElement('input');
      phoneInput.type = 'tel';
      phoneInput.className = 'form-control guest-phone';
      phoneInput.id = 'guestPhone' + i;
      phoneInput.placeholder = '90 000 00 00';
      phoneInput.maxLength = 12;
      phoneInput.style.flex = '1';
      phoneInput.autocomplete = 'off';
      phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^\d\s\-]/g, '');
        this.style.borderColor = '';
        this.style.boxShadow = '';
      });
      const phoneWrap = document.createElement('div');
      phoneWrap.style.cssText = 'display:flex;gap:0;';
      phoneWrap.appendChild(prefix);
      phoneWrap.appendChild(phoneInput);
      const phoneGroup = document.createElement('div');
      phoneGroup.className = 'form-group';
      phoneGroup.style.marginBottom = '0';
      phoneGroup.appendChild(phoneLabel);
      phoneGroup.appendChild(phoneWrap);

      const row = document.createElement('div');
      row.className = 'guest-row';
      row.appendChild(nameGroup);
      row.appendChild(phoneGroup);

      block.appendChild(lbl);
      block.appendChild(row);
      container.appendChild(block);

      // Restore previously typed values for this guest
      if (saved['guestName' + i] !== undefined) nameInput.value = saved['guestName' + i];
      if (saved['guestPhone' + i] !== undefined) phoneInput.value = saved['guestPhone' + i];
    }
  }

  // booking
  // Fixed package prices: [zone_index][duration_value]
  // Zones: 0=ABCD, 1=Twins/VIP, 2=Pro360, 3=Pro500
  // Durations: 1h, 3h, 5h, night(8)
  const PACKAGE_PRICES = {
    0: { 1: 15000,  3: 35000,  5: 60000,  8: 90000  },
    1: { 1: 20000,  3: 50000,  5: 90000,  8: 110000 },
    2: { 1: 25000,  3: 60000,  5: 100000, 8: 120000 },
    3: { 1: 30000,  3: 75000,  5: 120000, 8: 130000 },
  };
  function openBooking(zone) {
    if (zone) {
      const sel = document.getElementById('bookPcType');
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === zone) { sel.selectedIndex = i; break; }
      }
    }
    document.getElementById('bookingOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeBooking() {
    document.getElementById('bookingOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeBookingOutside(e) {
    if (e.target === document.getElementById('bookingOverlay')) closeBooking();
  }

  // Stored booking data — set when form is submitted, used when payment confirmed
  let pendingBooking = null;
  let paymeTimerInterval = null;

  function submitBooking() {
    const t = translations[currentLang];
    const name     = document.getElementById('bookName').value.trim();
    const phoneRaw = document.getElementById('bookPhone').value.trim();
    const pcIdx    = document.getElementById('bookPcType').selectedIndex;
    const pcType   = document.getElementById('bookPcType').value;
    const durValue = parseInt(document.getElementById('bookDuration').value) || 1;
    const durText  = document.getElementById('bookDuration').options[document.getElementById('bookDuration').selectedIndex].text;
    const datetime = document.getElementById('bookDatetime').value;
    const phoneDigits = phoneRaw.replace(/[\s\-]/g, '');

    let valid = true;
    const nameEl  = document.getElementById('bookName');
    const phoneEl = document.getElementById('bookPhone');

    if (!name || name.length < 2) {
      nameEl.style.borderColor = 'var(--neon-pink)';
      nameEl.style.boxShadow   = '0 0 10px rgba(255,45,120,0.3)';
      valid = false;
    } else {
      nameEl.style.borderColor = '';
      nameEl.style.boxShadow   = '';
    }
    if (!phoneDigits || phoneDigits.length < 9) {
      phoneEl.style.borderColor = 'var(--neon-pink)';
      phoneEl.style.boxShadow   = '0 0 10px rgba(255,45,120,0.3)';
      valid = false;
    } else {
      phoneEl.style.borderColor = '';
      phoneEl.style.boxShadow   = '';
    }

    // Collect extra guests + validate their name & phone
    const extraGuests = [];
    for (let i = 2; i <= peopleCount; i++) {
      const gNameEl  = document.getElementById('guestName' + i);
      const gPhoneEl = document.getElementById('guestPhone' + i);
      const gName    = gNameEl  ? gNameEl.value.trim()  : '';
      const gPhone   = gPhoneEl ? gPhoneEl.value.trim() : '';
      const gPhoneDigits = gPhone.replace(/[\s\-]/g, '');
      if (!gName || gName.length < 2) {
        if (gNameEl) { gNameEl.style.borderColor = 'var(--neon-pink)'; gNameEl.style.boxShadow = '0 0 10px rgba(255,45,120,0.3)'; }
        valid = false;
      }
      if (!gPhoneDigits || gPhoneDigits.length < 9) {
        if (gPhoneEl) { gPhoneEl.style.borderColor = 'var(--neon-pink)'; gPhoneEl.style.boxShadow = '0 0 10px rgba(255,45,120,0.3)'; }
        valid = false;
      }
      extraGuests.push({ name: gName, phone: gPhone });
    }

    if (!valid) { showToast(t.toast_fill, 'var(--neon-pink)'); return; }

    closeBooking();

    // Calculate price (multiplied by number of people)
    const priceTable    = PACKAGE_PRICES[pcIdx] || PACKAGE_PRICES[0];
    const pricePerPerson = priceTable[durValue]  || priceTable[1];
    const total          = pricePerPerson * peopleCount;
    const totalFormatted = total.toLocaleString() + ' UZS';

    // Store booking for Telegram after payment
    pendingBooking = {
      name, phone: '+998 ' + phoneRaw, pcType, durText, datetime, total: totalFormatted,
      people: peopleCount, extraGuests
    };

    // Show payme modal with amount + per-person breakdown
    document.getElementById('paymeAmount').textContent = totalFormatted;
    const breakdownEl = document.getElementById('paymeBreakdown');
    if (breakdownEl) {
      if (peopleCount > 1) {
        breakdownEl.textContent = `${pricePerPerson.toLocaleString()} UZS × ${peopleCount} people`;
        breakdownEl.style.display = 'block';
      } else {
        breakdownEl.style.display = 'none';
      }
    }
    document.getElementById('paymeOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset and start countdown
    startPaymeCountdown(15);

    // Clear form fields
    document.getElementById('bookName').value     = '';
    document.getElementById('bookPhone').value    = '';
    document.getElementById('bookDatetime').value = '';
    peopleCount = 1;
    document.getElementById('peopleCount').textContent = '1';
    document.getElementById('peopleMinus').style.opacity = '0.35';
    document.getElementById('extraGuests').innerHTML = '';
  }

  function startPaymeCountdown(seconds) {
    // Reset button to locked state
    const btn      = document.getElementById('paymeDoneBtn');
    const label    = document.getElementById('paymeTimerLabel');
    const cdSpan   = document.getElementById('paymeCountdown');
    const btnSpan  = document.getElementById('paymeBtnCountdown');

    btn.disabled = true;
    btn.className = 'payme-done-btn locked';
    document.getElementById('paymeBtnText').innerHTML = `⏳ Wait for payment... (<span id="paymeBtnCountdown">${seconds}</span>s)`;
    label.textContent = `Please complete payment first — button unlocks in `;
    label.className = 'payme-timer-label';

    // Re-grab spans after innerHTML reset
    let remaining = seconds;
    if (paymeTimerInterval) clearInterval(paymeTimerInterval);

    paymeTimerInterval = setInterval(() => {
      remaining--;
      const c1 = document.getElementById('paymeCountdown');
      const c2 = document.getElementById('paymeBtnCountdown');
      if (c1) c1.textContent = remaining;
      if (c2) c2.textContent = remaining;

      if (remaining <= 0) {
        clearInterval(paymeTimerInterval);
        paymeTimerInterval = null;
        // Unlock button
        btn.disabled = false;
        btn.className = 'payme-done-btn unlocked';
        document.getElementById('paymeBtnText').innerHTML = `✓ I've Paid — Confirm Booking`;
        label.textContent = `✅ Payment time complete — tap the button to confirm!`;
        label.className = 'payme-timer-label ready';
      }
    }, 1000);

    // Build label with live countdown
    label.innerHTML = `Please complete payment first — button unlocks in <span id="paymeCountdown">${seconds}</span>s`;
  }

  async function confirmPaid() {
    if (!pendingBooking) return;

    // Disable button while sending
    const btn = document.getElementById('paymeDoneBtn');
    btn.disabled = true;
    document.getElementById('paymeBtnText').innerHTML = '⏳ Confirming...';

    // Send Telegram NOW — after payment confirmed
    const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Tashkent' });

    // Build guest list lines
    let guestLines = '';
    if (pendingBooking.extraGuests && pendingBooking.extraGuests.length > 0) {
      pendingBooking.extraGuests.forEach((g, idx) => {
        const gName  = g.name  || '—';
        const gPhone = g.phone ? '+998 ' + g.phone : '—';
        guestLines += `\n   Person ${idx + 2}: ${gName}` + (g.phone ? ` · ${gPhone}` : '');
      });
    }

    const msg =
      `✅ <b>PAYMENT CONFIRMED — Energy Gaming UZ</b>\n\n` +
      `👤 Name: ${pendingBooking.name}\n` +
      `📞 Contact: ${pendingBooking.phone}\n` +
      `🖥 Zone: ${pendingBooking.pcType}\n` +
      `👥 People: ${pendingBooking.people} person${pendingBooking.people > 1 ? 's' : ''}` +
      (guestLines ? `\n<b>Guests:</b>${guestLines}` : '') + `\n` +
      `⏱ Duration: ${pendingBooking.durText}\n` +
      `📅 Date/Time: ${pendingBooking.datetime || 'Not specified'}\n` +
      `💰 Total Paid: ${pendingBooking.total}\n` +
      `🕐 Confirmed at: ${now}\n\n` +
      `#paid #booking #energygaming`;

    await sendTelegramMessage(msg);

    pendingBooking = null;

    // Close modal and show toast
    document.getElementById('paymeOverlay').classList.remove('open');
    document.body.style.overflow = '';
    showToast(translations[currentLang].toast_booked, 'var(--neon-green)');
  }

  function closePayme() {
    document.getElementById('paymeOverlay').classList.remove('open');
    document.body.style.overflow = '';
    if (window._paymeCountdownTimer) { clearInterval(window._paymeCountdownTimer); window._paymeCountdownTimer = null; }
  }

  // mobile nav
  function toggleMobileNav() {
    const nav = document.getElementById('navLinks');
    const ham = document.getElementById('hamburgerBtn');
    const isOpen = nav.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    ham.setAttribute('aria-expanded', isOpen);
  }
  // Close mobile nav when a link is clicked
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      if (nav.classList.contains('open')) toggleMobileNav();
    });
  });

  // copy card
  function copyCardNumber() {
    const cardNumber = document.getElementById('paymeCardNumber').textContent.replace(/\s/g, '');
    const btn = document.getElementById('paymeCopyBtn');
    const btnText = document.getElementById('copyBtnText');
    const btnIcon = document.getElementById('copyBtnIcon');
    const toast = document.getElementById('copySuccessToast');

    navigator.clipboard.writeText(cardNumber).then(() => {
      btn.classList.add('copied');
      btnIcon.textContent = '✓';
      btnText.textContent = 'Copied!';
      toast.classList.add('show');

      setTimeout(() => {
        btn.classList.remove('copied');
        btnIcon.textContent = '⎘';
        btnText.textContent = 'Copy Card Number';
        toast.classList.remove('show');
      }, 2500);
    }).catch(() => {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = cardNumber;
      el.style.position = 'fixed'; el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      btn.classList.add('copied');
      btnIcon.textContent = '✓';
      btnText.textContent = 'Copied!';
      toast.classList.add('show');
      setTimeout(() => {
        btn.classList.remove('copied');
        btnIcon.textContent = '⎘';
        btnText.textContent = 'Copy Card Number';
        toast.classList.remove('show');
      }, 2500);
    });
  }

  // toast
  function showToast(message, color) {
    const toast = document.createElement('div');
    toast.style.cssText = `position:fixed;bottom:32px;right:32px;z-index:3000;background:var(--bg-card2);border:1px solid ${color};color:${color};padding:16px 24px;font-family:Orbitron,monospace;font-size:0.8rem;letter-spacing:1px;animation:fadeSlideUp 0.4s ease;max-width:340px;`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  // create account
  function openCreateAccount() {
    document.getElementById('accountOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('accountForm').style.display = 'block';
    document.getElementById('accountSuccess').style.display = 'none';
    document.getElementById('accName').value = '';
    document.getElementById('accPhone').value = '';
    const btn = document.getElementById('accSubmitBtn');
    btn.disabled = false;
    document.getElementById('accBtnText').textContent = '📨 Send Request to Staff';
  }
  function closeCreateAccount() {
    document.getElementById('accountOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  async function submitCreateAccount() {
    const name = document.getElementById('accName').value.trim();
    const phone = document.getElementById('accPhone').value.trim();
    let valid = true;
    if (!name) {
      document.getElementById('accName').style.borderColor = 'var(--neon-pink)';
      document.getElementById('accName').style.boxShadow = '0 0 8px rgba(255,45,120,0.4)';
      valid = false;
    }
    if (!phone || phone.replace(/\D/g,'').length < 9) {
      document.getElementById('accPhone').style.borderColor = 'var(--neon-pink)';
      document.getElementById('accPhone').style.boxShadow = '0 0 8px rgba(255,45,120,0.4)';
      valid = false;
    }
    if (!valid) return;
    const btn = document.getElementById('accSubmitBtn');
    btn.disabled = true;
    document.getElementById('accBtnText').textContent = '⏳ Sending...';
    const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Tashkent' });
    // Clean phone digits for deep link (remove spaces/dashes)
    const phoneDigits = phone.replace(/[\s\-]/g, '');

    const uzbekMsg = `Salom ${name}! 👋\n\nEnergy Gaming UZ'da akkauntingiz muvaffaqiyatli yaratildi! ✅\n\nBiz bilan o'ynashdan bahramand bo'ling! 🎮`;

    const msg =
      `🆕 <b>YANGI AKKAUNT SO'ROVI — Energy Gaming UZ</b>\n\n` +
      `👤 Ism: ${name}\n` +
      `📞 Telefon: <a href="https://t.me/+998${phoneDigits}">+998 ${phone}</a>\n` +
      `🕐 So'rov vaqti: ${now}\n\n` +
      `💬 <b>Mijozga yuboriladigan xabar (nusxalab yuboring):</b>\n` +
      `<code>${uzbekMsg}</code>\n\n` +
      `#yangi_akkaunt #energygaming`;

    await sendTelegramMessage(msg);
    document.getElementById('accountForm').style.display = 'none';
    document.getElementById('accConfirmPhone').textContent = '+998 ' + phone;
    document.getElementById('accountSuccess').style.display = 'block';
  }
  document.getElementById('accName').addEventListener('input', function() {
    this.style.borderColor = ''; this.style.boxShadow = '';
  });
  document.getElementById('accPhone').addEventListener('input', function() {
    this.value = this.value.replace(/[^\d\s\-]/g, '');
    this.style.borderColor = ''; this.style.boxShadow = '';
  });

// logo sync
(function(){
  var navImg = document.querySelector('nav#navbar .logo img');
  var heroImg = document.getElementById('heroLogoImg');
  if (navImg && heroImg) heroImg.src = navImg.src;
})();
