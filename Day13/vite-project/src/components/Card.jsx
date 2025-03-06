const CardStyle=
{
    backgroundColor:"yellow"
}

const Card=({title,text})=>
{
    return (
        <div style={CardStyle}>
            <h1>{title}</h1>
            <label>{text}</label>
        </div>
    )
}
export default Card;