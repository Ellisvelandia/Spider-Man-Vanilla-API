const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f7c77fb172msh1ef00876340a814p154163jsn8055208d264a",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman",
  options
)
  .then((response) => response.json())
  .then(data => {
    const arrayMovies = data.d;
    arrayMovies.map( (element) => {

      const title = element.l;
      // console.log(title)
      // const image = element.i.imageUrl
      // console.log(image)
      // const cast = element.s;

      // const card = `
      // <div>
      // <img src="${image}"/>
      // <h2>${title}</h2>
      // <small>${cast}</small>
      // </div>
      // `;
      // document.getElementById("container").innerHTML += card;
    });
  })

  .catch(err =>{
    console.error(err)
  });
