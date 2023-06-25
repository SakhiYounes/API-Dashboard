import React, { useState } from 'react';
import Link from 'next/link';
import styles from './sidebarStyles.module.css';
import { TbGauge } from 'react-icons/tb'
import {VscJson} from 'react-icons/vsc'
import Image, { StaticImageData } from 'next/image'
import image from '../images/crédit_du_maroc.png';




const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };


  return (
      <div className={styles.sidebar} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <Image className={styles.img} src={image} alt="Crédit Du Maroc" />
        <hr className={styles.line} />
        <Link href="/home" className={styles.sidebar_link}>
            <VscJson className={styles.sidebar_link_image}/> API
        </Link>
        <Link href="/dashboardPage" className={styles.sidebar_link}>
            <TbGauge className={styles.sidebar_link_image}/> Dashboard
        </Link> 
      </div>
  );
};

export default Sidebar;
