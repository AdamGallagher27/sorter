
import {React, useState, useEffect} from 'react'
import './sv.css'

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

    for(let i = 0; i < 50; i++) {
      arr.push(randomIntFromInterval(5, 300))
    }

    setArr(arr)
    console.log(arr)
  }

  return (
    <div className='array-container'>
      {/* renders the array */}
      {arr.map((value, index) => (
        <div className='array-bar' key={index} style={{height: `${value}px`}}>
        </div>
      ))
      }
    </div>
  )
}
