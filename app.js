let player1 = {
    name: "Shadow Fiend",
    lvl: 30,
    health: 400,
    attack: 40,
    defense: 10,
    inventory: [],

    attackPlayer(opponent) {

        let damage = this.attack - opponent.defense;


        if (damage <= 0) {
            return damage = 0
        } else {
            opponent.health -= damage
            return opponent.health
        }
    },

    isAlive(opponent) {
        if (player1.health <= 0) return null

        return (`${ player1 } is dead`);

    },

}


let player2 = {
    name: "Phantom Lancer",
    lvl: 30,
    health: 400,
    attack: 40,
    defense: 10,
    inventory: [],

    attackPlayer(opponent) {

        let damage = this.attack - opponent.defense;


        if (damage <= 0) {
            return damage = 0
        } else {
            opponent.health -= damage
            return opponent.health
        }
    },

    isAlive(opponent) {
        if (this.health <= 0) return null

        return (`${ player2 } is dead`);

    },

}

 function battle(){
    
    while(!isAlive){
        console.log();
        
    
    
    }

}