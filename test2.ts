function solution(S: string): number {
    let countB = 0;
    let deletions = 0;

    for (let char of S) {
        if (char === 'A') {
            deletions = Math.min(deletions + 1, countB);
        } else if (char === 'B') {
            countB++;
        }
    }

    return deletions;
}

console.log(solution('BAAABABBBBAA')) // 1
console.log(solution('AABBA')) // 0
console.log(solution('ABABAB')) // 2
console.log(solution('BBBB')) // 0
console.log(solution('AAAA')) // 0
console.log(solution('BBAAABAB')) // 2