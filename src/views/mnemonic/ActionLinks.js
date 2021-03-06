import {Link} from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {defaultFont} from "../../assets/jss/material-kit-react";


const headerLinksStyle = (theme) => ({
    list: {
        ...defaultFont,
        fontSize: "14px",
        marginTop:"28px",
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit",
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        marginRight:"16px",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
            },
        },
    },

    listItemRight: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        marginLeft:"16px",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
                textAlign: "center",
            },
        },
    },
    navLink: {
        color:"white",
        backgroundColor:"#0CF",
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
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-center",
            },
        },
    },
    navLinkRight: {
        color:"white",
        backgroundColor:"#93F",
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

            "& > span:first-child": {
                justifyContent: "flex-center",
            },
        },
    },
    link:{
        textDecoration: "none",
        color:"inherit"
    },
});
const useStyles = makeStyles(headerLinksStyle);

export default function ActionLinks(props) {
    const mnemonic = props.user.mnemonic;
    const classes = useStyles();
    const reset = props.reset;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button className={classes.navLink} onClick={reset}  variant="contained" color={"primary"}>
                    ????????????
                </Button>
            </ListItem>
            <ListItem className={classes.listItemRight}>
                <Link to={{pathname: "/userIdentity",
                    state:{
                        mnemonic:mnemonic,
                        isEnter: false
                    }}}>
                    <Button
                        className={classes.navLinkRight}
                        variant="contained" color={"secondary"}>
                        ?????????
                    </Button>
                </Link>
            </ListItem>

        </List>
    );
}