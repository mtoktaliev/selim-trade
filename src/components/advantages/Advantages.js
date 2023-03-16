import H2 from '../h2/H2';
import './Advantages.css';
import measurements from './../../assets/icons/advantages/our-advantages-take-measurements.svg'
import experience from './../../assets/icons/advantages/our-advantages-experience.svg'
import deadlines from './../../assets/icons/advantages/our-advantages-min-deadlines.svg'
import qualification from './../../assets/icons/advantages/our-advantages-high-qualification.svg'
import guarantee from './../../assets/icons/advantages/our-advantages-guarantee.svg'
import { useEffect, useRef, useState } from 'react';


const Advantages = () => {

    let ref = useRef()

    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    })

    const onmousedown = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()   
        
        setState({
            ...state,
            isScrolling: true,
            clientX: e.clientX,
        })
    }
    const onmouseup = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling: false,
        })
    }
    const onmousemove = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state

        if(isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX

            setState({
                ...state,
                scrollX: scrollX - e.clientX + clientX,
                clientX: e.clientX
            })
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onmousedown)
        document.addEventListener('mouseup', onmouseup)
        document.addEventListener('mousemove', onmousemove)

        return () => {
            document.removeEventListener('mousedown', onmousedown)
            document.removeEventListener('mouseup', onmouseup)
            document.removeEventListener('mousemove', onmousemove)
        }
    })
    
    return ( 
        <div className="advantages">
            <div className="advantages_container">
                <H2 data="Наши преимущества" />
                <div className="advantages_inner"
                ref={ref}
                onMouseDown={onmousedown}
                onMouseUp={onmouseup}
                onMouseMove={onmousemove}
                >
                    <div className="advantages_item">
                        <img src={measurements} alt="measurements" className='advantages_item-icon'/>
                        <p className="advantages_desc">Бесплатный выезд специалиста для замеров</p>
                    </div>
                    <div className="advantages_item">
                        <img src={experience} alt="experience" className='advantages_item-icon'/>
                        <p className="advantages_desc">Многолетний опыт работы</p>
                    </div>
                    <div className="advantages_item">
                        <img src={deadlines} alt="deadlines" className='advantages_item-icon'/>
                        <p className="advantages_desc">Минимальные сроки производства</p>
                    </div>
                    <div className="advantages_item">
                        <img src={qualification} alt="qualification" className='advantages_item-icon'/>
                        <p className="advantages_desc">Высокая квалификация сотрудиков</p>
                    </div>
                    <div className="advantages_item">
                        <img src={guarantee} alt="guarantee" className='advantages_item-icon'/>
                        <p className="advantages_desc">Постгарантийное 
                        обслуживание и ремонт</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages;