(()=>{"use strict";const t=function(t){const e=document.createElement("div");e.setAttribute("id","zacheta"),e.classList.add("content");const n=document.createElement("div");n.setAttribute("id","socjale");const d=document.createElement("div");d.setAttribute("id","tiktok"),d.classList.add("socjale");const i=document.createElement("div");i.setAttribute("id","fb"),i.classList.add("socjale");const a=document.createElement("div");a.setAttribute("id","yt"),a.classList.add("socjale");const c=document.createElement("div");c.setAttribute("id","glowna");const s=document.createElement("div");s.setAttribute("id","slogan"),s.textContent+="PIZZERINO PIZZA";const o=document.createElement("div");o.setAttribute("id","zachetaNapis"),o.classList.add("napisGlowna"),o.innerHTML+="głodny?<br>Nie czekaj";const l=document.createElement("button");l.setAttribute("id","order"),l.classList.add("basicButton"),l.textContent+="Zamów",t.appendChild(e),e.appendChild(n),n.appendChild(d),n.appendChild(i),n.appendChild(a),e.appendChild(c),c.appendChild(s),c.appendChild(o),c.appendChild(l)},e=function(t){const e=document.createElement("div");e.setAttribute("id","opis"),e.classList.add("content");const n=document.createElement("div");n.setAttribute("id","historia");const d=document.createElement("div");d.setAttribute("id","tytulGlowna"),d.classList.add("tytul"),d.textContent+="Historia Pizzerino";const i=document.createElement("div");i.setAttribute("id","historiaTeskt"),i.classList.add("ZwyklyTeskt"),i.textContent+="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi magna, rutrum vitae nibh sed, consequat pharetra libero. Donec eleifend finibus risus, eu pellentesque massa posuere vitae. Suspendisse efficitur enim nisi, ac viverra risus semper et. Fusce id ligula in velit tempus pulvinar. Nunc sit amet pretium dui. Nam et molestie ligula, a euismod purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at dui ac diam aliquet egestas. Proin iaculis pulvinar nisl nec aliquam. Ut id est ut dolor tristique imperdiet ac nec lectus. Suspendisse vitae vulputate eros, id viverra quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec dui arcu. ";const a=document.createElement("button");a.setAttribute("id","czytajWiecej"),a.classList.add("basicButton"),a.textContent+="Czytaj więcej";const c=document.createElement("div");c.setAttribute("id","zdjecia");const s=document.createElement("img");s.src="https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",s.setAttribute("id","dlugieZdjecie"),s.classList.add("zdjeciehistoria");const o=document.createElement("div");o.setAttribute("id","maleZdjecia");const l=document.createElement("img");l.src="https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",l.classList.add("zdjeciehistoria");const m=document.createElement("img");m.src="https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",m.classList.add("zdjeciehistoria"),t.appendChild(e),e.appendChild(n),n.appendChild(d),n.appendChild(i),n.appendChild(a),e.appendChild(c),c.appendChild(s),c.appendChild(o),o.appendChild(l),o.appendChild(m)},n=function(t){const e=document.createElement("div");e.setAttribute("id","menuZacheta"),e.classList.add("content");const n=document.createElement("div");n.classList.add("tytul"),n.textContent+="PIZZERINO PIZZA";const d=document.createElement("div");d.classList.add("napisglowna"),d.textContent+="Zobacz nasze menu";const i=document.createElement("div");i.setAttribute("id","PrzykladMenu");const a=[],c=[],s=[],o=[],l=[],m=[];t.appendChild(e),e.appendChild(n),e.appendChild(d),e.appendChild(i);for(let t=0;t<4;t++){const e=document.createElement("div");a[t]=document.createElement("div"),a[t].classList.add("MenuItem"),c[t]=document.createElement("img"),c[t].classList.add("MenuPicture"),c[t].src="https://i.pinimg.com/originals/bd/c6/78/bdc6784d9f07e53b1098541cd02da771.png",s[t]=document.createElement("div"),s[t].classList.add("ItemInfo"),o[t]=document.createElement("div"),o[t].classList.add("itemName"),o[t].textContent+="zupa z buraka",l[t]=document.createElement("div"),l[t].classList.add("ItemPrice"),l[t].textContent+="12,99 zł",m[t]=document.createElement("div"),m[t].classList.add("itemDesc"),m[t].textContent+="mniam mniam",i.appendChild(a[t]),a[t].appendChild(c[t]),a[t].appendChild(e),e.appendChild(s[t]),s[t].appendChild(o[t]),s[t].appendChild(l[t]),e.appendChild(m[t])}const r=document.createElement("button");r.classList.add("basicButton"),r.textContent+="MENU",e.appendChild(r)},d=document.querySelector("body"),i=document.createElement("div");function a(){const t=document.getElementById("content");for(;t.firstChild;)t.firstChild.remove()}i.setAttribute("id","content"),d.appendChild(i),console.log(t),t(i),e(i),n(i),function(t){const e=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div");i.setAttribute("id","bottom");const a=document.createElement("div");a.setAttribute("id","nawigacja");const c=document.createElement("div");c.setAttribute("id","menu"),c.classList.add("navigation"),c.textContent+="MENU";const s=document.createElement("div");s.setAttribute("id","about"),s.classList.add("navigation"),s.textContent+="ABOUT";const o=document.createElement("div");o.setAttribute("id","contact"),o.classList.add("navigation"),o.textContent+="CONTACT";const l=document.createElement("div");l.setAttribute("id","order"),l.classList.add("navigation"),l.textContent+="ORDER";const m=document.createElement("div");m.setAttribute("id","cookies"),m.classList.add("navigation"),m.textContent+="COOKIES";const r=document.createElement("div");r.setAttribute("id","szykiKontakt");const u=document.createElement("div");u.textContent+="telefon";const p=document.createElement("a");p.setAttribute("href","+48000000000"),p.textContent+="📞000 000 000";const C=document.createElement("div");C.textContent+="Email";const h=document.createElement("a");h.setAttribute("href","email@emial.com"),h.textContent+="✉️email.com";const E=document.createElement("div");E.textContent+="Lokalizacja";const v=document.createElement("a");v.setAttribute("href","https://www.google.com/maps/place/Praça+do+Comércio/@38.707287,-9.1389416,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347a30a54b63:0x30532f5f6b28e044!8m2!3d38.7072828!4d-9.1363613!16zL20vMGczbDNz?entry=ttu"),v.textContent+="ul. adresowa 11, adresowo 00-120";const b=document.createElement("div");b.setAttribute("id","GodzinyOtwarcia");const L=document.createElement("div");L.classList.add("napisGlowna"),L.textContent+="Zapraszamy";const g=document.createElement("div"),A=document.createElement("div");A.classList.add("pogrubione");const z=document.createElement("div"),x=document.createElement("div");x.classList.add("tekstdol"),x.textContent+="poniedzialek-piatek";const f=document.createElement("div");f.textContent+="10:00-23:00";const j=document.createElement("div"),y=document.createElement("div");y.classList.add("tekstdol"),y.textContent+="sobota";const k=document.createElement("div");k.textContent+="8:00-23:00";const w=document.createElement("div"),I=document.createElement("div");I.setAttribute("id","otwarteEmoji"),I.classList.add("pogrubione"),I.textContent+="🟢 Otwarte";const Z=document.createElement("div");Z.setAttribute("id","OtwarteTeskt"),Z.classList.add("tekstdol"),Z.textContent+="Dzisiaj jest otwarte do godziny XX. Zapraszamy",t.appendChild(i),i.appendChild(a),a.appendChild(c),a.appendChild(s),a.appendChild(o),a.appendChild(l),a.appendChild(m),i.append(r),r.appendChild(e),e.appendChild(u),e.appendChild(p),r.appendChild(n),n.appendChild(C),n.appendChild(h),r.appendChild(d),d.appendChild(E),d.appendChild(v),i.appendChild(b),b.appendChild(L),b.appendChild(g),g.appendChild(A),A.appendChild(z),z.appendChild(x),z.appendChild(f),A.appendChild(j),j.appendChild(y),j.appendChild(k),b.appendChild(w),w.appendChild(I),w.appendChild(Z)}(d),document.getElementById("home").addEventListener("click",(()=>{a(),t(i),e(i),n(i)})),document.getElementById("menu").addEventListener("click",(()=>{a(),n(i)})),document.getElementById("about").addEventListener("click",(()=>{a(),e(i)})),document.getElementById("contact").addEventListener("click",(()=>{a()}))})();