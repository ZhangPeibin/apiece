import * as React from "react";
import '../../index.css'
import {
    createSeedByMnemonic,
    saveLocalUserIdentity,
    userIdentityFromSeed
} from "../../common/user";
import {bucketLinks, getBucketKey} from "../../common/bucket";

export class UserIdentityPage extends React.Component{
    constructor(props){
        super(props);
        if(this.props.location.state!=null){
            this.state = {
                isEnter:this.props.location.state.isEnter,
                mnemonic:this.props.location.state.mnemonic,
                seed:null
            };
        }
    }

     async componentWillMount() {
         let loading = document.getElementById('loader');
         loading.style.display = 'none';

         if (this.state == null || this.state.mnemonic == null) {
             this.props.history.replace({pathname: "/mnemonic"});
             return;
         }
         const seed = createSeedByMnemonic(this.state.mnemonic);
         const userIdentity = userIdentityFromSeed(seed);
         saveLocalUserIdentity(userIdentity.toString());
         const {bucketKey, buckets} = await getBucketKey(userIdentity);
         const links = await bucketLinks(buckets,bucketKey);
         const query = {
             bucketKey:bucketKey,
             buckets:buckets,
             links:links,
         };
         this.props.history.replace({pathname: "/dashBoard",query : query})
     }

    render() {
        let tips = "";
        if (this.state.isEnter){
            tips = "登录您的空间中，可能需要等待一会..."
        } else{
            tips = "创建您的空间中，可能需要等待一会..."
        }
        return (
            <div>
                <div className="loader" id="loader">
                    <div className="square"/>
                    <div className="square"/>
                    <div className="square"/>
                    <div className="square"/>
                    <div className="square"/>
                </div>
                <div className="loadingtext">
                    <h6 className={"loadingh5"}>
                        {tips}
                    </h6>
                </div>
            </div>
        );
    }
}
