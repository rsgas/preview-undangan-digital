

function Abtn ({text, link, className}) {
    return (
        <>
            <a href={link} className={"anchor-btn " + className} >{text}</a>
        </>
    )
}

export default Abtn