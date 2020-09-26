import React from 'react'

import Slider from '../components/Slider'
import anh1 from '../img/slide1.jpg'
import anh2 from '../img/slide2.png'
import anh3 from '../img/slide3.jpg'
const slider = [
  { urlImg: anh1, link: "#", content: "anh mot", colorContent: "yellow"  },
  { urlImg: anh2, link: "#", content: "anh hai", colorContent: "green"  },
  { urlImg: anh3, link: "#", content: "anh hai", colorContent: "green"  }
]

function Home() {
    return (
        <div className="home">
            <Slider slider={ slider } />
        </div>
    )
}
export default Home