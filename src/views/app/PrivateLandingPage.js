import * as React from "react";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./section/ProductSection";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import TeamSection from "./section/TeamSection";
import WorkSection from "./section/WorkSection";
const useStyles = makeStyles(styles);


export default function PrivateLandingPage(props) {

    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                color="transparent"
                brand="A Piece Space For Yours"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />

            <Parallax filter image={require("../../assets/img/landing-bg.jpg").default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>A storage platform built for user data, It's a completely decentralized, highly secure peer-to-peer storage platform </h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection />
                    {/*<TeamSection/>*/}
                    <WorkSection/>
                </div>
            </div>
            <Footer />
        </div>
    );
}