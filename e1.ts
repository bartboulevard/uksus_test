export function countVowels(s: string): number {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
    }
    return count;
}