function Services({ lang }) {
  const t = window.I18N[lang];
  return (
    <div style={{ marginTop: '56px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '14px' }}>{t.servicesKicker}</div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 34px)', letterSpacing: '-0.01em', color: 'var(--color-text)', margin: '0 0 36px', maxWidth: '640px' }}>{t.servicesIntro}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)' }}>
        {t.services.map((s) => (
          <div key={s.name} style={{
            background: 'var(--color-bg)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '10px',
            transition: 'background 150ms ease',
          }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-surface)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-bg)'}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--color-text)', minHeight: '2.3em' }}>{s.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.Services = Services;
