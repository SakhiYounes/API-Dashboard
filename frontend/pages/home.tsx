// Home.tsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './styles/homeStyles.module.css';
import spinner from '../components/images/spinner.gif';
import Image from 'next/image';

import RawData from '@/components/RawData/RawData';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {isLoading ? (
          <div className={styles.loading}>
            <Image src={spinner} alt="Loading..." />
          </div>
        ) : (
          <RawData setIsLoading={setIsLoading} />
        )}
      </div>
    </div>
  );
};

export default Home;
