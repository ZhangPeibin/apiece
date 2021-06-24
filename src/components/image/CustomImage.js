import React from "react";
import image from "../../assets/img/ipfs.png";

export default function CustomImage() {
    return (
        <div
            style={{
                width: "61px",
                height: "61px",
                maxWidth: "360px",
                alignContent:"center",
                alignItems:"center",
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        />
    )
}