import React from 'react'
import './style/Skills.css'

import java from './assets/java.png'
import js from './assets/js.png'
import react from './assets/react.png'
import boot from './assets/boot.svg'
import py from './assets/python.png'
import php from './assets/php.png'
import sql from './assets/sql.png'

const Skills = () => {
    return(
        <>
            <img id='java' src={java}></img>
            <img id='js' src={js}></img>
            <img id='react' src={react}></img>
            <img id='boot' src={boot}></img>     
            <img id='py' src={py}></img>
            <img id='php' src={php}></img>    
            <img id='sql' src={sql} />                 
        </>
    )
}

export default Skills