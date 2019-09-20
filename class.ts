//*****CLASS Класы TypeScript

class User {
    public name: string; 
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(name: string, isTeacher: boolean) {
        this.name = name
        this.isTeacher = isTeacher
    }

    private getChiter(): boolean{
        return this.isTeacher
    }

    getAge(): string{
        return this.age + ' ' + this.getChiter().toString()
    }
}

const user = new User('User', true)
// console.log(user.getAge())

class User2 {
    protected age: number = 30;
    public isTeacher: boolean = false;
    

    constructor(public name: string, public job: string) {
        this.name = name
    }

    getAge(): string{
        return this.age.toString()
    }
}

class WFM extends User2{
    name: string = 'WFM'

    constructor(job: string) {
        super('WFM', job)
        this.age = 100
        this.isTeacher = true
    }

    getAge(): string {
        return 'Hello ' + this.age.toString()
    }
}

const user2 = new User2('User','developer')
const wfm = new WFM('Frontend')
console.log(wfm.getAge())


abstract class Car{
    year: number = 2010

    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year
    }
}

class Mercedes extends Car {
    logInfo(info: string): void{
       console.log(info)
    }
}

const mercedes = new Mercedes()
console.log('Mercedecs', mercedes)