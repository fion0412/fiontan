document.querySelectorAll('.course-intro,.course-outcomes,.course-gallery,.course-path').forEach((section) => { section.hidden = true; });

const curriculum = document.createElement('section');
curriculum.className = 'curriculum section';
curriculum.innerHTML = `<div class="eyebrow">FION TAN · COURSE DIRECTORY</div><h2>选择你的学习级别，<br><em>一步一步建立 AI 能力。</em></h2><p class="curriculum-lead">课程分为初级、中级与高级三个阶段。你可以从当前最需要的一步开始，也可以按完整路径逐级建立自己的 AI 工作系统。</p><div class="level-list"><article class="level-card beginner"><div class="level-label"><span>LEVEL 01</span><b>初级</b></div><p>建立基础、资料库与品牌起点。</p><div class="level-courses"><div><i>01</i><strong>Obsidian 资料库</strong><small>建立第二大脑／知识库</small></div><div><i>02</i><strong>Social Media 账号开设</strong><small>建立品牌矩阵</small></div><div><i>03</i><strong>Facebook Social Media</strong><small>社交媒体营销 + 获客</small></div></div></article><article class="level-card intermediate"><div class="level-label"><span>LEVEL 02</span><b>中级</b></div><p>进入创作、内容生产与多平台传播。</p><div class="level-courses"><div><i>04</i><strong>AI 漫画／短剧</strong><small>AI 内容与视频创作</small></div><div><i>05</i><strong>搭建数字人生成</strong><small>数字人口播视频</small></div><div><i>06</i><strong>产品获公司宣传视频</strong><small>Social media marketing promotion</small></div><div><i>07</i><strong>AI 一键多平台发布</strong><small>Social Media Automation</small></div><div><i>08</i><strong>AI 一键生成动画视频</strong><small>Hyperframe + Remotion</small></div></div></article><article class="level-card advanced"><div class="level-label"><span>LEVEL 03</span><b>高级</b></div><p>把 AI 变成企业、业务与自动化系统。</p><div class="level-courses"><div><i>09</i><strong>AI Agent + Workflow</strong><small>Automation</small></div><div><i>10</i><strong>Codex 线下实操课</strong><small>三天线下实战</small></div><div><i>11</i><strong>Landing Page 课程</strong><small>从想法到上线</small></div><div><i>12</i><strong>Apps 搭建课程</strong><small>建立自己的 AI 应用</small></div></div></article></div><div class="curriculum-note"><b>不知道从哪里开始？</b><span>先从初级开始，完成一个你真正用得上的成果，再进入下一阶段。</span><a class="course-button" href="index.html#contact">预约课程咨询 <b>↗</b></a></div>`;
document.querySelector('.course-hero')?.after(curriculum);

const codexChapters = [
  ['第一章', 'Codex入門與智能體基礎', ['認識 Codex 與 AI Agent', '建立第一個工作任務與提示詞', '從需求拆解到可執行流程']],
  ['第二章', '用Codex搭建全球資訊熱點源', ['如何用 Codex 自動化搜集全球熱點資訊', '選題決定流量：公眾號／短視頻選題機器人']],
  ['第三章', 'Codex自動化內容工廠—公眾號／小紅書', ['公眾號自動化寫作一條龍專用 Skill：aws-wechat-article-main', '用 Codex 製作公眾號封面與正文金句插圖', '精美公眾號（樣式和排版）如何 1:1 復刻', '文章一鍵自動化上傳至公眾號草稿箱', '小紅書自動發布（social-auto-upload）', '視頻自動發布多平台／本地發布', '抖音／小紅書爆款視頻—二創圖文']],
  ['第四章', 'Codex自動化視頻工廠—數字人／口播', ['Seedance視頻專用提示詞 Skill：Seedance 2.0 Skill', '營銷視頻：調用 Seedance 2.0 生成視頻', '真人口播視頻：調用 Seedance 2.0 Mini']],
  ['第五章', 'Codex自動化視頻工廠—視頻生成／剪輯', ['自動化播客視頻—生成與剪輯', '用 HyperFrames 做視頻生產流程', '用 Remotion 做視頻生產流程', '用 OpenMontage 做視頻生產流程', '從素材到成片：video-use 自動剪輯（新）', '視頻生成 Skill（Prompt Video Generator）', '歷史人物視頻—CODEX搭建自動化流程', '營銷視頻復刻（批量生成電商帶貨視頻）', '城市旅游打卡視頻—自動化流水線', 'ChatCut 插件—把剪輯師裝進對話框／視頻持更新', '爆款視頻復刻：人物替換', '書單視頻工作流搭建', 'AI如何做視頻（新）']],
  ['第六章', 'Codex完成自動化高效辦公', ['如何讓 Codex 讀取文件總結資料', '如何讓 Codex 修改已有文件而不亂改', '用 Codex 實現辦公資料批量整理與格式轉換', 'Record&Replay 把操作變成可復用 Skill', '用 Presentations 製作可編輯 PPT', '一鍵做出高級 PPT｜guizang Skill', '數據分析—增強 Skills 使用手冊', '寫作—用 Codex 高質量寫作的工作流程', '降低文章 AI 味—使用 humanizer 文字潤色', '用 Codex 搭建你的「私人秘書」']],
  ['第七章', 'Codex圖形生產力—多場景應用', ['裝修平面圖、效果渲染圖、720全景看房', '用 Codex 做電商主圖及詳情頁', '用 Codex 製作公眾號封面與正文金句插圖', '圖片的結構化提示詞 Skill—Image Prompt（選修課）', '精美海報 Skill（poster）的使用教程']],
  ['第八章', '用Codex搭建和部署個人／企業網站', ['從想法到可評審原型—Product Design 插件', '建站資料準備—介紹、服務、案例、FAQ', '純語義對話（Vibe Coding）製作簡易網頁', '用 Codex 把你的網頁部署到本地端口', '用 Codex 在 GitHub 上部署網站（新）']],
  ['第九章', '用Codex零基礎開發小程序', ['用 Codex 製作簡易版小程序']],
  ['第十章', '用Codex鏈接飛書Lark自動化辦公', ['飛書 MCP 連接與飛書教程文檔制作', '從訂單流水到「銷售統計＋客戶管理」自動化', '電商經營分析—數據看板與經營分析報告']],
  ['第十一章', 'Codex＋Obsidian 搭建本地知識庫', ['用 Rag-kb Skill 搭建本地知識庫', 'Codex＋Obsidian 構建知識圖譜', 'Codex＋Obsidian 內容生產流水線', 'Codex＋Obsidian 客戶項目交付管理（客戶項目模板）', '綜合實戰：搭建個人 AI 知識工作台']],
  ['第十二章', '用Codex搭建自用智能體客服', ['用 Codex 搭建 Agent 智能客服']],
  ['第十三章', '用Codex電商行業應用', ['用 Codex 做跨境電商全流程', '用 Codex 實現電商自動上架', '用 Codex 做跨境電商獨立站', '電商營銷視頻生成 Skill 使用教程']],
  ['第十四章', 'Codex常用插件／Skill合集（持續更新）', ['Codex 最全技能安裝包和使用說明（共2000+）', '創作音樂 Skill（minimax-music-gen）', '股票分析 Skill（company valuation）', '寫作前期素材挖掘（writing-fragments）', 'Record&Replay 把操作變成可復用 Skill', '市場調研 Skill：market-research', '寫作教程／產品手冊／調研報告', '操控 Chrome 瀏覽器（Computer Use）', 'Codex 自動操作電腦（Computer Use）', '讓 Codex 先思考、再工作：Superpowers', '把重複工作做成自己的 Skill（skill-creator）', '4 個實用 Skill：find-skill、openai-docs、imagegen、template-creator']]
];
const chapterSection = document.createElement('section');
chapterSection.className = 'codex-chapters section';
chapterSection.innerHTML = `<div class="eyebrow">CODEX搭建智能體 · COMPLETE CURRICULUM</div><h2>從第一個智能體開始，<br><em>建立完整 AI 工作系統。</em></h2><p class="chapter-lead">課程由基礎、內容自動化、視頻生產力、辦公流程、知識庫到網站與智能客服，逐章建立可以實際使用的 Codex 能力。</p><div class="chapter-list">${codexChapters.map(([number, title, lessons]) => `<details><summary><span>${number}</span><strong>${title}</strong><i>＋</i></summary><ol>${lessons.map(lesson => `<li>${lesson}</li>`).join('')}</ol></details>`).join('')}</div></section>`;
document.querySelector('.course-hero')?.after(chapterSection);

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

