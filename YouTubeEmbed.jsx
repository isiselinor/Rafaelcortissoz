function YouTubeEmbed({ id, autoplay, controls = true, muted = false }) {
  if (!id) return null;
  const params = `autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&rel=0&modestbranding=1&playsinline=1`;
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}?${params}`}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
window.YouTubeEmbed = YouTubeEmbed;
