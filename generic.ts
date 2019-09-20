function  genericGetter<T>(data: T): T {
    return data
}

// console.log(getter(100))
// console.log(getter('str').length)

let newGenericFunction: <T>(data: T) => T = genericGetter;

class Multiply<T extends number | string>{
    constructor (private a: T, private b: T){}

    public getResults(): number {
        return +this.a*+this.b
    }
}

const gNum = new Multiply(10,5)
const gStr = new Multiply('4','6')
// console.log('class Multiply type number', gNum.getResults())
// console.log('class Multiply type str', gStr.getResults())


class Multiply2<T>{
    constructor (private a: T, private b: T){}

    public getResults(): number {
        return +this.a*+this.b
    }
}

const gNum2 = new Multiply(10,5)
const gStr2 = new Multiply('4','1')
console.log('class Multiply type number', gNum2.getResults())
console.log('class Multiply type str', gStr2.getResults())