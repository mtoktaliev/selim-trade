import H2 from '../h2/H2';
import './Service.css';
import consult from './../../assets/icons/service/service-consult-icon.svg'
import controller from './../../assets/icons/service/service-controller-icon.svg'
import installation from './../../assets/icons/service/service-installation-icon.svg'
import postguarantee from './../../assets/icons/service/service-postguarantee-icon.svg'

import { useEffect, useRef, useState } from 'react';


const Service = () => {

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
        <div className="service">
            <div className="service_container">
                <H2 data="Сервис" />
                <div className="service_inner"
                ref={ref}
                onMouseDown={onmousedown}
                onMouseUp={onmouseup}
                onMouseMove={onmousemove}
                >
                    <div className="service_item">
                        <img src={consult} alt="measurements" className='service_item-icon'/>
                        <p className="service_desc">Консультация и техническая поддержка</p>
                    </div>
                    <div className="service_item">
                        <img src={controller} alt="experience" className='service_item-icon'/>
                        <p className="service_desc">Настройка пультов управления</p>
                    </div>
                    <div className="service_item">
                        <img src={installation} alt="deadlines" className='service_item-icon'/>
                        <p className="service_desc">Монтаж</p>
                    </div>
                    <div className="service_item">
                        <img src={postguarantee} alt="qualification" className='service_item-icon'/>
                        <p className="service_desc">Послегарантийное обслуживание</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Service;