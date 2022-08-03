import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="my-3">
            <div className="card" >
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body shadow-lg p-3 bg-body-primary rounded ">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <p className="card-text"><small className="text-muted">By {props.author ? props.author : "unknown"} on {props.Date}</small></p>
                    <a href={props.newslink ? props.newslink : "https://www.google.com/"} target="blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem