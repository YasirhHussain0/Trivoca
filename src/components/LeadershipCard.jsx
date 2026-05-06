
function LeadershipCards({ profileImage, name, position, linkedinUrl }) {
    return (
        <div className="leadership-card">
            <div className="leadership-image">
                <img src={profileImage} alt={name} />
            </div>
            <h3 className="profile-name">{name}</h3>
            <p className="profile-position">{position}</p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    )
}
export default LeadershipCards;