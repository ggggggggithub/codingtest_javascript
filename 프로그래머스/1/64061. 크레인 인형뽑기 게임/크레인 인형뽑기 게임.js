function solution(board, moves) {
    var answer = 0;
    let cart = []
    let count = 0 
    moves.map(loc => {
        let index = loc-1
        for (let v of board) {
            if (v[index] !==0) {
                if (v[index] === cart[cart.length-1]) { 
                    cart.pop()
                    count += 2
                } else {
                    cart.push(v[index])
                }
                v[index] = 0
                break
            }
        }
    })
    answer = count
    return answer;
}
