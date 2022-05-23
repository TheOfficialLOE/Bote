import {useNavigate} from "react-router-dom";

const HomeFooter = () => {

    const navigate = useNavigate();

    const redirectToAddPageHandler = () => {
        navigate("/add")
    };

    return (
        <div className="flex flex-col relative">
            <button onClick={redirectToAddPageHandler}
                    className="shadow-xl shadow-accent/20 bg-accent self-end w-12 h-12 rounded-full text-center absolute bottom-[-1.5rem] mr-12">
                <i className="fa-xl fa-solid fa-plus"></i>
            </button>
        </div>
    );
};
export default HomeFooter;
