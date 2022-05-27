import {useMiscellaneous} from "../store/miscellaneous-context";

const Tag = (props) => {

    const miscellaneousCtx = useMiscellaneous();

    const changeTagHandler = () => {
        if (props.source === "modal") {
            props.filter(props.tagTitle);
            props.hide();
            return;
        }
        miscellaneousCtx.changeTag(props.tagTitle)
    }

    return (
        <button
            className={`ml-2 h-7 ${!props.source && props.tagTitle === miscellaneousCtx.tag ? "bg-gray-300 text-stone-700" : "bg-stone-700"} px-1 border-2 border-gray-300 rounded-md text-base`}
            onClick={changeTagHandler}>
            {props.tagTitle}
        </button>
    )
};

export default Tag;