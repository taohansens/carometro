const peopleData = [
    { name: 'Tao', image: 'https://avatars.githubusercontent.com/u/53713149?v=4', description: 'Descrição' },
    { name: 'Hansen', image: 'https://avatars.githubusercontent.com/u/53713149?v=4', description: 'Descrição' },
    { name: 'Tao', image: 'https://avatars.githubusercontent.com/u/53713149?v=4', description: 'Descrição' },
    { name: 'Hansen', image: 'https://avatars.githubusercontent.com/u/53713149?v=4', description: 'Descrição' },
];

function createGallery() {
    const galleryElement = document.getElementById('gallery');

    peopleData.forEach(person => {
        const personElement = document.createElement('div');
        personElement.classList.add('person');

        const imageElement = document.createElement('img');
        imageElement.src = person.image;
        imageElement.alt = person.name;

        const nameElement = document.createElement('p');
        nameElement.innerText = person.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.innerText = person.description;

        personElement.appendChild(imageElement);
        personElement.appendChild(nameElement);
        personElement.appendChild(descriptionElement);

        galleryElement.appendChild(personElement);
    });
}

document.addEventListener('DOMContentLoaded', createGallery);
