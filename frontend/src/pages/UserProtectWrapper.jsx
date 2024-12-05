import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    if (!token) {
        useEffect(() => {
            navigate("/login");
        }, []);
    }
    return <>{children}</>;
};

export default UserProtectWrapper;
