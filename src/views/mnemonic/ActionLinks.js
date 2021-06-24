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
                backgroundColor: "#e5e5e5",
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
                backgroundColor: "#e5e5e5",
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
        "&:hover,&:focus": {
            color: "inherit",
            background: "rgba(0, 155, 204,255)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start",
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
        "&:hover,&:focus": {
            color: "inherit",
            background: "rgba(97, 0, 203,255)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start",
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
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button className={classes.navLink}  variant="contained" color={"primary"}>
                    重新创建
                </Button>
            </ListItem>
            <ListItem className={classes.listItemRight}>
                <Button
                    onClick={function () {
                        props.history.replace({
                            pathname: "/userIdentity",
                            state:{
                                mnemonic:mnemonic,
                                isEnter: false
                            }
                        })
                    }}
                    className={classes.navLinkRight}
                    variant="contained" color={"secondary"}>
                    下一步
                </Button>
            </ListItem>

        </List>
    );
}