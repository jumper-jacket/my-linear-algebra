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
const v1 = [1, 2, 3];
const v2 = [1, 2, 3, 4];
const v3 = [1, 2, 3, 4];
const v4 = [1, 2, 3, 4];
const v5 = [1, 2, 3, 4];
const A1 = [v1, v2, v3];
const A2 = [v4, v2, v3, v5];
//console.log(getDeterminant(A1));
console.log(getDeterminant(A2));
