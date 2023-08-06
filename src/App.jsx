import React from 'react'
import Die from "./Die"
import Confetti from 'react-confetti'
import {nanoid} from "nanoid"
export default function App() {

  

  
  const [ele,setEle] = React.useState(multipleDie)
 
  const [tenzies, setTenzies] = React.useState(false)
  const [rollNumber, setRollNumber] = React.useState(0)

  

  React.useEffect(()=>{

    
    

    
    var temp = false
    for(let i = 0; i < 9; i++){

      const dice = ele[i]
      const dice1 = ele[i+1]
      //console.log(dice1.val)
      if(dice.isHeld && dice1.isHeld && dice.val == dice1.val){
        temp = true
      }
      else{

        temp = false
        break
      }
    }
    if(temp){
      setTenzies(true)
      console.log("Congrats! You've won!")
    }
    
  }, [ele])




  function multipleDie(){
    const newDie = []

    for (let i = 0;i < 10; i++){
      var x = Math.ceil(Math.random()*6)
      newDie.push({
        val: x, isHeld: false, id: nanoid()
      })
    }

    return newDie
  }
  
  const x = ele.map(dice=> <Die val = {dice.val} held = {dice.isHeld} holDice = {()=>hold(dice.id)}/>)
    

  function hold(id){
    
    setEle(prev =>{
        const newArr= []
        for (let i = 0; i < prev.length; i++) {
            const oldButton = prev[i]
            if (oldButton.id === id) {
                // Put the most recently-modified note at the top
                newArr.push({ ...oldButton, isHeld: !oldButton.isHeld })
            } else {
                newArr.push(oldButton)
            }
        }
        return newArr

    })
    

  }
  //Rolling the dice function
  function rolle(){

    setEle(prev =>{
      const newArr= []
      for (let i = 0; i < prev.length; i++) {
          const oldButton = prev[i]
          if (oldButton.isHeld === true) {
              
              newArr.push(oldButton)
          } else {
              newArr.push({ ...oldButton, val: Math.ceil(Math.random()*6)})
          }
      }
      return newArr

    })
    setRollNumber(r=>r+1)

  }
  
  function reset(){
    
    setTenzies(false)
    setEle(multipleDie)
    setRollNumber(0)
  }



  

  return (
    
    <div className='main'>
        {tenzies && <Confetti />}

        
        <h1 className='header'>TENZIES</h1>
        
        <h2 className="below-header">
        Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls
        </h2>
        <div className='button-container'>
        
          {x}
        </div>

        <div className="roll" onClick={tenzies?reset:rolle}>
          <h3 className='roll-text'>{tenzies?"reset":"Roll"}</h3>
          
        </div>

        <div className='roll-number'>
          <h3>Roll:{rollNumber}</h3>
        </div>
        
        

        

        
    </div>
  )
}


