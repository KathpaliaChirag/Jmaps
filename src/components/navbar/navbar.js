import React from 'react'
import { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

function Navbar() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className='navbar'>
      <div className='navbar_content_block'>
        <PlaceIcon className='map-icon'/>
        <h1>J<span>M</span><span>a</span><span>p</span>s</h1>
      </div>
      
      
    </div>
  )
}

export default Navbar