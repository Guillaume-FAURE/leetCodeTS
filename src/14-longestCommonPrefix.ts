function longestCommonPrefix(strs: string[]): string {
    const strsLength = strs.length;
    let prefix = strs[0];
    for (let i = 1; i < strsLength; i += 1) {
        const string = strs[i];
        if (prefix === '') {
            return prefix;
        }
        const prefixLength = prefix.length
        for (let j = 0; j < prefixLength; j += 1) {
            if (prefix[j] !== string[j]) {
                prefix = prefix.substring(0, j);
            }
        }
    }
    return prefix;
}

function main14() {
    const strs = ['flower', 'flow', 'flight'];
    console.log(longestCommonPrefix(strs));
}
main14();
