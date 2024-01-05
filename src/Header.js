import React  from 'react'
import './Header.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';



function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <span className='header__left-content'>Home</span>
        <span className='header__left-content'>About</span>
        <span className='header__left-content'>Contacts</span>
        

      </div>
      <div className="header__right">
        <a href='https://www.facebook.com/lathika.dilshan.3958?mibextid=9R9pXO/'><FacebookIcon/></a>
        <a href='https://www.linkedin.com/in/lathika-dilshan-a064b1263/'><LinkedInIcon/></a>
        <a href='https://www.instagram.com/lathika_dilshan/'><InstagramIcon/></a>
        <a href='https://github.com/LathikaDilshan'><GitHubIcon/></a>



      </div>
    </div>
  )
}
export default Header
