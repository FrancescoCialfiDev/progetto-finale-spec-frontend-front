export const Card = ({ img, title, platforms, developer, releaseYear, userRating, multiplayer, price, languages, pegi }) => {
    return (



        <div className="card">
            <img src={img || null} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {platforms?.map((platform, index) => <span key={index} className={`badge px-3 me-1 ${setColor(platform)}`} > {platform}</span>)}
                <p className="d-block pt-2"><strong>Developer:</strong> {developer}</p>
                <p><strong>Release Year:</strong> {releaseYear}</p>
                <p><strong>User Rating:</strong> {Math.floor(userRating)}</p>
                <p><strong>Multiplayer:</strong> {multiplayer}</p>
                <p><strong>Price:</strong><span className="badge ms-1 bg-dark">{price}</span></p>
                <p><strong className="pe-2">Languages:</strong>{languages?.map((platform) => platform + "," + " ")}</p>
                <p><strong>Pegi:</strong> {pegi}</p>
            </div>
        </div>





    )
}
function setColor(platform) {
    switch (platform) {
        case "PC":
            return "bg-primary";
        case "PS5":
            return "bg-success";
        case "Xbox":
            return "bg-warning text-dark";
        case "Switch":
            return "bg-danger";
        default:
            return "bg-secondary";
    }
}