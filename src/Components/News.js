import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 12,
        category: "general"
    }
    static propTypes= {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize:  PropTypes.number, 
    }
    
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6db4161e5f5c4d8193ef7950a7a0f515&page=1&pageSize=${this.props.pagesize}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            }
        )
    }
    HandleNextClick = async () => {
        // if(this.state.page+1>Math.ceil(this.state.totalResults/21)){

        // }
        // else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6db4161e5f5c4d8193ef7950a7a0f515&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({
                loading: true,
            })
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState(
                {
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false,
                }
            )
        // }
    }
    HandlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6db4161e5f5c4d8193ef7950a7a0f515&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false,
            }
        )
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className=' shadow-lg p-3 mb-5 bg-body-primary rounded text-center' >Top Trending News</h1>
                {this.state.loading && <Spinner/>}
                <div className="row shadow-lg p-3 mb-5 bg-body-primary rounded my-3 ">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={!element.tile ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-589019/social"} newslink={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-evenly">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&laquo; Prev</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(24 / this.props.pagesize))} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News