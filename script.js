/* ==========================================================
   script.js: comportamento do site (compartilhado por todas
   as páginas). Cada bloco abaixo cuida de uma função.
   ========================================================== */

/* ---------- 1. MENU NO CELULAR ---------- */
// Pegamos o botão hambúrguer e o menu pelo seletor/ID do HTML
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('menu');

// Ao clicar no botão, alterna a classe "aberto" (o CSS mostra/esconde o menu)
menuBtn.addEventListener('click', () => {
  const aberto = nav.classList.toggle('aberto'); // true se acabou de abrir
  // aria-expanded avisa leitores de tela se o menu está aberto
  menuBtn.setAttribute('aria-expanded', aberto);
});
 
/* ---------- 2. MARCAR A PÁGINA ATUAL NO MENU ---------- */
// location.pathname = "/pasta/contato.html"; pegamos só o último pedaço
// Se estiver vazio (site aberto na raiz), assumimos index.html
const atual = location.pathname.split('/').pop() || 'index.html';

// Percorre os links do menu e marca o que aponta para esta página
nav.querySelectorAll('a').forEach((a) => {
  if (a.getAttribute('href') === atual) {
    a.setAttribute('aria-current', 'page'); // o CSS desenha o sublinhado laranja
  }
});
/* ---------- 4. ANO DO RODAPÉ ---------- */
// Assim o "©" nunca fica desatualizado
document.getElementById('ano').textContent = new Date().getFullYear();
