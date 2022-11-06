"use strict";
function hashTable(s) {
    const table = [];
    const letters = s.split('');
    for (let i = 0; i < letters.length; i += 1) {
        const index = table === null || table === void 0 ? void 0 : table.findIndex((l) => l.letter === letters[i]);
        if (index === -1) {
            table.push({ letter: letters[i], frequency: 1 });
        }
        else {
            table[index].frequency += 1;
        }
    }
    return table;
}
function checkAnagram(s1, s2) {
    const h1 = hashTable(s1);
    const h2 = hashTable(s2);
    if (h1.length !== h2.length) {
        return false;
    }
    for (let i = 0; i < h1.length; i += 1) {
        const index = h1.findIndex((l) => l.letter === h2[i].letter);
        if (index !== -1 && h1[index].frequency === h2[i].frequency) {
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(checkAnagram('kayak', 'aaykk'));
