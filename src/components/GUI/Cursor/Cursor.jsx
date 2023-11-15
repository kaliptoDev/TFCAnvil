import './Cursor.css'

const Cursor = ({ isFocus, cursorColor,  }) => {

    return (
        <div className={`cursor ${isFocus ? 'focus' : ''}`} style={{ backgroundImage: `url("./icons/${cursorColor})"` }}>
        </div>
    )
}

export default Cursor