import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleMenu = () => {
    setActive(true)
  }

  useEffect(() => {
    if(active) {
      document.body.style.overflow = "hidden"
    }else {
      document.body.style.overflow = "inherit"
    }
  }, [active])

  return (
    <header className={`${styles.header}`}>
    <div className={`${styles.header_container} container-fluid container-xl`}>
      <div className={`${styles.header_inner} d-flex justify-content-between align-items-center`}>
        <Link to="/" className={`${styles.header_logo}`}>
          <img src={logo} alt="logo" width={102} height={105}/>
        </Link>

        <nav className={styles.header_nav}>
          <ul className={`${styles.nav_list} d-flex align-items-center gap-4`}>
            <li className={styles.nav_item}>
              <Link to="/" className={`${styles.nav_link} ${styles.active}`}>Bosh sahifa</Link>
            </li>

            <li className={styles.nav_item}>
              <a href="#biz-haqimizda" className={`${styles.nav_link} `}>Biz haqimizda</a>
            </li>

            <li className={styles.nav_item}>
              <a href="#mahsulotlar" className={`${styles.nav_link}`}>Mahsulotlar</a>
            </li>

            <li className={styles.nav_item}>
              <a href="#izohlar" className={`${styles.nav_link} `}>Izohlar</a>
            </li>

            <li className={styles.nav_item}>
              <a href="#bog'lanish" className={`${styles.nav_link} `}>Bog’lanish</a>
            </li>
          </ul>
        </nav>

        <button className={styles.header_btn} onClick={handleMenu}>
          &#9776;
        </button>
        <Menu active={active} setActive = {setActive}/>
      </div>
    </div>
  </header>
  )
}

export default Header