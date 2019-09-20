namespace Util {
    export function isEmpty(data: any): boolean  {
        return !data
    }
    
    export function isUndefined(data: any): boolean {
        return typeof data === 'undefined'
    }

    export const PI = Math.PI
    export const EXP = Math.E
    
}

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('asd'));