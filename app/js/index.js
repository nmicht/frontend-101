const SITE = 'https://rickandmortyapi.com/api';

const picame = document.getElementById('button-picame')
picame.addEventListener('click', async function() {

  // Esto deberia estar en un metodo de una clase al estilo api.characters.getAll()
  data = await fetch(`${SITE}/character/`).then(function(response) {
    return response.json();
  });

  console.log(data);
})


const buttonForm = document.getElementById('button-form');
buttonForm.addEventListener('click', function() {
  preventDefault();
  form = this.parentNode;
  api.users.create(form);
})
