import React,{useState} from 'react'
import './Header.scss'

const Header = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className="Header">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-2"><img src="images/default-logo.png" alt="Logo24" className='Logo24'/></div>
                <div className="col-2"><i className="fa-solid fa-bars" role={'button'} onClick={() => setMenu(!menu)}></i></div>
            </div>
            {
            menu && <div className="row SideMenu">
              <div className="col-12" onClick={() => setMenu(!menu)}><i className="fa-solid fa-xmark"></i></div>
              <div className="col-12">Home</div>
            </div>
            }
        </div>
        {menu ? <div className="overlay active"></div> : <div className="overlay"></div>}
    </div>
  )
}

export default Header