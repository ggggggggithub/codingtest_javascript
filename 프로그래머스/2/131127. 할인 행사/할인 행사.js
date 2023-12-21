function solution(want, number, discount) {
    var answer = 0;
    let num = 0;
    let numslice = number.slice()
    let check = 0;
    for(let i=0; i<number.length; i++){
        num += number[i]
    }
    for (let j=0; j<=discount.length-num; j++){
        for (let k=j; k<num+j; k++){
            for (let h=0; h<want.length; h++){
                if (want[h] === discount[k] && numslice[h] > 0){
                    numslice[h]--
                }
            }   
        }
            for(let g=0; g<numslice.length; g++){
            check += numslice[g]
        }
        if (check === 0){
            answer ++
        }
        numslice = number.slice()
        check = 0
    }
    
    return answer;
}