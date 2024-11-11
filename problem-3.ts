function countWordOccurrences (sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(" ");
    const target = word.toLowerCase();
    const filtered = words.filter((item) => item.includes(target));
    return filtered.length;
}