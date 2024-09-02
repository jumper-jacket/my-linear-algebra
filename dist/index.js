"use strict";
function haveEqualDimensions(v1, v2) {
    if (v1.length === v2.length) {
        return true;
    }
    return false;
}
function addVector(v1, v2) {
    if (haveEqualDimensions(v1, v2)) {
        const newVector = v1.map((val, index) => val + v2[index]);
        return newVector;
    }
    return null;
}
function getInnerProduct(v1, v2) {
    if (haveEqualDimensions(v1, v2)) {
        const innerProduct = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
        return innerProduct;
    }
    return null;
}
function isSquareMatrix(A) {
    const size = A.length;
    return A.every(row => row.length === size);
}
function getDeterminant(A) {
    if (isSquareMatrix(A)) {
        const size = A.length;
        console.log(A);
        console.log(size);
        return size; //後で行列式を返すように変更する
    }
    return null;
}
const v1 = [1, 2, 3];
const v2 = [1, 2, 3, 4];
const v3 = [1, 2, 3, 4];
const v4 = [1, 2, 3, 4];
const v5 = [1, 2, 3, 4];
const A1 = [v1, v2, v3];
const A2 = [v4, v2, v3, v5];
console.log(getDeterminant(A1));
console.log(getDeterminant(A2));
