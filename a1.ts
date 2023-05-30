// Export a function to count how many times ONLY the letter "a" appears in a string.
 export function countAs(s: string): number {
    const A = "aA"
     let count = 0;
     for (let i = 0; i < s.length; i++) {
         if (A.includes(s[i])) {
             count++;
         }
     }
     return count;
 }