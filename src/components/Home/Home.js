import React from 'react'
import { Image } from 'react-bootstrap'
import schoolImage from '../../images/school.jpg'
import './Home.css';

function Home() {
    return (
        <div className='image-div'>
            <Image className='image-style' src={schoolImage} fluid />
            
        </div>
    )
}

export default Home