import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import posts from "../assets/data/posts";

function SinglePost() {
    const { slug } = useParams();

    const currentIndex = posts.findIndex(
        (post) => post.slug === slug
    );

    const post = posts[currentIndex];

    if (!post) {
        return <h2>Post Not Found</h2>;
    }

    const prevPost = posts[currentIndex - 1];
    const nextPost = posts[currentIndex + 1];

    return (
        <article className="single-post">
            <section className="post-header-section">
                <div className="container">
                    <div className="post-header">
                        <div className="post-header-left inner-con">
                            <div className="inner-con">
                                <h2 className="single-post-title">{post.title}</h2>
                                <p className="post-excerpt">{post.excerpt}</p>
                            </div>
                            <p>Share: <i className="fa-brands fa-linkedin"></i></p>
                        </div>
                        <div className="post-header-right">
                            <img src={post.featured_image} alt={post.title} className="featured-image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="post-content-box">
                        <p className="post-info">{post.date}</p>
                        <p className="post-content">{post.content}</p>
                    </div>
                </div>
            </section>
            <div className="container inner-con">
                <div className="post-pagination">
                    <div className="previous">
                        {prevPost && (
                            <Link to={`/blog/${prevPost.slug}`}>
                                <i className="fa-solid fa-arrow-left"></i> Prev
                            </Link>
                        )}
                    </div>
                    <div className="next">
                        {nextPost && (
                            <Link to={`/blog/${nextPost.slug}`}>
                                Next <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </article>
    );
}

export default SinglePost;