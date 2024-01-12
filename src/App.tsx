import {Button} from './components/Button.tsx';
import {useState} from 'react';

function App() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

  return (
    <>
      <h3>{count}</h3>
      <Button title={'Increase'} onClick={increaseCount}/>
      <Button title={'Decrease'} onClick={decreaseCount}/>
    </>
  )
}

export default App
