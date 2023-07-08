import React from 'react'
import style from '../styles/footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
function footer() {
  return (
    <footer className={style.container} id='footer'>
      <Link href="/"><span className={style.logo}>SIYAB</span></Link>

      <div className={style.paramLink}>
        <Link href="#"><span className={style.span}>Home</span></Link>
        <a href="#about"><span className={style.span}>About</span></a>
        <a href="#experience"><span className={style.span}>Experience</span></a>
        <a href="#service"><span className={style.span}>Service</span></a>
        <a href="#contact"><span className={style.span}>Contact</span></a>
      </div>
      <div className={style.socials}>
      <Link href="https://in.linkedin.com/in/mohd-shihab-442b681b2"><span className={style.icon}><LinkedInIcon/></span></Link>
      <Link href="https://github.com/mahammed-siyabuddeen/"><span className={style.icon}><GitHubIcon/></span></Link>
      <Link href="https://www.instagram.com/siyab._/"><span className={style.icon}><InstagramIcon/></span></Link>
        
      </div>
    </footer>
  )
}

export default footer