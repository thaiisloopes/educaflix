import config from '../../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function getAll() {
	return fetch(`${URL_VIDEOS}`)
	  .then(async (respostaDoServidor) => {
		if (respostaDoServidor.ok) {
		  const resposta = await respostaDoServidor.json();
		  return resposta;
		}
  
		throw new Error('Não foi possível pegar os dados :(');
	  });
  }

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
  	method: 'POST',
	  headers: {
  		'Content-type': 'application/json',
	  },
	  body: JSON.stringify(video),
  })
    .then(async (respostaDoServidor) => {
   		if (respostaDoServidor.ok) {
        	const resposta = await respostaDoServidor.json();
        	return resposta;
    	}

    	throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function remove(video_id) {
	return fetch(`${URL_VIDEOS}/${video_id}`, {method: 'DELETE'})
	  .then(res => res.json())
	  .then(res => {
		console.log('Deleted:', res.message)
		return res
	  })
	  .catch(err => console.error(err))
}

export default {
  create, remove, getAll
};
