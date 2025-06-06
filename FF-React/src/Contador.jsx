import { useState } from 'react'
import './Contador.scss'
import { Greeting } from './components/greeting'
import { Title } from './components/title'
import { Counter } from './components/counter'
import WrapperCounter from './pages/WrapperCounter'

function Contador() {

  const [color, setcolor] = useState('black')
  const handleButtonClick = () => {
    setcolor(color === 'black' ? 'blue' : 'black')
  }

  return (
    <WrapperCounter>
      <Title>Título de boas vindas</Title>
        <Greeting fistName = 'Joana' lastName = 'Ferreira'/>
        <Counter color={color} onClickButton={handleButtonClick}/>
    </WrapperCounter>
  );
}

export default Contador
