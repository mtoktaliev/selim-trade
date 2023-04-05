import { useSelector } from 'react-redux';

import GatesCategory from '../../components/gatesCategory/GatesCategory';

const GatesPage = () => {

    const { gatesTypes } = useSelector((state) => state);

    return (
        <div>
            <GatesCategory gatesTypes={gatesTypes.list} amount={10} />
        </div>
    );
}

export default GatesPage;