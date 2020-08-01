import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
	const [categorias, setCategorias] = useState(['Teste']);
	const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor inicial');

	return (
		<PageDefault>
			<h1>Cadastro de Categoria: {nomeDaCategoria} </h1>

			<form onSubmit={function hadleSubmit(infosDoEvento) {
				infosDoEvento.preventDefault();
				console.log('enviar form')
				setCategorias([
					...categorias,
					nomeDaCategoria
				]);

			}}>
				<label>
					Nome da Categoria:
					<input 
						type="text"
						value={nomeDaCategoria}
						onChange={function funcaoHandler(infosDoEvento) {
							setNomeDaCategoria(infosDoEvento.target.value)
						}}
					/>
				</label>
				
				<button>
					Cadastrar
				</button>	
			</form>

			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>
							{categoria}
						</li>
					)

				})}

			</ul>

			<Link to="/">
				Ir para home
			</Link>
		</PageDefault>
	)
}

export default CadastroCategoria;