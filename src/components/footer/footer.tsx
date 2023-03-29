import style from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>Real Madrid Fantasy Copyright © All rights reserved</p>

      <div className={style.footerCopyright}>
        <p>Siguenos en nuestras redes sociales</p>
      </div>

      <div className={style.footerFollowUs}>
        <a href="https://es-es.facebook.com/">
          <img
            className={style.footerFollowUsFacebook}
            src="./facebook.jfif"
            alt="facebook-logo"
          />
        </a>
        <a href="https://www.instagram.com/jesusnauta9/">
          <img
            className={style.footerFollowUsInstagram}
            src="./instag.png"
            alt="instagram-logo"
          />
        </a>
        <a href="https://twitter.com/">
          <img
            className={style.footerFollowUsTwitter}
            src="./twitter.png"
            alt="twitter-logo"
          />
        </a>
      </div>
    </footer>
  );
}
