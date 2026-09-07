function Hero({ lang }) {
  const t = window.I18N[lang];
  return (
    <section id="work-top" style={{ padding: '88px 56px 56px', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '18px', animation: 'rcFadeUp 0.6s ease both' }}>{t.role}</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 9vw, 132px)', lineHeight: 0.92, letterSpacing: '-0.01em', margin: 0, color: 'var(--color-text)', animation: 'rcFadeUp 0.7s ease 0.08s both' }}>RAFAEL<br/>CORTISSOZ</h1>
      <div style={{ display: 'flex', gap: '22px', marginTop: '22px', fontSize: '18px', color: 'var(--color-muted)', animation: 'rcFadeUp 0.7s ease 0.12s both' }}>
        {['camera', 'film-slate', 'film-strip', 'aperture', 'video-camera', 'microphone'].map((ic) => (
          <i key={ic} className={'ph-bold ph-' + ic}></i>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', maxWidth: '460px', marginTop: '22px', color: 'var(--color-muted)', lineHeight: 1.5, animation: 'rcFadeUp 0.7s ease 0.16s both' }}>
        {t.heroBody}
      </p>
      <window.Services lang={lang} />
    </section>
  );
}
window.Hero = Hero;
