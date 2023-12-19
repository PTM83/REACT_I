const Alert = ({error, success}) => {
    return (
    <div>
        {error.length > 0 && <h3 style={ {color:"red"} } >{error}</h3>}
        {success.length > 0 && <h3 style={ {color:"gree"} } >{success}</h3>}
    </div>
    )
}

export default Alert