const createVarNameFromPath = (path, exclude) => {
  let arr = str.replace('@', '').replaceAll('.', '').replace('/', '').replace(excludep,'').replace('/', '').split('/');
  arr.forEach(function (item, index) {  
    arr[index] = item.replace(item[0], item[0].toUpperCase());
  });
  let newStr =  arr.join('') 
  newStr = newStr.charAt(0).toLowerCase() + newStr.slice(1)
  alert(newStr)
  return newStr
}

export {
  createVarNameFromPath
}