const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7c77fb172msh1ef00876340a814p154163jsn8055208d264a',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman', options)
	.then(response => response.json())
	.then(data => {
    console.log(data)
   const arrayMovies = data.d
   arrayMovies.map((Element) => {
    console.log(Element)
   })
  })
    
	.catch(err => console.error(err));