/* const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `getFullYear(): <span>${today.getFullYear()}</span>`; */

document.getElementById('currentyear').innerHTML = new Date().getFullYear()




document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()