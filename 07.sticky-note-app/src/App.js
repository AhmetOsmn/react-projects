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
  const [notes, setNotes] = useState([
    {
      id: "1",
      note: "bu bir test notudur",
      color: "red",
      position: {
        x: 350,
        y: 300,
      },
    },
  ]);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [boxVisible, setBoxVisible] = useState(false);

  const data = {
    position,
    boxPosition,
    setMode,
    notes
  };

  useEffect(() => {
    screen.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
      setBoxVisible(false)
    }
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({ x: position.x, y: position.y });
      setBoxVisible(true);
    }
  };

  return (
    <MainContext.Provider value={data}>
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

        {mode && <div>yorum modu aktif</div>}

        {notes && notes.map((note) => <Note {...note} />)}

        {boxVisible && <NoteBox position={boxPosition} />}
      </div>
    </MainContext.Provider>
  );
}

export default App;
