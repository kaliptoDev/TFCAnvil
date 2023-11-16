import './ResultCase.css'

const ResultCase = ({ position, content }) => {

    return (
        <div className={`result-case display-case--${position}`}>
            {content ?
                <img src={`/images/anvil/${content}.png`} alt={content} className="result-case__image" />
                :
                <img src={`/icons/red-cross.png`} alt={content} className="result-case__image" />
            }
        </div>
    )
}

export default ResultCase