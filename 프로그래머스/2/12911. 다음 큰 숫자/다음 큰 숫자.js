function solution(n) {
    var answer = 0;
    let num = n+1
    let two = n.toString(2)
    let count = 0;
    let count2 = 0;
    for(let i=0; i<two.length; i++){
        if (two[i] === "1"){
            count++
        }
    }
    while (count2 < count){
        let twotwo = num.toString(2)
        for (let i=0; i<twotwo.length; i++){
            if (twotwo[i] === "1"){
                count2++
            }
        }
        if (count2 === count){
            answer = num
        }
        else {
              count2 = 0;
            num++
        }
    }
    
    return answer;
}