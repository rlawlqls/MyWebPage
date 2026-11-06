(function () {
  var navbar = document.getElementById('navbar');
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileBackdrop = document.getElementById('mobile-backdrop');
  var DESKTOP_MIN_WIDTH = 1024;

  function updateNavVisibility() {
    if (window.innerWidth >= DESKTOP_MIN_WIDTH) closeMobileMenu(false);
  }

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    var isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu(false);
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    if (!mobileMenu || !mobileBackdrop || !hamburgerBtn) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileBackdrop.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.setAttribute('aria-label', 'Close menu');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'none';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'block';
    document.body.style.overflow = 'hidden';

    var firstLink = mobileMenu.querySelector('a');
    if (firstLink) window.requestAnimationFrame(function () { firstLink.focus(); });
  }

  function closeMobileMenu(returnFocus) {
    if (!mobileMenu || !mobileBackdrop || !hamburgerBtn) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileBackdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', 'Open menu');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'block';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'none';
    document.body.style.overflow = '';
    if (returnFocus) hamburgerBtn.focus();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', updateNavVisibility);

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', function () { closeMobileMenu(true); });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMobileMenu(false); });
    });
  }
  document.addEventListener('keydown', function (event) {
    if (!mobileMenu || !mobileMenu.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeMobileMenu(true);
      return;
    }

    if (event.key === 'Tab') {
      var links = mobileMenu.querySelectorAll('a[href]');
      if (!links.length) return;
      var firstLink = links[0];
      var lastLink = links[links.length - 1];

      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        firstLink.focus();
      }
    }
  });

  updateNavVisibility();
  handleScroll();
})();
