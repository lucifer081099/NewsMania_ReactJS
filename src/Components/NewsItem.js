import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newslink}=this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body shadow-lg p-3 bg-body-primary rounded ">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newslink?newslink:"https://www.google.com/"} target="blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem