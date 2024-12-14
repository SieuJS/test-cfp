function minMovesToMakeUnique(A: number[]): number {
    A.sort((a, b) => a - b);
    let max = A.length; 
    let moves = 0;

    for (let i = 0; i < A.length; i++) {
        let shouldBe = i + 1;
        if (A[i] < shouldBe) {
            moves += shouldBe - A[i];
        } else if (A[i] > shouldBe) {
            moves += A[i] - shouldBe
        }
    }

    return moves;
}

// Example usage:
const A = [6, 2, 3, 5, 6, 3];
// sorted arr: [2, 3, 3, 5, 6, 6]
// move 1 : [1, 3, 3, 5, 6, 6] the minimum must be 1 to be fit the condition
// move 2 : [1,2,3,5,6,6] the minimum must be 2 to be fit the condition
// move 3 : [1,2,3,4,6,6] the minimum must be 3 to be fit the condition, but it 3 already, so go next and check 4 
// move 4 : [1,2,3,4,5,6]  1, 2,3,4 is good at move 3, we check 6 and it should be 5 to be fit the condition
// conclusion , all number must be increase one by one .

console.log(minMovesToMakeUnique(A)); // Output: 4