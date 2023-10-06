class Warrior {
    constructor(life,power){
        this.life = life
        this.power = power
    }

    attack(power){
        this.power
    }
    
    defend(damage){
        return this.life -= damage
    }
}

class Maya extends Warrior {
    constructor(life,power){
        super(life,power)
    }
    drinkColaCao(){
        this.power += 10
    }
}

class Aztec extends Warrior {
    constructor(life,power){
        super(life,power)
    }
    drinkNesquik(){
        this.life += 10
    }
}

const maya = new Maya(100,10)

const azteca = new Aztec(50,30)

console.log(maya,azteca,'antes de la accion')

azteca.drinkNesquik()

maya.drinkColaCao()

console.log(maya,azteca,'beben')

maya.attack(maya.power)

azteca.defend(maya.power)

console.log(maya,azteca,'ataca maya')

azteca.attack(azteca.power)

maya.defend(azteca.power)

console.log(maya,azteca,'ataca azteca')
