import { Container } from "react-bootstrap";

const News = () => {
    return (
        <div className="news">
            <Container>
                <h2 className="news_title">Последние новости</h2>
                <div className="news_inner">
                    <div className="news_item">
                        <a href="/" className="news_link">
                        РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default News;