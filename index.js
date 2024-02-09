

const section = document.querySelector('#section');
const actualizar = document.querySelector('[data-btn-actualizar]');
const img_tiempo = document.querySelector('#imgTime');

console.log(img_tiempo.src)
const crearLineaNueva = (ciudad,temp,hume,presion,viento,espera,min,max)=>{
    return document.querySelector('#ciudad').innerHTML = ciudad,
        document.querySelector('#temperatura').innerHTML = temp,
        document.querySelector('#humedad').innerHTML = hume,
        document.querySelector('#presion').innerHTML = presion,
        document.querySelector('#viento').innerHTML = viento,
        
        document.querySelector('#se_espera').innerHTML = espera,
        document.querySelector('#min').innerHTML = min,        
        document.querySelector('#max').innerHTML = max        
    }
    
// 'lluvia ligera','nubes','nubes dispersas','cielo claro','lluvia de gran intensidad','lluvia moderada','muy nuboso'
// https://i2.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/08/Nubes-ar.jpg?ssl=1  2
// http://static.tiempo.com.mx/uploads/imagen/imagen/388071/principal_lluvia.jpg  1
// https://image.freepik.com/foto-gratis/nubes-dispersas-cielo_5219-2193.jpg  3
// https://images.freeimages.com/images/large-previews/f1f/white-clouds-in-blue-sky-1178795.jpg  4
// https://www.blogdelfotografo.com/wp-content/uploads/2018/12/rain-275317_1920.jpg  5
// https://e.rpp-noticias.io/xlarge/2023/04/08/103010_1412656.jpg  6
// http://www.blogodisea.com/wp-content/uploads/2010/06/lluvia-cielo-nublado-plomizo-waxing-storm-campo.jpg  7
const ciudad  = prompt('Cual es tu la ciudad?'); 
const actualiza = ()=>{
    window.location.href = './index.html';
}
actualizar.addEventListener('click',actualiza)
console.log(ciudad)

 async function api(ciudad){ 
     
    try {
         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad === '' ? 'campana' : ciudad},AR&APPID=5af0f382c935c41627351f02286325a7&units=metric&lang=es`)
         const data = await response.json();
         console.log(data.weather[0].description)
         switch (data.weather[0].description) {
             case 'lluvia ligera':
                 img_tiempo.src = 'http://static.tiempo.com.mx/uploads/imagen/imagen/388071/principal_lluvia.jpg';
                 break;
             case 'nubes':
                 img_tiempo.src = 'https://i2.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/08/Nubes-ar.jpg?ssl=1';
                 break;
             case 'nubes dispersas':
                 img_tiempo.src = 'https://image.freepik.com/foto-grtis/nubes-dispersas-cielo_5219-2193.jpg';
                 break;
             case 'cielo claro':
                 img_tiempo.src = 'https://images.freeimages.com/images/large-previews/f1f/white-clouds-in-blue-sky-1178795.jpg';
                 break;
             case 'lluvia de gran intensidad':
                 img_tiempo.src = 'https://www.blogdelfotografo.com/wp-content/uploads/2018/12/rain-275317_1920.jpg';
                 break;
             case 'lluvia moderada':
                 img_tiempo.src = 'https://e.rpp-noticias.io/xlarge/2023/04/08/103010_1412656.jpg';
                 break;
             case 'muy nuboso':
                 img_tiempo.src = 'http://www.blogodisea.com/wp-content/uploads/2010/06/lluvia-cielo-nublado-plomizo-waxing-storm-campo.jpg';
                 break;
         }
        crearLineaNueva(data.name, data.main.temp, data.main.humidity, data.main.pressure, data.wind.speed, data.weather[0].description, data.main.temp_min, data.main.temp_max);
     } catch (err) {
         return alert('Se encontro un error');
     }
};
api(ciudad);

     

