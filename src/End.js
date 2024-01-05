import React from 'react'
import './End.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';



function End() {
  return (
    <div className='end'>
      <div className='end-left'>
        Copyright © 2023 | All Rights Reserved
      </div>
      <div className='end-mid'>
        Thank for visit
      </div>
      <div className='end-right'>
        <a href='https://www.facebook.com/lathika.dilshan.3958?mibextid=9R9pXO'><FacebookIcon/></a>
        <a href='https://www.linkedin.com/in/lathika-dilshan-a064b1263/'><LinkedInIcon/></a>
        <a href='https://www.instagram.com/lathika_dilshan/'><InstagramIcon/></a>
        <a href='https://github.com/LathikaDilshan'><GitHubIcon/></a>


      </div>

      
    </div>
  )
}

export default End
