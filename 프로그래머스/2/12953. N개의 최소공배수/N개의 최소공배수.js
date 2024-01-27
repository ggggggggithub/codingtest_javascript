function solution(arr) {
    var answer = 0;
    let gcd = (a,b) => {
        if (b === 0) {return a}
        return gcd(b, a % b);
    }
    let lcb = (a,b) => {
        let g = gcd(a,b)
        return (a*b)/g
    }
    let num = lcb(arr[0],arr[1])
    for (let i=2; i<arr.length; i++){
        num = lcb(num,arr[i])
    }
    return num;
}