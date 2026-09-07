function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/5491124004810" target="_blank" rel="noopener" style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 95,
      width: '56px', height: '56px', background: 'var(--color-text)', color: 'var(--color-bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px',
      border: '1px solid var(--color-text)', borderRadius: 'var(--radius-0)', transition: 'transform 150ms ease',
    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} aria-label="WhatsApp">
      <i className="ph-bold ph-whatsapp-logo"></i>
    </a>
  );
}
window.FloatingWhatsApp = FloatingWhatsApp;
