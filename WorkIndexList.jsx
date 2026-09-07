function WorkIndexList({ onSelect, onHover, hoverIndex, onViewAll, lang }) {
  const t = window.I18N[lang];
  const ACCENT = '#c9793a';
  const CATEGORY_ICONS = { photo: 'image', video: 'video-camera', drone: 'drone' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text)' }}>
        <i className="ph-bold ph-film-strip"></i>{t.mapWorkCta}
      </div>
      <div style={{ flex: 1 }}>
        {window.WORKS.map((w, i) => {
          const active = hoverIndex === i;
          return (
          <div
            key={w.title}
            onClick={() => onSelect(i)}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            style={{
              display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 12px', cursor: 'pointer',
              borderBottom: '1px solid var(--color-border)', borderLeft: active ? `3px solid ${ACCENT}` : '3px solid transparent',
              transition: 'background 150ms ease, padding-left 150ms ease, border-color 150ms ease',
              background: active ? 'var(--color-surface)' : 'transparent',
              paddingLeft: active ? '16px' : '12px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: active ? ACCENT : 'var(--color-muted)', width: '22px', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
            <i className={'ph-bold ph-' + CATEGORY_ICONS[w.category]} style={{ color: active ? ACCENT : 'var(--color-muted)', fontSize: '14px', flexShrink: 0 }}></i>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: active ? ACCENT : 'var(--color-text)', flex: 1, letterSpacing: '-0.01em', transition: 'color 150ms ease' }}>{w.title}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: active ? ACCENT : 'var(--color-muted)', textTransform: 'uppercase', flexShrink: 0 }}>{w.city.split(',')[0]}</span>
          </div>
          );
        })}
      </div>
      <button onClick={onViewAll} style={{
        marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--color-text)', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        display: 'flex', alignItems: 'center', gap: '10px', alignSelf: 'flex-start', whiteSpace: 'nowrap', width: 'max-content',
      }}>{t.viewAllWork}<i className="ph-bold ph-arrow-right"></i></button>
    </div>
  );
}
window.WorkIndexList = WorkIndexList;
