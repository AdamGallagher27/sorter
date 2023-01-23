
import { React, useState, useEffect } from 'react'
import './sv.css'
import { mergeSort, bubbleSortAnimations } from '../../sorting-algo/SortingAlgo'


// constants
const animationSpeed = 1;
const primaryColor = "aqua";
const secondaryColor = "red";


export const SortingVisualiser = () => {

  // set array state
  const [arr, setArr] = useState([])

  // on reload create a new array to be sorted
  useEffect(() => {
    resetArr()
  }, [])

  // random interval function
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // creates new array
  const resetArr = () => {
    let arr = []

    for (let i = 0; i < 50; i++) {
      arr.push(randomIntFromInterval(5, 300))
    }

    setArr(arr)
    console.log(arr)
  }


  // handle bubble
  const handleBubble = () => {
    const animations = bubbleSortAnimations(arr)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2"
      const arrayBars = document.getElementsByClassName("array-bar")

      if (isColorChange) {
        const color =
          animations[i][0] === "comparison1"
            ? secondaryColor
            : primaryColor
        const [, barOneIndex, barTwoIndex] = animations[i]
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style

        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * animationSpeed)
      } else {
        const [, barIndex, newHeight] = animations[i]
        if (barIndex === -1) {
          continue
        }
        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  }

  return (
    <>
      <div className='array-container'>
        {/* renders the array */}
        {arr.map((value, index) => (
          <div className='array-bar' key={index} style={{ height: `${value}px` }}>
          </div>
        ))
        }

      </div>
      <div>
        <button onClick={() => handleBubble(arr)}>Bubble Sort</button>
        <button onClick={() => setArr(mergeSort(arr))}>Merge Sort</button>
      </div>
    </>
  )
}
