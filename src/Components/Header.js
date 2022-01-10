import Button from "./Button";

const Header = ({onClick})=>{
    return(
        <div className = 'header'>
            <Button color='blue' onClick={onClick} title = 'Add Task'/>
        </div>
    )

}
export default Header;