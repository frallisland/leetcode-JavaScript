/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
     
  let m = mat.length
  let n = mat[0].length
  let sortFun= function (r,c){             // �Խ�Ԫ����������
    let temList = []
    while(r<m&&c<n){
        temList.push(mat[r][c])
        r++
        c++
    }
    return temList.sort(function(a,b){return a-b})  // ע��һ��Ҫ�бȽϺ���function��
    } 
  for (var i = 0;i<m;i++){             // mat�������·����жԽ�Ԫ��
      let list = sortFun(i,0)
      list.forEach((value,index)=>{mat[i+index][index]=value})
  }
  for (var i = 1;i<n;i++){             // mat�������Ϸ����жԽ�Ԫ��
      let list = sortFun(0,i)
      list.forEach((value,index)=>{mat[index][index+i]=value})
  }
  return mat
};