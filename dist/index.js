"use strict";
console.log("test");
const v1 = [1, 2, 3];
const v2 = [1, 2, 3, 4];
const v3 = [1, 2, 3, 4];
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
console.log(getInnerProduct(v1, v2));
console.log(getInnerProduct(v3, v2));
