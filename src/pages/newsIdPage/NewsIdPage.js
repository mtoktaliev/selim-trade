import React, { useEffect } from 'react';
import NewsId from '../../components/newsId/NewsId';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetNewsQuery } from '../../functions/api/apiSlice';
import SimilarNews from '../../components/similarNews/SimilarNews';
import { useSelector } from 'react-redux';

const NewsIdPage = () => {

    const {news} = useSelector((state) => state)

    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess } = useGetNewsQuery({id})

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate('/news')
        }
    }, [isLoading, isFetching, isSuccess, navigate])
    
    return (
        <div>
            <NewsId {...data} />
            <SimilarNews news={news.list} amount={3} />
        </div>
    );
};

export default NewsIdPage;