import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { funcaoHandler, valores } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=f8a-qwKC5yk',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoria: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={funcaoHandler}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={funcaoHandler}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={funcaoHandler}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
