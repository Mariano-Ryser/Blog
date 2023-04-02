import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import style from '../styles/style.module.css'

export default function Footer() {
  return (
    <footer>
      {/* REDES */}
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="10" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="10" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>

        {/* AUTHOR */}
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className={style.p}>{siteMetadata.author}</div>
          <div>{` • `}</div>

          {/* AÑO */}
          {/* <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div> */}

          {/* TITULO */}
          <Link className={style.p} href="/">
            {siteMetadata.title}
          </Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <p className={style.p}>Creado en Next-Js</p>

          {/* <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
