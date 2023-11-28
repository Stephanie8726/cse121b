/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const templeArticle = document.createElement('article');
    const templeNameHeader = document.createElement('h3');
    templeNameHeader.textContent = temple.templeName;
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.location;
    templeArticle.appendChild(templeNameHeader);
    templeArticle.appendChild(templeImage);
    templesElement.appendChild(templeArticle);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();

    templeList = data;

    displayTemples(templeList);
    console.log(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};

getTemples();

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
  reset();

  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;

    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;

    case 'older':
      const cutoffDate = new Date(1950, 0, 1);
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < cutoffDate));
      break;

    case 'all':
      displayTemples(temples);
      break;

    default:
      console.log('Invalid filter value');
      break;
  }
};

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
  sortBy(templeList);
});
