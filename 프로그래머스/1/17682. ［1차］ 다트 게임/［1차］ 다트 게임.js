function solution(dartResult) {
    var answer = 0;
    let arr = [];
    let stack = [];
    let idx = 0;
    let str = '';
    for(let i=0; i<dartResult.length; i++){
        let dart = dartResult[i]
        if (!isNaN(dart)){
            str += dart
        }
       else {if (str.length !== 0){
           arr.push(Number(str))
           str = '';
       }
             arr.push(dart)
            }
    }
    let num = arr[0]
    for(let i=1; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            idx++
            stack.push(num)
            num = arr[i]
        }
        if (arr[i] === "S"){num **= 1}
        if (arr[i] === "D"){num **= 2}
        if (arr[i] === "T"){num **= 3}
        if (arr[i] === "*"){
            if (stack.length){
                stack[idx-1] *= 2
            }
            num *= 2
        }
        if (arr[i] === "#"){ num *= -1}
         if (i === arr.length-1){stack.push(num)}
    }
    for (let i=0; i<stack.length; i++){
        answer += stack[i]
    }
    return answer;
}