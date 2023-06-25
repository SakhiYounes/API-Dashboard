import PowerBI from "@/components/Dashboard/PowerBI";
import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import '../components/Dashboard/styles/powerBI.module.css';

const Test = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="powerbi">
      <PowerBI/>
    </div>
  );
};

export default Test;

