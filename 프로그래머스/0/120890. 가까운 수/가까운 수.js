function solution(array, n) {
    var answer = 0;
    array.sort((a,b)=>(a-b))
    let num = (Math.abs(array[0]-n))
    answer = array[0]
    for(let i=1; i<array.length; i++){
        if (Math.abs(array[i]-n) < num){
            num = Math.abs(array[i]-n)
            answer = array[i]
        }
    }
    return answer;
}