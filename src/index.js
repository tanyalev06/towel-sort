
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === [] || matrix == null) {
        return [];
    }
    let answer = "";
    for(let i = 0; i < matrix.length; i++) {
        if(i % 2 !== 0) {
            answer += matrix[i].reverse().join(",") + ",";
        }
        else answer += matrix[i].join(",")+ ",";
    }    
    let ans = answer.split(",");
    ans.pop();
    _answer = ans.map((num)=>{return +num});
  return _answer;
}
