return await (async () => {
 const root=document.querySelector('.world-orbit'),stage=root.querySelector('.orbit-stage'),rotor=root.querySelector('.orbit-rotor');
 const planets=[...root.querySelectorAll('.orbit-planet')];
 const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
 assert(planets.length===8,'Expected eight planets');
 await Promise.all(planets.map(p=>p.querySelector('img').decode()));
 assert(document.documentElement.scrollWidth<=innerWidth,'Horizontal overflow');
 assert(getComputedStyle(rotor).animationDuration==='80s','Orbit should take 80 seconds');
 const animations=stage.getAnimations({subtree:true});
 animations.forEach(a=>a.pause());
 let samples=0;
 for(let t=0;t<80000;t+=1000){
  animations.forEach(a=>a.currentTime=t);
  const bounds=stage.getBoundingClientRect(),core=root.querySelector('.orbit-core').getBoundingClientRect();
  const rects=planets.map(p=>p.getBoundingClientRect());
  for(let i=0;i<8;i++){
   const r=rects[i];
   assert(r.left>=bounds.left-1&&r.right<=bounds.right+1&&r.top>=bounds.top-1&&r.bottom<=bounds.bottom+1,`Out of bounds: ${i} at ${t}`);
   const m1=new DOMMatrix(getComputedStyle(rotor).transform),m2=new DOMMatrix(getComputedStyle(planets[i]).transform),net=m1.multiply(m2);
   assert(Math.abs(net.b)<.001&&Math.abs(net.a-1)<.001,'Photos are not upright');
   const x=r.x+r.width/2,y=r.y+r.height/2;
   assert(Math.hypot(x-(core.x+core.width/2),y-(core.y+core.height/2))>(r.width+core.width)/2,'Overlap with center');
   for(let j=i+1;j<8;j++){
    const s=rects[j];
    assert(Math.hypot(x-(s.x+s.width/2),y-(s.y+s.height/2))>(r.width+s.width)/2+1,'Overlapping photos');
   }
  }
  samples++;
 }
 animations.forEach(a=>a.currentTime=0);
 return JSON.stringify({width:innerWidth,photos:8,loaded:true,rotationSamples:samples,noOverlap:true,upright:true,noOverflow:true});
})()
