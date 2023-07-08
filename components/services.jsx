import React from 'react'
import style from '../styles/services.module.css'
import Done  from '@mui/icons-material/Done';
function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={style.container}>
        <div className={style.service}>
          <div className={style.header}>
            <h3 className={style.h3}>Dev</h3>
          </div>
          <ul className={style.list}>
            {/* Services under "Dev" */
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
}
          </ul>
        </div>

        <div className={style.service}>
          <div className={style.header}>
            <h3 className={style.h3}>OTHER SERVICES</h3>
          </div>
          <ul className={style.list}>
            {/* Services under "OTHER SERVICES" */
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
}
          </ul>
        </div>
      </div>
    </section>

   
        
  )
}

export default services
