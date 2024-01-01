function solution(nums) {
    var answer = 0;
    let arr = [];
    let pick = nums.length/2
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        if (!arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }
    if (arr.length >= pick){
        answer = pick
    }
    else {answer = arr.length}
    return answer;
}