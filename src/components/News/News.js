import './News.css';

const News = (props) => {
    const {addToActivity, news} = props;
    const {type,title,details,image,date,reading_time} = news;
    return (
        <div>
            <div className='single-news'>
            <div className='news-padding'>
            <img src={image} alt="" />
            <h3>Type: {type}</h3>
            <h4 className='text-ellipsis-1'>{title}</h4>
            <p className='text-ellipsis-2'>{details}</p>
            <p><b>Published Date:</b> {date}</p>
            <p><b>Read in:</b> {reading_time} min</p>
            <button onClick={() => addToActivity(news)}>Read</button>
            </div>
        </div>
        </div>
    );
};

export default News;