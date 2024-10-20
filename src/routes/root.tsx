import Navbar from "@components/navbar/navbar.index";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Root = (props: Props) => {
    return (
        <div className="w-full overflow-x-hidden bg-slate-100 min-h-screen min-w-screen">
            <Navbar />
            <div className="w-11/12 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
