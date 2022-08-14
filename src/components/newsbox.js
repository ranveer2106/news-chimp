import React, { Component } from 'react';
import "./total.css";

export class Newsbox extends Component {

    render() {
        // style={{ width: "18rem", color: "red" }}
        let { title, desc, imgurl, url, publishedAt, author, name } = this.props;
        return (
            <div className="card" style={{ width: "20rem", margin: "1rem" }} >
                <img src={imgurl ? imgurl : "https://www.reuters.com/resizer/Y0zBYovvSEG2cn8HFKmeWXsr-cM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L5V5OWKJ5JM4HAA25LCNXQHTRI.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go somewhere</a>
                    <div className="card-footer text-muted">
                        Published at:{new Date(publishedAt).toGMTString()} by {!author ? "unknown" : author}
                    </div>
                </div>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                    {name ? name : "unknown"}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </div>
        )
    }
}

export default Newsbox