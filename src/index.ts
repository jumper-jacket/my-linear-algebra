type Vector = number[];
type Matrix = Vector[];
type sgn = 1 | -1;

function haveEqualDimensions(v1: Vector, v2: Vector) : boolean{
    return v1.length === v2.length;
}

function addVector(v1: Vector, v2: Vector): Vector {
    if(!haveEqualDimensions(v1,v2)){
        throw new Error(`ベクトルの次元が異なるためベクトル同士の足し算が出来ません`)
    }

    return v1.map((val, index) => val + v2[index]);
}

function getInnerProduct(v1: Vector, v2: Vector): number {
    if(!haveEqualDimensions(v1,v2)){
        throw new Error(`ベクトルの次元が異なるためベクトルの内積が計算できません`)
    }

    const innerProduct: number = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
    return innerProduct;
}

function isSquareMatrix(A: Matrix): boolean {
    const size = A.length;
    return A.every(row => row.length === size);
}

function getDeterminant(A: Matrix): number  {
    if(!isSquareMatrix(A)){
        throw new Error(`正則行列でないため行列式は計算出来ません`);
    }

    const size = A.length;
    console.log(A);
    console.log(size);
    return size;//後で行列式を返すように変更する

}
    
const v1: Vector = [1,2,3];
const v2: Vector = [1,2,3,4];
const v3: Vector = [1,2,3,4];
const v4: Vector = [1,2,3,4];
const v5: Vector = [1,2,3,4];

const A1: Matrix = [v1,v2,v3];
const A2: Matrix = [v4,v2,v3,v5];


//console.log(getDeterminant(A1));
console.log(getDeterminant(A2));