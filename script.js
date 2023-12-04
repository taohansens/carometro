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

function generateImage() {
    const galleryElement = document.getElementById('gallery');

    const images = galleryElement.querySelectorAll('img');
    const loadedImages = Array.from(images).every(img => img.complete && img.naturalHeight !== 0);

    if (loadedImages) {
        html2canvas(galleryElement).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'carometro.png';
            link.click();
        });
    } else {
        console.error('Algumas imagens ainda estão carregando. Aguarde até que todas estejam carregadas antes de gerar a imagem.');
    }
}