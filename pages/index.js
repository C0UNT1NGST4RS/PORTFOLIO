import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Header from '../components/header'
import About from '../components/about'
import Experience from '../components/experience'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhishek Mathew | dev</title>
        <meta name="description" content="hello i am Abhishek Mathew  from mangalore,karnataka" />
      <link rel="icon" href="/favicon.png" />  
      </Head>
      <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}
