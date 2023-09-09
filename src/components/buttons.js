import  './buttons.css'
export default function Buttons(props){


    return(
        <button value={props.value} className={props.className?props.className:"button"} onClick={props.onClick} >{props.name}</button>
    )
}