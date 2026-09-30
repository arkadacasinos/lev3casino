const tags = [
  { href: '#top', label: '#levcasino' },
  { href: '#mirror', label: '#levcasinozerkalo' },
  { href: '#top', label: '#levkazino' },
  { href: '#play', label: '#igratkazinolev' },
  { href: '#bonus', label: '#levkazinobonus' },
  { href: '#online', label: '#levkazinoonline' },
  { href: '#official', label: '#levkazinoofficialny' },
  { href: '#registration', label: '#levkazinoregistracia' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="lv9k-footer">
      <div className="lv9k-footer-inner">
        <nav className="lv9k-tags" aria-label="Быстрый поиск по сайту">
          {tags.map((tag) => (
            <a key={tag.label} className="lv9k-tag" href={tag.href}>
              {tag.label}
            </a>
          ))}
        </nav>
        <p className="lv9k-disclaimer">
          Лев Казино предназначено для игроков 18 лет и старше. Играйте ответственно и оценивайте свои
          финансовые возможности: азартные игры могут вызывать зависимость.
        </p>
        <p className="lv9k-copyright">© {year} Лев Казино. Все названия и бренды принадлежат их владельцам.</p>
      </div>
    </footer>
  )
}
