function solution(citations) {
    var answer = 0;
    let nonmon = 0;
    let count = 0;
    let hid = [];
    citations.sort((a,b)=>(a-b))
    for(let i=0; i<citations.length; i++){
        nonmon = citations[i]
        for (let j=i; j<citations.length; j++){
            if (nonmon <= citations[j]){
                count ++
            }
        }
        if (count < nonmon){
            hid.push(count)
            count = 0;
            nonmon = 0;
        }
        else {
            hid.push(nonmon)
            count = 0;
            nonmon = 0;
        }
    }
    hid.sort((a,b)=>(b-a))
    answer = hid[0]
    return answer;
}