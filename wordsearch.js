
const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return undefined;
    };
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    } //if (!l.includes(word)) return false;

    
    let flippedArray = [];
    for (let newRow = 0; newRow < letters[0].length; newRow++) {
        flippedArray.push([]);
        for (let newColumn = 0; newColumn < letters[newColumn].length; newColumn++) {
            flippedArray[newRow].push(letters[newColumn][newRow]);
        }
    };

            
    const hJoin = flippedArray.map(ls => ls.join(''))
    for (l of hJoin) {
        if (l.includes(word)) return true;
        // } if (!l.includes(word)) return false;
    };
    return false;
    
}

module.exports = wordSearch;