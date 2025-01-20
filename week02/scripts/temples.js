const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



document.getElementById('currentyear').innerHTML = new Date().getFullYear()




document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()