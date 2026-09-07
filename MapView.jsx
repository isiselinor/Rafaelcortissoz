const RC_ACCENT = '#c9793a';

function MapView({ onSelectWork, onHoverWork, hoverIndex, lang }) {
  const t = window.I18N[lang];
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);
  const markersRef = React.useRef([]);

  React.useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      scrollWheelZoom: false, worldCopyJump: false, minZoom: 2,
      maxBounds: [[-85, -180], [85, 180]], maxBoundsViscosity: 1.0,
    }).setView([10, -20], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors', noWrap: true,
    }).addTo(map);
    map.getPane('tilePane').style.filter = 'grayscale(1) invert(1) contrast(0.9)';
    mapRef.current = map;
    setTimeout(() => map.invalidateSize(), 0);
    const points = [];
    const CATEGORY_ICONS = { photo: 'image', video: 'video-camera', drone: 'drone' };
    window.WORKS.forEach((w, i) => {
      const marker = L.circleMarker([w.lat, w.lng], {
        radius: 7, color: '#f2efe9', weight: 2, fillColor: '#111111', fillOpacity: 1,
      }).addTo(map);
      marker.bindTooltip(
        `<div style="font-family:'Space Mono',monospace;text-align:left;min-width:120px">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:4px">${w.title}</div>
          <div style="font-size:10px;opacity:0.75;text-transform:uppercase">${w.meta}</div>
          <div style="font-size:10px;opacity:0.75;text-transform:uppercase;margin-top:2px">${w.city}</div>
        </div>`,
        { direction: 'top', offset: [0, -10] }
      );
      marker.on('click', () => onSelectWork(i));
      marker.on('mouseover', () => onHoverWork && onHoverWork(i));
      marker.on('mouseout', () => onHoverWork && onHoverWork(null));
      markersRef.current[i] = marker;
      points.push([w.lat, w.lng]);
    });
    if (points.length) map.fitBounds(points, { padding: [40, 40], maxZoom: 4 });
  }, []);

  React.useEffect(() => {
    markersRef.current.forEach((m, i) => {
      if (!m) return;
      const active = i === hoverIndex;
      m.setStyle({
        radius: active ? 11 : 7, weight: active ? 3 : 2,
        color: active ? RC_ACCENT : '#f2efe9', fillColor: active ? RC_ACCENT : '#111111',
      });
      if (active) { m.bringToFront(); m.openTooltip(); } else { m.closeTooltip(); }
    });
  }, [hoverIndex]);

  return (
    <div>
      <div ref={ref} style={{ aspectRatio: '1 / 1', border: '1px solid var(--color-border)' }}></div>
      <div style={{ marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.mapHint}</div>
    </div>
  );
}
window.MapView = MapView;
