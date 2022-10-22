
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
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
  // const toggle = document.querySelector(".toggle");
  // const hours = new Date().getHours();
  // toggle.checked = hours > 7 && hours < 20;
  // const darkLiteHendler = () => {
  //   const hours = new Date().getHours();
  //   toggle.checked = hours > 7 && hours < 20;
  // }
  return (
    <div className='ChatList'>
        <div className='ChatList__header'>
          {/* <Button className='ChatList__header-menu'><HiOutlineMenuAlt2/></Button> */}
          <input id="toggle" className="toggle " type="checkbox"  />
          <div className="background"></div>
          
          <div className='ChatList__header-searching'>
            <BiSearchAlt  className='ChatList__header-icon'/>
            <input className='ChatList__header-search' type="search" placeholder='Search...' onChange={(e) => searchingHendler(e)} />
          </div>
        </div>
        <div className='ChatList__main'>
          <nav className='ChatList__main-navbar'>
              <Button className='ChatList__main-menu'><HiOutlineMenuAlt2/></Button>
              <Button className='ChatList__main-menu'><HiOutlineMenuAlt2/></Button>
              <Button className='ChatList__main-menu'><HiOutlineMenuAlt2/></Button>
              <Button className='ChatList__main-menu'><HiOutlineMenuAlt2/></Button>
          </nav>
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
        </div>
    </div>
  )
}

export default ChatList