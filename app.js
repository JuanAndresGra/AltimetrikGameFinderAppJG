 let page = 1;
 let games = '';
 let lastGame;
 let data = [];
 const searchGame = document.getElementById('searchGame');

 // create observer
 let observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entries => {
         if(entries.isIntersecting){
             page++;
             loadingGames();
         }
     })
 }, {
     rootMargin: '0px 0px 300px 0px',
     threshold: 1.0
 } 
    
 );

 searchGame.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    //console.log(searchString);
    const filteredGames = data.filter(game => {
      return (
          game.name(searchString)
       );
    });
    console.log(filteredGames);

})
 
 //fetch data form API

 const loadingGames = async () => {

    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=551390a5146b417f99e88cc80ef91083&page=${page}`);

       //console.log(response);

      if(response.status === 200){ 
          data = await response.json();
          
          console.log(data);

         
          data.results.forEach(game => {
            const {name, id, released, genres, plataforms} = game
            //console.log({name, id, released, genres, plataforms});
              games += `<div class="containerCard__cards grow">
              <img src="${game.background_image}" alt="name" class="cardIMG">
              
              <div class="infoCards">
                  <div class="titleGameNumber"> 
                  <p class="game--title">${name}</p>
                  <p class="game--number">#${id}</p>
                  </div>
                  <div class="specificData">
                      <div class="specificData--relaseGen">
                          <p class="relaseGen">Release date:</p>
                          <p class="relaseGen">Genres:</p>
                      </div>
                      <div class="specificData--dateGen">
                          <p class="dateGen">${released}</p>
                          <p class="dateGen">${genres[0].name} </p>
                      </div>
                      <div class="specificData--imgPlataform">
                           ${plataforms}
                      </div>
                  </div>
              </div>
          </div>`
              
          });

          
          document.getElementById('containerCard').innerHTML = games;
                    
          if(lastGame){
              observer.unobserve(lastGame);
          }

          const gamesOnscreen = document.querySelectorAll('#containerCard .containerCard__cards');
          lastGame = gamesOnscreen[gamesOnscreen.length - 1];
          observer.observe(lastGame);




    }else if(response.status === 401){
        console.log('Key are bad');
    }else if(response.status === 404){
        console.log('This game not exist');
    }else {
        console.log('unexpected error');
    }

}catch(err){
        console.log(err);
    }
}
 
loadingGames();

