//*****TypeScript TYPES - типы TypeScript

//**STRING
let str: string = 'string'

//**NUMBER
let num: number = 10

//**BOOLEAN
let isBool: boolean = true;

//**OTHER, type | type | type
let unknown: string | number | boolean = '1'
unknown = 1
unknown = true

//**ANY, любой тип
let isAny: any = '1'
unknown = 1
unknown = true

//*****ARRAY TYPES - типы массивов
let numArray: number[] = [1, 2, 3]
let numArray2: Array<number> = [1, 2, 3]

let strArray: string[] = ['1', '2', '3']
let strArray2: Array<string> = ['1', '2', '3']

let boolArray: boolean[] = [true, false]
let boolArray2: Array<boolean> = [true, false]

//**TUPLES - тип для массивов внутри которых элементы с разными типами данных
let array: [boolean, number, string] = [true, 2, '3']
let array2: any = [true, 'str', 22]

//*GENERIC - отслеживает переменные которые приходят c различными типаи данных
function genericG<T>(data: T): T {
    return data;
}

console.log(genericG<string>('string'))
console.log(genericG<number>(100))

//**FUNCTION TYPE
const myName = 'name'
const myAge = 50

function getMyName(): any {
    return myName
}

//*OBJECT TYPE

let obj: {name: string, age:number, logName: () => void, jobs: any[]} = {
    name: 'name',
    age: 10,
    jobs: ['a', 'b', 1],
    logName(): void {
        console.log(this.name)
    }
}

let obj2: any = {
    name: 'name',
    age: '10',
    jobs: ['a', 'b'],
    logName(): void {
        console.log(this.name)
    }
}
