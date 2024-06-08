function solution(polynomial) {
    var answer = '';
    let arr = polynomial.split(" ")
    let x = 0;
    let num = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "+"){continue;}
        else if (arr[i].includes("x"))
        {x += Number(arr[i].replace("x", "")) || 1}
        else (num += Number(arr[i]))
    }
    if (x>0 && num>0){
        if (x===1){answer = `x + ${num}`}
        else {answer = `${x}x + ${num}`}
    }
    else if (x===0 && num>0){answer = String(num)}
    else if (num===0 && x>0){
        if (x===1){answer = "x"}
        else {answer = `${x}x`}
    }
    return answer;
}