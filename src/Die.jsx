import React from 'react'
import Dot from "./dot"

export default function Die(props){
    //const a = props.dies.map(() => {
    
    const [disDots, setDisDots] = React.useState(generateDots())

    React.useEffect(()=>{

        setDisDots(generateDots)
    }, [props])

    function generateDots(){
        const newArr = []
        if(props.val==0){
            newArr.push({
                val:1
            })
        }
        for(let i=0;i<props.val;i++){
            newArr.push({
                value:1
              })
        }
        return newArr

    }
    const dots = disDots.map(p=> <Dot val = {p.value} />)
    
    const holding = {
        backgroundColor: props.held? "#5035FF" : "#F5F5F5",
        
    }
    
    return (
        <div className='Buttons'>
            <div className='b' style={holding} onClick={props.holDice} >
                
                <div className='dot-container'>{dots}</div>
                
            </div>
        </div>
    )

}