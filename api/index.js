
const server = require('./src/app.js');
const { conn , Country} = require('./src/db.js');
const axios = require('axios')


conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {

    let apiAxios = await axios.get('https://restcountries.com/v3/all')
    apiAxios= apiAxios.data;

      apiAxios.forEach(async (e) =>{
        
        try{

          const CreateCountry= await Country.create({
          id: e.ccn3 ? e.cca3 : "no Id",
          name: e.name.common ? e.name.common: "No name",
          flags: e.flags[1] ? e.flags[1]: "no flag",
          region: e.region ? e.region: "no region",
          capital: e.capital ? e.capital[0]: "no capital",
          subregion: e.subregion ? e.subregion: "no subregion" ,
          area: e.area ? e.area : "no area",
          population: e.population? e.population : "no population",
         })
        }
        catch(error){
          console.log(error)
        }
    })

    console.log('%s listening at 3001');
     // eslint-disable-line no-console
  });
});
 


// let prueba = [{
//   id: 123,
//   name: "peru",
//   img: "img1",
//   region: "suda",
//   capital: "lima",
//   subregion: "subregion1",
//   area: "area1",
//   population: "11111",
// },
// {
//   id: 456,
//   name: "arg",
//   img: "img2",
//   region: "suda2",
//   capital: "marplata",
//   subregion: "subregion2",
//   area: "area2",
//   population: "2222",
// },{
// id: 452,
// name: "dan",
// img: "dan",
// region: "dan",
// capital: "dan",
// subregion: "dan",
// area: "area2",
// population: "555",
// }
// ];

// let apia45 = await axios.get('https://restcountries.com/v3.1/name/argentina')
// apia45 = apia45.data
// console.log(apia45)




// console.log(prueba);
// await apia45.map(e => {
// try{
//   return Country.create({
//     id: e.ccn3,
//     name: e.name.common,
//     flags: e.flags.png,
//     region: e.region,
//     country: e.capital ? e.capital : [],
//     subregion: e.subregion,
//     area: e.area,
//     population: e.population,
//   })


// }) 

//       id: e.id,
//       name: e.name,
//       img: e.img,
//       region: e.region,
//       capital: e.capital,
//       subregion: e.subregion,
//       area: e.area,
//       population: e.population,
// console.log('%s listening at 3001')

 // eslint-disable-line no-console