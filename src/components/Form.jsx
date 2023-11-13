
const Form = (props) => {
    return (
        <>
            <input
                placeholder="Provice a Location"
                type="text"
                onChange={props.onChange}
            >
            </input>
            <button onClick={props.onClick}>See the Weather</button>
        </>
    )
}
export default Form