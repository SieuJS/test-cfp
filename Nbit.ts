function findGapBinary(N: number): number {
    let zeroGap = 0;
    let maxGap = 0;
    let foundOne = false;

    while (N > 0) {
        let remainder = N % 2;
        N = Math.floor(N / 2);

        if (remainder === 1) {
            if (foundOne) {
                maxGap = Math.max(maxGap, zeroGap);
            }
            foundOne = true;
            zeroGap = 0;
        } else if (foundOne) {
            zeroGap++;
        }
    }

    return maxGap;
}

console.log(findGapBinary(32)) // 5