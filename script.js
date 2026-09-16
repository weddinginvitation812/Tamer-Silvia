const $=id=>document.getElementById(id);const w=WEDDING;
$('groom').textContent=w.groomName.toUpperCase();$('bride').textContent=w.brideName.toUpperCase();$('coverGroom').textContent=w.groomName.toUpperCase();$('coverBride').textContent=w.brideName.toUpperCase();$('initials').textContent=w.initials.replace(/\s+/g,'').toUpperCase();$('date').textContent=w.dateDisplay;$('day').textContent=w.dayDisplay;$('time').textContent=w.timeDisplay;$('church').textContent=w.church;$('venue').textContent=w.venue;$('venue2').textContent=w.venue.toUpperCase();$('closingNames').textContent=`${w.groomName.toUpperCase()} & ${w.brideName.toUpperCase()}`;$('closingDate').textContent=w.dateDisplay;$('musicTitle').textContent=w.musicTitle;$('designedBy').textContent=w.designedBy;
const audio = $('audio');
audio.src = w.musicFile;

const btn = $('audioButton');

btn.onclick = () => {
  if (audio.paused) {
    audio.play()
      .then(() => btn.classList.add('playing'))
      .catch(() => {});
  } else {
    audio.pause();
    btn.classList.remove('playing');
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    audio.pause();
    btn.classList.remove('playing');
  } else {
    audio.play()
      .then(() => btn.classList.add('playing'))
      .catch(() => {});
  }
});;btn.onclick=()=>{if(audio.paused){audio.play().then(()=>btn.classList.add('playing')).catch(()=>{});}else{audio.pause();btn.classList.remove('playing')}};
const cover=$('cover'),card=$('coverCard'),transition=$('transition');
card.addEventListener('click',()=>{if(card.classList.contains('opening'))return;card.classList.add('opening');cover.classList.add('opening');transition.classList.add('run');setTimeout(()=>{document.body.classList.remove('locked');cover.remove();transition.classList.remove('run');document.querySelector('.hero').classList.add('entered');window.scrollTo({top:0});initReveal();audio.play().then(()=>btn.classList.add('playing')).catch(()=>{});},1500)});
const target=new Date(w.weddingDateTime).getTime();function tick(){let d=Math.max(0,target-Date.now());let days=Math.floor(d/864e5);d%=864e5;let h=Math.floor(d/36e5);d%=36e5;let m=Math.floor(d/6e4);let s = Math.floor(d / 1e3) % 60;$('days').textContent=String(days).padStart(2,'0');$('hours').textContent=String(h).padStart(2,'0');$('minutes').textContent=String(m).padStart(2,'0');$('seconds').textContent=String(s).padStart(2,'0')}tick();setInterval(tick,1000);
function initReveal(){const els=document.querySelectorAll('.reveal');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show')}else{e.target.classList.remove('show')}}),{threshold:.18,rootMargin:'0px 0px -70px 0px'});els.forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)})} 
