const listaLivros = document.querySelector('.lista_livros');
const areaDeCompra = document.querySelector('.area_compra_livro');
let contador = 0;

let produtos = [
	{
    id: 1,
	titulo: "Moby dick",
	preco: 11.99,
	autor : "Sun tzu",
	imagem: "https://cdn.awsli.com.br/600x1000/2088/2088593/produto/142516520/f563995353.jpg",
	quantidade: 50,
	categoria: "historia"
   },
   {
    id: 2,
	titulo: "Simplesmente Acontece",
	preco: 32.99,
	autor : "Sun tzu",
	imagem: "https://m.media-amazon.com/images/I/81Hu-hqqXtL._AC_UF1000,1000_QL80_.jpg",
	quantidade: 50,
	categoria: "romance"
   },
   {
    id: 3,
	titulo: "Arte Da Guerra",
	preco: 23.99,
	autor : "Sun tzu",
	imagem: "https://m.media-amazon.com/images/I/71DwE8vSyAL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
	quantidade: 50,
	categoria: "auto-conhecimento"
   },
   {
    id: 4,
	titulo: "Moby dick",
	preco: 14.99,
	autor : "Sun tzu",
	imagem: "https://cdn.awsli.com.br/600x1000/2088/2088593/produto/142516520/f563995353.jpg",
	quantidade: 50,
	categoria: "historia"
   },
   {
    id: 5,
	titulo: "Simplesmente Acontece",
	preco: 35.99,
	autor : "Sun tzu",
	imagem: "https://m.media-amazon.com/images/I/81Hu-hqqXtL._AC_UF1000,1000_QL80_.jpg",
	quantidade: 50,
	categoria: "romance"
   },
   {
    id: 6,
	titulo: "Arte Da Guerra",
	preco: 26.99,
	autor : "Sun tzu",
	imagem: "https://m.media-amazon.com/images/I/71DwE8vSyAL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
	quantidade: 50,
	categoria: "auto-conhecimento"
   },
   {
    id: 7,
	titulo: "Moby dick",
	preco: 17.99,
	autor : "Sun tzu",
	imagem: "https://cdn.awsli.com.br/600x1000/2088/2088593/produto/142516520/f563995353.jpg",
	quantidade: 50,
	categoria: "historia"
   },
   {
    id: 8,
	titulo: "Simplesmente Acontece",
	preco: 38.99,
	autor : "Sun tzu",
	imagem: "https://m.media-amazon.com/images/I/81Hu-hqqXtL._AC_UF1000,1000_QL80_.jpg",
	quantidade: 50,
	categoria: "romance"
   },
]

function exibiLivrosNaPagina(livros){
	produtos.forEach((livro) => {	
		let li = document.createElement('li');
		let div = document.createElement('div');
		let titulo = document.createElement('h1');
		let img = document.createElement('img');
		let categoria = document.createElement('h2')
		let precoLivro = document.createElement('h3')
		let botao = document.createElement('button');
		
		
		titulo.innerText = livro.titulo;
		categoria.innerText = livro.categoria;
		precoLivro.innerText = livro.preco;
		botao.innerText = 'Comprar';
		img.setAttribute('src', livro.imagem)
				
		organizaElementosLivros(li, img, 'imagem-livro')
		organizaElementosLivros(listaLivros, li, 'livro')
		organizaElementosLivros(li, titulo, 'titulo_livro')
		organizaElementosLivros(li, categoria, 'categoria_livro');
		organizaElementosLivros(li, div, 'area_compra_livro')
		organizaElementosLivros(div, precoLivro, 'preco_livro')
		organizaElementosLivros(div, botao, 'comprar')
    })
}

function organizaElementosLivros(element, params, className){
    element.appendChild(params);
    params.classList.add(className);
}



exibiLivrosNaPagina(produtos)
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







    




 


