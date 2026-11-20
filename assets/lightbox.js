/* 画像のポップアップ。[data-lightbox] の中の <a href="画像"> を押すと <dialog> で開く。
   JS が動かないときは、a がそのまま画像へのリンクとして働く。 */
(function () {
  'use strict';
  var groups = document.querySelectorAll('[data-lightbox]');
  if (!groups.length || typeof HTMLDialogElement === 'undefined') return;

  var dlg = document.createElement('dialog');
  dlg.className = 'lb-dialog';
  dlg.setAttribute('aria-label', '画像の拡大表示');
  dlg.innerHTML =
    '<div class="lb-stage">' +
    '<button type="button" class="lb-btn lb-close" aria-label="閉じる">×</button>' +
    '<button type="button" class="lb-btn lb-prev" aria-label="前の画像">‹</button>' +
    '<img class="lb-img" alt="">' +
    '<p class="lb-cap"></p>' +
    '<button type="button" class="lb-btn lb-next" aria-label="次の画像">›</button>' +
    '</div>';
  document.body.appendChild(dlg);
  var stage = dlg.querySelector('.lb-stage');
  var img = dlg.querySelector('.lb-img');
  var cap = dlg.querySelector('.lb-cap');
  var prev = dlg.querySelector('.lb-prev');
  var next = dlg.querySelector('.lb-next');
  var closeBtn = dlg.querySelector('.lb-close');

  var links = [];
  var index = 0;
  var opener = null;

  function show(i) {
    index = i;
    var a = links[i];
    var thumb = a.querySelector('img');
    var fig = a.closest('figure');
    var fc = fig && fig.querySelector('figcaption');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = fc ? fc.textContent.trim() : '';
    stage.classList.toggle('has-cap', !!cap.textContent);
    prev.disabled = i === 0;
    next.disabled = i === links.length - 1;
  }

  function open(group, a) {
    links = Array.prototype.slice.call(group.querySelectorAll('a[href]'));
    opener = a;
    show(links.indexOf(a));
    document.body.classList.add('lb-open');
    dlg.showModal();
    closeBtn.focus();
  }

  function step(d) {
    var n = index + d;
    if (n < 0 || n >= links.length) return;
    show(n);
  }

  groups.forEach(function (group) {
    group.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest('a[href]');
      if (!a || !group.contains(a)) return;
      e.preventDefault();
      open(group, a);
    });
  });

  closeBtn.addEventListener('click', function () { dlg.close(); });
  prev.addEventListener('click', function () { step(-1); });
  next.addEventListener('click', function () { step(1); });
  // 背景（画像・ボタン・説明の外側）を押したら閉じる
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target === stage) dlg.close();
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
  dlg.addEventListener('close', function () {
    document.body.classList.remove('lb-open');
    if (opener) opener.focus();
  });
})();
