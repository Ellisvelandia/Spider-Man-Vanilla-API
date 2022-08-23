import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  params: {q: 'spiderman'},
  headers: {
    'X-RapidAPI-Key': 'f7c77fb172msh1ef00876340a814p154163jsn8055208d264a',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});