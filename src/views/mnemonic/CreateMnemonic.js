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

                <div className="mt-12 container relative ">
                    <div className=" flex flex-col ">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto ">
                            <div >
                                <h1 className="text-white font-semibold text-5xl ">
                                    Account mnemonic
                                </h1>
                                <p className="mt-6 mb-8 text-lg text-gray-300">
                                    Your account mnemonic phrase is your key to log in to the storage space.
                                    <br/>Warning:
                                    Do not disclose your account mnemonic phrase to others. Please record the mnemonic phrase on multiple sheets of paper and keep them in 2-3 different places.
                                </p>
                            </div>
                            <Card>
                                <CardContent>
                                    {mnemonic}
                                </CardContent>
                            </Card>
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