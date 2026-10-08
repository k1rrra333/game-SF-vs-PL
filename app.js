let player1 = {
    name: "Shadow Fiend",
    lvl: 30,
    health: 400,
    attack: Math.floor(Math.random() * 31) + 30,
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

    isAlive() {
        return this.health > 0;
    }
}


let player2 = {
    name: "Phantom Lancer",
    lvl: 30,
    health: 400,
    attack: Math.floor(Math.random() * 31) + 30,
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

    isAlive() {
        return this.health > 0;
    }

}


function battle() {

    while (player1.isAlive() && player2.isAlive()) {
        player1.attackPlayer(player2)
        console.log(`sf hit pl`)
        player2.attackPlayer(player1)
        console.log(`pl health ${player2.health}`)
        console.log(`=======`)

        if (player1.health <= 0) {
            console.log(`${player1.name} defeat`)
        }
        if (player2.health <= 0){
            console.log(`${player2.name} defeat`)
        }
    }

}


battle()
