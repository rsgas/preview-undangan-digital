
function Btn({ text, onClick, className }) {   
    return (
        <button onClick={onClick} className={`primary-button secondary-color ${className}`}>{text}</button>
    )
}

export default Btn