(function () {
  var fab = document.getElementById('contact-fab');
  var popover = document.getElementById('contact-fab-popover');
  if (!fab || !popover) return;

  var popoverLinks = popover.querySelectorAll('a[href]');

  function isOpen() {
    return popover.classList.contains('open');
  }

  function openPopover() {
    popover.removeAttribute('inert');
    popover.setAttribute('aria-hidden', 'false');
    popover.classList.add('open');
    popoverLinks.forEach(function (link) { link.removeAttribute('tabindex'); });
    fab.setAttribute('aria-expanded', 'true');

    if (popoverLinks.length) {
      window.requestAnimationFrame(function () { popoverLinks[0].focus(); });
    }
  }

  function closePopover(returnFocus) {
    popover.classList.remove('open');
    popover.setAttribute('aria-hidden', 'true');
    popover.setAttribute('inert', '');
    popoverLinks.forEach(function (link) { link.setAttribute('tabindex', '-1'); });
    fab.setAttribute('aria-expanded', 'false');

    if (returnFocus) fab.focus();
  }

  fab.addEventListener('click', function () {
    if (isOpen()) closePopover(false);
    else openPopover();
  });

  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target) && !popover.contains(e.target)) {
      closePopover(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (!isOpen() || event.key !== 'Escape') return;
    event.preventDefault();
    closePopover(true);
  });

  closePopover(false);
})();
