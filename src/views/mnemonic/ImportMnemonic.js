import * as React from "react";
import Header from "../../components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "@material-ui/core/Card";
import {createMnemonic} from "../../common/user";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {useState} from "react";

const useStyles = makeStyles(styles);
export default function ImportMnemonicPage(props) {
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    const mnemonic = createMnemonic();
    const classes = useStyles();
    const [input,setInput] = useState();
    return (
        <div>
            <div>
                <Header
                    color="transparent"
                    brand="Store Data · Reshape Privacy"
                    fixed
                    changeColorOnScroll={{
                        color: "white",
                    }}
                />
                <Parallax>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Please enter the account mnemonic</h1>
                                <h4>
                                    Warning: Each word of the account word aid needs to be separated by a space.
                                    Do not disclose your account word to others. Once anyone has the mnemonic phrase for
                                    the
                                    account, they can view the data you uploaded
                                </h4>
                                <Card className={classes.inputCard}>
                                    <TextField
                                        onChange={function (value) {
                                            setInput(value.target.value);
                                        }}
                                        className={classes.input}
                                        multiline
                                        id="outlined-password-input"
                                        label="Enter mnemonic"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Card>
                                <List className={classes.list}>
                                    <ListItem className={classes.listItem}>
                                        {/*<Link to={{pathname: "/userIdentity", query: {mnemonic: input,isEnter:true}}}*/}
                                              {/*className={classes.link}>*/}
                                           {/**/}
                                        {/*</Link>*/}
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
                                    </ListItem>

                                </List>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}
