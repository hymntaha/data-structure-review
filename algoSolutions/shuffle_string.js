var restoreString = function(s, indices) {
  var len = indices.length;
  var str = new Array(len);
  for(let i=0; i<len;i++){
    str[indices[i]] = s[i];
  }
  return str.join("");
};

console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))
// leetcode
