const botao = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');

botao.addEventListener('click', function () {
  menu.classList.toggle('ativo');
});
