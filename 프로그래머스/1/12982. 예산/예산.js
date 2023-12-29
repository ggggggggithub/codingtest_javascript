function solution(d, budget) {
    var answer = 0;
    let money = 0;
    d.sort((a,b)=>(a-b))
    for(let i=0; i<d.length; i++){
        if (money+d[i]<=budget && i === d.length-1){
            answer = d.length;
            break;
        }
        if (money+d[i] < budget){
            money += d[i]
            continue;
        }
        if (money+d[i] === budget){
            answer = i+1;
            break;
        }
        if (money+d[i]>budget){
            answer=i;
            break;
        }

    }
    return answer;
}