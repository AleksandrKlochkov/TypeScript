// function logger(constructFn: Function) {
//     console.log(constructFn)
// }

// function shouldLog(flag: boolean): any {
//     return flag ? logger : null
// }

// @shouldLog(true)
// class MyClass {
//     constructor(public name: string, public age: number){
//         console.log('I am new user')
//     }
// }


function addShowAbility(constructorFn: Function) {
    constructorFn.prototype.showHtml = function() {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addShowAbility
class MyClass {
    constructor(public name: string, public age: number, public job: string){
        console.log('I am new user')
    }
}

let my = new MyClass('User', 20, 'js');
(<any>my).showHtml()

