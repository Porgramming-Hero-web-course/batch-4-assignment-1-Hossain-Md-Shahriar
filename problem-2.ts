function removeDuplicates (arr: number[]): number[] {
    const newArray: number[] = [];
    for(const num of arr) {
        if(!newArray.includes(num)) {
            newArray.push(num);
        }
    }
    return newArray;
}