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
    syncPreviews();
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const courseFilters = document.querySelectorAll('[data-course-filter]');
const courseGroups = [...document.querySelectorAll('[data-course]')];
const courseStatus = document.getElementById('course-status');
const courseExpand = document.querySelector('.course-expand');

function syncCourseExpand() {
  const visibleGroups = courseGroups.filter(group => !group.hidden);
  const expanded = visibleGroups.every(group => group.open);
  courseExpand.innerHTML = `${expanded ? 'Collapse' : 'Expand'} all courses <span aria-hidden="true">${expanded ? '−' : '+'}</span>`;
}

courseFilters.forEach(button => {
  button.addEventListener('click', () => {
    const course = button.dataset.courseFilter;
    courseFilters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    let groups = 0;
    courseGroups.forEach(group => {
      group.hidden = course !== 'all' && group.dataset.course !== course;
      if (group.hidden) return;
      if (course !== 'all') group.open = true;
      visible += group.querySelectorAll('.course-card').length;
      groups++;
    });
    courseStatus.textContent = course === 'all'
      ? `${visible} coursework entries across ${groups} courses. Open a course to explore.`
      : `${visible} coursework ${visible === 1 ? 'entry' : 'entries'} in ${button.childNodes[0].textContent.trim()}.`;
    syncCourseExpand();
  });
});

courseGroups.forEach(group => group.addEventListener('toggle', syncCourseExpand));
courseExpand.addEventListener('click', () => {
  const visibleGroups = courseGroups.filter(group => !group.hidden);
  const expand = !visibleGroups.every(group => group.open);
  visibleGroups.forEach(group => { group.open = expand; });
  syncCourseExpand();
});

const demoDialog = document.getElementById('demo-dialog');
const demoCanvas = document.getElementById('demo-canvas');
const demoTitle = document.getElementById('demo-title');
const demoDescription = document.getElementById('demo-description');
const demoToggle = document.getElementById('demo-toggle');
let activeDemo = null;
let walkthroughPaused = false;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const previews = [];

function wantsPreview(preview) {
  return preview.userChoice ?? !reducedMotion.matches;
}

function canPlayPreview(preview) {
  return wantsPreview(preview) && preview.visible && !document.hidden
    && !demoDialog.open && !preview.launcher.closest('[data-category]')?.hidden;
}

function syncPreview(preview) {
  const shouldPlay = canPlayPreview(preview);
  const label = wantsPreview(preview) ? 'Pause preview' : 'Play preview';
  preview.toggle.textContent = label;
  preview.toggle.setAttribute('aria-label', `${label}: ${preview.title}`);
  if (shouldPlay === preview.playing) return;

  preview.playing = shouldPlay;
  const attempt = ++preview.attempt;
  if (preview.type === 'video') {
    if (shouldPlay) {
      if (!preview.media.hasAttribute('src')) preview.media.src = preview.source;
      preview.media.play().catch(() => {
        // Leave a usable Play button when a browser declines autoplay.
        if (attempt !== preview.attempt || !canPlayPreview(preview)) return;
        preview.userChoice = false;
        syncPreview(preview);
      });
    } else {
      preview.media.pause();
    }
  } else {
    // GIFs have no native pause API. A still poster stops all animation;
    // returning to the GIF replays the walkthrough.
    preview.media.src = shouldPlay ? preview.source : preview.poster;
  }
}

function syncPreviews() {
  previews.forEach(syncPreview);
}

const previewObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const preview = previews.find(item => item.launcher === entry.target);
      if (!preview) return;
      preview.visible = entry.isIntersecting && entry.intersectionRatio > 0;
      syncPreview(preview);
    });
  }, { threshold: 0.01 })
  : null;

document.querySelectorAll('[data-demo-src]').forEach((launcher, index) => {
  const data = launcher.dataset;
  if (data.demoType !== 'gif' && data.demoType !== 'video') return;
  const image = launcher.querySelector('img');
  if (!image) return;
  const poster = data.demoPoster || image.getAttribute('src');
  let media = image;

  if (data.demoType === 'video') {
    media = document.createElement('video');
    media.muted = true;
    media.defaultMuted = true;
    media.loop = true;
    media.playsInline = true;
    media.preload = 'none';
    media.poster = poster;
    media.setAttribute('aria-hidden', 'true');
    media.setAttribute('tabindex', '-1');
    media.width = Number(image.getAttribute('width'));
    media.height = Number(image.getAttribute('height'));
    image.replaceWith(media);
  } else {
    media.src = poster;
  }
  media.id = `project-preview-${index + 1}`;

  const controls = document.createElement('div');
  controls.className = 'preview-controls';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'preview-toggle';
  toggle.setAttribute('aria-controls', media.id);
  controls.append(toggle);
  launcher.closest('figure').append(controls);

  const preview = {
    launcher, media, toggle, poster, source: data.demoSrc,
    type: data.demoType, title: data.demoTitle,
    userChoice: null, visible: !previewObserver, playing: false, attempt: 0,
  };
  previews.push(preview);
  toggle.addEventListener('click', () => {
    preview.userChoice = !wantsPreview(preview);
    syncPreview(preview);
  });
  syncPreview(preview);
  previewObserver?.observe(launcher);
});

document.addEventListener('visibilitychange', syncPreviews);
reducedMotion.addEventListener('change', syncPreviews);

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
    syncPreviews();
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
  if (activeDemo?.type === 'video') {
    activeDemo.media.pause();
    activeDemo.media.removeAttribute('src');
    activeDemo.media.load();
  }
  demoCanvas.replaceChildren();
  activeDemo = null;
  document.body.classList.remove('demo-is-open');
  syncPreviews();
});
