function Bio({ lang }) {
  const t = window.I18N[lang];
  return (
    <section id="bio" style={{ padding: '64px', borderBottom: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px', alignItems: 'start' }}>
      <div style={{ aspectRatio: '4 / 5', border: '1px solid var(--color-border)', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase' }}>Photo</div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '16px' }}>{t.bioKicker}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 44px)', letterSpacing: '-0.01em', color: 'var(--color-text)', margin: '0 0 20px' }}>{t.bioTitle}</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-text)', maxWidth: '520px', lineHeight: 1.5 }}>{t.bioBody}</p>
      </div>
    </section>
  );
}
window.Bio = Bio;
