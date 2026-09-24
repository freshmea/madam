const projectRoot = document.querySelector('[data-project-root]');

const getBasePath = () => projectRoot?.dataset.basePath || '..';

const projectCard = (project) => `
  <article class="portfolio-card" data-category="${project.category}">
    <a href="${project.detailPage || `project.html?id=${encodeURIComponent(project.id)}`}" aria-label="${project.title} 상세 보기">
      <div class="portfolio-image"><img src="${getBasePath()}/${project.image}" loading="lazy" alt="${project.title} 대표 이미지" /></div>
      <div class="portfolio-copy">
        <div class="portfolio-meta"><span>${project.categoryLabel}</span><span>${project.date ? project.date.replace('-', '.') : project.year}</span></div>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <span class="portfolio-more">자세히 보기 <b>↗</b></span>
      </div>
    </a>
  </article>`;

const renderList = (projects) => {
  const grid = document.querySelector('#project-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const categories = ['all', 'project', 'online', 'offline'];
  const normalize = (value) => value === 'robotics' ? 'project' : categories.includes(value) ? value : 'all';
  let activeCategory = normalize(params.get('category'));
  projects = projects.filter((project) => !project.draft).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const buttons = [...document.querySelectorAll('[data-filter]')];

  const draw = () => {
    const visible = activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory);
    grid.innerHTML = visible.map(projectCard).join('');
    buttons.forEach((button) => {
      const selected = button.dataset.filter === activeCategory;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  };

  buttons.forEach((button) => button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    const nextUrl = activeCategory === 'all' ? 'projects.html' : `projects.html?category=${activeCategory}`;
    window.history.replaceState({}, '', nextUrl);
    draw();
  }));

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) return;
    event.preventDefault();
    activeCategory = normalize(url.searchParams.get('category'));
    history.replaceState({}, '', url);
    draw();
  });
  window.addEventListener('popstate', () => {
    activeCategory = normalize(new URLSearchParams(location.search).get('category'));
    draw();
  });
  draw();
};

const renderDetail = (projects) => {
  const detail = document.querySelector('#project-detail');
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get('id');
  const project = projects.find((item) => item.id === id);

  if (!project) {
    detail.innerHTML = '<div class="project-empty"><p>프로젝트를 찾을 수 없습니다.</p><a href="projects.html">프로젝트 목록으로 돌아가기</a></div>';
    return;
  }

  document.title = `${project.title} | MADAM`;
  detail.innerHTML = `
    <div class="detail-heading">
      <a class="detail-back" href="projects.html">← Education</a>
      <p>${project.categoryLabel} · ${project.date ? project.date.replace('-', '.') : project.year}</p>
      <h1>${project.title}</h1>
      <div class="detail-summary">${project.summary}</div>
      ${project.detailPage ? `<a class="book-text-link" href="${project.detailPage}">교육 기록 자세히 읽기 →</a>` : ''}
    </div>
    <figure class="detail-visual"><img src="${getBasePath()}/${project.image}" alt="${project.title} 대표 이미지" /></figure>
    <div class="detail-body">
      <aside><span>Client</span><strong>${project.client}</strong><span>Services</span>${project.services.map((service) => `<strong>${service}</strong>`).join('')}</aside>
      <div><h2>Project story</h2><p>${project.description}</p><h2>Outcome</h2><ul>${project.outcomes.map((outcome) => `<li>${outcome}</li>`).join('')}</ul></div>
    </div>`;
};

if (projectRoot) {
  fetch(`${getBasePath()}/data/projects.json?v=education-20260924-vrew`, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error('프로젝트 데이터를 불러올 수 없습니다.');
      return response.json();
    })
    .then((projects) => {
      renderList(projects);
      renderDetail(projects);
    })
    .catch((error) => {
      projectRoot.innerHTML = `<div class="project-empty"><p>${error.message}</p><p>로컬 웹 서버로 페이지를 실행해 주세요.</p></div>`;
    });
}
