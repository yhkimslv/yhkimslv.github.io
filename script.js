'use strict';

const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const status = document.getElementById('filter-status');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visible = 0;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
      if (!project.hidden) visible++;
    });
    status.textContent = category === 'all'
      ? `Showing all ${visible} projects.`
      : `Showing ${visible} ${category === 'ml' ? 'machine learning and AI' : 'software'} projects.`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
