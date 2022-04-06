import { useRef, useEffect, useState } from "react";
import MainContext from "./MainContext";
import LeaveCommentText from "./components/LeaveCommentText";
import NoteBox from "./components/NoteBox";
import Note from "./components/Note";
import "./App.css";

function App() {
  const screen = useRef(null);
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [notes, setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || []);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [boxVisible, setBoxVisible] = useState(false);

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setBoxVisible,
    setNotes
  };

  useEffect(() => {
    screen.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
      setBoxVisible(false)
    }

    if (e.key === "Escape") {
      setBoxVisible(false )
    }

  };

  const handleMouseMove = (e) => {
    setPosition({ x: [e.pageX, e.clientX], y: [e.pageY, e.clientY] });
  };

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({ x: position.x[0], y: position.y[0] });
      setBoxVisible(true);
    }
  };

  return (
    <MainContext.Provider value={data}>
      <span style={{fontSize: 40}}>Kullanmak icin 'c' tuşuna basın. Notları sürükleyebilirsiniz.</span>
      <div
        ref={screen}
        tabIndex={0}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        onMouseMove={handleMouseMove}
        className={`screen${mode && " editable"}`}
      >
        <img
          src="https://raw.githubusercontent.com/AhmetOsmn/frontend-examples/main/images/frontend-examples-3.png"
          alt="image"
        />

        {mode && <LeaveCommentText />}

        {notes && notes.map((note, key) => <Note key={key} {...note} />)}

        {boxVisible && <NoteBox position={boxPosition} />}
      </div>
    </MainContext.Provider>
  );
}

export default App;
