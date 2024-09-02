type Vector = number[];
type Matrix = Vector[];
type Permutation = number[];
type sgn = 1 | -1;


function haveEqualDimensions(v1: Vector, v2: Vector) : boolean {
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

function getFactorial(n: number): number {
    if(n < 0){
        throw new Error(`nが負の数なので階乗を計算出来ません`)
    }

    let result = 1;
    for(let i=2; i<=n; i++){
        result*=i;
    }
    return result;
}

function generatePermutations(A: number[]): Permutation[] {
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
    
const v1: Vector = [1,2,3];
const v2: Vector = [1,2,3,4];
const v3: Vector = [1,2,3,4];
const v4: Vector = [1,2,3,4];
const v5: Vector = [1,2,3,4];
const v6: Vector = [1,2,3,4,5];
const v7: Vector = [1,2,3,4,5,6];

const A1: Matrix = [v1,v2,v3];
const A2: Matrix = [v4,v2,v3,v5];

const v8: Vector = [1,2,3];
const v9: Vector = [4,5,6];
const v10: Vector = [7,8,9];

const B1: Matrix=[v8,v9,v10];

//配列の添字の確認
const vec3: Vector = createVector(3);
const permutation3 = generatePermutations(vec3);
console.log(permutation3);

for(let i=0;i<getFactorial(3);i++){
    console.log(`[${vec3[0]}${permutation3[i][0]}, ${vec3[1]}${permutation3[i][1]},${vec3[2]}${permutation3[i][2]}]`);
}