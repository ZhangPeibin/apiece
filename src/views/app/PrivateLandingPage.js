import * as React from "react";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./section/ProductSection";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import TeamSection from "./section/TeamSection";
import WorkSection from "./section/WorkSection";
import Button from "@material-ui/core/Button";
import HeaderLinks1 from "../../components/Header/HeaderLinks1";
import Header1 from "../../components/Header/Header1";
const useStyles = makeStyles(styles);


export default function PrivateLandingPage(props) {

    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header1
                color="transparent"
                brand="A  Piece "
                rightLinks={<HeaderLinks1/>}
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
                            <h1 className={classes.title}>A decentralized, safe and private Piece Space For Yours</h1>
                            <h4 >To use this platform, you only need to create a mnemonic phrase, which is the same as the wallet design, and then you can log in to your personal space through the mnemonic phrase and upload your data to IPFS.</h4>
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