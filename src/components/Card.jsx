function Card(props){
    return(
        <div>
            <h1>{props.id}</h1>
            <h1>{props.title}</h1>
        </div>
    )
}
export default Card;