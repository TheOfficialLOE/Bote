import {useMiscellaneous} from "../store/miscellaneous-context";

const ColorIcon = (props) => {

    const miscellaneousCtx = useMiscellaneous()

    const iconClickHandler = () => {
        miscellaneousCtx.changeColor(props.color)
    };

    return (
        <div className={`w-10 h-10 mr-2 border-4 rounded-full p-1 cursor-pointer ${props.border} text-center`} onClick={iconClickHandler}>
            <div className={`w-6 h-6 rounded-full ${props.bg}`}>
                {miscellaneousCtx.border === props.border && <i className={`fa-xs fa-solid fa-check`}></i>}
            </div>
        </div>
    )
};

export default ColorIcon;