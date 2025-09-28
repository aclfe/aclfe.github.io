document.addEventListener("DOMContentLoaded", () => {
  const _0x489054 = {
    'pageTransition': {
      'enabled': true,
      'duration': 0x12c,
      'easing': "easeOutExpo",
      'intensity': "subtle"
    },
    'sectionScroll': {
      'enabled': true,
      'duration': 0x190,
      'easing': "easeOutCubic",
      'stagger': 0x64,
      'intensity': "subtle"
    },
    'navigation': {
      'enabled': true,
      'duration': 0x12c,
      'easing': "easeOutQuart",
      'intensity': 'subtle'
    },
    'cards': {
      'enabled': true,
      'duration': 0xc8,
      'easing': "easeOutQuart",
      'intensity': "subtle"
    }
  };
  function _0x26a3ae(_0x4fca94, _0x2647ce) {
    const _0xb510ef = _0x489054[_0x4fca94].intensity;
    const _0x4ed337 = {
      'subtle': {
        'translateY': 0xf,
        'scale': 0.98,
        'opacity': 0.7,
        'rotate': 0x1
      },
      'medium': {
        'translateY': 0x1e,
        'scale': 0.95,
        'opacity': 0.3,
        'rotate': 0x2
      },
      'dramatic': {
        'translateY': 0x3c,
        'scale': 0.9,
        'opacity': 0x0,
        'rotate': 0x5
      }
    };
    return _0x4ed337[_0xb510ef][_0x2647ce] || _0x4ed337.medium[_0x2647ce];
  }
  if (_0x489054.pageTransition.enabled && typeof anime !== "undefined") {
    anime.timeline({
      'easing': _0x489054.pageTransition.easing,
      'duration': _0x489054.pageTransition.duration
    }).add({
      'targets': "nav, aside",
      'translateX': [-0x32, 0x0],
      'opacity': [0x0, 0x1],
      'duration': _0x489054.pageTransition.duration * 0.8
    }).add({
      'targets': ".section, main",
      'translateY': [_0x26a3ae("pageTransition", "translateY"), 0x0],
      'opacity': [_0x26a3ae("pageTransition", "opacity"), 0x1],
      'duration': _0x489054.pageTransition.duration,
      'offset': "-=400"
    }).add({
      'targets': ".project-card, .blog-card, article",
      'translateY': [_0x26a3ae("pageTransition", "translateY") * 0.5, 0x0],
      'opacity': [0x0, 0x1],
      'delay': anime.stagger(_0x489054.sectionScroll.stagger),
      'duration': _0x489054.pageTransition.duration * 0.6,
      'offset': "-=600"
    });
  }
  const _0x17d126 = document.getElementById('dark-mode-toggle');
  const _0x10698a = document.body;
  const _0x5cc354 = localStorage.getItem("theme");
  if (_0x5cc354 === "dark") {
    _0x10698a.classList.add("dark");
    if (_0x17d126) {
      _0x17d126.textContent = "light mode.";
    }
  }
  if (_0x17d126) {
    _0x17d126.addEventListener("click", () => {
      if (_0x489054.navigation.enabled && typeof anime !== 'undefined') {
        anime({
          'targets': _0x17d126,
          'scale': [0x1, 0.9, 0x1],
          'duration': _0x489054.navigation.duration,
          'easing': _0x489054.navigation.easing
        });
      }
      _0x10698a.classList.toggle('dark');
      const _0x37b089 = _0x10698a.classList.contains("dark");
      _0x17d126.textContent = _0x37b089 ? "light mode." : "dark mode.";
      localStorage.setItem("theme", _0x37b089 ? "dark" : "light");
    });
  }
  if (_0x489054.sectionScroll.enabled && typeof anime !== 'undefined') {
    const _0x25e6c9 = document.querySelectorAll(".section-fade-in, .project-card, .blog-card");
    const _0x5b7b99 = new IntersectionObserver(_0x117770 => {
      _0x117770.forEach(_0x3924e4 => {
        if (_0x3924e4.isIntersecting && !_0x3924e4.target.classList.contains("animated")) {
          _0x3924e4.target.classList.add('animated');
          anime({
            'targets': _0x3924e4.target,
            'translateY': [_0x26a3ae('sectionScroll', "translateY"), 0x0],
            'opacity': [_0x26a3ae('sectionScroll', "opacity"), 0x1],
            'scale': [_0x26a3ae('sectionScroll', "scale"), 0x1],
            'duration': _0x489054.sectionScroll.duration,
            'easing': _0x489054.sectionScroll.easing
          });
          const _0x3fe77c = _0x3924e4.target.querySelectorAll("h1, h2, h3, p, .project-card, .blog-card, article");
          if (_0x3fe77c.length > 0x0) {
            anime({
              'targets': _0x3fe77c,
              'translateY': [_0x26a3ae("sectionScroll", "translateY") * 0.5, 0x0],
              'opacity': [0x0, 0x1],
              'delay': anime.stagger(_0x489054.sectionScroll.stagger),
              'duration': _0x489054.sectionScroll.duration * 0.8,
              'easing': _0x489054.sectionScroll.easing
            });
          }
        }
      });
    }, {
      'threshold': 0.1,
      'rootMargin': "0px 0px -50px 0px"
    });
    _0x25e6c9.forEach(_0x120410 => {
      _0x5b7b99.observe(_0x120410);
    });
  } else {
    const _0x48145a = document.querySelectorAll(".section-fade-in");
    const _0x3ad570 = new IntersectionObserver(_0xf2b686 => {
      _0xf2b686.forEach(_0x387215 => {
        if (_0x387215.isIntersecting) {
          _0x387215.target.classList.add("is-visible");
        }
      });
    }, {
      'threshold': 0.1
    });
    _0x48145a.forEach(_0x1b5fc8 => {
      _0x3ad570.observe(_0x1b5fc8);
    });
  }
  document.querySelectorAll("a[href^=\"#\"]").forEach(_0x645168 => {
    _0x645168.addEventListener("click", function (_0x58f4d6) {
      _0x58f4d6.preventDefault();
      const _0x1a7a87 = document.querySelector(this.getAttribute("href"));
      if (_0x1a7a87) {
        if (_0x489054.navigation.enabled && typeof anime !== 'undefined') {
          anime({
            'targets': this,
            'scale': [0x1, 0.95, 0x1],
            'duration': _0x489054.navigation.duration * 0.5,
            'easing': _0x489054.navigation.easing
          });
        }
        _0x1a7a87.scrollIntoView({
          'behavior': "smooth",
          'block': "start"
        });
      }
    });
  });
  if (_0x489054.pageTransition.enabled && typeof anime !== "undefined") {
    document.querySelectorAll("a[href]:not([href^=\"#\"])").forEach(_0xf6c24d => {
      _0xf6c24d.addEventListener("click", function (_0x4a5743) {
        const _0xc4f830 = this.getAttribute("href");
        if (_0xc4f830 && !_0xc4f830.startsWith("http") && !_0xc4f830.startsWith("mailto")) {
          _0x4a5743.preventDefault();
          anime({
            'targets': "body > *",
            'translateY': [0x0, -_0x26a3ae('pageTransition', "translateY")],
            'opacity': [0x1, _0x26a3ae("pageTransition", "opacity")],
            'duration': _0x489054.pageTransition.duration * 0.6,
            'easing': _0x489054.pageTransition.easing,
            'complete': () => {
              window.location.href = _0xc4f830;
            }
          });
        }
      });
    });
  }
  if (_0x489054.cards.enabled && typeof anime !== 'undefined') {
    document.querySelectorAll(".project-card, .blog-card").forEach(_0x5369bc => {
      _0x5369bc.addEventListener('mouseenter', function () {
        anime({
          'targets': this,
          'translateY': -0x5,
          'scale': 1.02,
          'duration': _0x489054.cards.duration,
          'easing': _0x489054.cards.easing
        });
      });
      _0x5369bc.addEventListener("mouseleave", function () {
        anime({
          'targets': this,
          'translateY': 0x0,
          'scale': 0x1,
          'duration': _0x489054.cards.duration,
          'easing': _0x489054.cards.easing
        });
      });
    });
  }
  const _0x3e7456 = document.getElementById("gameCanvas");
  const _0x50bf28 = _0x3e7456.getContext('2d');
  const _0x4a626c = document.getElementById("startGameBtn");
  const _0x4bba05 = document.getElementById("scoreEl");
  const _0x21d504 = document.getElementById("timerEl");
  const _0x2b8246 = document.getElementById("finalScore");
  let _0x1cf382;
  let _0x13e6c6;
  let _0x1a559f;
  let _0x4551fe;
  let _0x31a481;
  let _0x277285;
  function _0x420479() {
    const _0x527bc9 = _0x3e7456.parentElement;
    _0x3e7456.width = _0x527bc9.clientWidth;
    _0x3e7456.height = _0x3e7456.width * 0.6;
  }
  window.addEventListener('resize', _0x420479);
  _0x420479();
  function _0x4cc83e() {
    _0x1cf382 = 0x0;
    _0x13e6c6 = 0x1e;
    _0x1a559f = [];
    _0x4bba05.textContent = _0x1cf382;
    _0x21d504.textContent = _0x13e6c6;
    _0x2b8246.classList.add('hidden');
    _0x4a626c.disabled = true;
    _0x4a626c.textContent = "Game in progress...";
    _0x4551fe = requestAnimationFrame(_0x2df275);
    _0x31a481 = setInterval(() => {
      _0x13e6c6--;
      _0x21d504.textContent = _0x13e6c6;
      if (_0x13e6c6 <= 0x0) {
        _0x2ad3af();
      }
    }, 0x3e8);
    _0x277285 = setInterval(_0x4444c5, 0x2bc);
  }
  function _0x2df275() {
    _0x50bf28.clearRect(0x0, 0x0, _0x3e7456.width, _0x3e7456.height);
    _0x1a559f.forEach((_0xb7a108, _0x9ee193) => {
      _0xb7a108.life--;
      if (_0xb7a108.life <= 0x0) {
        _0x1a559f.splice(_0x9ee193, 0x1);
      }
      _0x343a4c(_0xb7a108);
    });
    _0x4551fe = requestAnimationFrame(_0x2df275);
  }
  function _0x343a4c(_0x145c2d) {
    _0x50bf28.fillStyle = _0x145c2d.color;
    _0x50bf28.beginPath();
    _0x50bf28.arc(_0x145c2d.x, _0x145c2d.y, _0x145c2d.radius, 0x0, Math.PI * 0x2);
    _0x50bf28.fill();
  }
  function _0x4444c5() {
    const _0x264953 = Math.random() * 0xf + 0xa;
    const _0x576235 = Math.random() * (_0x3e7456.width - _0x264953 * 0x2) + _0x264953;
    const _0x1982d5 = Math.random() * (_0x3e7456.height - _0x264953 * 0x2) + _0x264953;
    const _0x23aad4 = ["#f87171", "#fb923c", "#a78bfa", "#60a5fa", "#34d399"];
    const _0x544844 = _0x23aad4[Math.floor(Math.random() * _0x23aad4.length)];
    _0x1a559f.push({
      'x': _0x576235,
      'y': _0x1982d5,
      'radius': _0x264953,
      'color': _0x544844,
      'life': 0x64
    });
  }
  function _0x2ad3af() {
    cancelAnimationFrame(_0x4551fe);
    clearInterval(_0x31a481);
    clearInterval(_0x277285);
    _0x4a626c.disabled = false;
    _0x4a626c.textContent = "Play Again";
    _0x2b8246.textContent = "Game Over! Your final score is " + _0x1cf382 + '.';
    _0x2b8246.classList.remove("hidden");
  }
  _0x3e7456.addEventListener("click", _0x3308e3 => {
    const _0x467e7f = _0x3e7456.getBoundingClientRect();
    const _0x3e6f45 = _0x3308e3.clientX - _0x467e7f.left;
    const _0x32d905 = _0x3308e3.clientY - _0x467e7f.top;
    for (let _0x55618e = _0x1a559f.length - 0x1; _0x55618e >= 0x0; _0x55618e--) {
      const _0x453be3 = _0x1a559f[_0x55618e];
      const _0x1e644 = Math.sqrt((_0x3e6f45 - _0x453be3.x) ** 0x2 + (_0x32d905 - _0x453be3.y) ** 0x2);
      if (_0x1e644 < _0x453be3.radius) {
        _0x1cf382++;
        _0x4bba05.textContent = _0x1cf382;
        _0x1a559f.splice(_0x55618e, 0x1);
        break;
      }
    }
  });
  _0x4a626c.addEventListener("click", _0x4cc83e);
});
