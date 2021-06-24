import { container, title } from "../../../../assets/jss/material-kit-react.js";
import {defaultFont} from "../../../../assets/jss/material-kit-react";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  inputCard:{
    zIndex:'3',
    paddingLeft:32,
    paddingRight:32,
    paddingBottom:32,
    paddingTop:32
  },
  input:{
    width:'100%'
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
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
  },
  link:{
    textDecoration: "none",
    color:"inherit"
  },
};

export default landingPageStyle;
