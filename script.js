class Warrior {
    constructor(life,power){
        this.life = life
        this.power = power
    }

    attack(){
        return this.power
    }
    
    defend(damage){
        this.life -= damage
        console.log('Al defensor le quedan '+ this.life  +' puntos de vida')
    }
}

class Maya extends Warrior {
    drinkColaCao(){
        this.power += 10
        console.log('Maya ahora tiene '+this.power+' puntos de ataque')
    }
}

class Aztec extends Warrior {
    drinkNesquik(){
        this.life += 10
        console.log('Azteca ahora tiene '+this.life+' puntos de vida')
    }
}

const maya = new Maya(100,10)

const azteca = new Aztec(50,30)

const ataqueMaya =maya.attack()
const ataqueAzteca =azteca.attack()

/*
azteca.drinkNesquik()

maya.drinkColaCao()

azteca.defend(ataqueMaya)

azteca.defend(ataqueAzteca)
*/
