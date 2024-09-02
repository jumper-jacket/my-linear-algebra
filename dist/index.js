"use strict";
function haveEqualDimensions(v1, v2) {
    return v1.length === v2.length;
}
function addVector(v1, v2) {
    if (!haveEqualDimensions(v1, v2)) {
        throw new Error(`ベクトルの次元が異なるためベクトル同士の足し算が出来ません`);
    }
    return v1.map((val, index) => val + v2[index]);
}
function getInnerProduct(v1, v2) {
    if (!haveEqualDimensions(v1, v2)) {
        throw new Error(`ベクトルの次元が異なるためベクトルの内積が計算できません`);
    }
    const innerProduct = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
    return innerProduct;
}
function isSquareMatrix(A) {
    const size = A.length;
    return A.every(row => row.length === size);
}
function getDeterminant(A) {
    if (!isSquareMatrix(A)) {
        throw new Error(`正則行列でないため行列式は計算出来ません`);
    }
    const size = A.length;
    console.log(A);
    console.log(size);
    return size; //後で行列式を返すように変更する
}
function getFactorial(n) {
    if (n < 0) {
        throw new Error(`nが負の数なので階乗を計算出来ません`);
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function generatePermutations(A) {
    if (A.length === 0) {
        throw new Error(`置換するベクトルの要素が0ありません`);
    }
    if (A.length === 1) {
        return [A];
    }
    const result = [];
    for (let i = 0; i < A.length; i++) {
        const rest = [...A.slice(0, i), ...A.slice(i + 1)];
        const perms = generatePermutations(rest);
        for (const perm of perms) {
            result.push([A[i], ...perm]);
        }
    }
    return result;
}
const v1 = [1, 2, 3];
const v2 = [1, 2, 3, 4];
const v3 = [1, 2, 3, 4];
const v4 = [1, 2, 3, 4];
const v5 = [1, 2, 3, 4];
const v6 = [1, 2, 3, 4, 5];
const v7 = [1, 2, 3, 4, 5, 6];
const A1 = [v1, v2, v3];
const A2 = [v4, v2, v3, v5];
//console.log(getDeterminant(A1));
console.log(generatePermutations(v1).length);
console.log(generatePermutations(v2).length);
console.log(generatePermutations(v6).length);
console.log(generatePermutations(v7).length);
