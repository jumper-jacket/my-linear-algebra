import { haveEqualDimensions, addVector } from '../src/index';

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