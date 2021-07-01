import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {createMnemonic} from "../../common/user";
import ActionLinks from "./ActionLinks";
import SignUpHeader from "../../components/comps/SignUpHeader";
import {useState} from "react";
export default  function CreateMnemonicPage(props) {
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    let [mnemonic, setMnemonic] = useState("");
    mnemonic =  createMnemonic();
    const reset = ()=>{
        setMnemonic(createMnemonic())
    };
    return (
        <div>
            <div>
                <SignUpHeader/>

                <div className="mt-16 container relative mx-auto">
                    <div className=" flex flex-col ">
                        <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto text-left ">
                            <div >
                                <h1 className="text-white font-mono text-5xl ">
                                    Wallet recovery phrase
                                </h1>
                                <p className="mt-6 mb-8 text-lg text-white">
                                    Your wallet recovery phrase is your key to log in to the storage space
                                    <br/>
                                    Do not disclose your account wallet recovery phrase to others<br/>
                                    Please record the wallet recovery phrase on multiple sheets of paper <br/>
                                    and keep them in 2-3 different places.
                                </p>

                                <Card className="ml-20">
                                    <CardContent>
                                        {mnemonic}
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='float-right'>
                                <ActionLinks reset={reset} user={{mnemonic}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}