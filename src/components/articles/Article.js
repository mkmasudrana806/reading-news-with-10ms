import React, { useEffect, useState } from 'react';
import './Article.css';
const Article = () => {
    const [articles, setArticle] = useState([]);
    useEffect( () => {
        fetch('articles.json')
        .then(res => res.json())
        .then(data => setArticle(data))
    }, []);
    return (
        <div>
            {
                articles.map( article => <LoadArticle key={article.id} article={article}></LoadArticle>)
            }
        </div>
    );
};

const LoadArticle = (props) => {
    const {title, details} = props.article;
    return (
        <div className='article'>
            <h3>{title}</h3>
            <p>{details}</p>
        </div>
    );
};

export default Article;