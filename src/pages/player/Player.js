import { useEffect, useState, useRef } from "react";
import "./Player.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useHistory } from 'react-router-dom';

export default function Player() {
  const History = useHistory();
  const [data, setData] = useState([]);
  const [play, setPlay] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekbarUpperWidth, setSeekbarUpperWidth] = useState('0px');
  const [seekbarThumbLeft, setSeekbarThumbLeft] = useState('0px')
  const [speedDisplay, setSpeedDisplay] = useState('none');
  const [volumeDisplay, setVolumeDisplay] = useState('none');
  

  const [v, setV] = useState(5);
  const video = useRef();
  const seekbar = useRef();
  const volIcon = useRef();
  const seekbarUpper = document.querySelector("#seekbarUpper");
  const seekbarThumb = document.querySelector("#seekbarThumb");

  const id = localStorage.getItem("id")
  const episode_id = localStorage.getItem("episode_id")
  const type = localStorage.getItem("type")

  const storedToken = localStorage.getItem("token")

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+storedToken, 
        }
    };

    // Do the fetch
    if (type === 'movie') {
    fetch(`http://localhost:8000/resources/moreinfo?id=${id}&type=${type}`, requestOptions)
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
    } else if (type === 'tv_show') {
      fetch(`http://localhost:8000/resources/oneepisode?episode=${episode_id}`, requestOptions)
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
    }

    setVolume(5);

    // Keyboard event listeners
    document.addEventListener("keyup", (e) => {
      if (e.key == " ") {
        playPause();
      } else if (e.key == "ArrowRight") {
        forwardTen();
      } else if (e.key == "ArrowLeft") {
        backwardTen();
      } else if (e.key == "ArrowUp") {
        volumeUp();
      } else if (e.key == "ArrowDown") {
        volumeDown();
      }
    });
    
  }, []);



  $(function () {
    $('[type="range"], h4>span').css("filter", "hue-rotate(-" + "230" + "deg)");
  });

  function playPause() {
    if (video.current.paused) {
      video.current.play();
      setPlay(true);
    } else {
      video.current.pause();
      setPlay(false);
    }
  }

  // Forward 10 seconds
  function forwardTen() {
    video.current.currentTime += 10;
  }

  // Backward 10 seconds
  function backwardTen() {
    video.current.currentTime -= 10;
  }

  // Volume up 1/10 at a a time
  function volumeUp() {
    const vol = video.current.volume * 10;
    if (vol < 10) setVolume(vol + 1);
  }

  // Volume down 1/10 at a time
  function volumeDown() {
    const vol = video.current.volume * 10;
    if (vol > 0) setVolume(vol - 1);
  }

  function volumeEqual(e) {
    setVolume(e.target.value);
  }

  // Mute / Unmute
  function muteUnmute() {
    if (video.current.volume !== 0) {
      setVolume(0, true);
    } else {
      setVolume(v, true);
    }
  }

  // set volume from mute button
  function setVolume(x, fromMute = false) {
    const vol = parseInt(x) / 10;
    video.current.volume = vol;
    if (!fromMute) setV(x);

    console.log("Volume", video.current.volume);
  }

  function handleVolumechange() {
    const vol = video.current.volume * 10;
    if (vol === 0) {
      volIcon.current.setAttribute("src", "static/icons/volumeMuted.svg");
    } else if (vol < 4) {
      volIcon.current.setAttribute("src", "static/icons/volumeLow.svg");
    } else if (vol < 8) {
      volIcon.current.setAttribute("src", "static/icons/volumeMedium.svg");
    } else {
      volIcon.current.setAttribute("src", "static/icons/volumeMax.svg");
    }
  }

  // full screen
  function toggleFullScreen() {
    const player = document.querySelector("#player");
    const fullScrIcon = document.querySelector("#fullScreenBtn").childNodes[0];
    if (!document.fullscreenElement) {
      player.requestFullscreen();
      fullScrIcon.setAttribute("src", "/static/icons/windowed.svg");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fullScrIcon.setAttribute("src", "/static/icons/fullscreen.svg");
      }
    }
  }

  // Control Speed
  function speedEqual(x) {
    console.log('speed', x)
    video.current.playbackRate = x;
  }

  function doNothing() {
    return false;
  }

  function handleSeekbarClick(e, offset) {
    const whereToPercent = offset / seekbar.current.clientWidth;
    setCurrentTime(video.current.duration * whereToPercent);
    video.current.currentTime = video.current.duration * whereToPercent
  }

  function handleTimeupdate() {
    // const subtitles = document.querySelector('#subtitles');
    // const seekbar = document.querySelector("#seekbar");
    const seekbarRemainingTime = document.querySelector(
      "#seekbarRemainingTime"
    );

    localStorage[`video${data.id}`] = video.current.currentTime;

    // sync seekbar and thumb with current time
    const x =
      (video.current.currentTime / video.current.duration) * parseFloat(seekbar.current.clientWidth);
      

    setSeekbarUpperWidth(`${x}px`);
    setSeekbarThumbLeft(`${x}px`);

    // time left
    let totalSeconds = video.current.duration - video.current.currentTime;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    seekbarRemainingTime.innerHTML = `${hours > 0 ? hours + ":" : ""} ${
      minutes > 9 ? minutes : "0" + minutes
    }:${seconds > 9 ? seconds : "0" + seconds}`;

    // if (subtitlesArr) {

    //     // handle subtitles
    //     let sub = subtitlesArr.filter( item =>
    //         video.current.currentTime >= item.start/1000 &&
    //         video.current.currentTime <= item.end/1000          // python script convert to ms
    //     );

    //     if (sub.length > 0) {
    //         subtitles.innerHTML = sub[0].content;
    //     }
    // }
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        fontSize: "12px",
        color: "white",
      }}
    >
      <div className="d-flex justify-content-center">
        <div id="contentWrapper">
          <div className="player" id="player">
            {/* <!-- HTML5 Video player without any controls --> */}
            <video
              autoPlay
              ref={video}
              id="video"
              onTimeUpdate={handleTimeupdate}
              onVolumeChange={handleVolumechange}
              src={data.url}
            ></video>

            {/* <!-- Customized Controls Layer --> */}
            <div className="customized-controls sizing-wrapper">
              {/* <!-- In the top --> */}
              <div className="top mb-auto">
                <div className="catsCont d-none">
                  <div id="age"></div>
                  <div id="cats"></div>
                </div>
                <div
                  className="d-flex flex-row align-items-center"
                  id="backBtnContainer"
                >
                  <button
                    onClick={() => History.goBack()}
                    className="ctrl-btn topctrl-btn"
                    id="backBtn"
                    data-f="doNothing"
                    // onClick= 'go back'
                  >
                    <img src="/static/icons/back.svg" />
                  </button>
                  <h3 className="hover-text lead pt-2"></h3>
                </div>
              </div>

              {/* <!-- In the middle of the player --> */}
              <div className="middle my-auto text-center display-4 d-none">
                <div>Animations will be here</div>
              </div>

              {/* <!-- In the bottom of the player --> */}
              <div
                className="bottom mt-auto"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {/* <!-- Subtitles --> */}
                <div className="row subtitle-container">
                  <p
                    className="col-lg-6 col-md-8 col-10 mx-auto text-center"
                    id="subtitles"
                  ></p>
                </div>

                <div className="auto-hide">
                  {/* <!-- Seekbar --> */}
                  <div className="d-flex" id="seekbarContainer">
                    <div
                      className="w-100"
                      id="seekbar"
                      ref={seekbar}
                      onClick={(e) => handleSeekbarClick(e, e.nativeEvent.offsetX)}
                    >
                      <div id="seekbarLower" ></div>
                      <div id="seekbarUpper" style={{width: seekbarUpperWidth}}></div>
                      <div id="seekbarThumb" style={{left: seekbarThumbLeft}}></div>
                    </div>
                    <div
                      id="seekbarTimeContainer"
                      className="d-flex align-items-center"
                    >
                      <div className="text-nowrap" id="seekbarRemainingTime">
                        0:00:00
                      </div>
                    </div>
                  </div>

                  {/* <!-- Contorols --> */}
                  <div className="controls d-flex justify-content-between align-items-center">
                    {/* <!-- Time Controls --> */}
                    <button
                      className="ctrl-btn"
                      id="playPauseBtn"
                      onClick={playPause}
                    >
                      <img
                        src={
                          play
                            ? "/static/icons/pause.svg"
                            : "/static/icons/play.svg"
                        }
                      />
                    </button>
                    <button
                      className="ctrl-btn"
                      id="backwardTenBtn"
                      onClick={backwardTen}
                    >
                      <img src="/static/icons/backTen.svg" />
                    </button>
                    <button
                      className="ctrl-btn"
                      id="forwardTenBtn"
                      onClick={forwardTen}
                    >
                      <img src="/static/icons/forwardTen.svg" />
                    </button>

                    {/* <!-- Volume Controls --> */}
                    <div className="volume-container d-flex">
                      <button
                        className="ctrl-btn"
                        id="muteUnmuteBtn"
                        onClick={muteUnmute}
                        onMouseOver={() => { setVolumeDisplay('block') }}
                       
                        
                      >
                        <img
                          ref={volIcon}
                          id="volumeIcon"
                          src="/static/icons/volumeMedium.svg"
                        />
                      </button>

                      <div className={`my-auto d-${volumeDisplay}`} id="volumeTarget">
                        <input
                          id="volumeRange"
                          type="range"
                          min="1"
                          max="10"
                          value={v}
                          onChange={volumeEqual}
                          onMouseLeave={() => {setVolumeDisplay('none')}}
                          
                        />
                      </div>
                    </div>

                    {/* <!-- Title --> */}
                    <div className="ml-auto">
                      <div className="mt-2 " id="titleContainer">
                        <h4 className="text-nowrap" id="title">
                          {data.name}
                        </h4>
                      </div>
                    </div>

                    {/* <!-- Speed Controls --> */}
                    <div className="speed-container">
                      <button
                        className="ctrl-btn"
                        id="speedBtn"
                        onClick={doNothing}
                        onMouseOver={() => {setSpeedDisplay('block')}}
                      >
                        <img src="/static/icons/speed.svg" />
                      </button>
                      <div className={`d-${speedDisplay}`} onMouseLeave={()=> {setSpeedDisplay('none')}} id="speedTarget" style={{position:'fixed', right: "100px", bottom: "100px"}}>
                        <div className="d-flex flex-column p-3" style={{backgroundColor: "#141414" }}>
                          <div>
                            <h2 style={{ color: "white" }}>Playback Speed</h2>
                          </div>
                          <div className="d-flex justify-content-between">
                            <button
                              className="ctrl-btn"
                              onClick={() => {speedEqual(0.5)}}
                            >
                              0.5x
                            </button>
                            <button
                              className="ctrl-btn"
                              onClick={() => {speedEqual(0.75)}}
                            >
                              0.75x
                            </button>
                            <button
                              className="ctrl-btn"
                              onClick={() => {speedEqual(1)}}
                            >
                              1x
                            </button>
                            <button
                              className="ctrl-btn"
                              onClick={() => {speedEqual(1.25)}}
                            >
                              1.25x
                            </button>
                            <button
                              className="ctrl-btn"
                              onClick={() => {speedEqual(1.5)}}
                            >
                              1.5x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Fullscreen Controls --> */}
                    <button
                      className="ctrl-btn"
                      id="fullScreenBtn"
                      onClick={toggleFullScreen}
                    >
                      <img src="/static/icons/fullscreen.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
