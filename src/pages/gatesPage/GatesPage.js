import { useSelector } from 'react-redux';

import GatesCategory from '../../components/gatesCategory/GatesCategory';
import Forms from '../../components/forms/Forms';

const GatesPage = () => {

    const { gatesTypes } = useSelector((state) => state);

    return (
        <div>
            <GatesCategory gatesTypes={gatesTypes.list} amount={10} />
            <Forms />
        </div>
    );
}

export default GatesPage;