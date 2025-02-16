import React from 'react'
import './style/Socials.css'
import leet from './assets/leetcode.png'
import ig from './assets/ig-icon.png'
import git from './assets/github-icon.png'

const Socials = () => {
    return(
        <div className='container'>
            <a href='https://leetcode.com/u/CAndrei/' target="_blank"><img id='leet' src={leet}></img></a>
            <a href='https://www.instagram.com/andrei_c07/' target="_blank"><img id='ig' src={ig}></img></a>
            <a href='https://github.com/Andrei-C07' target='_blank'><img id='git' src={git}></img></a>
        </div>
    )
}

export default Socials