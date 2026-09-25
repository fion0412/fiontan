return await (async () => {
 const wait=()=>new Promise(r=>setTimeout(r,130));
 const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
 render(); await wait();
 let root=document.querySelector('.world-orbit'),stage=root.querySelector('.orbit-stage'),toggle=root.querySelector('.orbit-toggle');
 const rotor=()=>root.querySelector('.orbit-rotor');
 stage.scrollIntoView({behavior:'instant',block:'center'});await wait();
 stage.dispatchEvent(new PointerEvent('pointerleave',{pointerType:'mouse'}));
 document.activeElement?.blur();await wait();
 assert(root.dataset.paused==='false','Should run in view');
 const start=rotor().getAnimations()[0].currentTime;await wait();assert(rotor().getAnimations()[0].currentTime>start,'Clock did not advance');
 stage.dispatchEvent(new PointerEvent('pointerenter',{pointerType:'mouse'}));assert(root.dataset.paused==='true','Mouse hover must pause');
 stage.dispatchEvent(new PointerEvent('pointerleave',{pointerType:'mouse'}));
 const a=stage.querySelector('a');a.focus({preventScroll:true});assert(root.dataset.paused==='true','Keyboard focus must pause');a.blur();
 toggle.click();assert(root.dataset.paused==='true','Button pause');
 await wait();const frozen=rotor().getAnimations()[0].currentTime;await wait();assert(rotor().getAnimations()[0].currentTime===frozen,'Paused animation moved');
 toggle.click();await wait();assert(rotor().getAnimations()[0].currentTime>frozen,'Resume must continue same clock');
 stage.dispatchEvent(new PointerEvent('pointerenter',{pointerType:'touch'}));assert(root.dataset.paused==='false','Touch must not create sticky hover');
 window.scrollTo({top:document.body.scrollHeight,behavior:'instant'});await wait();assert(root.dataset.paused==='true','Offscreen must pause');
 stage.scrollIntoView({behavior:'instant',block:'center'});await wait();assert(root.dataset.paused==='false','Reenter must resume');
 const nativeMatch=window.matchMedia;
 try{
  window.matchMedia=q=>q==='(prefers-reduced-motion: reduce)'?{matches:true,addEventListener(){},removeEventListener(){}}:nativeMatch.call(window,q);
  mountWorldOrbit();await wait();
  assert(root.dataset.paused==='true'&&toggle.disabled,'Reduced motion preference must disable rotation');
 }finally{window.matchMedia=nativeMatch;mountWorldOrbit();}
 for(let i=0;i<8;i++){
  document.querySelector(`.orbit-planet[href="#/category/${i}"]`).click();await wait();
  assert(document.querySelector('h1').textContent.includes(cats[i][0]),`Route ${i}`);
  const img=document.querySelector('.category-hero-art');await img.decode();
  assert(img.src.endsWith(worldAssets[i]+'.jpg'),`Wrong category photo ${i}`);
  assert(document.querySelectorAll('.world').length===8&&!document.querySelector('.world-orbit'),'Category page must keep photo cards');
  location.hash='/#worlds';await wait();
 }
 return JSON.stringify({animation:true,hover:true,keyboard:true,touch:true,pauseResume:true,offscreen:true,reducedMotionController:true,routes:8});
})()
