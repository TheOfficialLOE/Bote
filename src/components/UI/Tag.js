import {useMiscellaneous} from "../../store/miscellaneous-context";
import {useHome} from "../../store/home-context";

const Tag = ({source, tagTitle, hide}) => {

    const homeCtx = useHome();
    const miscellaneousCtx = useMiscellaneous();

    const changeTagHandler = () => {
        if (source === "modal") {
            console.log("true")
            homeCtx.changeTag(tagTitle);
            hide();
            return;
        }
        miscellaneousCtx.changeTag(tagTitle)
    }

    return (
        <button
            className={`ml-2 h-7 ${!source && tagTitle === miscellaneousCtx.tag ? "bg-gray-300 text-stone-700" : "bg-stone-700"} px-1 border-2 border-gray-300 rounded-md text-base`}
            onClick={changeTagHandler}>
            {tagTitle}
        </button>
    )
};

export default Tag;