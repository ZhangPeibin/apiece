import * as React from "react";
import Header from "../../components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {createMnemonic} from "../../common/user";
import ActionLinks from "./ActionLinks";
const useStyles = makeStyles(styles);
export default  function CreateMnemonicPage(props) {
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    const mnemonic =  createMnemonic();
    const classes = useStyles();
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
                                <h1 className={classes.title}>账户助记词</h1>
                                <h4>
                                    您的账户助记词可以帮助您轻松备份和恢复您的存储账户。<br/>
                                    警告：切勿向他人透露您的账户助记词。任何人一旦
                                    持有该账户助记词，即可查看您上传的数据
                                </h4>
                                <h5>
                                    请将下方的账户助记词记录在纸上，并保存到安全的地方,
                                    如果希望提升信息安全性，请将信息记录在多张纸上，并分别保存在2 - 3个不同的
                                    地方
                                </h5>

                                <Card>
                                    <CardContent>
                                        {mnemonic}
                                    </CardContent>
                                </Card>
                                <ActionLinks user={{mnemonic}}/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}