class Warrior {
    constructor(life,power){
        this.life = life
        this.power = power
    }

    attack(power){
        return this.power
    }
    
    defend(damage){
        this.life -= damage
        return 'Al defensor le quedan '+ this.life  +' puntos de vida'
    }
}

class Maya extends Warrior {
    constructor(life,power){
        super(life,power)
    }
    drinkColaCao(){
        this.power += 10
        return 'Has sumado '+this.power+' puntos de ataque'
    }
}

class Aztec extends Warrior {
    constructor(life,power){
        super(life,power)
    }
    drinkNesquik(){
        this.life += 10
        return 'Ahora tienes '+this.life+' puntos de vida'
    }
}

const maya = new Maya(100,10)

const azteca = new Aztec(50,30)

const bebeAzteca = azteca.drinkNesquik()

const bebeMaya = maya.drinkColaCao()

const ataqueMaya = azteca.defend(maya.attack())

const ataqueAzteca = maya.defend(azteca.attack())

console.log(bebeAzteca)
