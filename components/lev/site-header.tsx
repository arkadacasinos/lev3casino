export function SiteHeader() {
  return (
    <header className="lv9k-header">
      <div className="lv9k-header-inner">
        <a href="#top" className="lv9k-logo">
          Лев <span className="lv9k-logo-accent">Казино</span>
        </a>
        <nav className="lv9k-nav" aria-label="Разделы сайта">
          <a className="lv9k-nav-link" href="#bonus">
            Бонусы
          </a>
          <a className="lv9k-nav-link" href="#mirror">
            Зеркало
          </a>
          <a className="lv9k-nav-link" href="#registration">
            Регистрация
          </a>
        </nav>
      </div>
    </header>
  )
}
