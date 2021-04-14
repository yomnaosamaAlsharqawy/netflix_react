function Video() {
  return (
    <video
      controls
      autoPlay
      ref={video}
      id="video"
      // ontimeupdate="handleTimeupdate();"
      // onvolumechange="handleVolumechange();"
    >
      <source src={data.url} type="video/mp4" />
    </video>
  );
}
