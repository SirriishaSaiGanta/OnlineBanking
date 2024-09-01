import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'


function Layout() {
  
  return (
    <div className={styles.homePageStyle}>
        <Header/>
        
        <Outlet/>
    </div>
  )
}

export default Layout