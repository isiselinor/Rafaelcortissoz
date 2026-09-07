function ContactSection({ lang }) {
  const { Input, Button } = window.RafaelCortissozDesignSystem_75b2fd;
  const t = window.I18N[lang];
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" style={{ padding: '64px', borderBottom: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '16px' }}>{t.contactKicker}</div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-text)', maxWidth: '360px', lineHeight: 1.5, marginBottom: '24px' }}>{t.contactBody}</p>
        <div style={{ display: 'flex', gap: '14px' }}>
          <a href="https://wa.me/5491124004810" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">{t.whatsapp}</Button>
          </a>
          <a href="https://www.instagram.com/rafaelcortissoz/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">{t.instagram}</Button>
          </a>
        </div>
      </div>
      {sent ? (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', color: 'var(--color-text)' }}>{t.sent}</div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '420px' }}>
          <Input label={t.emailLabel} placeholder="you@studio.com" />
          <Input label={t.messageLabel} textarea placeholder={t.messagePlaceholder} />
          <div><Button variant="primary">{t.send}</Button></div>
        </form>
      )}
    </section>
  );
}
window.ContactSection = ContactSection;
