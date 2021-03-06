import './App.css';
import * as React from "react";
import {getLocalUserIdentity} from "../../common/user";
import {bucketLinks, getBucketKey} from "../../common/bucket";
import Landing from "./Landing";

class App  extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            userIdentity : null,
            loadingUserIdentity : false
        }
    }

    async componentWillMount() {
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

            loading.style.display = 'none';
            this.setState({
                loadingUserIdentity:true
            })
        }
    }

    render() {
        if (this.state.loadingUserIdentity) {
            if (this.state.userIdentity == null) {
                return <Landing/>
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
