const controller = new NegociacaoController();

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));










/***/
// Preenche os campos automaticamente
window.onload = controller.preencheDados;
/***/
