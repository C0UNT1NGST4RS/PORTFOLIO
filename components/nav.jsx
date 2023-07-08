import Link from 'next/link'
import React,{useState} from 'react'
import style from '../styles/nav.module.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DetailsIcon from '@mui/icons-material/Details';
import InfoIcon from '@mui/icons-material/Info';
function Nav() {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <div className={style.container}>
      <a href={'#'} passHref><span onClick={()=>setActiveNav('#')} className={`${style.navIcon} ${activeNav==='#'? style.active:null}`}><HomeIcon/></span></a>
      <a passHref href={'#about'}><span onClick={()=>setActiveNav('#about')} className={`${style.navIcon}  ${activeNav==='#about'? style.active:null}`}><InfoIcon/></span></a>
      <a passHref href={'#experience'}><span onClick={()=>setActiveNav('#experience')} className={`${style.navIcon}  ${activeNav==='#experience'? style.active:null}`}><DetailsIcon/></span></a>
      <a passHref href={'#services'}><span onClick={()=>setActiveNav('#services')} className={`${style.navIcon} ${activeNav==='#services'? style.active:null}`}><Inventory2Icon/></span></a>
      <a passHref href={'#contact'}><span onClick={()=>setActiveNav('#contact')} className={`${style.navIcon}  ${activeNav==='#contact'? style.active:null}`}><PersonIcon/></span></a>

    </div>
  )
}

export default Nav