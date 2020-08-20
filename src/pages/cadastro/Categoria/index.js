import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/Categoria/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { valores, funcaoHandler, clearForm } = useForm(valoresIniciais);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.titulo}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        categoriasRepository.create({
          'titulo': valores.titulo,
          'descricao': valores.descricao,
          'cor': valores.cor
        })

			  clearForm(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={funcaoHandler}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={funcaoHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={funcaoHandler}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
     
      <Button as={Link} to="/categorias">
        Todas Categorias
      </Button>

      <Button as={Link} to="/">
        Home
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
