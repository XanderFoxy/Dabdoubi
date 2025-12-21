/* *********************************************************************************
  * ASMOUBI FRAMEWORK LOGIC & DATABASE
  * 1. Diese Datei verwaltet alle Bilder, Musik und die Player-Steuerung.
  * 2. Sie dient als Brücke zwischen der Haupt-Hülle und den Inhalts-Seiten.
  * 3. Änderungen an Inhalten (Bilder/Musik) NUR HIER vornehmen.
  *********************************************************************************
*/

const prefix = "https://xanderfoxy.github.io/Dabdoubi/";

// --- BILDER DATENBANK ---
const fImgs = [
  prefix+"IMG_7319.jpeg", prefix+"IMG_7320.jpeg", prefix+"IMG_7321.jpeg", 
  prefix+"IMG_7323.jpeg", prefix+"IMG_7324.jpeg"
];

const allDesires = [
  prefix+"ior5FlF3.jpeg", prefix+"JuE5ywM3.jpeg", prefix+"7ylO8SbO.jpeg", 
  prefix+"reVuied4.jpeg", prefix+"wyXz6MhB.jpeg", prefix+"m6l7tlxB.jpeg", 
  prefix+"OJX7O4Fr.jpeg", prefix+"4JVKv09e.jpeg", prefix+"1xOOKJLC.jpeg", 
  prefix+"Facetune_19-11-2025-19-56-41.jpeg", prefix+"ezf2Tv5I.jpeg", 
  prefix+"ql8RdbJd.jpeg", prefix+"iz2rF6Ij.jpeg", prefix+"W1mDxlcp.jpeg", 
  prefix+"XZ3icISY.jpeg", prefix+"ffFONwpT.jpeg", prefix+"tlzPDVhj.jpeg", 
  prefix+"SMiPFnfR.jpeg", prefix+"ErdqXcJI.jpeg", prefix+"qJZbWC3S.jpeg", 
  prefix+"vPYAotQA.jpeg", prefix+"VX0lnX6g.jpeg", prefix+"IyRcZtkA.jpeg", 
  prefix+"GlXnTkeo.jpeg", prefix+"6biiHT6s.jpeg", prefix+"gQkLuhS6.jpeg", 
  prefix+"FXDCBl3h.jpeg", prefix+"X17hRNIE.jpeg", prefix+"N4zNC8G0.jpeg", 
  prefix+"INgUi8jX.jpeg", prefix+"8nRaIrlI.jpeg", prefix+"EFw6E4yW.jpeg", 
  prefix+"CBFT20xr.jpeg", prefix+"KE7XkyKt.jpeg", prefix+"qxEU7X6x.jpeg", 
  prefix+"c4rbD2M1.jpeg", prefix+"2kRjl0Wt.jpeg", prefix+"kXgCsero.jpeg", 
  prefix+"rtNC43KZ.jpeg", prefix+"4zquuQEo.jpeg", prefix+"YjCBzA9Q.jpeg", 
  prefix+"WGWDVqJ0.jpeg", prefix+"kjAxz9eK.jpeg", prefix+"zDsgQfU3.jpeg", 
  prefix+"DYMdPKOD.jpeg", prefix+"IMG_5070.png", prefix+"IMG_5409.png", 
  prefix+"IMG_5416.png", prefix+"IMG_5730.png", prefix+"IMG_5036.png", 
  prefix+"IMG_6054.png", prefix+"IMG_6082.png", prefix+"IMG_6114.png", 
  prefix+"IMG_7193.png", prefix+"IMG_4485.jpeg", prefix+"IMG_5948.png", 
  prefix+"IMG_4709.png", prefix+"IMG_5413.png", prefix+"IMG_4708.png", 
  prefix+"IMG_4705.png", prefix+"IMG_4657.png", prefix+"IMG_6115.png", 
  prefix+"IMG_4501.jpeg", prefix+"IMG_5733.png", prefix+"IMG_4540.png", 
  prefix+"IMG_4555.png", prefix+"IMG_4637.png", prefix+"IMG_4703.png", 
  prefix+"IMG_4992.png", prefix+"IMG_5037.png", prefix+"IMG_5075.png", 
  prefix+"IMG_5279.png", prefix+"IMG_5665.png", prefix+"IMG_5036.png", 
  prefix+"IMG_5051.png", prefix+"IMG_6253.png", prefix+"IMG_6299.png", 
  prefix+"IMG_6504.png", prefix+"IMG_6510.png", prefix+"IMG_6512.png", 
  prefix+"IMG_6514.png", prefix+"IMG_6517.png", prefix+"IMG_6518.png", 
  prefix+"IMG_6519.png", prefix+"IMG_6539.png", prefix+"IMG_6554.png", 
  prefix+"IMG_6745.png", prefix+"IMG_7056.png", prefix+"IMG_4418.webp", 
  prefix+"IMG_7138.webp"
];

const data = {
  fotos: {
    title: "Fotos",
    series: [
      { name: "Familie", img: fImgs[0], images: fImgs },
      { name: "Desires", img: allDesires[0], images: allDesires },
      { name: "Weihnachten", img: prefix+"IMG_0725.jpeg", images: [prefix+"IMG_0725.jpeg"] }
    ]
  },
  rezepte: {
    title: "Rezepte",
    series: [
      { name: "Arabisch", img: prefix+"Rezepte/IMG_0193.jpeg", images: [prefix+"Rezepte/IMG_0193.jpeg", prefix+"Rezepte/IMG_0164.jpeg", prefix+"Rezepte/IMG_0166.jpeg"] },
      { name: "All around the World", img: prefix+"Rezepte/IMG_0167.jpeg", images: [prefix+"Rezepte/IMG_0167.jpeg", prefix+"Rezepte/IMG_0169.jpeg", prefix+"Rezepte/IMG_0700.png"] },
      { name: "Weihnachten", img: prefix+"Rezepte/IMG_0197.jpeg", images: [prefix+"Rezepte/IMG_0197.jpeg"] }
    ]
  },
  comics: {
    title: "Comics",
    series: [
      { name: "Asmaa & Foxy", img: prefix+"Comics/IMG_1494.jpeg", images: [prefix+"Comics/IMG_1494.jpeg", prefix+"Comics/IMG_1135.jpeg"] },
      { name: "Garfield", img: prefix+"Comics/IMG_0356.png", images: [prefix+"Comics/IMG_0356.png", prefix+"Comics/IMG_0427.png", prefix+"Comics/IMG_0483.png", prefix+"Comics/IMG_0484.png"] },
      { name: "Featuring Foxy", img: prefix+"Comics/IMG_0685.png", images: [prefix+"Comics/IMG_0685.png"] }
    ]
  }
};

// --- MUSIK PLAYER LOGIK ---
let tracks = [
  { title: "Weihnacht", src: prefix+"Musik/Weihnacht.mp3", cover: prefix+"Bilder/IMG_1840.jpeg" },
  { title: "Ein Leben Lang", src: prefix+"Musik/One Day In Rome - Ein Leben Lang.mp3", cover: fImgs[0] }
];

let audio = new Audio();
let trIdx = 0;
let mShuf = false;
let repMode = 0; // 0: None, 1: One, 2: All
let curG = []; 
let ssIdx = 0;
let isSS = false;
let isShuf = false;
let ssT = null;

// Initialisierung beim Laden (nur in der Haupt-Hülle)
if (window.location.pathname.includes("Asmoubi.html")) {
    window.onload = () => {
        loadT(0);
        updatePl();
    };
}

function loadT(i) {
  trIdx = i;
  audio.src = tracks[i].src;
  const titleEl = document.getElementById('p-title');
  const imgEl = document.getElementById('p-img');
  if(titleEl) titleEl.innerText = tracks[i].title;
  if(imgEl) imgEl.src = tracks[i].cover;
  updateN();
}

function togglePlay() {
  const btn = document.getElementById('play-i');
  if(audio.paused) {
    audio.play();
    if(btn) btn.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    audio.pause();
    if(btn) btn.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}

function nextT() {
  if(mShuf) trIdx = Math.floor(Math.random()*tracks.length);
  else trIdx = (trIdx+1)%tracks.length;
  loadT(trIdx);
  audio.play();
}

function prevT() {
  trIdx = (trIdx-1+tracks.length)%tracks.length;
  loadT(trIdx);
  audio.play();
}

function toggleMusicShuffle() {
  mShuf = !mShuf;
  document.getElementById('m-shuffle').classList.toggle('active-mode', mShuf);
  updateN();
}

function toggleMusicRepeat() {
  repMode = (repMode + 1) % 3;
  const badge = document.getElementById('rep-badge');
  document.getElementById('m-repeat').classList.toggle('active-mode', repMode > 0);
  if(badge) badge.innerText = repMode === 1 ? '1' : (repMode === 2 ? 'All' : '');
}

function updateN() {
  const nextEl = document.getElementById('p-next');
  if(nextEl) nextEl.innerText = "Next: " + (mShuf ? "Shuffle" : tracks[(trIdx + 1) % tracks.length].title);
}

audio.onended = () => {
  if(repMode === 1) { audio.currentTime = 0; audio.play(); }
  else nextT();
};

audio.ontimeupdate = () => {
  const p = document.getElementById('progress-bar');
  const curT = document.getElementById('t-cur');
  const durT = document.getElementById('t-dur');
  if(p && !isNaN(audio.duration)) {
    p.max = audio.duration;
    p.value = audio.currentTime;
    if(curT) curT.innerText = Math.floor(audio.currentTime/60)+":"+Math.floor(audio.currentTime%60).toString().padStart(2,'0');
    if(durT) durT.innerText = Math.floor(audio.duration/60)+":"+Math.floor(audio.duration%60).toString().padStart(2,'0');
  }
};

if(document.getElementById('progress-bar')) {
    document.getElementById('progress-bar').oninput = (e) => audio.currentTime = e.target.value;
}

// --- FRAMEWORK NAVIGATION ---
function openGalleryFromFrame(kategorie, name) {
    // Diese Daten werden im Browser zwischengespeichert
    localStorage.setItem('currentCategory', kategorie);
    localStorage.setItem('currentSeries', name);
    // Das Hauptfenster lädt die Galerie
    window.parent.document.getElementById('content-frame').src = 'Asmoubi-Galerie.html';
}

// --- LIGHTBOX / DIASHOW LOGIK ---
function openSS_from_frame(kat, ser, idx) {
    const s = data[kat].series.find(x => x.name === ser);
    curG = s.images;
    ssIdx = idx;
    const ssOverlay = window.parent.document.getElementById('slideshow-overlay');
    const ssImg = window.parent.document.getElementById('ss-img');
    if(ssOverlay && ssImg) {
        ssImg.src = curG[ssIdx];
        ssOverlay.classList.add('active');
    }
}

function closeSS() {
    document.getElementById('slideshow-overlay').classList.remove('active');
    isSS = false;
    clearInterval(ssT);
}

// --- PLAYLIST BOX ---
function togglePl() { document.getElementById('playlist-box').classList.toggle('active'); }
function updatePl() {
  const b = document.getElementById('playlist-box');
  if(!b) return;
  b.innerHTML = '<h4 style="margin:0 0 10px 0; font-size:12px; color:var(--accent);">Playlist</h4>';
  tracks.forEach((t, i) => {
    const it = document.createElement('div');
    it.className = 'pl-item' + (i === trIdx ? ' active' : '');
    it.innerText = t.title;
    it.onclick = () => { loadT(i); audio.play(); togglePl(); };
    b.appendChild(it);
  });
}
