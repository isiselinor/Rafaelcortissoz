function Footer() {
  return (
    <footer style={{ padding: '32px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-muted)' }}>
      <span>© 2026 Rafael Cortissoz</span>
      <a href="https://www.instagram.com/rafaelcortissoz/" target="_blank" rel="noopener" style={{ color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <i className="ph-bold ph-instagram-logo" style={{ fontSize: '14px' }}></i>@rafaelcortissoz
      </a>
      <span>Buenos Aires — Working Worldwide</span>
    </footer>
  );
}
window.Footer = Footer;
