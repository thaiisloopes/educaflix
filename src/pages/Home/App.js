import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault'
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias'

function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        categoriasRepository.getAllWithVideos()
            .then((categoriasComVideos) => {
                setDadosIniciais(categoriasComVideos);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

  return (
    <PageDefault>
        {dadosIniciais.length === 0 && (
            <div>
                Loading...
            </div>
        )}

        {dadosIniciais.length >= 1 && (
            <>
            	<BannerMain
            		videoTitle={dadosIniciais[0].videos[0].titulo}
            		url={dadosIniciais[0].videos[0].url}
            		videoDescription={ "O que é Front-end? Trabalhando na área"}
            	/>

            	<Carousel
            		ignoreFirstVideo
            		category={dadosIniciais[0]}
            	/>
            </>
        )};

    	{/* <Carousel
    		category={dadosIniciais.categorias[1]}
    	/>

    	<Carousel
    		category={dadosIniciais.categorias[2]}
    	/>

        <Carousel
            category={dadosIniciais.categorias[3]}
        />

        <Carousel
            category={dadosIniciais.categorias[4]}
        /> */} 

    </PageDefault>
  );
}

export default Home;
