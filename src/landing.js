let landing = () => {
    let contentDiv = document.querySelector('.content');
    let image = document.createElement('IMG');
    let logoDiv = document.createElement('div');
    let logo = document.createElement('h1');

    image.src = 'landing.jpeg';
    image.classList.add('landing-image');
    contentDiv.appendChild(image);

    logoDiv.classList.add('landing-logo-div')
    contentDiv.appendChild(logoDiv);

    logo.textContent = 'DAD\'S LOUNGE';
    logoDiv.classList.add('landing-logo');
    logoDiv.appendChild(logo);
}

export {
    landing
}