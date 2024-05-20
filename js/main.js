const listaLivros = document.querySelector('.lista_livros');
const areaDeCompra = document.querySelector('.area_compra_livro');
const btnFiltro = document.querySelectorAll('.filtro');

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == categoria);
        mostrarLivros(livrosFiltrados);
}

btnFiltro.forEach(botao => botao.addEventListener('click', filtrarLivros))

function mostrarLivros(livros){
	const list = `${
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
	 `).join('')
	}`

	listaLivros.innerHTML = list;
 }

 mostrarLivros(livros)


// function organizaElementosLivros(element, params, className){
//     element.appendChild(params);
//     params.classList.add(className);
// }

// exibiLivrosNaPagina(livros)


// function exibiLivrosNaPagina(livros){
// 	listaLivros.innerHTML = ''
// 	livros.forEach((livro) => {	
// 		let li = document.createElement('li');
// 		let div = document.createElement('div');
// 		let titulo = document.createElement('h1');
// 		let img = document.createElement('img');
// 		let categoria = document.createElement('h2')
// 		let precoLivro = document.createElement('h3')
// 		let botao = document.createElement('button');
			
// 		titulo.innerText = livro.titulo;
// 		categoria.innerText = livro.categoria;
// 		precoLivro.innerText = livro.preco;
// 		botao.innerText = 'Comprar';
// 		img.setAttribute('src', livro.imagem)
				
// 		organizaElementosLivros(li, img, 'imagem-livro')
// 		organizaElementosLivros(listaLivros, li, 'livro')
// 		organizaElementosLivros(li, titulo, 'titulo_livro')
// 		organizaElementosLivros(li, categoria, 'categoria_livro');
// 		organizaElementosLivros(li, div, 'area_compra_livro')
// 		organizaElementosLivros(div, precoLivro, 'preco_livro')
// 		organizaElementosLivros(div, botao, 'comprar')
//     })
// }

// function exibiLivrosNaPagina(livros){
// 	listaLivros.innerHTML = ''
// 	produtos.forEach(livro => {	
// 		listaLivros.innerHTML += 
// 		`<li class="livro">
// 						<img src="${livro.imagem}" class="imagem-livro">
// 						<h1 class="titulo_livro">${livro.titulo}</h1>
// 						<h2 class="categoria_livro">${livro.categoria}</h2>
// 					<div class="area_compra_livro">
// 						<h3 class="preco_livro">${livro.preco}</h3>
// 						<button class="comprar">Comprar</button>
// 					</div>
// 			</li>
// 			`
//     })
// }







    




 


