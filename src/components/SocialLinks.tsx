import { siteConfig } from '../config'

export function SocialLinks() {
  return (
    <div className="footerLinks">
      <a className="pill" href={siteConfig.youtubeUrl} target="_blank" rel="noreferrer">
        YouTube
      </a>
      <a
        className="pill"
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </div>
  )
}

