function solution(spell, dic) {
    var answer = 0;
    answer = 2
    let num = 0;
    for (let i=0; i<dic.length; i++){
        for(let j=0; j<spell.length; j++){
            if (dic[i].includes(spell[j])){
                num++
            }
        }
        if(num === spell.length){
            answer = 1;
            break;
        }
        else {num = 0}
    }
    return answer;
}