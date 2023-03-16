import './Btn.css'


const Btn = (props) => {
    return (
        <button className='btn'>{props.icon}{props.name}</button>
    );
}

export default Btn;