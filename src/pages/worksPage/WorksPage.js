import { useSelector } from 'react-redux';

import WorksGallery from '../../components/worksGallery/WorksGallery';
import Forms from '../../components/forms/Forms';

const WorksPage = () => {

    const { worksGallery } = useSelector((state) => state);

    return (
        <div>
            <WorksGallery worksGallery={worksGallery.list} amount={20} />
            <Forms />
        </div>
    );
}

export default WorksPage;