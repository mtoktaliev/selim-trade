import { useSelector } from "react-redux";
import AddNews from "./AddNews/AddNews";
import GetNews from "./AddNews/GetNews/GetNews";

const AdminNews = () => {
    const {news} = useSelector((state) => state)
    return (
        <>
        <AddNews />
        <GetNews news={news.list} />
        </>
    );
};

export default AdminNews;