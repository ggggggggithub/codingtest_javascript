function solution(nums) {
    var answer = 0;
  let arr = [];
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
          for(let h=2; h<sum; h++){
              if (sum % h === 0){
                  sum = false
              }
          }
        if (sum !== false) {
          arr.push(sum);
        }
      }
    }
  }
    answer = arr.length;
    return answer;
}