import { useSelector } from 'react-redux';

import WorksGallery from '../../components/worksGallery/WorksGallery';

const WorksPage = () => {

    const { worksGallery } = useSelector((state) => state);

    return (
        <div>
            <WorksGallery worksGallery={worksGallery.list} amount={20} />
        </div>
    );
}

export default WorksPage;