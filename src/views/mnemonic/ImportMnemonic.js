import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import Header from "../../components/comps/Header";

const useStyles = makeStyles(styles);
export default function ImportMnemonicPage(props) {
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    const classes = useStyles();
    const [input,setInput] = useState();
    return (
        <div>
            <div>
                <Header/>
                <div className="mt-12 container relative ">
                    <div className=" flex flex-col ">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto ">
                            <div >
                                <h1 className="text-white font-semibold text-5xl ">
                                    Enter  mnemonic
                                </h1>
                                <p className="mt-6 text-lg text-gray-300">
                                    Warning: Each word of the account word aid needs to be separated by a space.
                                    Do not disclose your account word to others. Once anyone has the mnemonic phrase for
                                    the
                                    account, they can view the data you uploaded. </p>
                            </div>
                        </div>

                        <Card className="p-4 mt-12 w-full lg:w-6/12 ml-auto mr-auto ">
                            <TextField
                                onChange={function (value) {
                                    setInput(value.target.value);
                                }}
                                className={classes.input}
                                multiline
                                label="Enter mnemonic"
                                type="text"
                                variant="outlined"
                            />
                        </Card>
                        <div className="p-4 mt-4 w-full lg:w-6/12 ml-auto mr-auto ">
                            <Button
                                onClick={function () {
                                    props.history.replace({
                                        pathname: "/userIdentity",
                                        state:{
                                            mnemonic:input,
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
    );
}
