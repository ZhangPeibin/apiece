import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {FileIndex} from "../../common/Types";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '32px',
        marginBottom:'32px',
        padding: '2px 4px',
        paddingRight: '16px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        height: 40
    },
    checkboxlistlabelname: {
        width: '100%px',
    },
    listDate: {
        width: 400,
        alignItems: "left",
    },
    modified: {
        width: 400,
        alignItems: "left",
    }

}));

export default function FileZone(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    let allSelect = false;
    // @ts-ignore
    const index: FileIndex = props.index;
    const fileSelectCallback = props.callback;
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            allSelect = false;
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        fileSelectCallback(newChecked)
    };

    const allToggle = (event) => {
        const currentChecked = event.target.checked;
        allSelect = currentChecked;
        const newChecked = [...checked];
        index.paths.map((value) => {
            const elementIndex = newChecked.indexOf(value);
            if (currentChecked) {
                if (elementIndex === -1) {
                    newChecked.push(value)
                }
            } else {
                if (elementIndex !== -1) {
                    newChecked.splice(elementIndex, 1)
                }
            }
        });
        setChecked(newChecked);
        fileSelectCallback(newChecked)
    };

    const handleItemClick = (value) => {
        const cid = value['cid'];
        const url = "https://hub.textile.io/ipfs/"+cid;
        window.open(url)
    }

    return (
        <List className={classes.root}>
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <Checkbox
                        onChange={allToggle}
                        edge="start"
                        disableRipple
                        inputProps={{'aria-labelledby': 'all_check'}}
                    />
                </ListItemIcon>
                <ListItemText className="w-full" primary={`Name`}/>
                <ListItemText className={classes.listDate} primary={`Size`}/>
                <ListItemText className={classes.modified} primary={`Last Modified`}/>
            </ListItem>
            <Divider component="li"/>

            {
                index == null ? (<div/>) :
                    index.paths.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <ListItem
                                className={classes.listItem} key={value} role={undefined} dense button>
                                <ListItemIcon>
                                    <Checkbox
                                        color={"secondary"}
                                        onChange={handleToggle(value)}
                                        edge="start"
                                        checked={allSelect || checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    onClick={(event)=>handleItemClick(value)}
                                    className="w-full" id={labelId}
                                              primary={value['name']}/>
                                <ListItemText
                                    onClick={(event)=>handleItemClick(value)}
                                    className={classes.listDate}
                                    primary={getFileSize(value['size'])}/>
                                <ListItemText
                                    onClick={(event)=>handleItemClick(value)}
                                    className={classes.modified} primary={value['date']}/>
                            </ListItem>
                        );
                    })}
        </List>
    );
}

function getFileSize(limit) {
    var size = "";
    if (limit < 0.1 * 1024) {                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    } else if (limit < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + "KB"
    } else if (limit < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB"
    } else {                                            //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
    if (dou == "00") {                                //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}
