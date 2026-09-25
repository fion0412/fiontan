document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

const whyFionSection = document.createElement('section');
whyFionSection.className = 'why-fion-section section';
whyFionSection.innerHTML = `<div class="why-fion-portrait"><img src="assets/about-me/fi-on.png" alt="Fion Tan 深寶藍西裝人物"></div><div class="why-fion-copy"><div class="eyebrow">WHY FION</div><h2>我教的，<br><em>不只是 AI 工具。</em></h2><p>我自己也是從不會開始，一步一步學習、實踐，再把 AI 真正放進自己的工作、表達與教學里。</p><p>所以我更在意的，不是你記住多少工具，而是課程結束以后——你到底做出來了什麼。</p><div class="why-fion-rule"></div><strong>先開始，再變強。</strong></div>`;
document.querySelector('.hero')?.after(whyFionSection);

const mediaSection = document.createElement('section');
mediaSection.className = 'media-section section';
mediaSection.innerHTML = `<div class="eyebrow">FION TAN · IN ACTION</div><h2>把经验变成<br><em>可以被看见的成果。</em></h2><p class="section-intro">从个人表达、AI工具到真实课堂，这些素材记录 Fion 在工作现场持续学习、分享与实践的过程。</p><div class="media-grid"><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-01.mp4" type="video/mp4">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 01</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-02.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 02</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-03.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 03</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-04.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 04</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-05.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 05</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-06.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 06</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-07.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 07</figcaption></figure><figure class="experience-video"><video controls preload="metadata"><source src="assets/about-me/experience/experience-08.mov" type="video/quicktime">你的浏览器不支持视频播放。</video><figcaption>经验分享 · 08</figcaption></figure></div>`;
document.querySelector('.quote')?.before(mediaSection);

const feedbackFiles = ['IMG_4024.MOV','126_raw.MP4','copy_BF7AF14B-3AAF-4810-92F9-2EAAB641E463.MOV','copy_C717C0CE-0807-4C90-B7D8-05CB469C975B.MOV','copy_372814D5-81DB-4C99-BB61-924976BD4D8D.MOV','copy_02B6D804-394F-4524-A7EB-B825EDDCE9DF.MOV','copy_8E9A8834-A93F-4893-9084-8545B43C3D7E.MOV','copy_83E87FAA-498B-49FE-976C-DD0FB789E698.MOV'];
const feedbackSection = document.createElement('section');
feedbackSection.className = 'feedback-section section';
feedbackSection.innerHTML = `<div class="eyebrow">STUDENT FEEDBACK</div><h2>学会之后，<br><em>开始真的去用。</em></h2><p class="section-intro">听听学生学习 AI 之后的真实感想：从第一次尝试，到把 AI 放进自己的工作与生活。</p><div class="feedback-grid">${feedbackFiles.map((file, index) => `<figure><video controls preload="metadata"><source src="assets/student-feedback/${file}" type="video/${file.toLowerCase().endsWith('mp4') ? 'mp4' : 'quicktime'}">你的浏览器不支持视频播放。</video><figcaption>学生学习 AI 后的真实反馈 · ${String(index + 1).padStart(2, '0')}</figcaption></figure>`).join('')}</div>`;
feedbackSection.id = 'feedback';
mediaSection.after(feedbackSection);

const studentStoryIntro = document.createElement('section');
studentStoryIntro.className = 'student-story-intro section';
studentStoryIntro.innerHTML = `<div class="student-story-copy"><div class="eyebrow">REAL STUDENT STORY</div><h2>學習 AI 之後，<br><em>真正開始做出改變。</em></h2><p>聽聽學生完成學習與實戰後的真實感想，了解 AI 如何由概念變成每天可以使用的工作能力。</p><div class="student-story-tags"><span>真實學習體驗</span><span>實戰應用分享</span><span>由工具走向成果</span></div></div><div class="student-story-videos"><figure><video controls preload="metadata"><source src="assets/student-feedback/student-story.mov" type="video/quicktime">你的瀏覽器不支持視頻播放。</video><figcaption>學生學習 AI 後的真實感想<small>Student Testimonial · AI Learning in Practice</small></figcaption></figure></div>`;
feedbackSection.before(studentStoryIntro);

const featuredInterview = document.createElement('section');
featuredInterview.className = 'featured-interview section';
featuredInterview.innerHTML = `<div class="featured-interview-copy"><div class="eyebrow">FEATURED INTERVIEW</div><h2>让专业被看见，<br><em>也让经验被理解。</em></h2><p>在杂志访问与公开分享中，Fion 持续谈论 AI 如何帮助专业人士更清楚地表达自己、建立影响力，并把想法变成实际行动。</p><small>FION TAN · IN THE MEDIA</small></div><div class="featured-interview-pages"><a class="page-main" href="assets/magazine/cover.jpg" target="_blank" rel="noopener"><img src="assets/magazine/cover.jpg" alt="Fion Tan 媒体专访主页面"></a><a class="page-top" href="assets/magazine/feature-1.png" target="_blank" rel="noopener"><img src="assets/magazine/feature-1.png" alt="Fion Tan 媒体专访人物页"></a><a class="page-bottom" href="assets/magazine/feature-2.png" target="_blank" rel="noopener"><img src="assets/magazine/feature-2.png" alt="Fion Tan 媒体专访内容页"></a></div>`;
feedbackSection.before(featuredInterview);
featuredInterview.before(studentStoryIntro);

const featuredInterviewStyle = document.createElement('style');
featuredInterviewStyle.textContent = `.featured-interview{display:grid;grid-template-columns:.8fr 1.2fr;gap:65px;align-items:center;background:#292c4a;color:var(--cream)}.featured-interview-copy h2{color:var(--cream);margin:0 0 28px}.featured-interview-copy p{max-width:560px;color:#d3d4dc;font:16px/1.9 'Noto Serif SC',serif}.featured-interview-copy small{display:block;margin-top:45px;color:var(--gold);font:10px Inter,sans-serif;letter-spacing:.18em}.featured-interview-pages{display:grid;grid-template-columns:1.25fr .75fr;grid-template-rows:1fr 1fr;gap:18px;align-items:stretch;min-height:700px}.featured-interview-pages a{display:block;border:1px solid rgba(198,163,92,.5);background:#f5f5f2;overflow:hidden;transition:transform .3s,box-shadow .3s}.featured-interview-pages a:hover{transform:translateY(-7px);box-shadow:0 16px 30px #0006}.featured-interview-pages .page-main{grid-row:1 / span 2}.featured-interview-pages img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.04)}.featured-interview-pages .page-main img{transform:scale(1.02)}@media(max-width:760px){.featured-interview{grid-template-columns:1fr;gap:35px}.featured-interview-pages{grid-template-columns:1fr 1fr;min-height:600px}.featured-interview-pages .page-main{grid-row:1 / span 2}.featured-interview-pages img{object-fit:cover;transform:scale(1.03)}}`;
document.head.append(featuredInterviewStyle);

const imageLightbox = document.createElement('div');
imageLightbox.className = 'image-lightbox';
imageLightbox.innerHTML = '<button type="button" aria-label="關閉圖片">×</button><img alt="放大查看媒體專訪圖片">';
document.body.append(imageLightbox);
const lightboxImage = imageLightbox.querySelector('img');
const closeLightbox = () => { imageLightbox.classList.remove('is-open'); document.body.style.overflow = ''; };
featuredInterview.querySelectorAll('.featured-interview-pages a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    lightboxImage.src = link.querySelector('img').src;
    lightboxImage.alt = link.querySelector('img').alt;
    imageLightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});
imageLightbox.addEventListener('click', (event) => { if (event.target === imageLightbox || event.target.tagName === 'BUTTON') closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `.image-lightbox{position:fixed;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:35px;background:rgba(4,12,27,.92);opacity:0;pointer-events:none;transition:opacity .25s}.image-lightbox.is-open{opacity:1;pointer-events:auto}.image-lightbox img{max-width:min(92vw,1400px);max-height:88vh;object-fit:contain;box-shadow:0 20px 70px #0008}.image-lightbox button{position:absolute;right:25px;top:18px;width:44px;height:44px;border:1px solid var(--gold);border-radius:50%;background:transparent;color:var(--cream);font-size:32px;line-height:1;cursor:pointer}.image-lightbox button:hover{background:var(--gold);color:var(--navy)}`;
document.head.append(lightboxStyle);


const classPhotos = ['4d75feafd42796ad8fbd965dc19d8d84.JPG','70e2f352-773e-4941-8e2c-d25d9b7c4b05.JPG','f27773cf413274df1d96d8a447920294.JPG','IMG_8599.JPG','023c1e241c7072493132a55bb8a96c4f.JPG','a75ecc53-3fb7-4b2a-ad68-f9d23299a35a.JPG','IMG_8031.JPG','IMG_4435.JPG','69d8e00de884ccb0983b6d1a1ec844a2.JPG','30.JPG','84cb2e9212003a957afdb25eaaf9d748.JPG','023c1e241c7072493132a55bb8a96c4f 2.JPG','12471.JPG','19261162f28164d6bb4ef547ef59eb3b.JPG'];
const classSection = document.createElement('section');
classSection.className = 'class-section section';
classSection.id = 'classes';
classSection.innerHTML = `<div class="eyebrow">AI TRAINING · BEHIND THE SCENES</div><h2>每一次上課，<br><em>都是一次真正的開始。</em></h2><p class="section-intro">在課堂裡學習、提問、實作，把 AI 從一個陌生工具，變成可以每天使用的能力。</p><div class="class-gallery">${classPhotos.map((file, index) => `<figure><img src="assets/course-highlights/${file}" alt="AI 培訓課程花絮 ${index + 1}"><figcaption>AI 培訓課程花絮 · ${String(index + 1).padStart(2, '0')}</figcaption></figure>`).join('')}</div>`;
feedbackSection.after(classSection);
