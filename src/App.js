import { useRef } from "react";
import "./App.css";
// import Santa from "./assets/santa.svg";
import { ReactComponent as Santa } from "./assets/santa.svg";
import Carol from "./assets/joy-to-the-world.mp3";
import Canvas from "./Canvas";

function App() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.volume = 0.2;
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="App">
      <Canvas />
      <div id="xmas-container">
        <div id="typing">Merry Christmas</div>
      </div>
      <div id="message">
        <div>당신의 2021년은 어땠나요?</div>
        <div>2022년도 올해처럼 밝게 빛날거예요.</div>
        <div>항상 당신의 행복을 응원할게요!</div>
      </div>
      <div className="santa">
        <Santa />
      </div>
      <div className="button-group">
        <button className="play" onClick={handlePlay}>
          Play the Carol
        </button>
        <button className="pause" onClick={handlePause}>
          Pause
        </button>
      </div>
      <figure>
        <figcaption>Joy to the World (Jazz) - E's Jammy Jams</figcaption>
        <audio id="carol" ref={audioRef} src={Carol}></audio>
      </figure>
    </div>
  );
}

export default App;
