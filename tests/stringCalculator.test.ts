import { string_calculator } from "../index";

describe("string_calculator()", () => {
    test("Empty string", () => {
        expect(string_calculator("")).toBe(0);
    });

    test("Single number", () => {
        expect(string_calculator("1")).toBe(1);
        expect(string_calculator("123")).toBe(123);
    });

    test("Two numbers comma separated", () => {
        expect(string_calculator("1,5")).toBe(6);
    });

    test("Multiple numbers comma separated", () => {
        expect(string_calculator("1,2,3,4")).toBe(10);
    });

    test("Newlines and semicolons are accepted as delimiters", () => {
        expect(string_calculator("1\n2,3")).toBe(6);
        expect(string_calculator("2;3;4")).toBe(9);
        expect(string_calculator("1\n2;3,4")).toBe(10);
    });

    test('ignores non-digit characters inside tokens (e.g., "1a2" -> 12)', () => {
        expect(string_calculator("1a,2b")).toBe(3);
        expect(string_calculator("1a2,3")).toBe(15);
    });

    test("Negative numbers", () => {
        expect(string_calculator("1,-2")).toBe("negative numbers not allowed -2");
        expect(string_calculator("2,-4,3,-5")).toBe(
            "negative numbers not allowed -4,-5"
        );
    });
});
