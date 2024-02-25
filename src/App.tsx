import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { usePeaks } from "peaks.js-react";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);

  const { peaks, loading, error } = usePeaks({
    audioRef,
    waveformRef,
    options: {},
  });

  return (
    <div className="App">
      <h1>Demo for peaks.js-react</h1>
      <div
        id="waveform"
        ref={waveformRef}
        style={{ width: "400px", height: "200px" }}
      ></div>
      <audio id="audio" ref={audioRef}></audio>
      {!!loading && <p>Loading</p>}
      {!!error && <p>Error: {error.message}</p>}
      {!error && !loading && !!peaks && (
        <p>{`current zoom:${peaks.zoom.getZoom()}`}</p>
      )}
    </div>
  );
}

export default App;
