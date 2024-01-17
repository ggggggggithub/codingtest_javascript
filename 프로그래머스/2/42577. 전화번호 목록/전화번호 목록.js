function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    let arr = [];
    for(let i=0, j=i+1; i<phone_book.length-1; i++, j++){
        let word = phone_book[i]
        let word2 = phone_book[j].slice(0,word.length)
        if (word === word2){
            return false
        }
}
    return answer;
}