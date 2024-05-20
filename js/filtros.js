const btnFiltro = document.querySelectorAll('.filtro');
btnFiltro.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    console.log(categoria)
    let livrosFiltrados = produtos.filter(livro => 
        livro.categoria == categoria);
        exibiLivrosNaPagina(livrosFiltrados);
}
