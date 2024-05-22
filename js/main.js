const listaLivros = document.querySelector('.lista_livros');
const areaDeCompra = document.querySelector('.area_compra_livro');
const campoDeBusca = document.querySelector('#campo_de_busca');

 function mostrarLivros(livros){
	const lista = `${
		livros.map(livro =>  `
		<li class="livro">
			<img src="${livro.imagem}" class="imagem-livro">
			<h1 class="titulo_livro">${livro.titulo}</h1>
			<h2 class="categoria_livro">${livro.categoria}</h2>
			<div class="area_compra_livro">
				<h3 class="preco_livro">${livro.preco}</h3>
				<button class="comprar">Comprar</button>
			</div>
	   </li>
	 `)
	}`
	listaLivros.innerHTML = lista;
 }

function campoPesquisa(){
	campoDeBusca.addEventListener("keyup", (e) => {
		const letra = e.target.value;
		const procura = livros.filter(e => e.titulo.toLocaleLowerCase().includes(letra.toLocaleLowerCase())
		)
		mostrarLivros(procura)
	})
}


campoPesquisa()
mostrarLivros(livros)