import { Link } from "react-router-dom";
import "../app.css";

function Post_loop_item({ featured_image, title, excerpt, slug }) {
    return (
        <div className="vertical-loop-item inner-con">
            <div className="vertical-loop-image">
                <img src={featured_image} alt={title} />
            </div>
            <div className="vertical-loop-content inner-con">
                {/* <h3 className="vertical-loop-title">{title}</h3> */}
                <h3>
                    <Link to={`/blog/${slug}`} target="_blank" className="vertical-loop-title">
                        {title}
                    </Link>
                </h3>
                <p className="vertical-loop-excerpt">{excerpt}</p>
                <Link to={`/blog/${slug}`} className="link-orange">
                    Keep Reading
                </Link>
            </div>

        </div>

    )

}
export default Post_loop_item
