
import { toast, Slide } from "react-toastify";

export const warn = ({ text }) => {
    toast.warn(text, {
        theme: "colored",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        transition: Slide
    });
};

export const success = ({ text }) => {
    toast.success(text, {
        theme: "colored",
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        transition: Slide
    });
}