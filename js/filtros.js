const btnFiltro = document.querySelectorAll('.filtro');
const btnTodos = document.querySelector('.todos');
btnFiltro.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == categoria);
		if(categoria === 'Todos'){
			mostrarLivros(livros)
		}else{
			mostrarLivros(livrosFiltrados)
		}
}



