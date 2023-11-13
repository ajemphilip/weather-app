const ResultOutput = (props) => {
return (
<>
<h1>{props.location}</h1>
<p>{props.description}</p>
<h2>Temperature : {props.temperature}</h2>
<h2>Clouds : {props.clouds}</h2>
<h2>Wind : {props.wind}</h2>
<h2>Humidity : {props.humidity}</h2>

</>
)
}
export default ResultOutput