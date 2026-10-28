const $=i=>document.getElementById(i),f=v=>+(+v).toFixed(3);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=s=>String(s||'').replace(/([\\;,:"])/g,'\\$1');
const EXT=typeof chrome!=='undefined'&&chrome.runtime&&chrome.runtime.id,FULL=/full/.test(location.search);
document.body.className=EXT&&!FULL?'pop':'full';
const LS={get(k){try{return JSON.parse(localStorage.getItem(k)||'{}')}catch(e){return{}}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

// ---------- языки: ru|pl|uk|en ----------
const TR={};`Случайный стиль|Losowy styl|Випадковий стиль|Random style
Сбросить настройки|Zresetuj ustawienia|Скинути налаштування|Reset settings
Светлая / тёмная тема|Jasny / ciemny motyw|Світла / темна тема|Light / dark theme
Открыть в большом окне|Otwórz w dużym oknie|Відкрити у великому вікні|Open in a large window
Язык|Język|Мова|Language
Размер, px|Rozmiar, px|Розмір, px|Size, px
Скачать|Pobierz|Завантажити|Download
Копировать картинку|Kopiuj obraz|Копіювати картинку|Copy image
Проверить сканирование|Sprawdź skanowanie|Перевірити сканування|Test scanning
Данные|Dane|Дані|Data
Точки|Kropki|Точки|Dots
Глаза|Oczy|Очі|Eyes
Цвет|Kolor|Колір|Color
Фон|Tło|Тло|Background
Рамка|Ramka|Рамка|Frame
Логотип|Logo|Логотип|Logo
Текст / URL|Tekst / URL|Текст / URL|Text / URL
Телефон|Telefon|Телефон|Phone
Гео|Geo|Гео|Geo
Соцсеть|Media społ.|Соцмережа|Social
Текст или ссылка|Tekst lub link|Текст або посилання|Text or link
Сеть (SSID)|Sieć (SSID)|Мережа (SSID)|Network (SSID)
Пароль|Hasło|Пароль|Password
Защита|Zabezpieczenie|Захист|Security
Адрес|Adres|Адреса|Address
Тема письма|Temat|Тема листа|Subject
Текст письма|Treść wiadomości|Текст листа|Message
Номер|Numer|Номер|Number
Сообщение|Wiadomość|Повідомлення|Message
Широта|Szerokość geogr.|Широта|Latitude
Долгота|Długość geogr.|Довгота|Longitude
Платформа|Platforma|Платформа|Platform
Ник или номер|Nick lub numer|Нік або номер|Username or number
Имя|Imię|Ім’я|First name
Фамилия|Nazwisko|Прізвище|Last name
Организация|Firma|Організація|Company
Сайт|Strona www|Сайт|Website
Форма точек|Kształt kropek|Форма точок|Dot shape
Квадраты|Kwadraty|Квадрати|Squares
Жидкие|Płynne|Рідкі|Fluid
Мягкие квадраты|Miękkie kwadraty|М’які квадрати|Soft squares
Классика|Klasyczne|Класика|Classic
Ромбы|Romby|Ромби|Diamonds
Кресты|Krzyżyki|Хрестики|Crosses
Линии горизонтально|Linie poziome|Лінії горизонтально|Horizontal lines
Линии вертикально|Linie pionowe|Лінії вертикально|Vertical lines
Размер модуля|Rozmiar modułu|Розмір модуля|Module size
Скругление|Zaokrąglenie|Заокруглення|Roundness
Рамка глаза|Ramka oka|Рамка ока|Eye frame
Центр глаза|Środek oka|Центр ока|Eye center
Квадрат|Kwadrat|Квадрат|Square
Скруглённый|Zaokrąglony|Заокруглений|Rounded
Круг|Koło|Коло|Circle
Лист|Liść|Листок|Leaf
Лист зеркально|Liść lustrzany|Листок дзеркально|Leaf mirrored
Восьмиугольник|Ośmiokąt|Восьмикутник|Octagon
Ромб|Romb|Ромб|Diamond
Цвет глаз как у точек|Kolor oczu jak kropek|Колір очей як у точок|Eyes match dots
Цвет рамки|Kolor ramki|Колір рамки|Frame color
Цвет центра|Kolor środka|Колір центру|Center color
Заливка точек|Wypełnienie kropek|Заливка точок|Dot fill
Сплошная|Jednolite|Суцільна|Solid
Линейный градиент|Gradient liniowy|Лінійний градієнт|Linear gradient
Радиальный градиент|Gradient radialny|Радіальний градієнт|Radial gradient
Угол градиента|Kąt gradientu|Кут градієнта|Gradient angle
Цвет 1|Kolor 1|Колір 1|Color 1
Цвет 2|Kolor 2|Колір 2|Color 2
Цвет фона|Kolor tła|Колір тла|Background color
Прозрачный фон|Przezroczyste tło|Прозоре тло|Transparent background
Скругление фона|Zaokrąglenie tła|Заокруглення тла|Background roundness
Поля|Margines|Поля|Margin
Коррекция ошибок|Korekcja błędów|Корекція помилок|Error correction
Рамка с подписью|Ramka z podpisem|Рамка з підписом|Frame with caption
Подпись|Podpis|Підпис|Caption
Цвет текста на плашке|Kolor tekstu na plakietce|Колір тексту на плашці|Badge text color
Стиль рамки|Styl ramki|Стиль рамки|Frame style
Толщина|Grubość|Товщина|Thickness
Плашка снизу|Plakietka na dole|Плашка знизу|Bottom banner
Плашка сверху|Plakietka na górze|Плашка зверху|Top banner
Тонкая линия|Cienka linia|Тонка лінія|Thin line
Двойная линия|Podwójna linia|Подвійна лінія|Double line
Пунктир|Linia przerywana|Пунктир|Dashed
Угловые скобки|Narożniki|Кутові дужки|Corner brackets
Рамка с бейджем|Ramka z plakietką|Рамка з бейджем|Badge frame
Объёмная тень|Twardy cień|Об’ємна тінь|Hard shadow
Режим|Tryb|Режим|Mode
Обтекание по контуру|Opływanie konturu|Обтікання за контуром|Wrap around shape
Квадратная вырезка|Kwadratowe wycięcie|Квадратний виріз|Square cutout
Размер|Rozmiar|Розмір|Size
Отступ|Odstęp|Відступ|Padding
Превратить логотип в точки|Zamień logo na kropki|Перетворити логотип на точки|Turn logo into dots
Как в QR|Jak w QR|Як у QR|Like QR
Детализация|Szczegółowość|Деталізація|Detail
Цвет точек|Kolor kropek|Колір точок|Dot color
Как у QR|Jak QR|Як у QR|Same as QR
Свой цвет|Własny kolor|Власний колір|Custom color
Цвета оригинала|Kolory oryginału|Кольори оригіналу|Original colors
Порог заполнения|Próg wypełnienia|Поріг заповнення|Fill threshold
Убрать логотип|Usuń logo|Прибрати логотип|Remove logo
Картинка (PNG / SVG с прозрачным фоном)|Obraz (PNG / SVG z przezroczystym tłem)|Картинка (PNG / SVG з прозорим тлом)|Image (PNG / SVG with transparent background)
С логотипом коррекция ошибок ставится на H. Точки QR обтекают контур картинки.|Z logo korekcja błędów ustawia się na H. Kropki QR opływają kontur obrazu.|З логотипом корекція помилок ставиться на H. Точки QR обтікають контур картинки.|With a logo, error correction is set to H. QR dots wrap around the image shape.
🌐 Текущая вкладка|🌐 Bieżąca karta|🌐 Поточна вкладка|🌐 Current tab
модулей|modułów|модулів|modules
скрыто|ukryto|приховано|hidden
точек|kropek|точок|dots
Может не сканироваться: уменьшите логотип|Może się nie zeskanować: zmniejsz logo|Може не скануватися: зменште логотип|May not scan: make the logo smaller
Введите данные для QR-кода|Wpisz dane dla kodu QR|Введіть дані для QR-коду|Enter data for the QR code
Слишком много данных, сократите текст|Za dużo danych, skróć tekst|Забагато даних, скоротіть текст|Too much data, shorten the text
Сохранено|Zapisano|Збережено|Saved
Не удалось сохранить файл|Nie udało się zapisać pliku|Не вдалося зберегти файл|Could not save the file
Картинка скопирована|Obraz skopiowany|Картинку скопійовано|Image copied
Не удалось скопировать|Nie udało się skopiować|Не вдалося скопіювати|Could not copy
Не читается: уменьшите логотип или поднимите коррекцию|Nie odczytuje się: zmniejsz logo lub podnieś korekcję|Не читається: зменште логотип або підвищте корекцію|Unreadable: shrink the logo or raise error correction
QR читается, данные совпадают|Kod się odczytuje, dane zgodne|QR читається, дані збігаються|QR scans, data matches
Читается, но данные отличаются|Odczytuje się, ale dane różnią się|Читається, але дані відрізняються|Scans, but the data differs
Не удалось проверить|Nie udało się sprawdzić|Не вдалося перевірити|Could not test
Адрес вкладки недоступен|Adres karty niedostępny|Адреса вкладки недоступна|Tab address unavailable
Настройки сброшены|Ustawienia zresetowane|Налаштування скинуто|Settings reset
Сканируй меня|Zeskanuj mnie|Скануй мене|Scan me
Файл не подходит: PNG, JPG, WEBP или SVG до 5 МБ|Nieprawidłowy plik: PNG, JPG, WEBP lub SVG do 5 MB|Файл не підходить: PNG, JPG, WEBP або SVG до 5 МБ|Unsupported file: PNG, JPG, WEBP or SVG up to 5 MB
Графит|Grafit|Графіт|Graphite
Индиго|Indygo|Індиго|Indigo
Закат|Zachód słońca|Захід сонця|Sunset
Лес|Las|Ліс|Forest
Океан|Ocean|Океан|Ocean
Сакура|Sakura|Сакура|Sakura
Золото|Złoto|Золото|Gold`.split('\n').forEach(r=>{const a=r.split('|');TR[a[0]]=a});
const LG=[['ru','Русский'],['pl','Polski'],['uk','Українська'],['en','English']];
let lang=LS.get('qlang');
if(typeof lang!=='string'||!LG.some(x=>x[0]==lang)){const n=(navigator.language||'en').slice(0,2).toLowerCase();lang=LG.some(x=>x[0]==n)?n:'en'}
const tx=s=>{const r=TR[s];return r?r[LG.findIndex(x=>x[0]==lang)]:s};
const CAP='Сканируй меня';

// ---------- схема ----------
const T={
 text:['Текст / URL',[['v','Текст или ссылка','https://example.com','t']],d=>d.v],
 wifi:['Wi‑Fi',[['s','Сеть (SSID)'],['p','Пароль'],['e','Защита','','o:WPA,WEP,nopass']],d=>`WIFI:T:${d.e};S:${E(d.s)};P:${E(d.p)};;`],
 mail:['Email',[['a','Адрес','name@mail.com'],['s','Тема письма'],['b','Текст письма','','t']],d=>`mailto:${d.a}?subject=${encodeURIComponent(d.s||'')}&body=${encodeURIComponent(d.b||'')}`],
 sms:['SMS',[['n','Номер','+48123456789'],['m','Сообщение','','t']],d=>`SMSTO:${d.n}:${d.m||''}`],
 tel:['Телефон',[['n','Номер','+48123456789']],d=>'tel:'+d.n],
 geo:['Гео',[['la','Широта','52.2297'],['lo','Долгота','21.0122']],d=>`geo:${d.la},${d.lo}`],
 soc:['Соцсеть',[['k','Платформа','','o:Telegram,WhatsApp,Instagram,YouTube,TikTok,GitHub'],['u','Ник или номер','username']],d=>({Telegram:'https://t.me/',WhatsApp:'https://wa.me/',Instagram:'https://instagram.com/',YouTube:'https://youtube.com/@',TikTok:'https://tiktok.com/@',GitHub:'https://github.com/'}[d.k]||'')+(d.k=='WhatsApp'?String(d.u||'').replace(/\D/g,''):String(d.u||'').replace(/^@/,''))],
 vc:['vCard',[['fn','Имя'],['ln','Фамилия'],['t','Телефон'],['e','Email'],['o','Организация'],['u','Сайт']],d=>`BEGIN:VCARD\nVERSION:3.0\nN:${d.ln||''};${d.fn||''}\nFN:${d.fn||''} ${d.ln||''}\nORG:${d.o||''}\nTEL:${d.t||''}\nEMAIL:${d.e||''}\nURL:${d.u||''}\nEND:VCARD`]
};
const EY='square:Квадрат|rounded:Скруглённый|circle:Круг|leaf:Лист|leaf2:Лист зеркально|oct:Восьмиугольник|dia:Ромб';
const PN={data:'Данные',dots:'Точки',eyes:'Глаза',color:'Цвет',bg:'Фон',frame:'Рамка',logo:'Логотип'};
// id:[панель,тип(s/r/c/k/t),подпись,значение,опции,зависимость]
const C={
 ds:['dots','s','Форма точек','square','square:Квадраты|rounded:Жидкие|soft:Мягкие квадраты|dots:Точки|classy:Классика|diamond:Ромбы|plus:Кресты|hbar:Линии горизонтально|vbar:Линии вертикально'],
 sc:['dots','r','Размер модуля',100,[40,100]],rn:['dots','r','Скругление',100,[0,100]],
 fs:['eyes','s','Рамка глаза','rounded',EY],bs:['eyes','s','Центр глаза','rounded',EY],
 es:['eyes','c','Цвет глаз как у точек',true],ef:['eyes','k','Цвет рамки','#111111','','!es'],eb:['eyes','k','Цвет центра','#111111','','!es'],
 gt:['color','s','Заливка точек','solid','solid:Сплошная|linear:Линейный градиент|radial:Радиальный градиент'],an:['color','r','Угол градиента',45,[0,360]],
 c1:['color','k','Цвет 1','#111111'],c2:['color','k','Цвет 2','#525252'],
 bc:['bg','k','Цвет фона','#ffffff'],bt:['bg','c','Прозрачный фон',false],br:['bg','r','Скругление фона',0,[0,50]],qt:['bg','r','Поля',2,[0,8]],
 ec:['bg','s','Коррекция ошибок','M','L:L — 7%|M:M — 15%|Q:Q — 25%|H:H — 30%'],
 fr:['frame','c','Рамка с подписью',false],
 fst:['frame','s','Стиль рамки','solid','solid:Плашка снизу|top:Плашка сверху|line:Тонкая линия|double:Двойная линия|dashed:Пунктир|corners:Угловые скобки|pill:Рамка с бейджем|shadow:Объёмная тень','fr'],
 fw:['frame','r','Толщина',7,[3,14],'fr'],
 ft:['frame','t','Подпись',CAP,'','fr'],fc:['frame','k','Цвет рамки','#000000','','fr'],ftc:['frame','k','Цвет текста на плашке','#ffffff','','fr'],
 lm:['logo','s','Режим','shape','shape:Обтекание по контуру|box:Квадратная вырезка'],ls:['logo','r','Размер',24,[10,40]],lp:['logo','r','Отступ',6,[0,20]],
 lt:['logo','c','Превратить логотип в точки',false],
 lk:['logo','s','Форма точек','qr','qr:Как в QR|diamond:Ромбы|square:Квадраты|dots:Точки|soft:Мягкие квадраты','lt'],lg:['logo','r','Детализация',28,[10,64],'lt'],
 lcm:['logo','s','Цвет точек','qr','qr:Как у QR|own:Свой цвет|orig:Цвета оригинала','lt'],lcc:['logo','k','Свой цвет','#000000','','lt'],lth:['logo','r','Порог заполнения',40,[10,90],'lt']
};
const PR=[['Графит','#111111','#111111','solid','#ffffff'],['Индиго','#4f46e5','#06b6d4','linear','#ffffff'],['Закат','#be123c','#ea580c','linear','#fff7ed'],['Лес','#065f46','#65a30d','linear','#f0fdf4'],['Океан','#0369a1','#1e1b4b','radial','#f0f9ff'],['Сакура','#be185d','#7c3aed','linear','#fdf2f8'],['Золото','#92400e','#d97706','radial','#fffbeb']];
let cur='text',V={text:{v:'https://example.com'}},logo=null,lurl='',LP='',AP='data',FMT='png';
const defOf=id=>id=='ft'?tx(CAP):C[id][3];
const getS=()=>{const c={};Object.keys(C).forEach(id=>c[id]=C[id][1]=='c'?$(id).checked:$(id).value);return{cur,V,c,fmt:FMT,sz:$('sz').value}};
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const setS=c=>{if(!c||typeof c!=='object')return;Object.keys(c).forEach(id=>{if(own(C,id))C[id][1]=='c'?$(id).checked=c[id]===true:$(id).value=String(c[id]).slice(0,100)})};
// значения из формы/хранилища: цвета проверяются по шаблону, чтобы в SVG не попало ничего лишнего
const gv=id=>{const v=$(id).value;return C[id]&&C[id][1]=='k'&&!/^#[0-9a-f]{6}$/i.test(v)?'#000000':v};

// ---------- интерфейс ----------
function buildUI(){
 $('pn').innerHTML=Object.keys(PN).map(k=>`<div class="panel" id="p_${k}"></div>`).join('');
 $('p_data').innerHTML='<div class="chips" id="tabs"></div><div class="fl" id="fields"></div>';
 $('p_color').innerHTML='<div class="sw" id="sw"></div>';
 $('p_logo').innerHTML=`<label class="wide">${tx('Картинка (PNG / SVG с прозрачным фоном)')}<input type="file" id="lf" accept="image/*"></label><div class="fl" id="lctl"${logo?'':' hidden'}></div>`;
 for(const [id,[p,t,l,d,o,dep]] of Object.entries(C)){
  const el=t=='s'?`<select id="${id}">${o.split('|').map(x=>{const [v,n]=x.split(':');return `<option value="${v}">${tx(n)}</option>`}).join('')}</select>`
   :t=='r'?`<input type="range" id="${id}" min="${o[0]}" max="${o[1]}">`:t=='c'?`<input type="checkbox" id="${id}">`:`<input type="${t=='k'?'color':'text'}" id="${id}"${t=='t'?' maxlength="40"':''}>`;
  $(p=='logo'?'lctl':'p_'+p).insertAdjacentHTML('beforeend',`<label class="${t=='c'?'r':''}"${dep?` data-dep="${dep}"`:''}>${t=='c'?el+tx(l):tx(l)+(t=='r'?' <b id="v_'+id+'"></b>':'')+el}</label>`);
  t=='c'?$(id).checked=d:$(id).value=defOf(id);
 }
 $('lctl').insertAdjacentHTML('beforeend',`<button id="lx" class="wide">${tx('Убрать логотип')}</button>`);
 $('p_logo').insertAdjacentHTML('beforeend',`<small>${tx('С логотипом коррекция ошибок ставится на H. Точки QR обтекают контур картинки.')}</small>`);
 $('sw').innerHTML=PR.map((p,i)=>`<button class="swb" data-i="${i}" title="${tx(p[0])}" aria-label="${tx(p[0])}" ></button>`).join('');
 PR.forEach((p,i)=>{const b=$('sw').children[i];b.style.background=`linear-gradient(135deg,${p[1]},${p[2]})`;b.style.borderColor=p[4]});
 $('nav').innerHTML='<i id="ind"></i>'+Object.entries(PN).map(([k,v])=>`<button data-p="${k}">${tx(v)}</button>`).join('');
}
function tabs(){$('tabs').innerHTML=Object.keys(T).map(k=>`<button data-t="${k}" class="${k==cur?'on':''}">${tx(T[k][0])}</button>`).join('')+(EXT&&chrome.tabs?`<button id="cu">${tx('🌐 Текущая вкладка')}</button>`:'')}
function fields(){const fl=T[cur][1];$('fields').innerHTML=fl.map(([k,l,p,t])=>{
 const o=t&&t[0]=='o',v=(V[cur]||{})[k]??(o?t.slice(2).split(',')[0]:''),w=(t=='t'||fl.length==1)?' class="wide"':'';
 const inp=t=='t'?`<textarea data-k="${k}" rows="3" maxlength="1000" placeholder="${esc(p||'')}">${esc(v)}</textarea>`
  :o?`<select data-k="${k}">${t.slice(2).split(',').map(x=>`<option${x==v?' selected':''}>${x}</option>`).join('')}</select>`
  :`<input type="text" maxlength="300" data-k="${k}" placeholder="${esc(p||'')}" value="${esc(v)}">`;
 return `<label${w}>${tx(l)}${inp}</label>`}).join('')}
const data=()=>{const o={};document.querySelectorAll('#fields [data-k]').forEach(e=>o[e.dataset.k]=e.value);V[cur]=o;return o};
function go(k){AP=k;document.querySelectorAll('.panel').forEach(e=>{const on=e.id=='p_'+k;e.classList.toggle('on',on);if(on)[...e.children].forEach((c,i)=>c.style.animationDelay=Math.min(i*28,280)+'ms')});
 let ob;document.querySelectorAll('#nav button').forEach(b=>{const on=b.dataset.p==k;b.classList.toggle('on',on);if(on)ob=b});
 if(ob){const i=$('ind');i.style.width=ob.offsetWidth+'px';i.style.transform=`translateX(${ob.offsetLeft}px)`;$('nav').scrollTo({left:ob.offsetLeft-30,behavior:'smooth'})}}
function setFmt(x){FMT=x;document.querySelectorAll('#seg button').forEach(b=>b.classList.toggle('on',b.dataset.f==x));const b=document.querySelector('#seg .on'),th=$('thumb');th.style.width=b.offsetWidth+'px';th.style.transform=`translateX(${b.offsetLeft}px)`}
function bump(){const p=$('prev');p.classList.remove('bump');void p.offsetWidth;p.classList.add('bump');clearTimeout(bump.t);bump.t=setTimeout(()=>p.classList.remove('bump'),450)}
function applyLang(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i]').forEach(e=>e.textContent=tx(e.dataset.i));
 document.querySelectorAll('[data-ti]').forEach(e=>{e.title=tx(e.dataset.ti);e.setAttribute('aria-label',e.title)});
 $('lbf').setAttribute('href','#f-'+lang);$('lbc').textContent=lang.toUpperCase();
 $('lm').innerHTML=LG.map(([k,n],i)=>`<li role="option" tabindex="0" data-l="${k}" aria-selected="${k==lang}"><svg class="fg"><use href="#f-${k}"/></svg><span>${n}</span><svg class="ck" viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></li>`).join('')}
const closeLm=()=>{$('lm').classList.remove('open');$('lb').setAttribute('aria-expanded','false')};
function setLang(k){
 if(k==lang)return closeLm();
 const s=getS(),wasCap=TR[CAP].includes(s.c.ft);lang=k;LS.set('qlang',k);if(wasCap)s.c.ft=tx(CAP);
 applyLang();buildUI();setS(s.c);tabs();fields();go(AP);setFmt(FMT);draw();bump();closeLm();
}

// ---------- геометрия ----------
function rr(x,y,w,h,a,b=a,c=a,d=a){const m=Math.min(w,h)/2;a=Math.min(a,m);b=Math.min(b,m);c=Math.min(c,m);d=Math.min(d,m);
 return `M${f(x+a)} ${f(y)}H${f(x+w-b)}${b?`A${f(b)} ${f(b)} 0 0 1 ${f(x+w)} ${f(y+b)}`:''}V${f(y+h-c)}${c?`A${f(c)} ${f(c)} 0 0 1 ${f(x+w-c)} ${f(y+h)}`:''}H${f(x+d)}${d?`A${f(d)} ${f(d)} 0 0 1 ${f(x)} ${f(y+h-d)}`:''}V${f(y+a)}${a?`A${f(a)} ${f(a)} 0 0 1 ${f(x+a)} ${f(y)}`:''}Z`}
const oct=(x,y,s,c)=>`M${f(x+c)} ${f(y)}H${f(x+s-c)}L${f(x+s)} ${f(y+c)}V${f(y+s-c)}L${f(x+s-c)} ${f(y+s)}H${f(x+c)}L${f(x)} ${f(y+s-c)}V${f(y+c)}Z`;
const EYE={square:(x,y,s)=>rr(x,y,s,s,0),rounded:(x,y,s)=>rr(x,y,s,s,s*.28),circle:(x,y,s)=>rr(x,y,s,s,s/2),leaf:(x,y,s)=>rr(x,y,s,s,s/2,0,s/2,0),leaf2:(x,y,s)=>rr(x,y,s,s,0,s/2,0,s/2),oct:(x,y,s)=>oct(x,y,s,s*.3),dia:(x,y,s)=>`M${f(x+s/2)} ${f(y)}L${f(x+s)} ${f(y+s/2)}L${f(x+s/2)} ${f(y+s)}L${f(x)} ${f(y+s/2)}Z`};

function cells(G,th){
 const w0=logo.naturalWidth||300,h0=logo.naturalHeight||300,ar=w0/h0;
 const gw=ar>=1?G:Math.max(1,Math.round(G*ar)),gh=ar>=1?Math.max(1,Math.round(G/ar)):G,Q=6,W=gw*Q;
 const cv=document.createElement('canvas');cv.width=W;cv.height=gh*Q;
 const x=cv.getContext('2d',{willReadFrequently:true});x.drawImage(logo,0,0,W,gh*Q);
 const D=x.getImageData(0,0,W,gh*Q).data;let mn=255;
 for(let i=3;i<D.length;i+=4)if(D[i]<mn)mn=D[i];
 const out=[];
 for(let j=0;j<gh;j++)for(let i=0;i<gw;i++){
  let a=0,r=0,g=0,b=0,dk=0;
  for(let y=j*Q;y<(j+1)*Q;y++)for(let xx=i*Q;xx<(i+1)*Q;xx++){const k=(y*W+xx)*4,al=D[k+3]/255;a+=al;r+=D[k]*al;g+=D[k+1]*al;b+=D[k+2]*al;dk+=al*(1-(.299*D[k]+.587*D[k+1]+.114*D[k+2])/255)}
  if(((mn>200?dk:a)/(Q*Q))*100>=th){const w=a||1;out.push([i,j,`rgb(${Math.round(r/w)},${Math.round(g/w)},${Math.round(b/w)})`])}
 }
 return{gw,gh,out};
}

function build(px){
 const g=gv,ck=id=>$(id).checked;
 const p=T[cur][2](data());if(!p.trim())throw new Error('empty');if(p.length>2500)throw new Error('long');LP=p;
 const qr=makeQR(p,g('ec')),n=qr.n,q=+g('qt'),S=n+2*q,K=8;
 const eye=(r,c)=>(r<7&&c<7)||(r<7&&c>=n-7)||(r>=n-7&&c<7);
 const rm=new Set();let lg='',tot=0,DA=null;
 for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(qr.isDark(r,c)&&!eye(r,c))tot++;
 if(logo){
  const w0=logo.naturalWidth||300,h0=logo.naturalHeight||300,Lm=+g('ls')/100*n,ar=w0/h0,dm=ck('lt'),cd=dm?cells(+g('lg'),+g('lth')):null,cw=dm?Lm/Math.max(cd.gw,cd.gh):0;
  const lw=dm?cd.gw*cw:ar>=1?Lm:Lm*ar,lh=dm?cd.gh*cw:ar>=1?Lm/ar:Lm,lx=(S-lw)/2,ly=(S-lh)/2;
  const M=Math.ceil(S*K),cv=document.createElement('canvas');cv.width=cv.height=M;
  const cx=cv.getContext('2d',{willReadFrequently:true});
  if(dm){cx.fillStyle='#000';cd.out.forEach(([i,j])=>cx.fillRect((lx+i*cw)*K,(ly+j*cw)*K,cw*K+1,cw*K+1))}else cx.drawImage(logo,lx*K,ly*K,lw*K,lh*K);
  const A=cx.getImageData(0,0,M,M).data,box=g('lm')=='box',pp=+g('lp')/10*K;
  for(let r=0;r<n;r++)for(let c=0;c<n;c++){
   if(!qr.isDark(r,c)||eye(r,c))continue;
   const x0=(q+c)*K,y0=(q+r)*K,x1=x0+K,y1=y0+K;
   if(x1<lx*K-pp||x0>(lx+lw)*K+pp||y1<ly*K-pp||y0>(ly+lh)*K+pp)continue;
   let hit=false;
   for(let y=Math.max(0,Math.floor(y0-pp));y<Math.min(M,Math.ceil(y1+pp))&&!hit;y++)
    for(let x=Math.max(0,Math.floor(x0-pp));x<Math.min(M,Math.ceil(x1+pp));x++){
     const op=box?(x>=lx*K&&x<(lx+lw)*K&&y>=ly*K&&y<(ly+lh)*K):A[(y*M+x)*4+3]>24;
     if(!op)continue;
     const X=x+.5,Y=y+.5,dx=Math.max(x0-X,0,X-x1),dy=Math.max(y0-Y,0,Y-y1);
     if(box?(dx<=pp&&dy<=pp):(dx*dx+dy*dy<=pp*pp)){hit=true;break}
    }
   if(hit)rm.add(r*n+c)}
  if(dm)DA={cd,cw,lx,ly};else lg=`<image href="${lurl}" x="${f(lx)}" y="${f(ly)}" width="${f(lw)}" height="${f(lh)}"/>`;
 }
 const dk=(r,c)=>r>=0&&c>=0&&r<n&&c<n&&qr.isDark(r,c)&&!rm.has(r*n+c)&&!eye(r,c);
 const st=g('ds'),R=+g('rn')/100*.5,sc=+g('sc')/100,o=(1-sc)/2;let d='';
 if(st=='hbar'||st=='vbar'){
  const hz=st=='hbar';
  for(let a=0;a<n;a++){let b=0;
   while(b<n){const r=hz?a:b,c=hz?b:a;if(!dk(r,c)){b++;continue}
    let e=b;while(e+1<n&&dk(hz?a:e+1,hz?e+1:a))e++;
    const L=e-b+1,x=q+(hz?b:a),y=q+(hz?a:b),ra=R*sc;
    d+=hz?rr(x,y+o,L,sc,ra):rr(x+o,y,sc,L,ra);b=e+1}}
 }else for(let r=0;r<n;r++)for(let c=0;c<n;c++){
  if(!dk(r,c))continue;const x=q+c,y=q+r,X=x+o,Y=y+o,h=sc/2,rs=R*sc;
  if(st=='square')d+=rr(X,Y,sc,sc,0);
  else if(st=='soft')d+=rr(X,Y,sc,sc,rs);
  else if(st=='classy')d+=rr(X,Y,sc,sc,rs,0,rs,0);
  else if(st=='dots'){const e=sc*.46;d+=`M${f(x+.5-e)} ${f(y+.5)}a${f(e)} ${f(e)} 0 1 0 ${f(2*e)} 0a${f(e)} ${f(e)} 0 1 0 ${f(-2*e)} 0z`}
  else if(st=='diamond')d+=`M${f(x+.5)} ${f(y+.5-h)}L${f(x+.5+h)} ${f(y+.5)}L${f(x+.5)} ${f(y+.5+h)}L${f(x+.5-h)} ${f(y+.5)}Z`;
  else if(st=='plus'){const w=sc/3;d+=`M${f(X+w)} ${f(Y)}h${f(w)}v${f(w)}h${f(w)}v${f(w)}h${f(-w)}v${f(w)}h${f(-w)}v${f(-w)}h${f(-w)}v${f(-w)}h${f(w)}z`}
  else{const u=dk(r-1,c),dn=dk(r+1,c),l=dk(r,c-1),ri=dk(r,c+1);
   d+=rr(X,Y,sc,sc,!u&&!l?rs:0,!u&&!ri?rs:0,!dn&&!ri?rs:0,!dn&&!l?rs:0)}
 }
 const ex=[[0,0],[0,n-7],[n-7,0]].map(([r,c])=>[q+c,q+r]),fe=EYE[g('fs')],be=EYE[g('bs')];
 const fp=ex.map(([x,y])=>fe(x,y,7)+fe(x+1,y+1,5)).join(''),bp=ex.map(([x,y])=>be(x+2,y+2,3)).join('');
 const gt=g('gt'),fill=gt=='solid'?g('c1'):'url(#g)',ef=ck('es')?fill:g('ef'),eb=ck('es')?fill:g('eb');
 const a=+g('an')*Math.PI/180,hh=S/2,dx=Math.cos(a)*hh,dy=Math.sin(a)*hh;
 const stops=`<stop offset="0" stop-color="${g('c1')}"/><stop offset="1" stop-color="${g('c2')}"/>`;
 const defs=gt=='linear'?`<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${f(hh-dx)}" y1="${f(hh-dy)}" x2="${f(hh+dx)}" y2="${f(hh+dy)}">${stops}</linearGradient></defs>`
  :gt=='radial'?`<defs><radialGradient id="g" gradientUnits="userSpaceOnUse" cx="${hh}" cy="${hh}" r="${f(hh*1.15)}">${stops}</radialGradient></defs>`:'';
 const brx=S*+g('br')/100,bg=ck('bt')?'':`<rect width="${S}" height="${S}" rx="${f(brx)}" fill="${g('bc')}"/>`;
 const dots=({cd,cw,lx,ly})=>{
  const k=g('lk'),kk=k=='qr'?(['square','dots','diamond','soft'].includes(st)?st:'soft'):k,cm=g('lcm'),own=cm=='own'?g('lcc'):fill;
  const sh=(i,j)=>{const x=lx+i*cw,y=ly+j*cw,e=cw*.46,h=cw/2;
   return kk=='square'?rr(x,y,cw,cw,0):kk=='dots'?`M${f(x+h-e)} ${f(y+h)}a${f(e)} ${f(e)} 0 1 0 ${f(2*e)} 0a${f(e)} ${f(e)} 0 1 0 ${f(-2*e)} 0z`
   :kk=='diamond'?`M${f(x+h)} ${f(y)}L${f(x+cw)} ${f(y+h)}L${f(x+h)} ${f(y+cw)}L${f(x)} ${f(y+h)}Z`:rr(x+cw*.04,y+cw*.04,cw*.92,cw*.92,cw*.25)};
  const ce=kk=='square'?' shape-rendering="crispEdges"':'';
  return cm=='orig'?cd.out.map(([i,j,c])=>`<path d="${sh(i,j)}" fill="${c}"${ce}/>`).join(''):`<path d="${cd.out.map(([i,j])=>sh(i,j)).join('')}" fill="${own}"${ce}/>`};
 let body=`${defs}${bg}<path d="${d}" fill="${fill}"${st=='square'&&sc==1?' shape-rendering="crispEdges"':''}/><path d="${fp}" fill="${ef}" fill-rule="evenodd"/><path d="${bp}" fill="${eb}"/>${DA?dots(DA):lg}`;
 let W=S,H=S;
 if(ck('fr')){const r=frame(body,S,brx);body=r.body;W=r.W;H=r.H}
 const sz=px||512;
 return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f(W)} ${f(H)}" width="${sz}" height="${Math.round(sz*H/W)}">${body}</svg>`,n,W,H,pct:tot?Math.round(rm.size/tot*100):0};
}


// ---------- рамки ----------
function frame(body,S,brx){
 const g=gv,fc=g('fc'),tc=g('ftc'),t=g('ft').replace(/[\u0000-\u001f\u007f]/g,'').trim(),k=g('fst'),b=S*+g('fw')/100,sw=b*.4,bgc=$('bt').checked?'none':g('bc'),lh=t?S*.16:0;
 const F='font-family="Segoe UI,Arial,sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="central"';
 const tt=(x,y,w,fs,c)=>t?`<text x="${f(x)}" y="${f(y)}" ${F} font-size="${f(Math.min(fs,w*.9/(t.length*.62)))}" fill="${c}">${esc(t)}</text>`:'';
 const G=(x,y)=>`<g transform="translate(${f(x)} ${f(y)})">${body}</g>`;
 let W,H,o;
 if(k=='solid'||k=='top'){
  W=S+2*b;H=W+lh;const qy=k=='top'?b+lh:b;
  o=`<path d="${rr(0,0,W,H,b*1.6)}${rr(b,qy,S,S,brx)}" fill="${fc}" fill-rule="evenodd"/>${G(b,qy)}${tt(W/2,k=='top'?(b+lh)/2:S+b+(b+lh)/2,W,lh*.5,tc)}`;
 }else if(k=='corners'){
  const p=b*1.4,m=sw*.7,c=S*.16;W=S+2*p;H=W+lh;const e=W-m;
  o=`<path d="M${f(m)} ${f(m+c)}V${f(m)}H${f(m+c)}M${f(e-c)} ${f(m)}H${f(e)}V${f(m+c)}M${f(e)} ${f(e-c)}V${f(e)}H${f(e-c)}M${f(m+c)} ${f(e)}H${f(m)}V${f(e-c)}" fill="none" stroke="${fc}" stroke-width="${f(sw*1.3)}" stroke-linecap="round" stroke-linejoin="round"/>${G(p,p)}${tt(W/2,W+lh/2,W,lh*.5,fc)}`;
 }else if(k=='pill'){
  const p=b*1.2,ph=S*.13,fs=ph*.5;W=S+2*p;const cy=W-sw/2,pw=Math.min(W*.9,t.length*fs*.64+ph*1.4);H=t?cy+ph/2:W;
  o=`<path d="${rr(sw/2,sw/2,W-sw,W-sw,p*1.4)}" fill="${bgc}" stroke="${fc}" stroke-width="${f(sw)}"/>${G(p,p)}`+(t?`<path d="${rr(W/2-pw/2,cy-ph/2,pw,ph,ph/2)}" fill="${fc}"/>${tt(W/2,cy,pw,fs,tc)}`:'');
 }else{
  const p=b*(k=='double'?1.5:1.1),off=k=='shadow'?b*.9:0,Wf=S+2*p,Hf=Wf+lh,r0=p*1.4;W=Wf+off;H=Hf+off;
  const fl=k=='shadow'&&bgc=='none'?'#fff':bgc,da=k=='dashed'?` stroke-dasharray="${f(sw*2.2)} ${f(sw*1.6)}" stroke-linecap="round"`:'';
  o=(k=='shadow'?`<path d="${rr(off,off,Wf,Hf,r0)}" fill="${fc}"/>`:'')
   +`<path d="${rr(sw/2,sw/2,Wf-sw,Hf-sw,r0)}" fill="${fl}" stroke="${fc}" stroke-width="${f(sw)}"${da}/>`
   +(k=='double'?`<path d="${rr(sw*2,sw*2,Wf-sw*4,Hf-sw*4,r0*.7)}" fill="none" stroke="${fc}" stroke-width="${f(sw*.45)}"/>`:'')
   +G(p,p)+tt(Wf/2,S+p+(p+lh)/2,Wf,lh*.5,fc);
 }
 return{body:o,W,H};
}

// ---------- отрисовка и сохранение ----------
function draw(){
 const st=$('st');
 document.querySelectorAll('[data-dep]').forEach(l=>{const d=l.dataset.dep,neg=d[0]=='!',v=$(neg?d.slice(1):d).checked;l.hidden=neg?v:!v});
 Object.keys(C).forEach(id=>{if(C[id][1]=='r')$('v_'+id).textContent=$(id).value});
 try{const r=build(0);const im=new Image();im.alt='QR';im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(r.svg);$('prev').replaceChildren(im);const w=logo&&r.pct>20;st.className=w?'w':'';
  st.textContent=`${r.n}×${r.n} ${tx('модулей')}`+(logo?`, ${tx('скрыто')} ${r.pct}% ${tx('точек')}`+(w?'. '+tx('Может не сканироваться: уменьшите логотип'):''):'')}
 catch(e){$('prev').replaceChildren();st.className='w';st.textContent=tx(e.message=='empty'?'Введите данные для QR-кода':'Слишком много данных, сократите текст')}
 {const s=getS();LS.set('qrs',{c:s.c,fmt:s.fmt,sz:s.sz})}
}
async function raster(fmt,px){
 const r=build(px),im=new Image(),h=Math.round(px*r.H/r.W);
 await new Promise((ok,no)=>{im.onload=ok;im.onerror=no;im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(r.svg)});
 const c=document.createElement('canvas');c.width=px;c.height=h;const x=c.getContext('2d');
 if(fmt=='jpg'){x.fillStyle='#fff';x.fillRect(0,0,px,h)}
 x.drawImage(im,0,0,px,h);
 return new Promise(ok=>c.toBlob(ok,'image/'+(fmt=='jpg'?'jpeg':fmt),.95));
}
const blobOf=fmt=>{const px=Math.max(128,Math.min(4096,+$('sz').value||1024));return fmt=='svg'?new Blob([build(px).svg],{type:'image/svg+xml'}):raster(fmt,px)};
let tt0;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('on');clearTimeout(tt0);tt0=setTimeout(()=>t.classList.remove('on'),2400)}
async function dl(){try{const b=await blobOf(FMT),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='qr-code.'+FMT;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);
 const d=$('dl');d.classList.remove('ok');void d.offsetWidth;d.classList.add('ok');toast(`${tx('Сохранено')}: qr-code.${FMT}`)}catch(e){toast(tx('Не удалось сохранить файл'))}}
async function copy(){try{await navigator.clipboard.write([new ClipboardItem({'image/png':await blobOf('png')})]);toast(tx('Картинка скопирована'))}catch(e){toast(tx('Не удалось скопировать'))}}
async function check(){try{const bm=await createImageBitmap(await raster('png',640)),r=await new BarcodeDetector({formats:['qr_code']}).detect(bm);
 toast(tx(!r.length?'Не читается: уменьшите логотип или поднимите коррекцию':r[0].rawValue==LP?'QR читается, данные совпадают':'Читается, но данные отличаются'))}catch(e){toast(tx('Не удалось проверить'))}}
function preset(i){const p=PR[i];$('c1').value=p[1];$('c2').value=p[2];$('gt').value=p[3];$('bc').value=p[4];$('bt').checked=false;$('es').checked=true;$('ef').value=$('eb').value=p[1];draw();bump()}
function rnd(){['ds','fs','bs'].forEach(id=>{const o=$(id).options;$(id).value=o[Math.random()*o.length|0].value});$('sc').value=70+Math.random()*30|0;$('rn').value=40+Math.random()*60|0;preset(Math.random()*PR.length|0)}
function reset(){
 Object.keys(C).forEach(id=>C[id][1]=='c'?$(id).checked=C[id][3]:$(id).value=defOf(id));
 logo=null;lurl='';$('lf').value='';$('lctl').hidden=true;V={text:{v:'https://example.com'}};cur='text';$('sz').value=1024;
 tabs();fields();go('data');setFmt('png');draw();bump();toast(tx('Настройки сброшены'));
}
// адрес вкладки: сначала активная вкладка (activeTab), при необходимости запрашиваем разрешение tabs
function curTab(){
 const ok=u=>/^https?:/.test(u||''),use=u=>{cur='text';V.text={v:u};tabs();fields();draw();bump()},fail=()=>toast(tx('Адрес вкладки недоступен'));
 chrome.tabs.query({active:true,lastFocusedWindow:true},ts=>{
  const u=ts&&ts[0]&&ts[0].url;if(ok(u))return use(u);
  chrome.permissions.request({permissions:['tabs']},g=>{if(!g)return fail();
   chrome.windows.getAll({populate:true,windowTypes:['normal']},ws=>{const l=[];(ws||[]).sort((a,b)=>b.focused-a.focused).forEach(w=>(w.tabs||[]).filter(x=>x.active).forEach(x=>l.push(x)));
    const t=l.find(x=>ok(x.url));t?use(t.url):fail()})})});
}
// загрузка логотипа: проверка типа и размера, затем перерисовка в PNG (убирает скрипты и метаданные)
function loadLogo(file){
 const bad=()=>{$('lf').value='';toast(tx('Файл не подходит: PNG, JPG, WEBP или SVG до 5 МБ'))};
 if(!/^image\/(png|jpeg|webp|gif|bmp|svg\+xml)$/.test(file.type)||file.size>5e6)return bad();
 const u=URL.createObjectURL(file),im=new Image();
 im.onerror=()=>{URL.revokeObjectURL(u);bad()};
 im.onload=()=>{URL.revokeObjectURL(u);const w0=im.naturalWidth||512,h0=im.naturalHeight||512,m=Math.max(w0,h0),k=file.type=='image/svg+xml'?1024/m:Math.min(1,1024/m),cv=document.createElement('canvas');
  cv.width=Math.max(1,Math.round(w0*k));cv.height=Math.max(1,Math.round(h0*k));cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);
  const d=cv.toDataURL('image/png'),n=new Image();n.onload=()=>{logo=n;lurl=d;$('ec').value='H';$('lctl').hidden=false;draw();bump()};n.src=d};
 im.src=u;
}

// ---------- события ----------
$('nav').onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.p)};
$('pn').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.i)preset(+b.dataset.i);
 else if(b.dataset.t){data();cur=b.dataset.t;tabs();fields();draw();bump()}
 else if(b.id=='cu')curTab();
 else if(b.id=='lx'){logo=null;lurl='';$('lf').value='';$('lctl').hidden=true;draw();bump()}});
$('pn').addEventListener('input',e=>{if(e.target.id!='lf')draw()});
$('pn').addEventListener('change',e=>{if(e.target.id=='lf'){const fl=e.target.files[0];if(fl)loadLogo(fl)}else{draw();bump()}});
$('seg').onclick=e=>{const b=e.target.closest('button');if(b){setFmt(b.dataset.f);draw()}};
$('dl').onclick=dl;$('cp').onclick=copy;$('ck').onclick=check;$('rd').onclick=rnd;
$('rs').onclick=()=>{const i=$('rs').firstElementChild;i.classList.remove('spin');void i.getBoundingClientRect();i.classList.add('spin');reset()};
if(!('BarcodeDetector' in window))$('ck').hidden=true;
$('xp').onclick=()=>{const u='popup.html?full=1';EXT&&chrome.windows?chrome.windows.create({url:u,type:'popup',width:1060,height:780}):window.open(u,'_blank','width=1060,height=780,noopener,noreferrer');window.close()};
$('th').onclick=()=>{const t=document.documentElement.dataset.theme=='dark'?'light':'dark';document.documentElement.dataset.theme=t;LS.set('qth',t)};
$('lb').onclick=e=>{e.stopPropagation();const o=$('lm').classList.toggle('open');$('lb').setAttribute('aria-expanded',o)};
$('lm').onclick=e=>{const li=e.target.closest('li');if(li)setLang(li.dataset.l)};
$('lm').onkeydown=e=>{if((e.key=='Enter'||e.key==' ')&&e.target.dataset.l){e.preventDefault();setLang(e.target.dataset.l)}};
document.addEventListener('click',closeLm);document.addEventListener('keydown',e=>{if(e.key=='Escape')closeLm()});
window.addEventListener('load',()=>{go(AP);setFmt(FMT)});

// ---------- старт ----------
const S0=LS.get('qrs');
if(S0.c&&TR[CAP].includes(S0.c.ft))S0.c.ft=tx(CAP);
applyLang();buildUI();
if(S0.c){setS(S0.c);if(S0.sz)$('sz').value=S0.sz}
const qth=LS.get('qth');
document.documentElement.dataset.theme=qth==='dark'||(qth!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light';
tabs();fields();go('data');setFmt(['png','jpg','webp','svg'].includes(S0.fmt)?S0.fmt:'png');draw();
