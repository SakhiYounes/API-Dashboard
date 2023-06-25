import Sidebar from '../Sidebar/Sidebar';
import layoutStyles from './layoutStyles.module.css'

type SidebarProps = {
    children: React.ReactNode;
  }

const Layout = ({ children }: SidebarProps) => {  
  return (
    <div className={layoutStyles.container}>
      <Sidebar/>
      <div className={layoutStyles.content}>{children}</div>
    </div>
  );
};

export default Layout;