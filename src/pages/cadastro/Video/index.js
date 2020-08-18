import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { funcaoHandler, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
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
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Button as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </Button>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo;
