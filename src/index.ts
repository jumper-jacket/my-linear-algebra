type Vector = number[];
type Matrix = Vector[];
type Permutation = number[];
type sgn = 1 | -1;


export function haveEqualDimensions(v1: Vector, v2: Vector) : boolean {
    return v1.length === v2.length;
}

export function addVector(v1: Vector, v2: Vector): Vector {
    if(!haveEqualDimensions(v1,v2)){
        throw new Error(`ベクトルの次元が異なるためベクトル同士の足し算が出来ません`)
    }

    return v1.map((val, index) => val + v2[index]);
}

export function getInnerProduct(v1: Vector, v2: Vector): number {
    if(!haveEqualDimensions(v1,v2)){
        throw new Error(`ベクトルの次元が異なるためベクトルの内積が計算できません`)
    }

    const innerProduct: number = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
    return innerProduct;
}

export function isSquareMatrix(A: Matrix): boolean {
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

export function getFactorial(n: number): number {
    if(n < 0){
        throw new Error(`nが負の数なので階乗を計算出来ません`)
    }

    let result = 1;
    for(let i=2; i<=n; i++){
        result*=i;
    }
    return result;
}

export function generatePermutations(A: number[]): Permutation[] {
    if(A.length === 0){
        throw new Error(`置換するベクトルの要素がありません`);
    }

    if(A.length === 1){
        return [A];
    }

    const result: Permutation[] = [];

    for(let i=0; i<A.length; i++){
        const rest = [...A.slice(0,i), ...A.slice(i+1)];
        const perms = generatePermutations(rest);

        for(const perm of perms){
            result.push([A[i], ...perm]);
        }
    }

    return result;
}

function createVector(n: number): Vector {
    return Array.from({ length: n}, (_, i) => i+1);
}
