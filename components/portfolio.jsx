import React from 'react'
import style from '../styles/portfolio.module.css'
function portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.container}>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio1.webp'}/>
          </div>
          <h3 className={style.h3}>Face Recognition Attendance System</h3>
          <div className={style.btn}>
          <a href="https://github.com/el3ktraz/FACE-RECOGNITION-ATTANDANCE-SYSTEM" className='btn btn-primary'>Github</a>
          <a href="https://github.com/el3ktraz/"className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio2.png'}/>
          </div>
          <h3 className={style.h3}>Sports Auction Software</h3>
          <div className={style.btn}>
          <a href="https://github.com/el3ktraz/CRICKET-BIDDING" className='btn btn-primary'>Github</a>
          <a href="https://github.com/el3ktraz/" className='btn' >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio3.png'}/>
          </div>
          <h3 className={style.h3}>Obstacle Detecion and AVoiding robot(IOT)</h3>
          <div className={style.btn}>
          <a href="https://github.com/el3ktraz/OBSTACLE-AVOIDING-ROBOT" className='btn btn-primary'>Github</a>
          <a href="https://github.com/el3ktraz/"className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio4.png'}/>
          </div>
          <h3 className={style.h3}>IT-Fest Website</h3>
          <div className={style.btn}>
          <a href="https://github.com/el3ktraz/IT-FEST-website" className='btn btn-primary'>Github</a>
          <a href="https://shc-it-fest.vercel.app/" className='btn' >Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
