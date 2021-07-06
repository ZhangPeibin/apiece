import React, {useCallback} from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Dropzone from "react-dropzone";
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {getCurrentBucketZone} from "../../common/bucket";
import {ExpandMore} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
    root: {
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
}));

export default function DashboardHeader(props) {
    const classes = useStyles();
    const search = props.search;
    let inputStr = "";
    const currentBucketPath = getCurrentBucketZone();
    const spaces = props.roots;
    const changeBucketCallBack = props.changeBucketCallBack;
    const onDrop = props.onDrop;
    const checked = props.checked;
    const selectAll= checked==null?0:checked.length>0;
    const deleteFiles = props.deleteFiles;

    let menus = [];
    let selectOptions = [];
    if(spaces !=null ){
        spaces.forEach(function (value) {
            selectOptions.push((<option selected={currentBucketPath === value.name} value={value.name}>{value.name}</option>));
        })
    }
    const onDropCallBack = useCallback(acceptedFiles => {
        onDrop(acceptedFiles);
    }, []);

    const onKeyDownchange = (e) => {
        if (e.keyCode === 13) {
            search(inputStr);
        }
    };

    const inputChange = (input) => {
        inputStr = input.target.value;
        search(inputStr);
    };

    const handleChange = (event) => {
        changeBucketCallBack(event.target.value);
    };


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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center  pt-6">
                <div
                    className="w-full z-10 mx-auto items-start  flex justify-start  md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <div className="w-full  md:flex hidden flex-row flex-wrap items-center lg:mr-auto mx-auto">
                        <select
                            onChange = {handleChange}
                            className={classes.selected}
                            defaultValue={currentBucketPath}
                        >
                            {selectOptions}
                        </select>
                        <Dropzone
                            className="mr-4"
                            onDrop={onDropCallBack}
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
                            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                            className={classes.actionbutton}
                            variant= {selectAll?"outlined":"contained"}
                            disableElevation
                            disabled={!selectAll}
                            size={'medium'}
                            endIcon={<ExpandMore/>}>
                            Action
                        </Button>
                        <Box className={classes.box}/>

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
                        <div  className="bg-gray-100 relative flex w-1/2 flex-wrap items-stretch">
                            <IconButton onClick={function (e){
                                search(inputStr);
                            }} >
                                <SearchIcon />
                            </IconButton>
                            <input
                                onChange={inputChange}
                                onKeyDown={e=> onKeyDownchange(e)}
                                className="w-1/2 border-none  bg-transparent focus:border-red-400 outline-none"
                                placeholder="Search files"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
