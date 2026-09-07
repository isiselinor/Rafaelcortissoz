const WORKS = [
  { title: 'Nightfall', meta: 'Short Film · 2024', tag: '16MM', category: 'video', service: 'personal', youtubeId: '', city: 'Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816 },
  { title: 'Low Tide', meta: 'Documentary · 2023', tag: 'DIGITAL', category: 'video', service: 'brand', youtubeId: '', city: 'Ushuaia, Argentina', lat: -54.8019, lng: -68.3030 },
  { title: 'Static', meta: 'Music Video · 2023', tag: '16MM', category: 'video', service: 'social', youtubeId: '', city: 'Lisbon, Portugal', lat: 38.7223, lng: -9.1393 },
  { title: 'Interior Weather', meta: 'Editorial · 2022', tag: 'COLOR', category: 'photo', service: 'brand', stillCount: 5, city: 'Valparaíso, Chile', lat: -33.0472, lng: -71.6127 },
  { title: 'Sonora', meta: 'Portrait Series · 2022', tag: 'B&W', category: 'photo', service: 'personal', stillCount: 6, city: 'Marrakech, Morocco', lat: 31.6295, lng: -7.9811 },
  { title: 'Overland', meta: 'Aerial Study · 2023', tag: 'DRONE', category: 'drone', service: 'travel', youtubeId: '', city: 'Reykjavik, Iceland', lat: 64.1466, lng: -21.9426 },
  { title: 'Coastline', meta: 'Aerial Study · 2021', tag: 'DRONE', category: 'drone', service: 'travel', youtubeId: '', city: 'Tulum, Mexico', lat: 20.2114, lng: -87.4654 },
];

const CATEGORY_ICONS = { all: 'squares-four', photo: 'image', video: 'video-camera', drone: 'drone' };
const CATEGORY_BADGE = { photo: 'image', video: 'video-camera', drone: 'drone' };
const SPROCKET = Array.from({ length: 24 });

function WorkGrid({ onSelect, lang }) {
  const { Card, Tag } = window.RafaelCortissozDesignSystem_75b2fd;
  const t = window.I18N[lang];
  const [filter, setFilter] = React.useState('all');
  const [query, setQuery] = React.useState('');
  const [cutting, setCutting] = React.useState(false);
  const q = query.trim().toLowerCase();
  const shown = WORKS.filter((w) => {
    const matchesCategory = filter === 'all' || w.category === filter;
    const matchesQuery = !q || w.title.toLowerCase().includes(q) || w.tag.toLowerCase().includes(q) || w.category.includes(q);
    return matchesCategory && matchesQuery;
  });
  function selectFilter(key) {
    if (key === filter) return;
    setCutting(true);
    setTimeout(() => setCutting(false), 320);
    setFilter(key);
  }
  const tabStyle = (key) => ({
    fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase',
    padding: '6px 0', marginRight: '28px', cursor: 'pointer', background: 'none', border: 'none',
    color: filter === key ? 'var(--color-text)' : 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '8px',
    borderBottom: filter === key ? '1px solid var(--color-text)' : '1px solid transparent',
  });
  const sprocketRow = (
    <div style={{ display: 'flex', gap: '14px', padding: '0 4px' }}>
      {SPROCKET.map((_, i) => <div key={i} style={{ width: '8px', height: '8px', border: '1px solid var(--color-border)', flexShrink: 0 }}></div>)}
    </div>
  );
  return (
    <section id="work" style={{ padding: '48px 56px', borderBottom: '1px solid var(--color-border)', position: 'relative' }}>
      {cutting && <div style={{ position: 'absolute', inset: 0, background: 'var(--color-bg)', zIndex: 5, animation: 'rcCut 0.32s ease both' }}></div>}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '16px' }}>{t.selectedWork}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
        <div style={{ display: 'flex' }}>
          {Object.entries(t.categories).map(([key, label]) => (
            <button key={key} style={tabStyle(key)} onClick={() => selectFilter(key)}>
              <i className={'ph-bold ph-' + CATEGORY_ICONS[key]}></i>{label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--color-border)', padding: '8px 12px', minWidth: '180px' }}>
          <i className="ph-bold ph-magnifying-glass" style={{ color: 'var(--color-muted)', fontSize: '13px' }}></i>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} style={{
            background: 'none', border: 'none', outline: 'none', color: 'var(--color-text)', fontFamily: 'var(--font-mono)',
            fontSize: '11px', letterSpacing: '0.04em', textTransform: 'uppercase', width: '100%',
          }} />
        </div>
      </div>
      {shown.length === 0 && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-muted)', textTransform: 'uppercase' }}>{t.noResults}</div>
      )}
      {sprocketRow}
      <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', padding: '18px 4px', scrollSnapType: 'x mandatory' }}>
        {shown.map((w) => {
          const globalIndex = WORKS.findIndex((x) => x.title === w.title);
          return (
          <div key={w.title} onClick={() => onSelect(globalIndex)} style={{
            cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, width: '220px', scrollSnapAlign: 'start',
            transition: 'transform 200ms ease, opacity 200ms ease',
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ position: 'relative' }}>
              <Card title={w.title} meta={w.meta} />
              <span style={{
                position: 'absolute', top: '10px', left: '10px', fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--color-bg)', background: 'var(--color-text)', padding: '2px 6px',
              }}>{String(globalIndex + 1).padStart(2, '0')}</span>
              <i className={'ph-bold ph-' + CATEGORY_BADGE[w.category]} style={{
                position: 'absolute', top: '10px', right: '10px', fontSize: '16px', color: 'var(--color-bg)',
                background: 'var(--color-text)', padding: '6px',
              }}></i>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <Tag muted>{w.tag}</Tag>
              <Tag>{(t.services.find((s) => s.id === w.service) || {}).name}</Tag>
            </div>
          </div>
          );
        })}
      </div>
      {sprocketRow}
    </section>
  );
}
window.WorkGrid = WorkGrid;
window.WORKS = WORKS;
