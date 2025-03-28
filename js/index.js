'use strict'
{
  const var1 = document.querySelector('.hum_var1');
  const var2 = document.querySelector('.hum_var2');
  const var3 = document.querySelector('.hum_var3');
  const modal = document.querySelector('.modal');
  const hum = document.querySelector('.hum_frame');

  hum.addEventListener('click', () => {
    var1.classList.toggle('open');
    var2.classList.toggle('open');
    var3.classList.toggle('open');
    modal.classList.toggle('open');
  });

  const details = document.querySelector('.goriyou_detail1')
}