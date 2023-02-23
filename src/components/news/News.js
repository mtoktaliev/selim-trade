

const News = () => {
    return (
        <div className="news">
            <div className="news_container">
                <h2 className="news_title">Последние новости</h2>
                <div className="news_inner">
                    <div className="news_item">
                        <p className="news_text">
                        РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH
                        </p>
                    </div>
                    <div className="news_item">
                        <p className="news_text">
                        РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH
                        </p>
                    </div>
                    <div className="news_item">
                        <p className="news_text">
                        РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH
                        </p>
                    </div>
                </div>
                <div className="light_btn-container">
                    <button className="light_btn">смотреть все</button>
                </div>
            </div>
        </div>
    );
}

export default News;