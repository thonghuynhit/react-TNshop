import React from 'react'
import './Slider.css'

function Slider({ slider }) {
    React.useEffect(() => {
        const perImg = document.querySelectorAll(".perImg")
        let i = 0
        perImg[i].classList.add('active')
        setInterval(() => {
            for (let j of perImg)
                j.classList.remove('back')
            if (i === 0) {
                perImg[perImg.length - 1].classList.remove("active")
                perImg[perImg.length - 1].classList.add('back')
            } else {
                perImg[i - 1].classList.remove("active")
                perImg[i - 1].classList.add('back')
            }
            perImg[i].classList.remove("back")
            perImg[i].classList.add('active')
            i++
            if (i > (perImg.length - 1)) {
                i = 0
            }
        }, 12000)
        console.log(perImg.length)
    }, [])
    return (
        <div className="slider">
            {
                slider.map((item, index) => <a key={ index } href={ item.link } className="perImg">
                    <img src={ item.urlImg } />
                    {
                        item.content && <div className="content" style={{ backgroundColor: item.colorContent }}>
                            { item.content }
                        </div>
                    }
                </a>)
            }
        </div>
    )
}
export default Slider