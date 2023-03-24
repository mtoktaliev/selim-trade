import Btn from '../btn/Btn';
import H2 from '../h2/H2';
import './Forms.css'


const Forms = () => {
    return (
        <section className='forms'>
            <div className="forms_container">
                <H2 data='Остались вопросы?' />
                <form className='forms_inner' id="forms">
                    <label>
                        <div className='form_items'>
                            <input type="text" name='name' placeholder='ИМЯ' />
                            <input type="tel" name='phone' placeholder='телефон' />
                            <textarea placeholder='СООБЩЕНИЕ' className='mobile_holder'></textarea>
                            <Btn name='Оставить заявку' />
                        </div>
                        <textarea placeholder='СООБЩЕНИЕ' className='desktop_holder'></textarea>
                    </label>
                </form>
            </div>
        </section>
    );
};

export default Forms;