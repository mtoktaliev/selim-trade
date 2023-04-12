import { useDispatch, useSelector } from "react-redux";
import AddNews from "./AddNews/AddNews";
import GetNews from "./AddNews/GetNews/GetNews";
import { useEffect } from "react";
import { getAllNews } from "../../../functions/postNews/postNewsSlice";

const AdminNews = () => {
    const dispatch = useDispatch()
    const {postNews, id} = useSelector((state) => state.postNews)

    useEffect(() => {
        dispatch(getAllNews())
    }, [dispatch])
    return (
        <>
        <AddNews />
       <GetNews postNews={postNews} key={id} />
        </>
    );
};

export default AdminNews;