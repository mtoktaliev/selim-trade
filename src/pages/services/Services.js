import { useSelector } from 'react-redux';

import ServicesCategory from '../../components/servicesCategory/ServicesCategory';

const Services = () => {

    const { gatesTypes } = useSelector((state) => state);

    return (
        <div>
            <ServicesCategory gatesTypes={gatesTypes.list} amount={10} />
        </div>
    );
}

export default Services;