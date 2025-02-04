const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



document.getElementById('currentyear').innerHTML = new Date().getFullYear()




document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()





const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
   
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska, USA",
        dedicated: "1999, January, 9-10",
        area: 11937,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
    },

    {
        templeName: "Papeete Thiti Temple",
        location: "Papeete, French Polynesia",
        dedicated: "1983, October, 27-29",
        area: 12150,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/025-Papeete-Tahiti-Temple.jpg "
    },


    {
        templeName: "Winnipeg Manitoba Temple",
        location: "Winnipeg, Manitoba, Canada",
        dedicated: "2021, October, 31",
        area:16100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/winnipeg-manitoba-temple/winnipeg-manitoba-temple-22437-main.jpg"
    },


];


createTempleCard(temples)
const targetYear_1900 = "1900"
const targetYear_2000 = "2000"
const target_area = "90000"
const target_area_small = "10000"






const old_1900 = document.querySelector("#old");
const new_2000 = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const all = document.querySelector("#all");


old_1900.addEventListener("click", () => {
 let oldYear_1900= temples.filter(temple => parseInt(temple.dedicated.slice (0,4))< parseInt(targetYear_1900));
  createTempleCard(oldYear_1900)  

});

new_2000.addEventListener("click", () => {
    let oldYear_2000 = temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) > parseInt(targetYear_1900));
    createTempleCard(oldYear_2000)   


});

large.addEventListener("click", () => {
    let large = temples.filter(temple => parseInt(temple.area) > parseInt(target_area));
    createTempleCard(large)


});

small.addEventListener("click", () => {
    let small = temples.filter(temple => parseInt(temple.area) < parseInt(target_area_small));
    createTempleCard(small)


});


all.addEventListener("click", () => {
    
   
     createTempleCard(temples)



});










function createTempleCard(filteredTemples) {
    document.querySelector(".figure").innerHTML = " ";
 
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}  sq ft`;
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");


        card.append(name);
        card.append(location);
        card.append(dedicated);
        card.append(area);
        card.append(img);

        document.querySelector(".figure").appendChild(card)



    });




}


