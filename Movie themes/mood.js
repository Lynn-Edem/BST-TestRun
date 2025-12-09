
document.addEventListener('DOMContentLoaded', () => {


const MOVIES = [
{ id:1, title:"The Conjuring", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1w35AsAv2sISXApGQxf8hD_gO4d_A_ZC3Q&s", genres:["Horror"], moods:["curious","sad","angry"], stream:"https://www.youtube.com/watch?v=k10ETZ41q5o" },
{ id:2, title:"IT", poster:"https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg", genres:["Horror"], moods:["curious","angry"], stream:"https://www.youtube.com/watch?v=7pY5g1LYkiY" },
{ id:3, title:"Blade Runner 2049", poster:"https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", genres:["Sci-Fi"], moods:["curious","happy"], stream:"https://www.youtube.com/watch?v=gCcx85zbxz4" },
{ id:4, title:"The Matrix", poster:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", genres:["Action"], moods:["curious","sad","happy"], stream:"https://www.youtube.com/watch?v=vKQi3bBA1y8" },
{ id:5, title:"How to Train Your Dragon", poster:"https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg", genres:["Animation","Family"], moods:["angry","happy"], stream:"https://www.youtube.com/watch?v=QbT1IKqf6rM" },
{ id:6, title:"Zootopia", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLyDDDIwdhEj1-GYkjOFUkidDEi-f9Uwpdw&s", genres:["Animation","Family"], moods:["angry","happy"], stream:"https://www.youtube.com/watch?v=jWM0ct-OLsM" },
{ id:7, title:"Prisoners", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj16i8XdeV_cyR8I55lr-pXhAnLwpCLAalrg&s", genres:["Thriller"], moods:["curious","happy"], stream:"https://www.youtube.com/watch?v=bpXfcTF8Jtg" },
{ id:8, title:"Pride & Prejudice", poster:"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg", genres:["Romance"], moods:["sexy","happy"], stream:"https://www.youtube.com/watch?v=1dYv5u6v55Y" },
{ id:9, title:"500 Days of Summer", poster:"https://upload.wikimedia.org/wikipedia/en/d/d1/Five_hundred_days_of_summer.jpg", genres:["Romance"], moods:["curious","happy"], stream:"https://www.youtube.com/watch?v=PsD0NpFSADM" },
{ id:10, title:"John Wick", poster:"https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg", genres:["Action"], moods:["angry","sad","sexy"], stream:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ" },
{ id:11, title:"The Dark Knight", poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", genres:["Action"], moods:["angry","sad","sexy"], stream:"https://www.youtube.com/watch?v=EXeTwQWrcwY" },
{ id:12, title:"Interstellar", poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", genres:["Sci-Fi"], moods:["curious","sad","sexy"], stream:"https://www.youtube.com/watch?v=zSWdZVtXT7E" },
{ id:13, title:"The Social Dilemma", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhCC-M8jLfOeCrh2qkV2qFQeCsfMZ_wHJrg&s", genres:["Documentary"], moods:["curious"], stream:"https://www.youtube.com/watch?v=uaaC57tcci0" },
{ id:14, title:"My Octopus Teacher", poster:"https://upload.wikimedia.org/wikipedia/en/0/06/My_Octopus_Teacher_poster.jpg", genres:["Documentary"], moods:["curious"], stream:"https://www.youtube.com/watch?v=3s0LTDhqe5A" },
{ id:15, title:"Encanto", poster:"https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg", genres:["Animation"], moods:["angry","happy"], stream:"https://www.youtube.com/watch?v=CaimKeDcudo" },
{ id:16, title:"Spider-Man: Into the Spider-Verse", poster:"https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", genres:["Animation"], moods:["angry","happy"], stream:"https://www.youtube.com/watch?v=tg52up16eq0" },
{ id:17, title:"Gone Girl", poster:"https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg", genres:["Thriller"], moods:["sexy","happy"], stream:"https://www.youtube.com/watch?v=2-_-1nJf8Vg" },
{ id:18, title:"A Quiet Place", poster:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", genres:["Horror"], moods:["angry","happy","curious"], stream:"https://www.youtube.com/watch?v=WR7cc5t7tv8" },
{ id:19, title:"The Fault in Our Stars", poster:"https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png", genres:["Romance"], moods:["sexy","happy","sad"], stream:"https://www.youtube.com/watch?v=9ItBvH5J6ss" },
{ id:20, title:"The Notebook", poster:"https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg", genres:["Romance"], moods:["sexy","happy","sad"], stream:"https://www.youtube.com/watch?v=FC6biTjEyZw" },
{ id:21, title:"Extraction", poster:"https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Extraction_%282020_film%29.png/250px-Extraction_%282020_film%29.png", genres:["Action"], moods:["angry","happy","curious"], stream:"https://www.youtube.com/watch?v=L6P3nI6VnlY" },
{ id:22, title:"Mad Max: Fury Road", poster:"https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", genres:["Action"], moods:["angry","happy","curious"], stream:"https://www.youtube.com/watch?v=hEJnMQG9ev8" },
];


const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const grid = $('#posterGrid');
const chips = $$('.chip');
const basedOnTitle = $('#basedOnTitle');
const modal = $('#modal');
const modalInner = modal ? modal.querySelector('.modal-content') : null;
const closeModalBtn = $('#closeModal');
const playBtn = $('#playBtn');
const watchBtn = $('#watchBtn');

let currentResults = MOVIES.slice();
let currentFeatured = MOVIES[0] || null;


function toYouTubeEmbed(url){
if(!url) return null;
try {
url = url.trim();

if(url.includes('youtube.com/embed')) return url;

const u = new URL(url);
if(u.hostname.includes('youtube.com')){
const v = u.searchParams.get('v');
if(v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
}

if(u.hostname.includes('youtu.be')){
const id = u.pathname.slice(1);
if(id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
}
} catch(e){
return null;
}
return null;
}


function renderMovies(list){
if(!grid) return;
grid.innerHTML = ''; 
list.forEach((m, idx) => {
const card = document.createElement('button'); 
card.className = 'poster' + (idx > 14 ? ' small' : '');
card.type = 'button';
card.setAttribute('aria-label', m.title);
card.dataset.id = m.id;

card.style.backgroundImage = `url(${m.poster})`;

card.title = m.title;


const label = document.createElement('span');
label.className = 'poster-label';
label.textContent = m.title;

card.addEventListener('click', () => {
openTrailerForMovie(m);
});


card.addEventListener('keydown', (e) => {
if(e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
openTrailerForMovie(m);
}
});

grid.appendChild(card);
});
}

function openTrailerForMovie(movie){
if(!modal) {

window.open(movie.stream, '_blank');
return;
}


const embed = toYouTubeEmbed(movie.stream);

const contentWrap = modal.querySelector('.modal-content') || modal.querySelector('div[style*="flex:1"]') || modal.querySelector('div[style*="display:grid"]');


if(!contentWrap) {

const container = document.createElement('div');
container.style.flex = '1';
container.style.display = 'grid';
container.style.placeItems = 'center';
container.style.width = '100%';
container.style.height = '100%';
container.className = 'modal-content';

modal.innerHTML = '';

const closeBtn = document.createElement('button');
closeBtn.id = 'closeModal';
closeBtn.textContent = '✕';
closeBtn.style = 'background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer';
closeBtn.addEventListener('click', closeModal);
modal.appendChild(closeBtn);
modal.appendChild(container);

container.innerHTML = '';
if(embed){
container.innerHTML = `<iframe src="${embed}" width="100%" height="100%" style="border:0;border-radius:8px" allow="autoplay; encrypted-media; fullscreen"></iframe>`;
} else {

const a = document.createElement('a');
a.href = movie.stream;
a.target = '_blank';
a.rel = 'noopener';
a.textContent = 'Open Trailer';
a.style.color = '#fff';
container.appendChild(a);
}
} else {

contentWrap.innerHTML = '';
if(embed){
const iframe = document.createElement('iframe');
iframe.src = embed;
iframe.width = '100%';
iframe.height = '100%';
iframe.style.border = '0';
iframe.allow = 'autoplay; encrypted-media; fullscreen';
contentWrap.appendChild(iframe);
} else {
const a = document.createElement('a');
a.href = movie.stream;
a.target = '_blank';
a.rel = 'noopener';
a.textContent = 'Open Trailer';
contentWrap.appendChild(a);
}
}


modal.style.display = 'flex';
modal.focus?.();
}

function closeModal(){
if(!modal) return;

const iframe = modal.querySelector('iframe');
if(iframe) {
iframe.src = '';
}
modal.style.display = 'none';
}

if(closeModalBtn){
closeModalBtn.addEventListener('click', closeModal);
} else if(modal){

modal.addEventListener('click', (e) => {
if(e.target === modal) closeModal();
});
}


function wireFeaturedButtons(){
if(playBtn && currentFeatured){
playBtn.addEventListener('click', () => {
openTrailerForMovie(currentFeatured);
});
}
if(watchBtn && currentFeatured){
watchBtn.addEventListener('click', () => {

alert('Start playback (stub) for: ' + currentFeatured.title);
});
}
}


function applyMood(mood){
const moodLower = (mood || '').toLowerCase();

document.body.className = '';
if(moodLower) document.body.classList.add(`mood-${moodLower}`);


const results = MOVIES.filter(m => Array.isArray(m.moods) && m.moods.map(x => x.toLowerCase()).includes(moodLower));
const moviesToShow = results.length ? results : MOVIES.slice();
currentResults = moviesToShow;
renderMovies(moviesToShow);
}


chips.forEach(chip => {
chip.addEventListener('click', () => {

chips.forEach(c => c.classList.remove('active'));
chip.classList.add('active');


chips.forEach(c => c.style.boxShadow = 'none');
chip.style.boxShadow = '0 6px 18px rgba(0,0,0,0.6) inset';


if(basedOnTitle){
basedOnTitle.textContent = `Based on Your Mood "${chip.textContent}"`;
}


const mood = (chip.dataset.mood || chip.textContent || '').trim();
applyMood(mood);
});
});


const moreBtn = $('#moreBtn');
const moreText = document.querySelector('.more-text');

if(moreBtn && moreText){
let expanded = false;
moreBtn.addEventListener('click', () => {
expanded = !expanded;
moreText.style.display = expanded ? 'inline' : 'none';
moreBtn.textContent = expanded ? 'Less...' : 'More...';
});
}

const sidebar = $('#sidebar');
const toggleBtn = $('#toggleBtn');
if(toggleBtn && sidebar){
toggleBtn.addEventListener('click', () => {
sidebar.classList.toggle('open');
});
}


renderMovies(currentResults);
wireFeaturedButtons();

}); 
