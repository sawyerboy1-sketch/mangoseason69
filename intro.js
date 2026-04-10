window.addEventListener('load', function () {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  setTimeout(() => {
    overlay.classList.add('hide');
  }, 1700);
});
