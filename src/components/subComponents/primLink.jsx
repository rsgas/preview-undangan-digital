
function PrimLink({ text, href, className }) {
    return (
        <a href={href} className={`primary-link ${className}`}>{text}</a>
    )
}  

export default PrimLink