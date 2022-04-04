import { useRef, useEffect } from 'react';
import './App.css';

function App() {

  const screen = useRef(null)

  const handleKeyUp = (e) => {
    if(e.key === 'c') {
      console.log('c was pressed');
    }
  }


  return (
    <div ref={screen} tabIndex={0} onKeyUp={handleKeyUp} className='screen'>
      test
    </div>
  );
}

export default App;
