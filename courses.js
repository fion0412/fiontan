document.querySelectorAll('.course-intro,.course-outcomes,.course-gallery,.course-path').forEach((section) => { section.hidden = true; });

const curriculum = document.createElement('section');
curriculum.className = 'curriculum section';
curriculum.innerHTML = `<div class="eyebrow">FION TAN · COURSE DIRECTORY</div><h2>选择你的学习级别，<br><em>一步一步建立 AI 能力。</em></h2><p class="curriculum-lead">课程分为初级、中级与高级三个阶段。你可以从当前最需要的一步开始，也可以按完整路径逐级建立自己的 AI 工作系统。</p><div class="level-list"><article class="level-card beginner"><div class="level-label"><span>LEVEL 01</span><b>初级</b></div><p>建立基础、资料库与品牌起点。</p><div class="level-courses"><div><i>01</i><strong>Obsidian 资料库</strong><small>建立第二大脑／知识库</small></div><div><i>02</i><strong>Social Media 账号开设</strong><small>建立品牌矩阵</small></div><div><i>03</i><strong>Facebook Social Media</strong><small>社交媒体营销 + 获客</small></div></div></article><article class="level-card intermediate"><div class="level-label"><span>LEVEL 02</span><b>中级</b></div><p>进入创作、内容生产与多平台传播。</p><div class="level-courses"><div><i>04</i><strong>AI 漫画／短剧</strong><small>AI 内容与视频创作</small></div><div><i>05</i><strong>搭建数字人生成</strong><small>数字人口播视频</small></div><div><i>06</i><strong>产品获公司宣传视频</strong><small>Social media marketing promotion</small></div><div><i>07</i><strong>AI 一键多平台发布</strong><small>Social Media Automation</small></div><div><i>08</i><strong>AI 一键生成动画视频</strong><small>Hyperframe + Remotion</small></div></div></article><article class="level-card advanced"><div class="level-label"><span>LEVEL 03</span><b>高级</b></div><p>把 AI 变成企业、业务与自动化系统。</p><div class="level-courses"><div><i>09</i><strong>AI Agent + Workflow</strong><small>Automation</small></div><div><i>10</i><strong>Codex 线下实操课</strong><small>三天线下实战</small></div><div><i>11</i><strong>Landing Page 课程</strong><small>从想法到上线</small></div><div><i>12</i><strong>Apps 搭建课程</strong><small>建立自己的 AI 应用</small></div></div></article></div><div class="curriculum-note"><b>不知道从哪里开始？</b><span>先从初级开始，完成一个你真正用得上的成果，再进入下一阶段。</span><a class="course-button" href="index.html#contact">预约课程咨询 <b>↗</b></a></div>`;
document.querySelector('.course-hero')?.after(curriculum);

const courseProfile = document.querySelector('.course-profile');
if (courseProfile) {
  courseProfile.innerHTML = 'AI資深導師 · Smartech AI 創始人<br>28 年電腦科技技術經驗<br>曾任職於高勝、國泰航空、孖士打大律師行、ASL 等香港大型企業<br>Smartech AI 有限公司創始人 · Novas Academy AI 培訓師<br>企業員工培訓 · 曾培訓超過 100 位學生<br><b class="course-identity-title">身份與成就</b><br>春途學苑創始人<br>Seed AI 商學院導師<br>世界公益基金會戰略聯盟合作夥伴<br>低空飛行特別會員<br>2026 年香港環球夫人最上鏡獎';
}

const classroomAlbum = document.createElement('section');
classroomAlbum.className = 'course-class-album section';
classroomAlbum.innerHTML = `<div class="eyebrow">CLASSROOM ALBUM</div><h2>課堂裡的<br><em>真實學習時刻。</em></h2><p class="album-intro">從課堂實作、現場分享，到同學一起完成 AI 應用；每一張照片，都是學習真正發生的紀錄。</p><div class="class-album-grid">${[
  ['classroom-1.jpg', '學員在課堂上進行 AI 實作', '一起完成實作'],
  ['classroom-2.jpg', 'AI 課堂分享活動', '課堂分享與交流'],
  ['classroom-3.jpg', '企業 AI 培訓課堂', '企業培訓現場'],
  ['classroom-4.jpg', '導師協助學員使用 AI', '導師現場指導'],
  ['classroom-5.jpg', 'AI 課程學員合照', '學習夥伴'],
  ['classroom-6.jpg', 'AI 課堂學員專注學習', '專注學習'],
  ['classroom-7.jpg', '課堂活動照片', '實戰課堂'],
  ['classroom-8.jpg', '課堂學習照片', '學習現場']
].map(([file, alt, caption]) => `<figure><img src="assets/courses/${file}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join('')}</div>`;
document.querySelector('.course-hero')?.after(classroomAlbum);

const albumStyle = document.createElement('style');
albumStyle.textContent = `.courses-page .course-class-album{background:var(--navy);color:var(--cream);border-top:1px solid rgba(198,163,92,.2)}.courses-page .course-class-album h2{color:var(--cream);margin:0 0 25px}.album-intro{max-width:650px;color:#c4ccd8;line-height:1.8;margin:0 0 40px}.class-album-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.class-album-grid figure{margin:0;border:1px solid rgba(198,163,92,.4);background:#101f3b;overflow:hidden;transition:transform .25s,box-shadow .25s}.class-album-grid figure:hover{transform:translateY(-6px);box-shadow:0 14px 28px #0005}.class-album-grid img{display:block;width:100%;height:190px;object-fit:cover;transition:transform .4s}.class-album-grid figure:hover img{transform:scale(1.05)}.class-album-grid figcaption{padding:12px;color:#f3efe5;font-size:12px}.class-album-grid figcaption:after{content:' ↗';color:var(--gold)}@media(max-width:760px){.class-album-grid{grid-template-columns:repeat(2,1fr)}.class-album-grid img{height:170px}}`;
document.head.append(albumStyle);
