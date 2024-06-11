/*const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC74znRN81-m7V-RdZqqn7tg&part=snippet%2Cid&order=date&maxResults=9';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d0f55b37fmshcba70fab426435bp19efcbjsnf284a75d93da',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};*/
    
const API = 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d0f55b37fmshcba70fab426435bp19efcbjsnf284a75d93da',
		'x-rapidapi-host': 'star-wars-characters.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const persons = await fetchData(API);
    let view = `
    ${persons.map(person => `
        <div class="group relative rounded-md">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="/src/assets/images/${person.id}.jpg" alt="${person.name}" class="w-full">
          </div>
          <div class="mt-0 flex flex-col justify-between bg-white p-3">
            <h3 class="text-lg text-black">
              <span aria-hidden="true" class="absolute inset-0"></span>
              <strong>${person.name}</strong>
            </h3>
            <p class="text-sm text-gray-700"><strong>Planeta Natal:</strong> ${person.homeworld}</p>
            <p class="text-sm text-gray-700"><strong>Fecha de Nacimiento:</strong> ${person.birth_year}</p>
          </div>
        </div>
      `).slice(0,12).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();

