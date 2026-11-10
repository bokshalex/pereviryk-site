// TODO(засновниця): замінити адресу на справжню пошту або посилання на форму (Tally / Google Form).
// Поки адреса не створена, листи не дійдуть — див. docs/next.md.
(function () {
  var EMAIL = 'hello@pereviryk.app';
  function wire() { document.querySelectorAll('.js-mail').forEach(function (a) {
    var plan = a.getAttribute('data-plan') || 'Питання';
    var subject = 'Перевірик: ' + plan;
    var body = plan === 'Питання' ? '' : 'Хочу «' + plan + '». Я: бухгалтер-ФОП / бухфірма / ріелтор (залиш потрібне). Клієнтів приблизно: ';
    a.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }); }
  wire();
  document.addEventListener('pv:mail', wire);
})();
