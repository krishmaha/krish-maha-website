import './index.scss'
import { Outlet } from 'react-router-dom'

import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='top-tag-html'>
        &lt;html&gt;
        <br />
        <span className='top-tag-indent'>&lt;body&gt;</span>
        </span> 

        <Outlet />

        <span className='bottom-tag-indent'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>

      </div>
    </div>
  )
}

export default Layout;
