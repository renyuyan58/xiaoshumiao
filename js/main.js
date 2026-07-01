function createNavbar(activePage) {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="navbar-inner">
      <a href="index.html" class="logo">
        <span class="logo-icon">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 75 Q35 68 45 72 Q50 65 55 72 Q65 68 75 75" stroke="#2D2D2D" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M50 72 Q50 50 50 42" stroke="#2D2D2D" stroke-width="5" stroke-linecap="round" fill="none"/>
            <ellipse cx="38" cy="42" rx="16" ry="20" fill="#B8E06E" stroke="#2D2D2D" stroke-width="3.5" transform="rotate(-20 38 42)"/>
            <ellipse cx="38" cy="38" rx="10" ry="14" fill="#D4EC9A" transform="rotate(-20 38 38)"/>
            <ellipse cx="62" cy="38" rx="16" ry="22" fill="#A8D85A" stroke="#2D2D2D" stroke-width="3.5" transform="rotate(25 62 38)"/>
            <ellipse cx="62" cy="34" rx="10" ry="15" fill="#C4E688" transform="rotate(25 62 34)"/>
          </svg>
        </span>
        <span>小树苗队</span>
      </a>
      <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">🏠 首页</a></li>
        <li><a href="courses.html" class="${activePage === 'courses' ? 'active' : ''}">📚 活动内容</a></li>
        <li><a href="interactive.html" class="${activePage === 'interactive' ? 'active' : ''}">🎮 互动乐园</a></li>
        <li><a href="gallery.html" class="${activePage === 'gallery' ? 'active' : ''}">📸 活动风采</a></li>
      </ul>
    </div>
  `;
  document.body.prepend(navbar);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileBtn = navbar.querySelector('#mobileMenuBtn');
  const navLinks = navbar.querySelector('#navLinks');
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div>
          <div class="footer-logo">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 6px;">
              <path d="M25 75 Q35 68 45 72 Q50 65 55 72 Q65 68 75 75" stroke="#2D2D2D" stroke-width="4" stroke-linecap="round" fill="none"/>
              <path d="M50 72 Q50 50 50 42" stroke="#2D2D2D" stroke-width="5" stroke-linecap="round" fill="none"/>
              <ellipse cx="38" cy="42" rx="16" ry="20" fill="#B8E06E" stroke="#2D2D2D" stroke-width="3.5" transform="rotate(-20 38 42)"/>
              <ellipse cx="38" cy="38" rx="10" ry="14" fill="#D4EC9A" transform="rotate(-20 38 38)"/>
              <ellipse cx="62" cy="38" rx="16" ry="22" fill="#A8D85A" stroke="#2D2D2D" stroke-width="3.5" transform="rotate(25 62 38)"/>
              <ellipse cx="62" cy="34" rx="10" ry="15" fill="#C4E688" transform="rotate(25 62 34)"/>
            </svg>
            小树苗队
          </div>
          <p class="footer-desc">
            我们是一支充满活力的大学生团队，
            致力于为乡村小朋友带来有趣、有温度的活动体验。
            用陪伴点亮童年，用爱心温暖成长。
          </p>
        </div>
        <div>
          <h4>快速导航</h4>
          <a href="index.html">首页</a>
          <a href="courses.html">活动内容</a>
          <a href="interactive.html">互动乐园</a>
          <a href="gallery.html">活动风采</a>
        </div>
        <div>
          <h4>活动分类</h4>
          <a href="courses.html?category=science">🔬 科学科普</a>
          <a href="courses.html?category=culture">🎨 文化艺术</a>
          <a href="courses.html?category=academic">📖 学业辅导</a>
          <a href="courses.html?category=quality">💪 综合素质</a>
        </div>
        <div>
          <h4>联系我们</h4>
          <p>📧 sxx@example.com</p>
          <p>📱 123-4567-8900</p>
          <p>📍 某某大学青年志愿者协会</p>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 暑期三下乡 · 小树苗队 · 用爱传递温暖，用心点亮成长 ❤️
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

function createConfetti(x, y) {
  const colors = ['#FFB347', '#4A90D9', '#7BC47F', '#FF9EC3', '#B19CD9', '#FFE066'];
  const shapes = ['●', '■', '▲', '★', '♦'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = (x + Math.random() * 200 - 100) + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.width = (5 + Math.random() * 10) + 'px';
    confetti.style.height = (5 + Math.random() * 10) + 'px';
    confetti.style.animationDelay = (Math.random() * 0.5) + 's';
    confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
}

function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const courseData = [
  {
    id: '1',
    title: '神奇的水实验',
    category: 'science',
    categoryName: '科学科普',
    description: '探索水的表面张力、浮力等有趣特性，在家就能做的小实验！',
    emoji: '💧',
    grade: '1-3年级',
    duration: '45分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['实验', '动手', '趣味'],
    color: '#4A90D9',
    objectives: [
      '了解水的基本特性',
      '培养观察和动手能力',
      '激发科学探索兴趣'
    ],
    materials: ['玻璃杯', '硬币', '纸', '食盐', '食用油'],
    content: `
      <h3>课程介绍</h3>
      <p>水是我们生活中最常见的物质，但它藏着许多神奇的秘密！在这节课中，我们将通过几个简单有趣的小实验，一起探索水的奇妙特性。</p>
      
      <h3>实验一：会"爬墙"的水</h3>
      <p>把一张纸巾的一端放入水中，看看会发生什么？水会沿着纸巾往上"爬"哦！这就是毛细现象。</p>
      
      <h3>实验二：水面能放多少硬币？</h3>
      <p>装满水的杯子里还能放多少枚硬币？试试看，结果一定会让你大吃一惊！这就是水的表面张力在起作用。</p>
      
      <h3>实验三：彩虹牛奶</h3>
      <p>在牛奶里滴入不同颜色的色素，再加点洗洁精，哇——颜色像彩虹一样散开了！</p>
    `,
    downloads: [
      { name: '实验指导手册.pdf', url: '#' },
      { name: '课后练习题.docx', url: '#' }
    ]
  },
  {
    id: '2',
    title: '创意手工折纸',
    category: 'culture',
    categoryName: '文化艺术',
    description: '学习经典的折纸艺术，用一张纸变出千纸鹤、小船、爱心...',
    emoji: '🎨',
    grade: '1-6年级',
    duration: '60分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['手工', '创意', '耐心'],
    color: '#FF9EC3',
    objectives: [
      '了解折纸艺术的历史',
      '掌握基础折纸技巧',
      '培养动手能力和专注力'
    ],
    materials: ['彩色正方形纸若干', '剪刀（可选）'],
    content: `
      <h3>课程介绍</h3>
      <p>折纸是中国传统的手工艺术，一张普通的纸，通过我们灵巧的双手，可以变成各种各样可爱的造型。</p>
      
      <h3>第一课：小纸船</h3>
      <p>还记得小时候折的小纸船吗？让我们一起重温经典，折一艘可以漂在水面上的小船吧！</p>
      
      <h3>第二课：千纸鹤</h3>
      <p>传说中，折满一千只纸鹤就能实现愿望。让我们来学习这只承载着美好愿望的千纸鹤。</p>
      
      <h3>第三课：爱心书签</h3>
      <p>折一个漂亮的爱心当书签，让读书变得更有趣！</p>
    `,
    downloads: [
      { name: '折纸教程图册.pdf', url: '#' },
      { name: '创意折纸作品集.pdf', url: '#' }
    ]
  },
  {
    id: '3',
    title: '趣味数学乐园',
    category: 'academic',
    categoryName: '学业辅导',
    description: '数学也可以很好玩！通过游戏和故事，发现数学的乐趣。',
    emoji: '🔢',
    grade: '2-5年级',
    duration: '45分钟',
    difficulty: 'medium',
    difficultyText: '中等',
    tags: ['数学', '逻辑', '游戏'],
    color: '#7BC47F',
    objectives: [
      '培养数学思维能力',
      '提高运算速度和准确率',
      '发现数学的趣味性'
    ],
    materials: ['草稿纸', '铅笔', '橡皮'],
    content: `
      <h3>课程介绍</h3>
      <p>数学不只是课本上的公式和题目，它藏在我们生活的每个角落！让我们一起用游戏的方式探索数学的奥秘。</p>
      
      <h3>第一关：速算小达人</h3>
      <p>学习一些神奇的速算技巧，让计算变得又快又准，成为班级里的速算小能手！</p>
      
      <h3>第二关：图形变变变</h3>
      <p>认识各种有趣的图形，发挥想象力，用图形拼出各种各样的图案。</p>
      
      <h3>第三关：数学故事屋</h3>
      <p>听有趣的数学故事，在故事中学到数学知识，原来数学这么好玩！</p>
    `,
    downloads: [
      { name: '趣味数学习题集.pdf', url: '#' },
      { name: '数学思维训练题.docx', url: '#' }
    ]
  },
  {
    id: '4',
    title: '小小安全员',
    category: 'quality',
    categoryName: '综合素质',
    description: '学习交通安全、防溺水、防火等安全知识，保护自己从小学起！',
    emoji: '🛡️',
    grade: '1-6年级',
    duration: '45分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['安全', '自我保护', '生活技能'],
    color: '#FFB347',
    objectives: [
      '掌握基本安全知识',
      '学会自我保护技能',
      '培养安全意识'
    ],
    materials: ['安全标志卡片（可打印）'],
    content: `
      <h3>课程介绍</h3>
      <p>安全是我们快乐成长的前提！在这节课中，我们将通过情景模拟、互动问答等方式，学习各种安全知识。</p>
      
      <h3>交通安全</h3>
      <p>认识交通信号灯、斑马线、安全标志，学习如何安全过马路和乘坐交通工具。</p>
      
      <h3>防溺水安全</h3>
      <p>夏天到了，游泳是很好的运动，但也要注意安全！学习防溺水"六不准"。</p>
      
      <h3>消防安全</h3>
      <p>了解火灾的危害，学习火灾逃生技巧和灭火器的使用方法。</p>
      
      <h3>防拐骗安全</h3>
      <p>遇到陌生人怎么办？学习保护自己，不轻易相信陌生人的话。</p>
    `,
    downloads: [
      { name: '安全教育手册.pdf', url: '#' },
      { name: '安全知识测试题.docx', url: '#' }
    ]
  },
  {
    id: '5',
    title: '太阳系大冒险',
    category: 'science',
    categoryName: '科学科普',
    description: '一起探索宇宙的奥秘，认识八大行星，了解我们的太阳系！',
    emoji: '🚀',
    grade: '3-6年级',
    duration: '60分钟',
    difficulty: 'medium',
    difficultyText: '中等',
    tags: ['天文', '宇宙', '探索'],
    color: '#B19CD9',
    objectives: [
      '了解太阳系的组成',
      '认识八大行星的特点',
      '培养对天文的兴趣'
    ],
    materials: ['彩笔', '白纸'],
    content: `
      <h3>课程介绍</h3>
      <p>仰望星空，你是否想过宇宙是什么样子的？让我们一起乘坐"想象号"飞船，去太阳系里探险吧！</p>
      
      <h3>第一站：太阳</h3>
      <p>太阳是太阳系的老大，它是一颗巨大的恒星，给我们带来光和热。</p>
      
      <h3>第二站：八大行星</h3>
      <p>水星、金星、地球、火星、木星、土星、天王星、海王星，每颗行星都有自己独特的故事。</p>
      
      <h3>第三站：地球的小伙伴——月亮</h3>
      <p>月亮为什么会有阴晴圆缺？月食是怎么回事？让我们一起来揭开月亮的秘密。</p>
    `,
    downloads: [
      { name: '太阳系知识点汇总.pdf', url: '#' },
      { name: '行星涂色卡.pdf', url: '#' }
    ]
  },
  {
    id: '6',
    title: '儿童绘画入门',
    category: 'culture',
    categoryName: '文化艺术',
    description: '用彩笔画出美丽的世界，基础绘画技巧学习，让想象力飞扬！',
    emoji: '🖍️',
    grade: '1-6年级',
    duration: '60分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['绘画', '创意', '想象力'],
    color: '#FFE066',
    objectives: [
      '掌握基本绘画技巧',
      '培养色彩感知能力',
      '发挥想象力和创造力'
    ],
    materials: ['画纸', '彩笔/蜡笔', '橡皮'],
    content: `
      <h3>课程介绍</h3>
      <p>每个孩子都是天生的艺术家！在绘画的世界里，我们可以用色彩和线条表达自己的想法和感受。</p>
      
      <h3>基础技巧</h3>
      <p>学习线条、形状、色彩的基本知识，掌握涂色的小技巧。</p>
      
      <h3>主题绘画：美丽的大自然</h3>
      <p>跟着老师一起画一幅美丽的风景画，有蓝天、白云、大树、小花...</p>
      
      <h3>自由创作时间</h3>
      <p>发挥你的想象力，画出你心中最美丽的画面吧！</p>
    `,
    downloads: [
      { name: '绘画教程合集.pdf', url: '#' },
      { name: '线稿练习素材.zip', url: '#' }
    ]
  },
  {
    id: '7',
    title: '快乐阅读课',
    category: 'academic',
    categoryName: '学业辅导',
    description: '培养阅读习惯，提升语文素养，在故事中收获知识和快乐。',
    emoji: '📚',
    grade: '1-6年级',
    duration: '45分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['阅读', '语文', '表达'],
    color: '#4A90D9',
    objectives: [
      '培养阅读兴趣和习惯',
      '提高阅读理解能力',
      '锻炼语言表达能力'
    ],
    materials: ['课外读物'],
    content: `
      <h3>课程介绍</h3>
      <p>书籍是人类进步的阶梯，也是我们最好的朋友。让我们一起在书海里遨游，发现阅读的乐趣！</p>
      
      <h3>阅读的方法</h3>
      <p>学习正确的阅读方法，如何快速理解文章内容，如何做读书笔记。</p>
      
      <h3>故事分享会</h3>
      <p>每个同学分享一个自己最喜欢的故事，锻炼表达能力，也听听别人的精彩故事。</p>
      
      <h3>推荐书单</h3>
      <p>为不同年龄段的同学推荐适合的课外读物，让阅读成为一种习惯。</p>
    `,
    downloads: [
      { name: '小学生推荐书单.pdf', url: '#' },
      { name: '阅读记录卡模板.docx', url: '#' }
    ]
  },
  {
    id: '8',
    title: '团队合作游戏',
    category: 'quality',
    categoryName: '综合素质',
    description: '在游戏中学会合作，培养团队精神，结交新朋友！',
    emoji: '🤝',
    grade: '1-6年级',
    duration: '60分钟',
    difficulty: 'easy',
    difficultyText: '简单',
    tags: ['团队', '合作', '户外'],
    color: '#7BC47F',
    objectives: [
      '培养团队合作意识',
      '锻炼沟通协调能力',
      '增强自信心和勇气'
    ],
    materials: ['道具可根据游戏准备'],
    content: `
      <h3>课程介绍</h3>
      <p>一个人的力量是有限的，但是团队的力量是无穷的！让我们在游戏中学会合作，收获友谊。</p>
      
      <h3>游戏一：两人三足</h3>
      <p>和小伙伴绑在一起，齐心协力往前走，考验你们的默契度！</p>
      
      <h3>游戏二：接力比赛</h3>
      <p>团队接力，每个人都是重要的一环，为了团队的荣誉加油！</p>
      
      <h3>游戏三：信任背摔</h3>
      <p>相信你的小伙伴，勇敢地往后倒，他们一定会接住你！</p>
    `,
    downloads: [
      { name: '团队游戏大全.pdf', url: '#' },
      { name: '户外游戏安全须知.docx', url: '#' }
    ]
  }
];

const teamData = [
  { name: '邓同学', avatar: '🧑', bgColor: 'linear-gradient(135deg, #FFE066, #FFB347)' },
  { name: '郭同学', avatar: '👩', bgColor: 'linear-gradient(135deg, #FF9EC3, #FF6BA8)' },
  { name: '唐同学', avatar: '👩', bgColor: 'linear-gradient(135deg, #7BC47F, #4CAF50)' },
  { name: '钟同学', avatar: '👩', bgColor: 'linear-gradient(135deg, #B19CD9, #9C27B0)' },
  { name: '任同学', avatar: '👩', bgColor: 'linear-gradient(135deg, #4A90D9, #2196F3)' },
  { name: '刘同学', avatar: '🧑', bgColor: 'linear-gradient(135deg, #80DEEA, #00BCD4)' }
];

const quizData = [
  {
    id: 1,
    question: '太阳是什么颜色的？',
    options: ['红色', '黄色', '白色', '蓝色'],
    correct: 2,
    explanation: '太阳实际上是白色的，我们看到的黄色是因为大气层散射的原因哦！',
    category: 'science'
  },
  {
    id: 2,
    question: '水在多少摄氏度会沸腾？',
    options: ['50℃', '80℃', '100℃', '120℃'],
    correct: 2,
    explanation: '在标准大气压下，水的沸点是100摄氏度。',
    category: 'science'
  },
  {
    id: 3,
    question: '彩虹有几种颜色？',
    options: ['5种', '6种', '7种', '8种'],
    correct: 2,
    explanation: '彩虹有七种颜色：红、橙、黄、绿、青、蓝、紫。',
    category: 'science'
  },
  {
    id: 4,
    question: '中国的首都是哪里？',
    options: ['上海', '北京', '广州', '深圳'],
    correct: 1,
    explanation: '北京是中华人民共和国的首都。',
    category: 'culture'
  },
  {
    id: 5,
    question: '"床前明月光"的下一句是什么？',
    options: ['低头思故乡', '疑是地上霜', '举头望明月', '月是故乡明'],
    correct: 1,
    explanation: '这是李白的《静夜思》：床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    category: 'culture'
  },
  {
    id: 6,
    question: '一个星期有几天？',
    options: ['5天', '6天', '7天', '8天'],
    correct: 2,
    explanation: '一个星期有七天，分别是星期一到星期日。',
    category: 'math'
  },
  {
    id: 7,
    question: '12 + 8 = ?',
    options: ['18', '19', '20', '21'],
    correct: 2,
    explanation: '12加8等于20，你答对了吗？',
    category: 'math'
  },
  {
    id: 8,
    question: '遇到火灾应该打什么电话？',
    options: ['110', '119', '120', '122'],
    correct: 1,
    explanation: '火警电话是119，遇到火灾要及时拨打哦。',
    category: 'safety'
  },
  {
    id: 9,
    question: '交通信号灯黄灯表示什么？',
    options: ['可以通行', '注意/等待', '禁止通行', '可以转弯'],
    correct: 1,
    explanation: '黄灯亮时表示警示，已经越过停止线的车辆可以继续通行，没越过的要停下等待。',
    category: 'safety'
  },
  {
    id: 10,
    question: '夏天很热，可以一个人去河边游泳吗？',
    options: ['可以', '不可以', '有大人陪才可以', '水浅就可以'],
    correct: 1,
    explanation: '绝对不可以一个人去河边游泳！即使有大人陪，也要去正规的游泳馆。',
    category: 'safety'
  }
];

const activityData = [
  {
    id: 1,
    title: '开学第一课',
    date: '2026-07-10',
    description: '我们的活动正式开始啦！小朋友们都很热情，大家都很期待接下来的活动。',
    images: [
      { type: 'emoji', src: '📚', alt: '开学第一课' },
      { type: 'emoji', src: '🎒', alt: '新书包' },
      { type: 'emoji', src: '😊', alt: '开心的小朋友' },
      { type: 'emoji', src: '👋', alt: '打招呼' }
    ],
    video: null
  },
  {
    id: 2,
    title: '科学实验课',
    date: '2026-07-12',
    description: '今天上了神奇的水实验课，小朋友们对科学实验充满了好奇，每个人都亲自动手操作。',
    images: [
      { type: 'emoji', src: '🔬', alt: '显微镜' },
      { type: 'emoji', src: '💧', alt: '水滴实验' },
      { type: 'emoji', src: '⚗️', alt: '实验器材' },
      { type: 'emoji', src: '🧪', alt: '试管' }
    ],
    video: null
  },
  {
    id: 3,
    title: '户外拓展活动',
    date: '2026-07-15',
    description: '阳光明媚的一天，我们在操场上进行了团队合作游戏，大家玩得很开心！',
    images: [
      { type: 'emoji', src: '🏃', alt: '跑步' },
      { type: 'emoji', src: '⚽', alt: '足球' },
      { type: 'emoji', src: '🤸', alt: '运动' },
      { type: 'emoji', src: '😄', alt: '开心' }
    ],
    video: null
  },
  {
    id: 4,
    title: '美术手工课',
    date: '2026-07-18',
    description: '小朋友们的动手能力太强了！每个人都完成了自己的折纸作品，还有创意绘画。',
    images: [
      { type: 'emoji', src: '🎨', alt: '画画' },
      { type: 'emoji', src: '✂️', alt: '手工' },
      { type: 'emoji', src: '📝', alt: '写字' },
      { type: 'emoji', src: '🖼️', alt: '作品展示' }
    ],
    video: null
  },
  {
    id: 5,
    title: '安全教育日',
    date: '2026-07-20',
    description: '今天是安全教育日，我们学习了交通安全、防溺水、防火等知识，还进行了消防演练。',
    images: [
      { type: 'emoji', src: '🚒', alt: '消防车' },
      { type: 'emoji', src: '🚦', alt: '交通灯' },
      { type: 'emoji', src: '🛡️', alt: '安全' },
      { type: 'emoji', src: '🚨', alt: '警报' }
    ],
    video: null
  },
  {
    id: 6,
    title: '文艺表演',
    date: '2026-07-22',
    description: '小朋友们准备了精彩的节目，唱歌、跳舞、诗朗诵...每个人都很棒！',
    images: [
      { type: 'emoji', src: '🎤', alt: '唱歌' },
      { type: 'emoji', src: '💃', alt: '跳舞' },
      { type: 'emoji', src: '🎵', alt: '音乐' },
      { type: 'emoji', src: '👏', alt: '鼓掌' }
    ],
    video: null
  },
  {
    id: 7,
    title: '知识竞赛',
    date: '2026-07-25',
    description: '趣味知识竞赛开始啦！小朋友们分组比赛，既学到了知识又增进了友谊。',
    images: [
      { type: 'emoji', src: '🏆', alt: '奖杯' },
      { type: 'emoji', src: '📖', alt: '书本' },
      { type: 'emoji', src: '🧠', alt: '动脑' },
      { type: 'emoji', src: '🎯', alt: '目标' }
    ],
    video: null
  },
  {
    id: 8,
    title: '结营仪式',
    date: '2026-07-28',
    description: '时间过得真快，活动就要结束了。虽然很不舍，但我们收获了满满的感动和回忆。',
    images: [
      { type: 'emoji', src: '😭', alt: '不舍' },
      { type: 'emoji', src: '🎊', alt: '庆祝' },
      { type: 'emoji', src: '🏅', alt: '奖牌' },
      { type: 'emoji', src: '💝', alt: '爱心' }
    ],
    video: null
  }
];

const photoWallData = [
  { id: 1, type: 'emoji', src: '📚', title: '开学第一课', date: '2026-07-10', desc: '小朋友们第一天上学，都很兴奋！', color: '#E8F4FD' },
  { id: 2, type: 'emoji', src: '🎨', title: '创意绘画', date: '2026-07-18', desc: '孩子们画的画真的太棒了！', color: '#FCE4EC' },
  { id: 3, type: 'emoji', src: '🔬', title: '科学实验', date: '2026-07-12', desc: '大家都认真做实验的样子真可爱', color: '#E8F5E9' },
  { id: 4, type: 'emoji', src: '⚽', title: '体育课', date: '2026-07-15', desc: '操场上充满了欢声笑语', color: '#FFF3E0' },
  { id: 5, type: 'emoji', src: '📖', title: '阅读课', date: '2026-07-16', desc: '每个人都沉浸在书的世界里', color: '#F3E5F5' },
  { id: 6, type: 'emoji', src: '🎤', title: '文艺汇演', date: '2026-07-22', desc: '小歌手们唱得真好听！', color: '#FFF8E1' },
  { id: 7, type: 'emoji', src: '✂️', title: '手工课', date: '2026-07-19', desc: '千纸鹤承载着美好的愿望', color: '#E0F7FA' },
  { id: 8, type: 'emoji', src: '🏆', title: '知识竞赛', date: '2026-07-25', desc: '冠军小组诞生啦！', color: '#FBE9E7' },
  { id: 9, type: 'emoji', src: '🚒', title: '消防演练', date: '2026-07-20', desc: '学习消防安全知识', color: '#FFEBEE' },
  { id: 10, type: 'emoji', src: '🤝', title: '团队游戏', date: '2026-07-17', desc: '团结就是力量！', color: '#E8F5E9' },
  { id: 11, type: 'emoji', src: '🌱', title: '植物观察', date: '2026-07-21', desc: '小种子快快发芽吧', color: '#F1F8E9' },
  { id: 12, type: 'emoji', src: '🎊', title: '结营仪式', date: '2026-07-28', desc: '我们不说再见', color: '#FFF3E0' }
];

const videoData = [
  {
    id: 1,
    title: '开学第一天精彩回顾',
    date: '2026-07-10',
    description: '记录小朋友们第一天来到学校的精彩瞬间，有欢笑，有好奇，还有满满的期待。',
    thumbnail: '🎬',
    thumbColor: '#E8F4FD',
    videoUrl: ''
  },
  {
    id: 2,
    title: '科学实验课集锦',
    date: '2026-07-12',
    description: '神奇的水实验、火山爆发、彩虹牛奶...一起看看小朋友们做实验的认真模样吧！',
    thumbnail: '🔬',
    thumbColor: '#E8F5E9',
    videoUrl: ''
  },
  {
    id: 3,
    title: '文艺表演完整版',
    date: '2026-07-22',
    description: '唱歌、跳舞、诗朗诵...小朋友们精心准备的节目，每一个都很精彩！',
    thumbnail: '🎤',
    thumbColor: '#FCE4EC',
    videoUrl: ''
  },
  {
    id: 4,
    title: '活动vlog - 我们的一天',
    date: '2026-07-25',
    description: '跟着镜头看看小树苗队一天的生活是怎样度过的吧~',
    thumbnail: '📹',
    thumbColor: '#FFF3E0',
    videoUrl: ''
  }
];

const memoryGameEmojis = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🐯', '🦁'];
