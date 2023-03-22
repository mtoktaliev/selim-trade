import { useSelector } from 'react-redux';

import WorksGallery from '../../components/worksGallery/WorksGallery';

const Works = () => {

    const { worksGallery } = useSelector((state) => state);

    return (
        <div>
            <WorksGallery worksGallery={worksGallery.list} amount={20} />
        </div>
    );
}

export default Works;