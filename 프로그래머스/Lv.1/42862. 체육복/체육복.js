function solution(n, lost, reserve) {
    var answer = 0;
    let reallost = [];
    for(let i=0; i<lost.length; i++){
        if (!reserve.includes(lost[i])){
            reallost.push(lost[i]) 
        }
    }
    reallost.sort((a,b)=>(a-b))
    reserve.sort((a,b)=>(a-b))
    for(let i=0; i<reserve.length; i++){
        if (lost.includes(reserve[i])){
            continue;
        }
        let res = reserve[i]
        for (let j=0; j<reallost.length; j++){
            let los = reallost[j]
            if (res+1 === los || res-1 === los){
                reallost = [...reallost.slice(0, j), ...reallost.slice(j + 1)];
                break;
            }
        }
    }
    answer = n-reallost.length
    return answer;
}