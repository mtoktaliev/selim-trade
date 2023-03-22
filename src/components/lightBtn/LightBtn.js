import './LightBtn.css'

const LightBtn = (props) => {
    return (
        <button className="light_btn" onClick={props.click}>{props.name}</button>   
    );
}

export default LightBtn;