const tabela = document.querySelector('#agenda')

tabela.addEventListener('click', function(e){
    const clicado = e.target;
    if(clicado.classList.contains('btn-excluir')) {
        const celula = clicado.parentNode
        const linha = celula.parentNode
        linha.remove()
    }
    
})