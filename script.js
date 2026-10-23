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

const demoDialog = document.getElementById('demo-dialog');
const demoCanvas = document.getElementById('demo-canvas');
const demoTitle = document.getElementById('demo-title');
const demoDescription = document.getElementById('demo-description');
const demoToggle = document.getElementById('demo-toggle');
let activeDemo = null;
let walkthroughPaused = false;

document.querySelectorAll('[data-demo-src]').forEach(launcher => {
  launcher.addEventListener('click', () => {
    const data = launcher.dataset;
    demoTitle.textContent = data.demoTitle;
    demoDescription.textContent = data.demoDescription;
    demoCanvas.replaceChildren();
    demoToggle.hidden = data.demoType !== 'gif';
    walkthroughPaused = false;
    demoToggle.textContent = 'Pause walkthrough';

    const media = document.createElement(data.demoType === 'video' ? 'video' : 'img');
    if (data.demoType === 'video') {
      media.controls = true;
      media.muted = true;
      media.autoplay = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.poster = data.demoPoster;
      media.setAttribute('aria-label', data.demoTitle);
    } else {
      media.alt = data.demoTitle;
    }
    media.src = data.demoSrc;
    demoCanvas.append(media);
    activeDemo = { media, type: data.demoType, source: data.demoSrc, poster: data.demoPoster };
    demoDialog.showModal();
    document.body.classList.add('demo-is-open');
  });
});

demoToggle.addEventListener('click', () => {
  if (!activeDemo || activeDemo.type !== 'gif') return;
  walkthroughPaused = !walkthroughPaused;
  activeDemo.media.src = walkthroughPaused ? activeDemo.poster : activeDemo.source;
  demoToggle.textContent = walkthroughPaused ? 'Replay walkthrough' : 'Pause walkthrough';
});

demoDialog.addEventListener('click', event => {
  if (event.target === demoDialog) demoDialog.close();
});

demoDialog.addEventListener('close', () => {
  if (activeDemo?.type === 'video') activeDemo.media.pause();
  demoCanvas.replaceChildren();
  activeDemo = null;
  document.body.classList.remove('demo-is-open');
});
