import React, {useState} from 'react'
import "../styles/navbar.css"
import useWindowDimensions from './Dimensions'

export const Navbar = () => {
	const { height, width } = useWindowDimensions();
	const isPortrait = (width < 786);
	const [showHidden, setShowHidden] = useState(false);
	console.log(width)
	console.log(showHidden)
	return (
		<nav className='flex-row space-between items-center'>
			<div className={isPortrait?'flex-col':'flex-row'}>
				<div className='nav-item'>Home</div>
				<div className={isPortrait?'flex-col':'flex-row'}>
					<div hidden={!showHidden && isPortrait} className='nav-item'>About</div>
					<div hidden={!showHidden && isPortrait} className='nav-item'>Contact Us</div>
					<div hidden={!showHidden && isPortrait} className='nav-item'>Log In</div>
				</div>
			</div>
			<div className='nav-btn' onClick={()=>{setShowHidden(!showHidden)}} hidden={!isPortrait}> <img src="/menu.png" alt="" /> </div>
		</nav>
	)
}
