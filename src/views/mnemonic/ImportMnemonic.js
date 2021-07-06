import * as React from "react";
import {useState} from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../../components/comps/Header";
import {makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {defaultFont} from "../../assets/jss/material-kit-react";

const headerLinksStyle = (theme) => ({
    input: {
        width: "100%"
    },

    list: {
        ...defaultFont,
        fontSize: "14px",
        marginTop:"28px",
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit",
        minWidth:"120px",
        marginBottom: "16px"
    },

    listItemRight: {
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        marginLeft:"16px",
        marginTop:"12px",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
                minWidth: "120px"
            },
        },
    },
    navLinkRight: {
        color: "white",
        backgroundColor: "#93F",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "800",
        fontSize: "16px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginBottom: "8px",
            marginTop: "8px",
            textDecoration: "none",
            textAlign: "center",
            minWidth: "120px",
            "& > span:first-child": {
                justifyContent: "flex-center",
            },
        },
    },
});
const useStyles = makeStyles(headerLinksStyle);

export default function ImportMnemonicPage(props) {
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    const classes = useStyles();
    const [input, setInput] = useState();
    return (
        <div>
            <div>
                <Header/>
                <div className="mt-16 container relative mx-auto">
                    <div className=" flex flex-col ">
                        <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto text-left ">
                            <div>
                                <h1 className="text-black font-semibold text-5xl ">
                                    Enter Wallet recovery phrase
                                </h1>
                                <p className="mt-6 text-lg text-black">
                                    Each word of the Wallet recovery phrase aid needs to be separated by a
                                    space<br/>
                                    Do not disclose your Wallet recovery phrase to others<br/>
                                    Once anyone has the wallet recovery phrase for the
                                    account <br/>they can view the data you uploaded. </p>
                            </div>

                            <Card className="p-4 mt-10 w-1/2">
                                <input
                                    onChange={function (value) {
                                        setInput(value.target.value);
                                    }}
                                    className="resize-none outline-none
                                    w-full bg-white border-solid focus:outline-none focus:border-solid focus:border-solid"
                                    placeholder="wallet recovery phrase"
                                />
                            </Card>

                            <div className="w-1/2 mt-8 lg:w-5/12 px-4 mr-auto text-right ">
                                <Button
                                    onClick={function () {
                                        props.history.replace({
                                            pathname: "/userIdentity",
                                            state: {
                                                mnemonic: input,
                                                isEnter: true
                                            }
                                        })
                                    }}
                                    className={classes.navLinkRight}
                                    variant="contained" color={"secondary"}>
                                    下一步
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
