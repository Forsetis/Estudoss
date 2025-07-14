const sections = document.querySelectorAll('.view-more');

sections.forEach(section => {
  const expandBtn = section.querySelector('.view-more-expand');
  const collapseBtn = section.querySelector('.view-more-collapse');

  expandBtn.addEventListener('click', () => {
    section.classList.add('view-more--expand');
  });

  collapseBtn.addEventListener('click', () => {
    section.classList.remove('view-more--expand');
  });
});