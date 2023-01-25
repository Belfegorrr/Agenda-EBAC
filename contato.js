const form = document.getElementById("form-agenda");
linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  criaLinha();
});

function criaLinha() {
  const nomeContato = document.getElementById("nome-contato");
  const telefoneContato = document.getElementById("telefone-contato");
  

  let linha = `<tr>`;
  linha += `<td> ${nomeContato.value} </td>`;
  linha += `<td> ${telefoneContato.value} </td>`;
  linha += `<td class='td-acoes'><span class='btn-excluir' id='excluir'>Excluir</span></td>`;
  linha += `</tr>`;

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  nomeContato.value = '';
  telefoneContato.value = '';
}
