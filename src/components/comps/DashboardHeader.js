import React from "react";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {Input} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function DashboardHeader(props) {
    const search = props.search;
    let inputStr = "";
    const onKeyDownchange = (e) => {
        if (e.keyCode === 13) {
            search(inputStr);
        }
    }

    const inputChange = (input) => {
        inputStr = input.target.value;
        search(inputStr);
    };

    const exit = props.exit;
    return (
        <>
            {/* Navbar */}
            <nav

                className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center pl-4 pr-4 pt-8">
                <div
                    className="w-full z-10 mx-auto items-start  flex justify-start  md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <div className="w-full bg-gray-100 md:flex hidden flex-row flex-wrap items-start lg:mr-auto mx-auto">
                        <div  className="relative flex w-full flex-wrap items-stretch">
                            <IconButton onClick={function (e){
                                search(inputStr);
                            }} >
                                <SearchIcon />
                            </IconButton>
                            <input
                                onChange={inputChange}
                                onKeyDown={e=> onKeyDownchange(e)}
                                className="w-1/2 border-none  bg-transparent focus:border-red-400 outline-none"
                                placeholder="Search files"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
