class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      // create new player
      
      // if playerCountRef exists, get count 
      
      // create new form and display it
      
    }
  }

  play(){
    // display game start using text function
  }
}
