import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-NewsMania`;
        updateNews();
    }, [])
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles(parsedData.articles)
        setLoading(false)
    }
    const updateNewsNext = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles(parsedData.articles)
        setLoading(false)
    }
    const updateNewsPrev = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles(parsedData.articles)
        setLoading(false)
    }
    const HandleNextClick = () => {
        setPage(page + 1)
        updateNewsNext();
    }
    const HandlePrevClick = () => {
        setPage(page - 1)
        updateNewsPrev();
    }
    return (
        <div className="container my-3">
            <h1 className=' shadow-lg p-3 mb-5 bg-body-primary rounded text-center' >Top Trending {capitalizeFirstLetter(props.category)} News</h1>
            {loading && <Spinner />}
            <div className="row shadow-lg p-3 mb-5 bg-body-primary rounded my-3 ">
                {!loading && articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-589019/social"} newslink={element.url} author={element.author} Date={element.publishedAt} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-evenly">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={HandlePrevClick}>&laquo; Prev</button>
                <button disabled={(page + 1 > Math.ceil(48 / props.pagesize))} type="button" className="btn btn-dark" onClick={HandleNextClick}>Next &raquo;</button>
            </div>
        </div>
    )
}
News.defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    apikey: PropTypes.string
}

export default News