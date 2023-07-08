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
          <h3 className={style.h3}>Whatsapp Clone</h3>
          <div className={style.btn}>
          <a href="https://github.com/Mahammed-Siyabuddeen/whatsapp-frontend" className='btn btn-primary'>Github</a>
          <a href="https://whatsapp-clone-shihab.netlify.app/"className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio2.png'}/>
          </div>
          <h3 className={style.h3}>Nextflix Clone</h3>
          <div className={style.btn}>
          <a href="https://github.com/Mahammed-Siyabuddeen/netflixm" className='btn btn-primary'>Github</a>
          <a href="https://netflixshihab.netlify.app/" className='btn' >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio3.png'}/>
          </div>
          <h3 className={style.h3}>Custom Portfolio</h3>
          <div className={style.btn}>
          <a href="https://github.com/Mahammed-Siyabuddeen/avocado-nextjs" className='btn btn-primary'>Github</a>
          <a href="https://avocado-nextjs2.vercel.app/"className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio4.png'}/>
          </div>
          <h3 className={style.h3}>Paicare portfolio</h3>
          <div className={style.btn}>
          <a href="https://github.com/mahammed-siyabuddeen" className='btn btn-primary'>Github</a>
          <a href="https://paircare.in" className='btn' >Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio