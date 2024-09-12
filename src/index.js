"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function haveEqualDimensions(v1, v2) {
    return v1.length === v2.length;
}
function addVector(v1, v2) {
    if (!haveEqualDimensions(v1, v2)) {
        throw new Error("\u30D9\u30AF\u30C8\u30EB\u306E\u6B21\u5143\u304C\u7570\u306A\u308B\u305F\u3081\u30D9\u30AF\u30C8\u30EB\u540C\u58EB\u306E\u8DB3\u3057\u7B97\u304C\u51FA\u6765\u307E\u305B\u3093");
    }
    return v1.map(function (val, index) { return val + v2[index]; });
}
function getInnerProduct(v1, v2) {
    if (!haveEqualDimensions(v1, v2)) {
        throw new Error("\u30D9\u30AF\u30C8\u30EB\u306E\u6B21\u5143\u304C\u7570\u306A\u308B\u305F\u3081\u30D9\u30AF\u30C8\u30EB\u306E\u5185\u7A4D\u304C\u8A08\u7B97\u3067\u304D\u307E\u305B\u3093");
    }
    var innerProduct = v1.reduce(function (sum, val, index) { return sum + val * v2[index]; }, 0);
    return innerProduct;
}
function isSquareMatrix(A) {
    var size = A.length;
    return A.every(function (row) { return row.length === size; });
}
function getDeterminant(A) {
    if (!isSquareMatrix(A)) {
        throw new Error("\u6B63\u5247\u884C\u5217\u3067\u306A\u3044\u305F\u3081\u884C\u5217\u5F0F\u306F\u8A08\u7B97\u51FA\u6765\u307E\u305B\u3093");
    }
    var size = A.length;
    console.log(A);
    console.log(size);
    return size; //後で行列式を返すように変更する
}
function getFactorial(n) {
    if (n < 0) {
        throw new Error("n\u304C\u8CA0\u306E\u6570\u306A\u306E\u3067\u968E\u4E57\u3092\u8A08\u7B97\u51FA\u6765\u307E\u305B\u3093");
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function generatePermutations(A) {
    if (A.length === 0) {
        throw new Error("\u7F6E\u63DB\u3059\u308B\u30D9\u30AF\u30C8\u30EB\u306E\u8981\u7D20\u304C\u3042\u308A\u307E\u305B\u3093");
    }
    if (A.length === 1) {
        return [A];
    }
    var result = [];
    for (var i = 0; i < A.length; i++) {
        var rest = __spreadArray(__spreadArray([], A.slice(0, i), true), A.slice(i + 1), true);
        var perms = generatePermutations(rest);
        for (var _i = 0, perms_1 = perms; _i < perms_1.length; _i++) {
            var perm = perms_1[_i];
            result.push(__spreadArray([A[i]], perm, true));
        }
    }
    return result;
}
function createVector(n) {
    return Array.from({ length: n }, function (_, i) { return i + 1; });
}
var v1 = [1, 2, 3];
var v2 = [1, 2, 3, 4];
var v3 = [1, 2, 3, 4];
var v4 = [1, 2, 3, 4];
var v5 = [1, 2, 3, 4];
var v6 = [1, 2, 3, 4, 5];
var v7 = [1, 2, 3, 4, 5, 6];
var A1 = [v1, v2, v3];
var A2 = [v4, v2, v3, v5];
var v8 = [1, 2, 3];
var v9 = [4, 5, 6];
var v10 = [7, 8, 9];
var B1 = [v8, v9, v10];
//配列の添字の確認
var vec3 = createVector(3);
var permutation3 = generatePermutations(vec3);
console.log(permutation3);
for (var i = 0; i < getFactorial(3); i++) {
    console.log("[".concat(vec3[0]).concat(permutation3[i][0], ", ").concat(vec3[1]).concat(permutation3[i][1], ",").concat(vec3[2]).concat(permutation3[i][2], "]"));
}
