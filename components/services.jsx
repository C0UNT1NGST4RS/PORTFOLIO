import React from 'react'
import style from '../styles/services.module.css'
import Done  from '@mui/icons-material/Done';
function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={style.container}>
        <article className={style.service}>
          <div className={style.header}>
            <h3 className={style.h3}>Web Development</h3>
          </div>
          <ul className={style.list}>
            <li className={style.li}><Done className={style.icon}/>  Full-stack development</li>
            <li className={style.li}><Done className={style.icon}/>Static Website Service</li>
            <li className={style.li}><Done className={style.icon}/> Dynamic Website</li>
            <li className={style.li}><Done className={style.icon}/> eCommerce Development</li>
            <li className={style.li}><Done className={style.icon}/> Website Maintenance</li>
            <li className={style.li}><Done className={style.icon}/> Realtime Chat</li>
            <li className={style.li}><Done className={style.icon}/> Social media applications</li>
            <li className={style.li}><Done className={style.icon}/> Custom Website Design</li>
            <li className={style.li}><Done className={style.icon}/> Web Hosting</li>
            <li className={style.li}><Done className={style.icon}/> Payment Gatway Integration</li>
            <li className={style.li}><Done className={style.icon}/>  Customized web app development</li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default services