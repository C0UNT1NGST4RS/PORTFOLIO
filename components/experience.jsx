import React from 'react'
import style from '../styles/experience.module.css'
import VerifiedIcon  from '@mui/icons-material/Verified';
function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={style.container}>
        <div className={style.frontEnd}>
          <h3 className={style.h3}>Coding Knowledge</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Python</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>VB.net</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Html</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Css</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>MYSQL</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>MongoDB</h4>
            </div>
          </div>
        </div>
        <div className={style.backEnd}>
          <h3 className={style.h3}>My Intrests</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>ML & AI</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Cyber Security</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>System Administraion</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Network Administration</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Internet of Things (IoT)</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Linux and Unix Systems</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience
