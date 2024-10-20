import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="flex items-center p-5 gap-5 bg-green-400">
            <NavLink to="/" className="p-2 bg-blue-300">
                Home
            </NavLink>
            <NavLink to="/card-list" className="p-2 bg-blue-300">
                Card List
            </NavLink>
        </div>
    );
};

export default Navbar;
