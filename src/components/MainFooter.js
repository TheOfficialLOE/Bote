import {useNavigate} from "react-router-dom";

const MainFooter = () => {

    const navigate = useNavigate();

    const redirectToAddPageHandler = () => {
        navigate("/add")
    };

    return (
        <div className="flex flex-col relative">
            <button onClick={redirectToAddPageHandler}
                    className="shadow-xl shadow-yellow-500/20 bg-yellow-500 self-end w-12 h-12 rounded-full text-center absolute bottom-[-1.5rem] mr-12">
                <i className="fa-xl fa-solid fa-plus"></i>
            </button>
        </div>
    );
};
export default MainFooter;
