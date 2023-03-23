import './PagesHeader.css'

const PagesHeader = (props) => {
    return (
        <div className="pagesHeader">
            <h2 className="pagesHeader_title">{props.title}</h2>
            <div className="pagesHeader_desc">{props.desc}</div>
        </div>
    );
};

export default PagesHeader;