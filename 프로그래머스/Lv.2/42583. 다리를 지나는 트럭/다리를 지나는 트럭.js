function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bri = [];
    let time = [];
    let check = [];
    while(truck_weights.length > 0){
        time.forEach((ele, idx, arr) => arr[idx]++);
        if (time[0] > bridge_length){
             time.shift()
             bri.shift()
            }
        let wei = bri.reduce((acc, cur) => acc + cur, 0);
        let car = truck_weights[0]
        if (wei + car <= weight){
            bri.push(car)
            time.push(1)
            truck_weights.shift()
        }
        answer++
    }
    let plustime = bridge_length - time[time.length-1] + 1
    answer += plustime
    return answer;
}