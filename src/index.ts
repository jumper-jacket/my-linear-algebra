console.log("test");

type Vector = number[];
type Matrix = Vector[];
    
const v1: Vector = [1,2,3];

const v2: Vector = [1,2,3,4];

const v3: Vector = [1,2,3,4];

function haveEqualDimensions(v1: Vector, v2: Vector) : boolean{
    if(v1.length === v2.length){
        return true;
    }
    return false;
}

function addVector(v1: Vector, v2: Vector): Vector | null {
    if(haveEqualDimensions(v1,v2)){
        const newVector: Vector = v1.map((val, index) => val + v2[index]);
        return newVector;
    }
    return null
}

function getInnerProduct(v1: Vector, v2: Vector): number | null{
    if(haveEqualDimensions(v1,v2)){
        const innerProduct: number = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
        return innerProduct;
    }
    return null;
}

console.log(getInnerProduct(v1,v2));
console.log(getInnerProduct(v3,v2));