import {countVowels} from "../e1";
test("countVowels", () => {
    expect(countVowels("aeiou")).toBe(5);
    expect(countVowels("")).toBe(0);
    expect(countVowels("bcdfghjkemneqretvexyz")).toBe(4);
});