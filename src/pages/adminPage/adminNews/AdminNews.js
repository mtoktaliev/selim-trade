import { useDispatch, useSelector } from "react-redux";
import AddNews from "./AddNews/AddNews";
import GetNews from "./AddNews/GetNews/GetNews";
import { useEffect } from "react";
import { getAllNews } from "../../../functions/postNews/postNewsSlice";

const AdminNews = () => {
    const dispatch = useDispatch()
    const {postNews} = useSelector((state) => state.postNews)
    console.log(postNews)

    useEffect(() => {
        dispatch(getAllNews())
    }, [dispatch])
    return (
        <>
        <AddNews />
       <GetNews postNews={postNews} />
        </>
    );
};

export default AdminNews;