import "../App.css";

function BlogCards({image, title, excerpt}) {
    return (
        <div className="card-item inner-con">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-excerpt">{excerpt}</p>
                <button className="orange-btn">Get Started</button>
            </div>
        </div>
    )
}
export default BlogCards