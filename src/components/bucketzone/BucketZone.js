import * as React from "react";
import Divider from "@material-ui/core/Divider";
import {getCurrentBucketZone} from "../../common/bucket";
import Grid from "@material-ui/core/Grid";
import {ArrowRightAlt} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

export default function BucketZone(props) {

    const bucketRoots = props.roots;
    const callback = props.callback;

    const currentBucketPath = getCurrentBucketZone();

    const handleClick = (value)=>{
        callback(value);
    };

    if (bucketRoots == null || bucketRoots.length === 0) {
        return (<div/>)
    } else {
        let views = [];
        bucketRoots.forEach(function (value) {
            if(value.name === currentBucketPath){
                views.push(<div>
                    <Grid
                        container direction="row" justify="center">
                        <ArrowRightAlt className={'spacecontenticon'} color="secondary"/>
                        <span className={'spacecontentselect'}>{value.name}</span>
                    </Grid>
                    <Divider light/>
                </div>)
            }else{
                views.push(<div onClick={(event)=>handleClick(value)} >
                    <span className={'spacecontent'}>{value.name}</span>
                    <Divider light/>
                </div>)
            }
        });
        return views;
    }
}