// The orbit is present only on the homepage; category routes keep their card grid.
let disposeWorldOrbit = () => {};
function worldOrbit() {
  return `<div class="world-orbit" data-paused="true" role="group" aria-label="八大領域環繞探索"><div class="orbit-stage"><div class="orbit-track" aria-hidden="true"></div><div class="orbit-inner-track" aria-hidden="true"></div><div class="orbit-core"><span class="core-star" aria-hidden="true">✧</span><strong>I'M CEO</strong><span>玩嗨第二人生</span><small>ONE LIFE. MANY LIVES.</small></div><div class="orbit-rotor">${cats.map((c,i)=>{const angle=(i*45-90)*Math.PI/180;return `<div class="orbit-spoke" style="--angle:${i*45-90}deg" aria-hidden="true"></div><div class="orbit-satellite" style="left:${50+35*Math.cos(angle)}%;top:${50+35*Math.sin(angle)}%"><a class="orbit-planet" href="#/category/${i}" aria-label="${c[0]}：${c[2]}"><img src="assets/worlds/${worldAssets[i]}.jpg" alt="" width="800" height="800" loading="lazy" style="object-position:${worldPhotos[i].position}"><span class="planet-shade"></span><span class="planet-label">${c[0]}</span></a></div>`}).join('')}</div></div><div class="orbit-controls"><span class="orbit-hint">八種活法，從你的心動開始</span><button type="button" class="orbit-toggle" aria-pressed="false">暫停旋轉</button></div><div class="orbit-quicklinks" aria-label="八大領域快速入口">${cats.map((c,i)=>`<a href="#/category/${i}"><small>0${i+1}</small>${c[0]}<span aria-hidden="true">↗</span></a>`).join('')}</div><p class="photo-note">領域照片為情境示意，非俱樂部活動紀錄。<a href="photo-credits.html">攝影與授權</a></p></div>`;
}
function mountWorldOrbit() {
  disposeWorldOrbit();
  const root = document.querySelector('.world-orbit');
  if (!root) return;
  const stage = root.querySelector('.orbit-stage');
  const toggle = root.querySelector('.orbit-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const controller = new AbortController();
  const options = { signal: controller.signal };
  let explicitPause = reduced.matches, inView = false, hovering = false, focused = false;
  function update() {
    const paused = explicitPause || reduced.matches || !inView || document.hidden || hovering || focused;
    root.dataset.paused = String(paused);
    toggle.textContent = reduced.matches ? '已減少動態' : explicitPause ? '繼續旋轉' : '暫停旋轉';
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-pressed', String(explicitPause || reduced.matches));
    toggle.setAttribute('aria-label', reduced.matches ? '已依系統偏好停止旋轉' : explicitPause ? '繼續自動旋轉；滑鼠移出照片區後恢復' : '暫停自動旋轉');
  }
  stage.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovering = true; update(); } }, options);
  stage.addEventListener('pointerleave', () => { hovering = false; update(); }, options);
  stage.addEventListener('focusin', () => { focused = true; update(); }, options);
  stage.addEventListener('focusout', e => { if (!stage.contains(e.relatedTarget)) { focused = false; update(); } }, options);
  toggle.addEventListener('click', () => { explicitPause = !explicitPause; update(); }, options);
  reduced.addEventListener('change', () => { explicitPause = reduced.matches; update(); }, options);
  document.addEventListener('visibilitychange', update, options);
  const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; update(); }, { threshold: 0 });
  observer.observe(stage);
  update();
  disposeWorldOrbit = () => { observer.disconnect(); controller.abort(); disposeWorldOrbit = () => {}; };
}
