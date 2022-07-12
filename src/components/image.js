const Image = ({ author, url }) => { 
    return (
        <div>
            <h2>{author}</h2>
            <img src={url} alt = "Random pic grab" />
        </div>
    )
}

export default Image;