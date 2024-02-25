import "./App.css";
import { usePeaks } from "peaks.js-react";

function App() {
  const { peaks, loading, error, waveformRef, audioRef } = usePeaks({
    options: {
      webAudio: {
        audioContext: new AudioContext(),
      },
    },
  });

  return (
    <div className="App">
      <h1>Demo for peaks.js-react</h1>
      <div
        id="waveform"
        ref={waveformRef}
        style={{ width: "100%", height: "200px" }}
      ></div>
      <audio controls id="audio" ref={audioRef}>
        <source
          src={`${process.env.PUBLIC_URL}/250856__joshuaempyre__epic-orchestra-loop.wav`}
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
      {!!loading && <p>Loading</p>}
      {!!error && <p>Error: {error.message}</p>}
      {!error && !loading && !!peaks && (
        <>
          <p>{`current zoom:${peaks.zoom.getZoom()}`}</p>
          <button onClick={() => peaks.player.play()}>play</button>
          <button onClick={() => peaks.player.pause()}>pause</button>
          <button
            onClick={() =>
              peaks.views.getView("overview")?.setWaveformColor({
                linearGradientStart: Math.random() * 100,
                linearGradientEnd: Math.random() * 100,
                linearGradientColorStops: ["green", "red"],
              })
            }
          >
            change waveform color
          </button>
        </>
      )}
    </div>
  );
}

export default App;
