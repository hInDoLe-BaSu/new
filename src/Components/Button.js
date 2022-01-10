const Button = ({onClick, color, title})=>{
    return(
        <button className = 'btn btn-block' style = {{backgroundColor:color}} onClick = {onClick} >{title}</button>
    )
}
export default Button;