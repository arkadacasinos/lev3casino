export function HeroSection() {
  return (
    <section id="top" className="lv9k-section lv9k-hero" aria-labelledby="hero-title">
      <div className="lv9k-hero-layout">
        <div className="lv9k-hero-copy">
          <p className="lv9k-eyebrow">Lev Casino</p>
          <h1 id="hero-title" className="lv9k-hero-title">
            Лев Казино: играть онлайн в слоты и живые игры
          </h1>
          <p className="lv9k-hero-lead">
            Лев Казино — это онлайн-площадка для тех, кто хочет играть быстро, честно и без лишних шагов. На
            сайте Lev Casino собраны видеослоты, карточные столы и живые игры со ставками на любой вкус, а
            сама Лев Казино работает без задержек и подходит новичкам.
          </p>
          <a className="lv9k-cta" href="#registration">
            Играть в Лев Казино
          </a>
        </div>
        <div className="lv9k-hero-media">
          <img
            src="/images/lev-hero.jpg"
            alt="Игровой зал Лев Казино со слотами, рулеткой и живыми играми"
            width={1200}
            height={670}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
