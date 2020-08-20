import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/Video/videos';

function ListaVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videosRepository
      .getAll()
      .then((videos) => {
        setVideos(videos);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Videos
      </h1>

      <ul>
        {videos.map((video) => (
          <li key={`${video.titulo}`}>
            {video.titulo}
            <br></br>
            <Link to="/" onClick={() => videosRepository.remove(video.id)}>
                Remover Video
            </Link>
            <hr></hr>
          </li>
        ))}
      </ul>

      <Button as={Link} to="/cadastro/video">
        Cadastrar Video
      </Button>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageDefault>
  );
}

export default ListaVideos;