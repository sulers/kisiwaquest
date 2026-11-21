const WA='255617396820',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
$$('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const hs=$('.slides');
if(hs){const hero=hs.parentElement,dots=$('.dots');let i=0,t,x0;
[P.b1,P.s1,P.b2,P.s2].forEach((id,n)=>{hs.insertAdjacentHTML('beforeend',`<div class="slide" style="background-image:url(${U(id,1600)})"></div>`);dots.insertAdjacentHTML('beforeend',`<button aria-label="Photo ${n+1}"></button>`)});
const S=$$('.slide'),D=$$('.dots button');
const go=n=>{i=(n+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle('on',k==i));D.forEach((d,k)=>d.classList.toggle('on',k==i));clearInterval(t);if(!still)t=setInterval(()=>go(i+1),5000)};
$('.prev').onclick=()=>go(i-1);$('.next').onclick=()=>go(i+1);D.forEach((d,k)=>d.onclick=()=>go(k));
hero.ontouchstart=e=>x0=e.touches[0].clientX;hero.ontouchend=e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)go(i+(d<0?1:-1))};go(0)}
const strip=$('#strip');
if(strip){const m=$('#modal'),price=p=>`${p.pre||''}$${p.price} ${p.unit}`;
const nudge=()=>{if(still)return;strip.scrollTo({left:120,behavior:'smooth'});setTimeout(()=>strip.scrollTo({left:0,behavior:'smooth'}),800)};
const render=cat=>{strip.innerHTML=PACKAGES.filter(p=>p.cat==cat).map(p=>`<article class="card" style="background-image:linear-gradient(transparent 35%,rgba(8,40,24,.92)),url(${U(p.img)})"><span class="pill">${p.days||'Day tour'}</span><div class="cb"><h3>${p.title}</h3><p>${p.desc}</p><strong>${price(p)}</strong><div class="row"><a class="btn gold sm" target="_blank" rel="noopener" href="${wa('Hi Kisiwa Quest, I\'m interested in: '+p.title)}">Book on WhatsApp</a><button class="btn ghost sm" data-id="${p.id}">Details</button></div></div></article>`).join('');
$('#note').textContent=cat=='zan'?'Zanzibar tour prices are for 2 people (a couple).':'Safari prices are per person.'};
render('zan');
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.toggle('on',x==b));render(b.dataset.cat);nudge()});
$('.arr.l').onclick=()=>strip.scrollBy({left:-320,behavior:'smooth'});$('.arr.r').onclick=()=>strip.scrollBy({left:320,behavior:'smooth'});
let dn,sx,sl;strip.onpointerdown=e=>{if(e.pointerType=='mouse'&&!e.target.closest('a,button')){dn=1;sx=e.clientX;sl=strip.scrollLeft;strip.classList.add('drag')}};
addEventListener('pointermove',e=>{if(dn)strip.scrollLeft=sl-(e.clientX-sx)});addEventListener('pointerup',()=>{dn=0;strip.classList.remove('drag')});
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){nudge();o.disconnect()}},{threshold:.6}).observe(strip);
const L=(h,a)=>a?`<h4>${h}</h4><ul>${a.map(v=>`<li>${v}</li>`).join('')}</ul>`:'';
strip.onclick=e=>{const b=e.target.closest('[data-id]');if(!b)return;const p=PACKAGES.find(x=>x.id==b.dataset.id);
m.innerHTML=`<button class="x" aria-label="Close">×</button><img src="${U(p.img,900)}" alt=""><div class="mb"><h3>${p.title}</h3><p>${p.desc}</p><p><b>${price(p)}</b>${p.from?`. Starts from ${p.from}.`:''}</p>${p.rows?`<table>${p.rows.map(r=>`<tr><td>${r[0]}</td><td>$${r[1]}</td></tr>`).join('')}</table><p class="small">${p.note}</p>`:''}${L('Itinerary',p.itin)}${L('Included',p.inc)}${L('Not included',p.exc)}<a class="btn gold" target="_blank" rel="noopener" href="${wa('Hi Kisiwa Quest, I\'m interested in: '+p.title)}">Book on WhatsApp</a></div>`;m.showModal()};
m.onclick=e=>{if(e.target==m||e.target.closest('.x'))m.close()};
const f=$('#form');f.tour.innerHTML='<option>Not sure yet</option>'+PACKAGES.map(p=>`<option>${p.title}</option>`).join('');
f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));location.href=`mailto:kisiwaquest@gmail.com?subject=${encodeURIComponent('Booking enquiry: '+v.tour)}&body=${encodeURIComponent(`Name: ${v.name}\nPhone: ${v.phone}\nTour: ${v.tour}\nDate: ${v.date}\n\n${v.msg}`)}`}}
const g=$('#grid');if(g)g.innerHTML=Object.values(P).map(id=>`<img loading="lazy" src="${U(id,700)}" alt="">`).join('');
