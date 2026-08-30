const projects = [
  {
    tag: "3D Platformer",
    title: "Dawn of Dion and the Lost Sprites",
    desc: "A magical 3D platforming adventure spanning multiple diverse levels.",
    authors: ["DevLUP@FSU"],
    year: "2025",
    bg: "linear-gradient(135deg, #000000 0%, #000000 100%)",
    art_link: "assets/images/projects/dawn-of-dion.png",
    link: "https://jake0822.itch.io/dawn-of-dion"
  },
  {
    tag: "Party",
    title: "Orbital Odyssey",
    desc: "A multiplayer party game.",
    authors: ["DevLUP@FSU"],
    year: "2024",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #2a1a3a 100%)",
    art_link: "assets/images/projects/orbital-odyssey.gif",
    link: "https://github.com/devlup-fsu/party-game"
  },
  {
    tag: "Horror",
    title: "Radio Six",
    desc: "Traverse through the hospital basement to the exit. You'll need to borrow 4 access cards from your coworkers to unlock the door.",
    authors: ["Jake Y.", "Ares G.", "Mitchell T.", "Donovyn G.", "Camryn W.", "David B.", "Julian O."],
    year: "2025",
    bg: "linear-gradient(135deg, #4a1a00 0%, #782f40 100%)",
    art_link: "assets/images/projects/RadioSix.png",
    link: "https://agregory-vhs.itch.io/radio-six"
  }
];

let current = 0;

function renderProject() {
  const p = projects[current];
  document.getElementById('proj-tag').textContent = p.tag;
  document.getElementById('proj-title').textContent = p.title;
  document.getElementById('proj-desc').textContent = p.desc;
  document.getElementById('proj-author').textContent = 'by ' + p.authors.join(', ');
  document.getElementById('proj-year').textContent = p.year;
  document.getElementById('proj-counter').textContent = (current+1) + ' of ' + projects.length;

  document.getElementById('card-preview').style.setProperty('background-image', p.bg);

  const art = document.getElementById('preview-art');
  art.src = p.art_link;
  const dots = document.getElementById('dots');

  dots.innerHTML = '';
  projects.forEach(function(_, i) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === current ? ' active' : '');
    d.onclick = function() { current = i; renderProject(); };
    dots.appendChild(d);
  });
}

function changeProject(dir) {
  current = (current + dir + projects.length) % projects.length;
  renderProject();
}

function viewProject() {
  const link = projects[current].link;
  if (link) window.open(link, '_blank', 'noopener,noreferrer');
}

renderProject();