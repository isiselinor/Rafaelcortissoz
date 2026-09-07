function Intro({ onEnter, lang }) {
  const INTRO_YOUTUBE_ID = '';
  const icons = ['camera', 'film-slate', 'film-strip', 'aperture', 'video-camera', 'microphone'];
  const [leaving, setLeaving] = React.useState(false);
  function enter() {
    setLeaving(true);
    setTimeout(onEnter, 500);
  }
  return (
    <div style={{
      position: 'relative', minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px, 4vh, 48px)', overflow: 'hidden', padding: '24px 16px',
      animation: leaving ? 'rcFadeIn 0.5s ease reverse both' : 'none', pointerEvents: leaving ? 'none' : 'auto',
    }}>
      {INTRO_YOUTUBE_ID ? (
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}>
          <window.YouTubeEmbed id={INTRO_YOUTUBE_ID} autoplay muted controls={false} />
        </div>
      ) : (
        <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="intro-reel.mp4" type="video/mp4" />
        </video>
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--color-bg)', opacity: 0.55 }}></div>
      <div style={{ position: 'relative', display: 'flex', gap: '28px', fontSize: '22px', color: 'var(--color-muted)' }}>
        {icons.map((ic, i) => <i key={ic} className={'ph-bold ph-' + ic} style={{ animation: `rcFadeIn 0.6s ease ${i * 0.06}s both` }}></i>)}
      </div>
      <h1 style={{
        position: 'relative', fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.01em',
        color: 'var(--color-text)', margin: 0, textAlign: 'center', animation: 'rcFadeUp 0.7s ease 0.2s both',
      }}>RAFAEL CORTISSOZ</h1>
      <button onClick={enter} style={{
        position: 'relative', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '16px 32px', background: 'var(--color-text)', color: 'var(--color-bg)', border: '1px solid var(--color-text)',
        borderRadius: 'var(--radius-0)', cursor: 'pointer', whiteSpace: 'nowrap', width: 'max-content',
        animation: 'rcFadeUp 0.7s ease 0.4s both', transition: 'transform 150ms ease',
      }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Portafolio RC</button>
    </div>
  );
}
window.Intro = Intro;
