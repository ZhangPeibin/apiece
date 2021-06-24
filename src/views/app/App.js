import './App.css';
import * as React from "react";
import {getLocalUserIdentity} from "../../common/user";
import PrivateLandingPage from "./PrivateLandingPage";
import {bucketLinks, getBucketKey} from "../../common/bucket";

class App  extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            userIdentity : null,
            loadingUserIdentity : false
        }
    }

    async componentWillMount() {
        const beginTime = new Date().getTime()/1000;
        const localUserIdentity = await getLocalUserIdentity();
        this.setState({
                userIdentity:localUserIdentity
            }
        );
        if(localUserIdentity!=null){
            const {bucketKey, buckets} = await getBucketKey(localUserIdentity);
            const links = await bucketLinks(buckets,bucketKey);
            const query = {
                bucketKey:bucketKey,
                buckets:buckets,
                links:links,
            };
            this.props.history.push({pathname: "/dashBoard",query : query})
        }else{
            let loading = document.getElementById('loader');
            if (!loading) {
                return;
            }
            loading.style.display='inline-block';

            const endTime = new Date().getTime()/1000;
            setTimeout(()=>{
                loading.style.display = 'none';
                this.setState({
                    loadingUserIdentity:true
                })
            },1000 - (endTime-beginTime));
        }
    }

    render() {
        if (this.state.loadingUserIdentity) {
            if (this.state.userIdentity == null) {
                return <PrivateLandingPage/>
            } else {
                return (
                    <div/>
                );
            }
        } else {
            return (
                <div/>
            );
        }
    }
}


export default App;
