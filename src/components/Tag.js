
import classes from "./Tag.module.css";

const Tag = (props) => {
    return <p className={`${classes.tag} ${props.className}`}>{props.tag}</p>
}
export default Tag;