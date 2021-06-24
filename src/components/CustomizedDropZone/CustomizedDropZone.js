import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from "@material-ui/core/Button";
import Dropzone from "react-dropzone";
import {onDropToUpload} from "../../common/upload";
import {CreateNewFolder, Delete, ExpandMore} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom:'16px',
        marginTop:'92px',
        marginLeft:'32px',
        marginRight:'64px',
        padding: '2px 4px',
        paddingRight:'16px',
        display: 'flex',
        alignItems: 'center',
        width:800
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width: 300,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        marginLeft: 16,
        marginRight:16,
        marginTop:4,
        marginBottom:4
    },
    box:{
      width:16
    },
    button:{
        textTransform:'none',
    },
    actionbutton:{
        color:'white',
        textTransform:'none',
        backgroundColor:"#93F",
        "&:hover,&:focus": {
            color: "white",
            background: "rgba(153, 51, 255,255)",
        },
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
            menus.push( (<MenuItem onClick={handleClose}>{'Rename'}</MenuItem>))
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



    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search files"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            {/*<IconButton type="submit" className={classes.iconButton} aria-label="search">*/}
                {/*<SearchIcon />*/}
            {/*</IconButton>*/}
            <Divider className={classes.divider} orientation="vertical" />
            {/*<IconButton color="primary" className={classes.iconButton} aria-label="directions">*/}
                {/*<DirectionsIcon />*/}
            {/*</IconButton>*/}

            <Dropzone
                className={classes.dropzone}
                onDrop={onDrop}
                multiple={true}
            >
                {({getRootProps, getInputProps}) => (
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button
                            variant="contained"
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
                variant="contained"
                color={"primary"}
                size={'medium'}
                className={classes.button}
                startIcon={<CreateNewFolder/>}>
                New Space
                </Button>
            <Box className={classes.box}/>
            <Button
                onClick={deleteBucket}
                variant="contained"
                color={"primary"}
                size={'medium'}
                className={classes.button}
                startIcon={<Delete/>}>
                Delete Space
            </Button>
            <Box className={classes.box}/>
            <Button
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                className={classes.actionbutton}
                variant="contained"
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
        </Paper>
    );
}
