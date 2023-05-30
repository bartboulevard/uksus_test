import {countAs} from "../a1";
test("countAs", () => {
    expect(countAs("")).toBe(0);
    expect(countAs("AAA")).toBe(3);
    expect(countAs("ABC")).toBe(1);
});