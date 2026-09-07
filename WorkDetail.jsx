function WorkDetail({ list, index, onClose, onNavigate, lang }) {
  const { Button, Tag } = window.RafaelCortissozDesignSystem_75b2fd;
  const t = window.I18N[lang];
  const work = list && index != null ? list[index] : null;
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [views, setViews] = React.useState(0);

  React.useEffect(() => { setPhotoIndex(0); }, [index]);

  React.useEffect(() => {
    if (work) setViews(window.Analytics.record(work.title));
  }, [work && work.title]);

  React.useEffect(() => {
    if (work == null) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % list.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + list.length) % list.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [work, index, list]);

  if (!work) return null;
  const navBtnStyle = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 91,
    background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)',
    width: '65px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', fontSize: '24px',
  };
  const slug = work.title.toLowerCase().replace(/\s+/g, '-');
  function share() {
    const url = `${location.origin}${location.pathname}#work=${slug}`;
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).catch(() => {});
      }
    } catch (e) {}
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', animation: 'rcFadeIn 0.3s ease both' }}>
      <div style={{ padding: '43px 86px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{t.backToWork}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>{index + 1} / {list.length}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '27px', whiteSpace: 'nowrap' }}>
          <button onClick={share} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)', fontFamily: 'var(--font-mono)', fontSize: '16px', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '11px', padding: 0, whiteSpace: 'nowrap' }}>
            <i className="ph-bold ph-share-network"></i>{copied ? t.linkCopied : t.shareLink}
          </button>
          <Button variant="ghost" onClick={onClose}>{t.close}</Button>
        </div>
      </div>

      <button style={{ ...navBtnStyle, left: '24px' }} onClick={() => onNavigate((index - 1 + list.length) % list.length)} aria-label="Previous">
        <i className="ph-bold ph-caret-left"></i>
      </button>
      <button style={{ ...navBtnStyle, right: '24px' }} onClick={() => onNavigate((index + 1) % list.length)} aria-label="Next">
        <i className="ph-bold ph-caret-right"></i>
      </button>

      <div style={{ flex: 1, padding: '65px 86px', minHeight: 0 }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag>{work.tag}</Tag>
          <Tag muted>{(t.services.find((s) => s.id === work.service) || {}).name}</Tag>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(54px, 8vw, 119px)', margin: '27px 0', color: 'var(--color-text)' }}>{work.title}</h1>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '54px', display: 'flex', alignItems: 'center', gap: '22px' }}>
          <span>{work.meta}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="ph-bold ph-eye"></i>{views} {t.views}</span>
        </div>

        {work.category === 'photo' && work.stillCount ? (
          <div style={{ maxWidth: '900px' }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', border: '1px solid var(--color-border)', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>
              Still {photoIndex + 1} / {work.stillCount}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {Array.from({ length: work.stillCount }).map((_, i) => (
                <div key={i} onClick={() => setPhotoIndex(i)} style={{
                  width: '48px', height: '48px', flexShrink: 0, cursor: 'pointer',
                  border: i === photoIndex ? '2px solid var(--color-text)' : '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                }}></div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ aspectRatio: '16 / 9', maxWidth: '900px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>
            {work.youtubeId ? <window.YouTubeEmbed id={work.youtubeId} autoplay controls /> : t.reelPlaceholder}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '14px', padding: '22px 86px', borderTop: '1px solid var(--color-border)', overflowX: 'auto', flexShrink: 0 }}>
        {list.map((w, i) => (
          <div key={w.title} onClick={() => onNavigate(i)} style={{
            flexShrink: 0, width: '97px', height: '73px', border: i === index ? '2px solid var(--color-text)' : '1px solid var(--color-border)',
            background: 'var(--color-surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px',
          }}>{i + 1}</div>
        ))}
      </div>
    </div>
  );
}
window.WorkDetail = WorkDetail;
