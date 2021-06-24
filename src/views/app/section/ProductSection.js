import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import CustomImage from "../../../components/image/CustomImage";
import {Grain} from "@material-ui/icons";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            A Piece' is a more private and secure storage service platform that is not controlled by the enterprise. A distributed storage network based on IPFS and Filecoin can ensure that your data is stored safely, reliably and highly privately for a long time..
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="IPFS"
              description="Using IPFS for data storage is a decentralized and more secure storage protocol."
              icon={Grain}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="User Key"
              description="We use BIP39 to produce word aids for users and produce unique user IDs. No one knows who you are and where you are. There is no so-called mailbox or mobile phone number. Just a set of words is your logo."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Encryption"
              description="You can encrypt your data so that only you can see it. Others can't see it. If you have very private data, it will be important to use encryption."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}


