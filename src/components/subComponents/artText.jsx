

function ArtText({ text, className }) {
    return (
        <span className={`art-text art-font ${className}`}>{text}</span>
    )
}

export default ArtText