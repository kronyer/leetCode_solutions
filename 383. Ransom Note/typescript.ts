function canConstruct(ransomNote: string, magazine: string): boolean {
    
    let count: {[key:string]:number} = {}

    for (let char of magazine){
        if (!count[char]){
            count[char] = 0
        }
        count[char] ++;
    }

    for (let char of ransomNote){
        if (!count[char] || count[char] === 0){
            return false;
        }
        count[char]--
    }

    return true
};
