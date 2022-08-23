fetch("https://imdb8.p.rapidapi.com/auto-complete?q=spiderman", {
	"method": "GET",
	"headers": {
		
"X-RapidAPI-Key": "f7c77fb172msh1ef00876340a814p154163jsn8055208d264a",
"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});

