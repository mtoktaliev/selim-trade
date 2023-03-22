import { useSelector } from 'react-redux';

import ServicesCategory from '../../components/servicesCategory/ServicesCategory';

const Services = () => {

    const { categories } = useSelector((state) => state);

    return (
        <div>
            <ServicesCategory categories={categories.list} amount={10} />
        </div>
    );
}

export default Services;