document.getElementById('currentyear').innerHTML = new Date().getFullYear()




document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()




function calculateWindChill(temperature, windSpeed) {
    
    if (temperature > 50 || windSpeed <= 3) {
        return "N/A";
    }

    // Wind chill formula
    const windChill = 35.74 + (0.6215 * temperature)
        - (35.75 * Math.pow(windSpeed, 0.16))
        + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    // Return the result rounded to two decimal places
    return Math.round(windChill * 100) / 100;
}
