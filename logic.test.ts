/*
import {
    haveEqualDimensions, addVector, getInnerProduct,
    isSquareMatrix, getFactorial, generatePermutations,
    createVector, getDeterminant } from './linear-algebra/logic';

describe("ベクトルの次元が同じかどうか", () => {
    describe("haveEqualDimensions", () => {
        test("[]と[]は同じ次元", () => {
            expect(haveEqualDimensions([],[])).toBe(true);
        });
        test("[-1]と[Infinity]は同じ次元", () => {
            expect(haveEqualDimensions([-1], [Infinity]));
        })
        test("[1,2,3],[2,3,4]は同じ次元", () => {
            expect(haveEqualDimensions([1,2,3], [2,3,4])).toBe(true);
        });
        test("[1,2,3]と[3,4,5,6]は違う次元", () => {
            expect(haveEqualDimensions([1,2,3], [3,4,5,6])).toBe(false);
        });
    });
});

describe("ベクトル同士の加算", () => {
    describe("addVector", () => {
    test("[1,2,3] + [2,3,4] は [3,5,7]", () => {
        expect(addVector([1,2,3], [2,3,4])).toStrictEqual([3,5,7]);
    });
    test("ベクトルの次元が異なる場合は加算できない", () => {
        expect(() => addVector([1,2,3], [3,4,5,6])).toThrow("ベクトルの次元が異なるためベクトル同士の足し算が出来ません");
    });
    });
});

describe("ベクトルの内積の計算", () => {
    describe("getInnerProduct", () => {
        test("[1,2,3] + [2,3,4] は 20", () => {
            expect(getInnerProduct([1,2,3], [2,3,4])).toBe(20);
        });
        test("[1,2] + [2,3,4] はベクトルの次元が違うため計算出来ない", () => {
            expect(() => getInnerProduct([1,2], [2,3,4])).toThrow(`ベクトルの次元が異なるためベクトルの内積が計算できません`);
        });
    });
});

describe("正則行列かどうか", () => {
    describe("isSquareMatrix", () => {
        test("[] は 正則行列", () => {
            expect(isSquareMatrix([])).toBe(true);
        });
        test("[[1,2], [2,3]] は正則行列", () => {
            expect(isSquareMatrix([[1,2],[2,3]])).toBe(true);
        });
        test("[[1,2]]は正則行列でないためfalse", () => {
            expect(isSquareMatrix([[1,2]])).toBe(false);
        });
    });
});

describe("階乗の計算", () => {
    describe("getFactorial", () => {
        test("3! は 6", () => {
            expect(getFactorial(3)).toBe(6);
        });
        test("3! は 6", () => {
            expect(getFactorial(3)).toBe(6);
        });
        test("4! は 12", () => {
            expect(getFactorial(4)).toBe(24);
        });
        test("5! は 60", () => {
            expect(getFactorial(5)).toBe(120);
        });
        test("0 は 1", () => {
            expect(getFactorial(0)).toBe(1);
        });
        test("-1 は計算出来ないのでエラー", () => {
            expect(() => getFactorial(-1)).toThrow(`nが負の数なので階乗を計算出来ません`);
        });
        test("-Infinity は計算出来ないのでエラー", () => {
            expect(() => getFactorial(-Infinity)).toThrow(`nが負の数なので階乗を計算出来ません`);
        });
    });
});

describe("ベクトルの作成", () => {
    describe("creatVector", () => {
        test("[] を作成", () => {
            expect(createVector(0)).toStrictEqual([]);
        });
        test("[1] を作成", () => {
            expect(createVector(1)).toStrictEqual([1]);
        });
        test("[1,2] を作成", () => {
            expect(createVector(2)).toStrictEqual([1,2]);
        });
    });
});

describe("行列式の計算", () => {
    describe("getDeterminant", () => {
        test(`[
            [1, 2],
            [3, 4]]は-2
            `, () => {
                expect(getDeterminant([[1,2],[3,4]])).toBe(-2);
            }
        );
        test(`[
            [1,2,3],
            [4,5,6]
            [7,8,9]]は0`, () => {
                expect(getDeterminant([[1,2,3],[4,5,6],[7,8,9]])).toBe(0);
        });
        test(`[
            [1,2,3,4]
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]は0`, () => {
                expect(getDeterminant([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).toBe(0);
        });
        test("正則行列でないと行列式は計算できないのでエラー", () => {
            expect(() => getDeterminant([[1,2],[2,3],[3,4]])).toThrow("正則行列でないため行列式は計算出来ません");
        });
        test("正則行列でないと行列式は計算できないのでエラー", () => {
            expect(() => getDeterminant([[1,2,3],[2,3,4]])).toThrow("正則行列でないため行列式は計算出来ません");
        });
    })
})

describe("n次対称群の生成", () => {
    describe("generatePermutations", () => {
        test("[1]のn次対称群は[[1]]", () => {
            expect(generatePermutations([1])).toStrictEqual([[1]]);
        });
        test("[1,2]のn次対称群は[[1,2],[2,1]]", () => {
            expect(generatePermutations([1,2])).toStrictEqual([[1,2],[2,1]]);
        });
        test("[1,2,3]のn次対称群は[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]", () => {
            expect(generatePermutations([1,2,3])).toStrictEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
        });
        test("[1,2,3,4]のn次対称群は24個の置換を持つ", () => {
            const result = generatePermutations([1,2,3,4]);
            const expected = [
                [1,2,3,4], [1,2,4,3], [1,3,2,4], [1,3,4,2], [1,4,2,3], [1,4,3,2],
                [2,1,3,4], [2,1,4,3], [2,3,1,4], [2,3,4,1], [2,4,1,3], [2,4,3,1],
                [3,1,2,4], [3,1,4,2], [3,2,1,4], [3,2,4,1], [3,4,1,2], [3,4,2,1],
                [4,1,2,3], [4,1,3,2], [4,2,1,3], [4,2,3,1], [4,3,1,2], [4,3,2,1]
            ];
            // 結果の長さが24であることを確認
            expect(result).toHaveLength(24);
            // すべての期待される置換が結果に含まれていることを確認
            expect(result).toEqual(expect.arrayContaining(expected));
            // 各期待される置換が結果に存在することを個別に確認
            expected.forEach(perm => {
                expect(result).toContainEqual(perm);
            });
            // 結果のすべての要素が期待される置換のいずれかと一致することを確認
            result.forEach(perm => {
                expect(expected).toContainEqual(perm);
            });
        });
        test("[1,2,3,4,5]のn次対称群は120個の置換を持つ", () => {
            const result = generatePermutations([1,2,3,4,5]);
            const expected = [
                [1,2,3,4,5], [1,2,3,5,4], [1,2,4,3,5], [1,2,4,5,3], [1,2,5,3,4], [1,2,5,4,3],
                [1,3,2,4,5], [1,3,2,5,4], [1,3,4,2,5], [1,3,4,5,2], [1,3,5,2,4], [1,3,5,4,2],
                [1,4,2,3,5], [1,4,2,5,3], [1,4,3,2,5], [1,4,3,5,2], [1,4,5,2,3], [1,4,5,3,2],
                [1,5,2,3,4], [1,5,2,4,3], [1,5,3,2,4], [1,5,3,4,2], [1,5,4,2,3], [1,5,4,3,2],
                [2,1,3,4,5], [2,1,3,5,4], [2,1,4,3,5], [2,1,4,5,3], [2,1,5,3,4], [2,1,5,4,3],
                [2,3,1,4,5], [2,3,1,5,4], [2,3,4,1,5], [2,3,4,5,1], [2,3,5,1,4], [2,3,5,4,1],
                [2,4,1,3,5], [2,4,1,5,3], [2,4,3,1,5], [2,4,3,5,1], [2,4,5,1,3], [2,4,5,3,1],
                [2,5,1,3,4], [2,5,1,4,3], [2,5,3,1,4], [2,5,3,4,1], [2,5,4,1,3], [2,5,4,3,1],
                [3,1,2,4,5], [3,1,2,5,4], [3,1,4,2,5], [3,1,4,5,2], [3,1,5,2,4], [3,1,5,4,2],
                [3,2,1,4,5], [3,2,1,5,4], [3,2,4,1,5], [3,2,4,5,1], [3,2,5,1,4], [3,2,5,4,1],
                [3,4,1,2,5], [3,4,1,5,2], [3,4,2,1,5], [3,4,2,5,1], [3,4,5,1,2], [3,4,5,2,1],
                [3,5,1,2,4], [3,5,1,4,2], [3,5,2,1,4], [3,5,2,4,1], [3,5,4,1,2], [3,5,4,2,1],
                [4,1,2,3,5], [4,1,2,5,3], [4,1,3,2,5], [4,1,3,5,2], [4,1,5,2,3], [4,1,5,3,2],
                [4,2,1,3,5], [4,2,1,5,3], [4,2,3,1,5], [4,2,3,5,1], [4,2,5,1,3], [4,2,5,3,1],
                [4,3,1,2,5], [4,3,1,5,2], [4,3,2,1,5], [4,3,2,5,1], [4,3,5,1,2], [4,3,5,2,1],
                [4,5,1,2,3], [4,5,1,3,2], [4,5,2,1,3], [4,5,2,3,1], [4,5,3,1,2], [4,5,3,2,1],
                [5,1,2,3,4], [5,1,2,4,3], [5,1,3,2,4], [5,1,3,4,2], [5,1,4,2,3], [5,1,4,3,2],
                [5,2,1,3,4], [5,2,1,4,3], [5,2,3,1,4], [5,2,3,4,1], [5,2,4,1,3], [5,2,4,3,1],
                [5,3,1,2,4], [5,3,1,4,2], [5,3,2,1,4], [5,3,2,4,1], [5,3,4,1,2], [5,3,4,2,1],
                [5,4,1,2,3], [5,4,1,3,2], [5,4,2,1,3], [5,4,2,3,1], [5,4,3,1,2], [5,4,3,2,1]
            ];
            // 結果の長さが120であることを確認
            expect(result).toHaveLength(120);
            // 結果が期待される置換をすべて含んでいることを確認
            expect(result).toEqual(expect.arrayContaining(expected));
            // 期待される各置換が結果に含まれていることを個別に確認
            expected.forEach(perm => {
                expect(result).toContainEqual(perm);
            });
            // 結果のすべての要素が期待される置換のいずれかと一致することを確認
            result.forEach(perm => {
                expect(expected).toContainEqual(perm);
            });
        });
    });
});
*/