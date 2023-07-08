import React from 'react'
import style from '../styles/about.module.css'
import BadgeIcon from '@mui/icons-material/Badge';
import FactCheckIcon from '@mui/icons-material/FactCheck';
function about() {
  return (
    <section id='about' className={style.container}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={style.subContainer}>
        <div className={style.profile}>
          <img className={style.profileImage} src={'/assets/profile.png'} />
        </div>
        <div className={style.details}>
          <div className={style.cards}>
            <div className={style.card}>
              <BadgeIcon className={style.icon} />
              <h5>Experience</h5>
              <small>2+ years</small>
            </div>
            <div className={style.card}>
              <FactCheckIcon className={style.icon} />
              <h5>Projects</h5>
              <small>8+ completed</small>
            </div>
          </div>
          <p className={style.para}>Hello, I am Siyabuddeen full stack developer, having 2+ years of experience. I am from Mangalore, Karnataka. My educational background in computer science </p>
          <button className='btn btn-primary'>Let &apos;s talk</button>
        </div>
      </div>
    </section>
  )
}

export default about