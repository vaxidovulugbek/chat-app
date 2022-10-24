
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { BsGlobe,BsMegaphone } from 'react-icons/bs';
import { FiUsers , FiUser} from 'react-icons/fi';
import '../../../src/components/ChatCorrespond/ChatList.css'
import { Button } from '@mui/material';
function ChatList() {
  const Obj = [ {
    name:"one"
  } ,
  {
    name:"two"
  },{
    name:"three"
  },{
    name:"four"
  },{
    name:"five"
  }]
  let [value,setValue] = useState("")
  let filtered = Obj.filter(el => { 
    return el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })
  let searchingHendler = (event) => {
    setValue(event.target.value)
  }
  let [control ,setControl] = useState(0)
  let stylesCenter = { 
    transition: 'all 0.4s', 
    transform: `translateX(${control}px` 
  };
  let groupHendler = () => {
    setControl(-400)
  }
  let channelsHendler = () => {
    setControl(-800)
  }
  let chatHendler = () => {
    setControl(0)
  }
  let popularHendler = () => {
    setControl(-1200)
  }
  return (
    <div className='ChatList'>
        <div className='ChatList__menu'>
           <Button className='ChatList__menu-open'><HiOutlineMenuAlt2/></Button>
           <nav className='ChatList__navbar'>
              <Button className='ChatList__menu-btn' onClick={() => chatHendler()}><FiUser/></Button>
              <Button className='ChatList__menu-btn' onClick={() => groupHendler()}><FiUsers/></Button>
              <Button className='ChatList__menu-btn' onClick={() => channelsHendler()}><BsMegaphone/></Button>
              <Button className='ChatList__menu-btn' onClick={() => popularHendler()}><BsGlobe/></Button>
          </nav>
           {/* <Button className='ChatList__menu-open'><input id="toggle" className="toggle " type="checkbox"  /></Button> */}
           <input id="toggle" className="toggle " type="checkbox"  />
        </div>
        <div className='ChatList__main'>
          <div className='ChatList__main-searching'>
            <BiSearchAlt  className='ChatList__main-searchicon'/>
            <input className='ChatList__main-search' type="search" placeholder='Search...' onChange={(e) => searchingHendler(e)} />
          </div>
          <div className='ChatList__main-content'>
            <div className='ChatList__main-subcontent' style={stylesCenter}>
              <div className='ChatList__main-users'>
                {
                  filtered.map((item,i) => {
                    return <div className='ChatList__main-user' key={i+1}>
                      <div className='ChatList__main-user-info'>
                        <img className='ChatList__main-users-img' src="https://picsum.photos/id/79/318/184" alt="user" />
                        <div className='ChatList__main-users-content'>
                          <h2 className='ChatList__main-users-title'>{item.name}</h2>
                          <p className='ChatList__main-users-message'>lorem ipsum doler...</p>
                        </div>
                      </div>
                      <div className='ChatList__main-users-datails'>
                        <span className='ChatList__main-users-date'>12:21</span>
                        <span className='ChatList__main-users-message-num'>21</span>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className='ChatList__main-groups'>
                groups
              </div>
              <div className='ChatList__main-channels'>
                channels
              </div>
              <div className='ChatList__main-popular'>
                world
              </div>
            </div>
          </div>
        </div>
     </div>
  )
}

export default ChatList



          // <input id="toggle" className="toggle " type="checkbox"  />
          //  <div className="background"></div>