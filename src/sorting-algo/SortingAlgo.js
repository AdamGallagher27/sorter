
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

export const bubbleSortAnimations = (arr) => {
  let animations = []
  let helperArr = arr.slice()
  bubbleSort(helperArr, animations)
  return animations
}

const bubbleSort = (arr, animations) => {

  let x = arr.length - 1

  while (x > 0) {
    let swapped = false
    for (let i = 0; i < x; ++i) {
      animations.push(['comparison1', i, i + 1])
      animations.push(['comparison2', i, i + 1])
      if (arr[i] > arr[i + 1]) {
        swapped = true
        animations.push(["swap", i, arr[i + 1]])
        animations.push(["swap", i + 1, arr[i]])
        swap(arr, i, i + 1);
      }
    }
      if (!swapped) break 
      x--
  }
  console.log(arr)
  return arr;
}

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}

