//*****INTERFECES - интерфейсы TypeScript
interface IUser {
    name: string;
    age?: number;
    logInfo(info: string): void;
}

interface IGetYear {
    getYear(): number
}

class Us implements IUser, IGetYear{
    name: string = 'user';
    age: number =11;
    logInfo(info: string): void {
        console.log(info) ; 
    }
    
    getYear(): number {
        return this.age
    }
}
const us = new Us;
console.log(us)