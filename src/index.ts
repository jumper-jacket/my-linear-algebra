type Vector = number[];
type Matrix = Vector[];

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

function isSquareMatrix(A: Matrix): boolean {
    const size = A.length;
    return A.every(row => row.length === size);
}

function getDeterminant(A: Matrix): number | null {
    if(isSquareMatrix(A)){
        const size = A.length;
        console.log(A);
        console.log(size);
        return size;//後で行列式を返すように変更する

    }

    return null;
}
    
const v1: Vector = [1,2,3];
const v2: Vector = [1,2,3,4];
const v3: Vector = [1,2,3,4];
const v4: Vector = [1,2,3,4];
const v5: Vector = [1,2,3,4];

const A1: Matrix = [v1,v2,v3];
const A2: Matrix = [v4,v2,v3,v5];


console.log(getDeterminant(A1));
console.log(getDeterminant(A2));