import './DisplayCase.css'

const DisplayCase = ({ position, content }) => {

    return (
        <div className={`display-case display-case--${position}`}>
            {content ?
                <img src={`/images/anvil/${content}.png`} alt={content} className="display-case__image" />
                :
                <img src={`/images/anvil/empty.png`} alt={content} className="display-case__image" />
            }
        </div>
    )
}

export default DisplayCase