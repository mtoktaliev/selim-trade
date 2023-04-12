import React, { useEffect } from 'react';
import GatesId from '../../components/gatesId/GatesId';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetGatesTypesQuery } from '../../functions/api/apiSlice';

const GatesIdPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isFetching, isSuccess } = useGetGatesTypesQuery({id})
    
    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate('/gates')
        }
    }, [isLoading, isFetching, isSuccess, navigate])

    return (
        <div>
            <GatesId {...data} />
        </div>
    );
};

export default GatesIdPage;