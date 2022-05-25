import React from "react";
import {useNavigate} from "react-router-dom";

const HomeFooter = () => {

    const navigate = useNavigate();

    const redirectToAddPageHandler = () => {
        navigate("/add")
    };

    return (
        <div className="h-full flex flex-row items-center">
            <button onClick={redirectToAddPageHandler}
                    className="shadow-xl shadow-accent/20 bg-accent w-12 h-12 rounded-full absolute bottom-[3.5rem] right-0 mr-12">
                <i className="fa-xl fa-solid fa-plus text-center"></i>
            </button>
        </div>

    );
};
export default HomeFooter;
