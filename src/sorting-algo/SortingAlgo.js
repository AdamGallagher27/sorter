
// merge sort
export const mergeSort = (array) => {
  if (array.length <= 1) {
    // console.log('done')
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  // steps.push(topDown(mergeSort(left), mergeSort(right)))
  // console.log(steps)
  return topDown(mergeSort(left), mergeSort(right))
}

const topDown = (left, right) => {
  const array = []

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      array.push(left.shift())
    }
    else {
      array.push(right.shift())
    }
  }
  console.log(array.concat(left.slice()).concat(right.slice()))

  // steps.push(array.concat(left.slice()).concat(right.slice()))
  return array.concat(left.slice()).concat(right.slice())
}


// bubble sort
export const bubbleSort = (arr) => {

  let tempArr = arr;
  let steps = []

  for (var i = 0; i < tempArr.length; i++) {
    for (var j = 0; j < (tempArr.length - i - 1); j++) {

      if (tempArr[j] > tempArr[j + 1]) {
        var temp = tempArr[j]
        tempArr[j] = tempArr[j + 1]
        tempArr[j + 1] = temp
        // console.log('state change')
        // steps.push(tempArr)
      }
      
    }
  }
  console.log(tempArr)
  return tempArr;
}

