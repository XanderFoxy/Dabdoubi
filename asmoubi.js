/* MODEL-REMINDER: NUR BILD-ARRAYS BEI UPDATES ANPASSEN. */
const prefix = "https://xanderfoxy.github.io/Dabdoubi/";
const fImgs = [prefix+"IMG_7319.jpeg",prefix+"IMG_7320.jpeg",prefix+"IMG_7321.jpeg",prefix+"IMG_7323.jpeg",prefix+"IMG_7324.jpeg"];
const allDesires = [prefix+"ior5FlF3.jpeg",prefix+"JuE5ywM3.jpeg",prefix+"7ylO8SbO.jpeg",prefix+"reVuied4.jpeg",prefix+"wyXz6MhB.jpeg",prefix+"m6l7tlxB.jpeg",prefix+"OJX7O4Fr.jpeg",prefix+"4JVKv09e.jpeg",prefix+"1xOOKJLC.jpeg",prefix+"Facetune_19-11-2025-19-56-41.jpeg",prefix+"ezf2Tv5I.jpeg",prefix+"ql8RdbJd.jpeg",prefix+"iz2rF6Ij.jpeg",prefix+"W1mDxlcp.jpeg",prefix+"XZ3icISY.jpeg",prefix+"ffFONwpT.jpeg",prefix+"tlzPDVhj.jpeg",prefix+"SMiPFnfR.jpeg",prefix+"ErdqXcJI.jpeg",prefix+"qJZbWC3S.jpeg",prefix+"vPYAotQA.jpeg",prefix+"VX0lnX6g.jpeg",prefix+"IyRcZtkA.jpeg",prefix+"GlXnTkeo.jpeg",prefix+"6biiHT6s.jpeg",prefix+"gQkLuhS6.jpeg",prefix+"FXDCBl3h.jpeg",prefix+"X17hRNIE.jpeg",prefix+"N4zNC8G0.jpeg",prefix+"INgUi8jX.jpeg",prefix+"8nRaIrlI.jpeg",prefix+"EFw6E4yW.jpeg",prefix+"CBFT20xr.jpeg",prefix+"KE7XkyKt.jpeg",prefix+"qxEU7X6x.jpeg",prefix+"c4rbD2M1.jpeg",prefix+"2kRjl0Wt.jpeg",prefix+"kXgCsero.jpeg",prefix+"rtNC43KZ.jpeg",prefix+"4zquuQEo.jpeg",prefix+"YjCBzA9Q.jpeg",prefix+"WGWDVqJ0.jpeg",prefix+"kjAxz9eK.jpeg",prefix+"zDsgQfU3.jpeg",prefix+"DYMdPKOD.jpeg",prefix+"IMG_5070.png",prefix+"IMG_5409.png",prefix+"IMG_5416.png",prefix+"IMG_5730.png",prefix+"IMG_5036.png",prefix+"IMG_6054.png",prefix+"IMG_6082.png",prefix+"IMG_6114.png",prefix+"IMG_7193.png",prefix+"IMG_4485.jpeg",prefix+"IMG_5948.png",prefix+"IMG_4709.png",prefix+"IMG_5413.png",prefix+"IMG_4708.png",prefix+"IMG_4705.png",prefix+"IMG_4657.png",prefix+"IMG_6115.png",prefix+"IMG_4501.jpeg",prefix+"IMG_5733.png",prefix+"IMG_4540.png",prefix+"IMG_4555.png",prefix+"IMG_4637.png",prefix+"IMG_4703.png",prefix+"IMG_4992.png",prefix+"IMG_5037.png",prefix+"IMG_5075.png",prefix+"IMG_5279.png",prefix+"IMG_5665.png",prefix+"IMG_5036.png",prefix+"IMG_5051.png",prefix+"IMG_6253.png",prefix+"IMG_6299.png",prefix+"IMG_6504.png",prefix+"IMG_6510.png",prefix+"IMG_6512.png",prefix+"IMG_6514.png",prefix+"IMG_6517.png",prefix+"IMG_6518.png",prefix+"IMG_6519.png",prefix+"IMG_6539.png",prefix+"IMG_6554.png",prefix+"IMG_6745.png",prefix+"IMG_7056.png",prefix+"IMG_4418.webp",prefix+"IMG_7138.webp"];

const data = {
  fotos: { title: "Fotos", series: [{ name: "Familie", img: fImgs[0], images: fImgs }, { name: "Desires", img: allDesires[0], images: allDesires }, { name: "Baby Fox", img: null, images: [] }, { name: "Döbeln", img: null, images: [] }, { name: "Weihnachten", img: prefix+"IMG_0725.jpeg", images: [prefix+"IMG_0725.jpeg"] }, { name: "Italien", img: null, images: [] }] },
  rezepte: { title: "Rezepte", series: [{ name: "Arabisch", img: prefix+"Rezepte/IMG_0193.jpeg", images: [prefix+"Rezepte/IMG_0193.jpeg",prefix+"Rezepte/IMG_0164.jpeg",prefix+"Rezepte/IMG_0166.jpeg"] }, { name: "All around the World", img: prefix+"Rezepte/IMG_0167.jpeg", images: [prefix+"Rezepte/IMG_0167.jpeg",prefix+"Rezepte/IMG_0169.jpeg", prefix+"Rezepte/IMG_0700.png"] }, { name: "Lieblingsessen", img: null, images: [] }, { name: "Deutsch", img: null, images: [] }, { name: "Weihnachten", img: prefix+"Rezepte/IMG_0197.jpeg", images: [prefix+"Rezepte/IMG_0197.jpeg"] }] },
  comics: { title: "Comics", series: [{ name: "Asmaa & Foxy", img: prefix+"Comics/IMG_1494.jpeg", images: [prefix+"Comics/IMG_1494.jpeg",prefix+"Comics/IMG_1135.jpeg"] }, { name: "Garfield", img: prefix+"Comics/IMG_0356.png", images: [prefix+"Comics/IMG_0356.png", prefix+"Comics/IMG_0427.png", prefix+"Comics/IMG_0483.png", prefix+"Comics/IMG_0484.png"] }, { name: "Featuring Foxy", img: prefix+"Comics/IMG_0685.png", images: [prefix+"Comics/IMG_0685.png"] }] }
};

let tracks = [{ title: "Weihnacht", src: prefix+"Musik/Weihnacht.mp3", cover: prefix+"Bilder/IMG_1840.jpeg" }, { title: "Ein Leben Lang", src: prefix+"Musik/One Day In Rome - Ein Leben Lang.mp3", cover: fImgs[0] }];
let audio = new Audio(); let trIdx = 0; let curG = []; let ssIdx = 0; let isSS = false; let isShuf = false; let ssT = null; let mShuf = false; let repMode = 0;

window.onload = () => { loadT(0); initDrag(); }

function showView(v) { 
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active'); document.body.classList.remove('sidebar-collapsed');
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  if(v === 'overview') document.getElementById('nav-home').classList.add('active');
}

function showCategory(k) {
  const c = data[k]; document.getElementById('series-grid').innerHTML = '';
  c.series.forEach(s => { document.getElementById('series-grid').innerHTML += `<div class="card" onclick="openG('${k}', '${s.name}')">${s.img ? `<img src="${s.img}">` : `<div class="placeholder-card">${s.name[0]}</div>`}<div class="card-info"><h3>${s.name}</h3></div></div>`; });
  showView('category'); document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  const navId = (k==='fotos'?'nav-fotos':(k==='rezepte'?'nav-rezepte':'nav-comics'));
  document.getElementById(navId).classList.add('active');
}

function openG(k, n) {
  const s = data[k].series.find(x => x.name === n); curG = s.images;
  document.getElementById('gallery-title').innerText = s.name;
  document.getElementById('photo-grid').innerHTML = '';
  curG.forEach((img, i) => { document.getElementById('photo-grid').innerHTML += `<div class="photo-item" onclick="openSS(${i})"><img src="${img}"></div>`; });
  showView('gallery'); document.body.classList.add('sidebar-collapsed');
}

function openSS(i) { ssIdx = i; document.getElementById('ss-img').src = curG[ssIdx]; document.getElementById('slideshow-overlay').classList.add('active'); }
function closeSS() { document.getElementById('slideshow-overlay').classList.remove('active'); stopSS(); }
function ssNext() { if(isShuf) ssIdx = Math.floor(Math.random()*curG.length); else ssIdx = (ssIdx+1)%curG.length; document.getElementById('ss-img').src = curG[ssIdx]; }
function ssPrev() { ssIdx = (ssIdx-1+curG.length)%curG.length; document.getElementById('ss-img').src = curG[ssIdx]; }

function toggleSS() {
  isSS = !isSS; const btn = document.getElementById('ss-play');
  if(isSS) { ssT = setInterval(ssNext, 2000); document.getElementById('ss-play-i').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; btn.classList.add('active-mode'); }
  else stopSS();
}
function stopSS() { isSS = false; clearInterval(ssT); document.getElementById('ss-play-i').innerHTML = '<path d="M8 5v14l11-7z"/>'; document.getElementById('ss-play').classList.remove('active-mode'); }
function toggleSSShuffle() { isShuf = !isShuf; document.getElementById('ss-shuffle').classList.toggle('active-mode', isShuf); }

function loadT(i) { trIdx = i; audio.src = tracks[i].src; document.getElementById('p-title').innerText = tracks[i].title; document.getElementById('p-img').src = tracks[i].cover; updatePl(); updateN(); }
function togglePlay() { if(audio.paused) { audio.play(); document.getElementById('play-i').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; } else { audio.pause(); document.getElementById('play-i').innerHTML = '<path d="M8 5v14l11-7z"/>'; } }
function nextT() { if(mShuf) trIdx = Math.floor(Math.random()*tracks.length); else trIdx = (trIdx+1)%tracks.length; loadT(trIdx); audio.play(); }
function prevT() { trIdx = (trIdx-1+tracks.length)%tracks.length; loadT(trIdx); audio.play(); }

function toggleMusicShuffle() { mShuf = !mShuf; document.getElementById('m-shuffle').classList.toggle('active-mode', mShuf); updateN(); }
function toggleMusicRepeat() { repMode = (repMode + 1) % 3; const b = document.getElementById('rep-badge'); document.getElementById('m-repeat').classList.toggle('active-mode', repMode > 0); b.innerText = repMode === 1 ? '1' : (repMode === 2 ? 'All' : ''); }
function updateN() { document.getElementById('p-next').innerText = "Next: " + (mShuf ? "Shuffle" : tracks[(trIdx + 1) % tracks.length].title); }
audio.onended = () => { if(repMode === 1) { audio.currentTime = 0; audio.play(); } else nextT(); }
function openCoverZoom() { curG = [document.getElementById('p-img').src]; openSS(0); }
function togglePl() { document.getElementById('playlist-box').classList.toggle('active'); }
function updatePl() { 
  const b = document.getElementById('playlist-box'); b.innerHTML = '<h4>Playlist</h4>'; 
  tracks.forEach((t, i) => { 
      const it = document.createElement('div'); it.className = 'pl-item' + (i === trIdx ? ' active' : ''); it.innerText = t.title; it.draggable = true; 
      it.onclick = () => { loadT(i); audio.play(); document.getElementById('play-i').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; togglePl(); }; 
      b.appendChild(it); 
  }); 
  initDrag(); 
}

function initDrag() {
  const box = document.getElementById('playlist-box'); let drg = null;
  box.addEventListener('dragstart', (e) => { drg = e.target; e.target.classList.add('dragging'); });
  box.addEventListener('dragend', (e) => { e.target.classList.remove('dragging'); const items = [...box.querySelectorAll('.pl-item')]; tracks = items.map(item => tracks.find(t => t.title === item.innerText)); trIdx = tracks.findIndex(t => t.src === audio.src); updateN(); });
  box.addEventListener('dragover', (e) => { e.preventDefault(); const after = getA(box, e.clientY); if (!after) box.appendChild(drg); else box.insertBefore(drg, after); });
}
function getA(c, y) { const el = [...c.querySelectorAll('.pl-item:not(.dragging)')]; return el.reduce((closest, child) => { const box = child.getBoundingClientRect(); const offset = y - box.top - box.height / 2; if (offset < 0 && offset > closest.offset) return { offset, element: child }; else return closest; }, { offset: Number.NEGATIVE_INFINITY }).element; }
audio.ontimeupdate = () => { const p = document.getElementById('progress-bar'); if(!isNaN(audio.duration)) { p.max = audio.duration; p.value = audio.currentTime; document.getElementById('t-cur').innerText = Math.floor(audio.currentTime/60)+":"+Math.floor(audio.currentTime%60).toString().padStart(2,'0'); document.getElementById('t-dur').innerText = Math.floor(audio.duration/60)+":"+Math.floor(audio.duration%60).toString().padStart(2,'0'); } };
document.getElementById('progress-bar').oninput = (e) => audio.currentTime = e.target.value;
