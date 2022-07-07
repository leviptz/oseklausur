import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Thema } from './Thema'
import { useNavigate } from 'react-router-dom'

export const Learning = ({thema, setThema, erledigt, setErledigt, saveAnswer}) => {
  const [random, setRandom] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const setRandomNumber = () => {
    const number = Math.floor(Math.random() * thema.length)
    setRandom(number);
  }

  const changeShowSolution = () => {
    showSolution ? setShowSolution(false) : setShowSolution(true);
  }

  const changeThema = () => {
        saveAnswer(input, thema[random].id)
      if (thema.length > 1) {
        const filteredArray = thema.filter(t => t.id !== thema[random].id)
        const newRandom = Math.floor(Math.random() * filteredArray.length)
        setRandom(newRandom);
        setThema(filteredArray)
        setErledigt(prev => prev + 1)
        setShowSolution(false)
        setInput("");
      } else {
        navigate("/")
      }
  }

  const onChange = text => {
    setInput(text);
  }

  useEffect(() => {
    setRandomNumber()
  },[])

  return (
    <div>
        <Navbar changeThema={changeThema} changeShowSolution={changeShowSolution}/>
        <Thema onChange={onChange} input={input} erledigt={erledigt} anzahlThemen = {thema.length} randomThema={thema[random]} showSolution={showSolution}/>
    </div>
  )
}
