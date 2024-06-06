function solution(array) {
    var answer = 0;
    let obj = {};
    for(let i=0; i<array.length; i++){
        if (!obj.hasOwnProperty(array[i])){
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++;
        }
    }
    let arr = Object.values(obj).sort((a,b)=>(b-a));
    if ((arr.indexOf(arr[0])) === (arr.lastIndexOf(arr[0]))){
        answer = Number(Object.keys(obj).find(k => obj[k] === arr[0]))
    }
    else {answer = -1}
    return answer;
}