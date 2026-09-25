const profileSection = document.createElement('section');
document.querySelector('.about-hero h1')?.replaceChildren(Object.assign(document.createElement('span'), {innerHTML:'陳文颖 Fion，<br><em>AI 资深导师。</em>'}));
profileSection.className = 'profile-details section';
profileSection.innerHTML = `<div><div class="eyebrow">ABOUT FION</div><h2>经验跨越科技，<br><em>能力落在实战。</em></h2><p class="profile-intro">陳文颖 Fion 是 AI 资深导师，拥有 28 年电脑科技技术经验。曾在高勝、國泰航空、孖士打大律師行、ASL 等香港大型企业任职，并是 Smartech AI 有限公司的发起人，培训超过 100 位学生。</p></div><div class="profile-columns"><div><h3>核心优势</h3><ul><li>超级个体代表</li><li>自动化工作流与智能体</li><li>网站制作与实战应用</li><li>四文三语，善长跨文化与外交关系</li></ul></div><div><h3>我正在做的事</h3><ul><li>把 AI 教育带进马来西亚的企业与 OPC</li><li>为企业订制智能体与自动化工作流</li><li>帮助普通人用 AI 打造个人 IP</li><li>建立一人公司，用内容实现持续收入</li></ul></div></div>`;
document.querySelector('.about-feature')?.before(profileSection);
