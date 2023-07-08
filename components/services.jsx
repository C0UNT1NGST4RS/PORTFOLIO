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
            <h3 className={style.h3}>All Services</h3>
          </div>
          <ul className={style.list}>
           
            <li className={style.li}><Done className={style.icon}/> Red Team Assesment</li>
            <li className={style.li}><Done className={style.icon}/> Employe Awareness Training on security</li>
            <li className={style.li}><Done className={style.icon}/> Phishing Simulations</li>
            <li className={style.li}><Done className={style.icon}/> Network Load Testing</li>
            <li className={style.li}><Done className={style.icon}/> Small Scale Automation in python</li>
            <li className={style.li}><Done className={style.icon}/> Server Configuration</li>
            <li className={style.li}><Done className={style.icon}/> Debugging</li>
            <li className={style.li}><Done className={style.icon}/> Testing[Black box]</li>
            <li className={style.li}><Done className={style.icon}/> Website Maintenance</li>
            <li className={style.li}><Done className={style.icon}/> Static Website Service</li>
            <li className={style.li}><Done className={style.icon}/> Network Configuration</li>
            <li className={style.li}><Done className={style.icon}/> Database Management</li>
            <li className={style.li}><Done className={style.icon}/> Web Hosting</li>
            <li className={style.li}><Done className={style.icon}/> Payment Gatway Integration</li>
            <li className={style.li}><Done className={style.icon}/> API Integrations</li>

          </ul>
        </article>
      </div>
      
    </section>
  )
}

export default services
