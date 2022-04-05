import { useRef, useEffect, useState } from 'react';
import './App.css';

function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleKeyUp = (e) => {
    if(e.key === 'c') {
      setMode(!mode)
    }
  }

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY })
  }


  return (
    <div ref={screen} tabIndex={0} onKeyUp={handleKeyUp} onMouseMove={handleMouseMove} className='screen'>
      <img src='https://raw.githubusercontent.com/AhmetOsmn/frontend-examples/main/images/frontend-examples-3.png'/>

      <div style={{ position: 'fixed', left: position.x, top: position.y }}>Yorum yazmak için tıkla</div>

      {mode && (<div>yorum modu aktif</div>)}
    </div>
  );
}

export default App;
