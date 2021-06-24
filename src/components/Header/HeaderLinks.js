/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link to={"/signin"} className={classes.link}>
              <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classes.navLink}>
                  Sign In
              </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to={"/signup"} className={classes.link}>
              <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  target="_blank"
                  className={classes.navLink}>
                  Sign Up
              </Button>
          </Link>
      </ListItem>

    </List>
  );
}
