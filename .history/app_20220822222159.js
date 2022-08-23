const options = {
  method: "GET",
  headers: {
    
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman",
  options
)
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
