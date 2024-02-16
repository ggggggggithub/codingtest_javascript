function solution(record) {
    var answer = [];
    let arr = [];
    let obj = {};
    for (let i=0; i<record.length; i++){
        let [order, id, name] = record[i].split(" ")  
        arr.push([order,id])
       if (name) {
    obj[id] = name;
  }
    }
    for(let i=0; i<arr.length; i++){
        if (arr[i][0] === "Enter"){
            answer.push(`${obj[arr[i][1]]}님이 들어왔습니다.`)
        }
        if (arr[i][0] === "Leave"){
            answer.push(`${obj[arr[i][1]]}님이 나갔습니다.`)
        }
    }
    return answer;
}