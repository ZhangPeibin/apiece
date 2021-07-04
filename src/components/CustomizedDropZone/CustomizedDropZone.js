import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from "@material-ui/core/Button";
import Dropzone from "react-dropzone";
import {onDropToUpload} from "../../common/upload";
import {CreateNewFolder, Delete, ExpandMore} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {getCurrentBucketZone} from "../../common/bucket";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom:'10px',
        display: 'flex',
        marginLeft:"32px"
    },
    selected: {
        width: "100 %",
        height: "100 %",
        backgroundColor: "#fff",
        color: "black",
        appearance: "none",
        border: 0,
        display: "block",
        position: "relative",
        mozAppearance:"none",
        webkitAppearance:"none",
        boxShadow:"none",
        outline:"none",
        "&:hover,&:focus": {
            color: "black",
            mozAppearance:"none",
            webkitAppearance:"none",
            outline:"none",
            boxShadow:"none",
            border: 0,
        },
    },
    box:{
      width:16
    },
    button:{
        textTransform:'none',
        zIndex:0,
    },
    actionbutton:{
        textTransform:'none',
    },
    dropzone:{
    }
}));

export default function CustomizedDropZone(props) {
    const classes = useStyles();
    const bucketKey = props.bucketKey;
    const buckets = props.buckets;
    const callback = props.callback;
    const checked = props.checked;
    const newFolder = props.newFolder;
    const deleteBucket = props.deleteBucket;
    const deleteFiles = props.deleteFiles;

    const bucketRoots = props.roots;
    const changeBucketCallBack = props.changeBucketCallBack;
    const currentBucketPath = getCurrentBucketZone();

    const selectAll= checked==null?0:checked.length>0;
    let menus = [];

    const handleDelete = () => {
        setAnchorEl(null);
        deleteFiles(checked);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if(checked!=null){
        if(checked.length===1){
            // menus.push( (<MenuItem onClick={handleClose}>{'Rename'}</MenuItem>))
            menus.push( (<MenuItem onClick={handleDelete}>{'Delete'}</MenuItem>))
        }else{
            menus.push( (<MenuItem onClick={handleDelete}>{'Delete'}</MenuItem>))
        }
    }


    const onDrop = useCallback(acceptedFiles => {
        onDropToUpload(acceptedFiles,buckets,bucketKey, async function (data) {
            callback(data);
        });
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    let selectOptions = []
    if(bucketRoots !=null ){
        bucketRoots.forEach(function (value) {
            selectOptions.push((<option value={value.name}>{value.name}</option>));
        })
    }

    const handleChange = (event) => {
        changeBucketCallBack(event.target.value);
    };


    return (
        <div className={classes.root}>
            <select
                onChange = {handleChange}
                className={classes.selected}
                defaultValue={currentBucketPath}
            >
                {selectOptions}
            </select>
            <Box className={classes.box}/>

            <Dropzone
                className={classes.dropzone}
                onDrop={onDrop}
                multiple={true}
            >
                {({getRootProps, getInputProps}) => (
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button
                            disableElevation
                            variant="outlined"
                            color={"secondary"}
                            size={'medium'}
                            className={classes.button}
                            startIcon={<CloudUploadIcon/>}>
                            <span>Upload</span>
                        </Button>
                    </div>
                )}
            </Dropzone>
            <Box className={classes.box}/>
            <Button
                onClick={newFolder}
                variant="outlined"
                color={"primary"}
                size={'medium'}
                disableElevation
                className={classes.button}
                startIcon={<CreateNewFolder/>}>
                New Space
                </Button>
            <Box className={classes.box}/>
            <Button
                onClick={deleteBucket}
                variant="outlined"
                color={"primary"}
                size={'medium'}
                disableElevation
                className={classes.button}
                startIcon={<Delete/>}>
                Delete Space
            </Button>
            <Box className={classes.box}/>
            <Button
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                className={classes.actionbutton}
                variant= {selectAll?"outlined":"contained"}
                disableElevation
                disabled={!selectAll}
                size={'medium'}
                endIcon={<ExpandMore/>}>
                Action
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {
                    menus
                }
            </Menu>
        </div>
    );
}
