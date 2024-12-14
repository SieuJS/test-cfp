function solution (N : number) : number { 
    let maxDigit = Math.ceil(N/9); 

    function findNumbers(current: number, sum: number, maxDigit: number, N: number, result: number[]): void {
        if (sum === N) {
            result.push(current);
            return;
        }
        if (sum > N || maxDigit === 0) {
            return;
        }
        for (let i = 1; i <= 9; i++) {
            findNumbers(current * 10 + i, sum + i, maxDigit - 1, N, result);
        }
    }

    let result: number[] = [];
    findNumbers(0, 0, maxDigit, N, result);
    result = result.sort();
    return result[0]; ;
}

solution(19)