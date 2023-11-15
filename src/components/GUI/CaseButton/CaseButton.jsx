import './CaseButton.css'

const CaseButton = ({ label, onClick, isFocus, caseBackgroundImage }) => {

    return (
        <div className={`case-button ${isFocus ? 'focus' : ''}`} onClick={onClick} style={{ backgroundImage: `url("./images/${caseBackgroundImage})"` }}>
            <p>{label}</p>
        </div>
    )
}

export default CaseButton