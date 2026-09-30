import type { ReactNode } from 'react'

type ContentSectionMedia = {
  src: string
  alt: string
  width: number
  height: number
  mediaFirst?: boolean
}

type ContentSectionProps = {
  id: string
  title: string
  eyebrow?: string
  alt?: boolean
  media?: ContentSectionMedia
  children: ReactNode
}

export function ContentSection({ id, title, eyebrow, alt, media, children }: ContentSectionProps) {
  const titleId = `${id}-title`

  const copy = (
    <div className="lv9k-section-copy">
      {eyebrow ? <p className="lv9k-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="lv9k-section-title">
        {title}
      </h2>
      {children}
    </div>
  )

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`lv9k-section${alt ? ' lv9k-section--alt' : ''}`}
    >
      {media ? (
        <div className={`lv9k-section-with-media${media.mediaFirst ? ' lv9k-media-first' : ''}`}>
          {copy}
          <div className="lv9k-section-media">
            <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" />
          </div>
        </div>
      ) : (
        copy
      )}
    </section>
  )
}
