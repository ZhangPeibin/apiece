import * as React from "react";
import './Dashboard.css'
import {getLocalUserIdentity,} from "../../common/user";
import {
    bucketList,
    deleteBucket,
    deleteBucketZone,
    getBucketKey,
    getBucketKeyByBucketRoot,
    removeBucketPath,
    setCurrentBucketZone
} from "../../common/bucket";
import {getFileIndex, storeIndex} from "../../common/FileIndex";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import FileZone from "../../components/FileZone/FileZone";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import DashboardHeader from "../../components/comps/DashboardHeader";
import {isFileDocument, isFileImage, isFileOther, isFileVideo} from "../../common/fileutil";
import Sidebar from "../../components/Sidebar";
import {onDropToUpload} from "../../common/upload";
import Divider from "@material-ui/core/Divider";

const useStyles = theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    }
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ALL_FILES = "ALL FILES"
export const IMAGE = "IMAGE"
export const VIDEO = "VIDEO"
export const DOCUMENT = "DOCUMENT"
export const OTHER = "OTHER"


class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        if (props.location.query != null) {
            this.state = {
                bucketKey: props.location.query.bucketKey,
                buckets: props.location.query.buckets,
                links: props.location.query.links,
                dialogOpen: false,
                changeSpaceDialogOpen: false,
                backDropOpen: false,
                backDropTips: "Change Bucket ..."
            }
        }
    }


    async componentWillMount() {
        this.setState({
                bucketDialogTips: "Use this space ?",
                isChangeBucket: true,
                currentType: ALL_FILES
            }
        );

        if (this.state == null || this.state.bucketKey == null || this.state.buckets == null) {
            const userIdentity = await getLocalUserIdentity();
            if (userIdentity != null) {
                const {bucketKey, buckets} = await getBucketKey(userIdentity);
                this.setState({
                    bucketKey: bucketKey,
                    buckets: buckets,
                })
            } else {
                this.props.history.push({pathname: "/"});
                return;
            }
        }

        const bucketRoots = await bucketList(this.state.buckets);
        this.setState({
            bucketRoots: bucketRoots
        });

        let loading = document.getElementById('loader');
        loading.style.display = 'none';
        const index = await getFileIndex(this.state.buckets, this.state.bucketKey);
        if (index) {
            this.setState({
                index: index,
            })
            this.filterFile(ALL_FILES);
        }
    }

    render() {

        const {classes} = this.props;

        if (this.state == null || this.state.buckets == null || this.state.bucketKey == null) {
            return <div/>
        }
        return (
            <div className="h-screen bg-white">
                <div className="h-screen">
                    <div>
                        <Sidebar loginOut={this.exit}
                                 changeFileType={this.changeFileType}
                                 currentFileType={this.state.currentType}
                                 newFolder={this.newFolder}
                                 deleteBucket={this.deleteBucketConfirm}/>
                        <div className="relative md:ml-64">
                            <DashboardHeader search={this.search}
                                             roots={this.state.bucketRoots}
                                             changeBucketCallBack={this.changeBucket}
                                             onDrop={this.onDrop.bind(this)}
                                             checked={this.state.checked}
                                             deleteFiles={this.deleteFiles}
                                             />
                            <div className="actionarea">
                                <FileZone index={this.state.copyIndex} callback={this.fileSelectCallback}/>
                            </div>
                        </div>
                        <div>
                            <Dialog open={this.state.dialogOpen} onClose={this.handleClose}
                                    aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">New Folder</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Please enter the folder name, for better use, Please enter English.
                                    </DialogContentText>
                                    <input
                                        className="w-full border-none  bg-transparent focus:border-red-400 outline-none"
                                        onChange={this.folderInputChange}
                                        autoFocus
                                        id="name"
                                        type="text"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleConfirm.bind(this)} color="primary">
                                        Confirm
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <Dialog
                                open={this.state.changeSpaceDialogOpen}
                                onClose={this.handleChangeSpaceClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{this.state.bucketDialogTips}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        This is a confirmation popup, if you sure, just click confirm.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleChangeSpaceClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleChangeSpaceConfirm} color="primary">
                                        Confirm
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

                    {/*<Alert className={'tips mb-8'} severity="info">*/}
                    {/*    <AlertTitle>Don't save important data to IPFS without local backup</AlertTitle>*/}
                    {/*    Although we are using official reliable IPFS nodes,*/}
                    {/*    we can't guarantee 100% reliability. For important data, a <strong>local backup</strong> should still be stored </Alert>*/}

                </div>

                <Backdrop className={classes.backdrop} open={this.state.backDropOpen}
                          onClick={this.handleBackDropClose}>
                    <CircularProgress color="inherit"/>
                    <h2>  &nbsp;&nbsp; {this.state.backDropTips}</h2>
                </Backdrop>
            </div>
        );
    }

    onDrop = (acceptedFiles) => {
        const index = this.state.index;
        const paths =  index.paths;
        const filterFile = this.filterFile;
        const currentSpaceType = this.state.currentType;
        onDropToUpload(acceptedFiles, this.state.buckets, this.state.bucketKey, async (data) => {
            let dataAlreadyInPaths = false;
            paths.forEach(function (element) {
                if (element['cid'] === data['cid']) {
                    dataAlreadyInPaths = true;
                }
            });
            if (!dataAlreadyInPaths) {
                this.setState({
                    index: {
                        ...index,
                        paths: [...paths, data],
                        counts: index.counts + 1
                    },
                });
                filterFile(currentSpaceType);
                await storeIndex(this.state.index, this.state.buckets, this.state.bucketKey);
            }
        });
    };
    search = (value) => {
        if (value) {
            const searchResult = this.state.copyIndex.paths.filter(val => val['name'].match(value));
            this.setState({
                copyIndex: {
                    ...this.state.index,
                    paths: searchResult,
                    counts: searchResult.length
                }
            })
        } else {
            this.filterFile(this.state.currentType)
        }
    }

    filterFile = (value) => {
        const fileType = value;
        if (fileType === ALL_FILES) {
            this.setState({
                copyIndex: this.state.index
            })
        } else if (fileType === IMAGE) {
            let copyBucketRoots = []
            this.state.index.paths.forEach(function (value) {
                if (isFileImage(value['type'])) {
                    copyBucketRoots.push(value)
                }
            })
            this.setState({
                copyIndex: {
                    ...this.state.index,
                    paths: copyBucketRoots,
                    counts: copyBucketRoots.length
                }
            })
        } else if (fileType === VIDEO) {
            let copyBucketRoots = []
            this.state.index.paths.forEach(function (value) {
                if (isFileVideo(value['type'])) {
                    copyBucketRoots.push(value)
                }
            })
            this.setState({
                copyIndex: {
                    ...this.state.index,
                    paths: copyBucketRoots,
                    counts: copyBucketRoots.length
                }
            })
        } else if (fileType === DOCUMENT) {
            let copyBucketRoots = []
            this.state.index.paths.forEach(function (value) {
                if (isFileDocument(value['type'])) {
                    copyBucketRoots.push(value)
                }
            })
            this.setState({
                copyIndex: {
                    ...this.state.index,
                    paths: copyBucketRoots,
                    counts: copyBucketRoots.length
                }
            })
        } else {
            let copyBucketRoots = []
            this.state.index.paths.forEach(function (value) {
                if (isFileOther(value['type'])) {
                    copyBucketRoots.push(value)
                }
            })
            this.setState({
                copyIndex: {
                    ...this.state.index,
                    paths: copyBucketRoots,
                    counts: copyBucketRoots.length
                }
            })
        }
    };

    changeFileType = (value) => {
        this.setState({
            currentType: value
        })
        this.filterFile(value);
    }

    exit = () => {
        localStorage.clear();
        this.props.history.replace({pathname: "/landing"})
    };

    deleteFiles = async (value) => {
        const buckets = this.state.buckets;
        const bucketKey = this.state.bucketKey;
        const fileIndex = value;
        if (fileIndex != null) {
            this.setState({
                backDropTips: "Delete Files ..."
            });
            this.backDropToggle(true);
            let cids = [];
            fileIndex.forEach(async function (value) {
                cids.push(value.cid);
                await removeBucketPath(buckets, bucketKey, value.path);
            });
            let copyIndexPaths = this.state.index.paths;
            this.state.index.paths.forEach(function (element, index) {
                if (cids.indexOf(element['cid']) !== -1) {
                    if (index === 0) {
                        copyIndexPaths.shift();
                    } else if (index === copyIndexPaths.length - 1) {
                        copyIndexPaths.pop();
                    } else {
                        copyIndexPaths.splice(index, 1);
                    }
                }
            });
            this.setState({
                index: {
                    ...this.state.index,
                    paths: [...copyIndexPaths],
                    counts: copyIndexPaths.length
                },
            })
            this.filterFile(this.state.currentType)

            await storeIndex(this.state.index, this.state.buckets, this.state.bucketKey);
            this.setState({
                backDropTips: "Change Bucket ..."
            });
            this.backDropToggle(false);
        }
    };

    backDropToggle = (value) => {
        this.setState({
            backDropOpen: value
        })
    };

    handleBackDropClose = () => {
        this.backDropToggle(false);
    };

    changeBucket = async (value) => {
        this.setState({
            changeBucket: value,
            changeSpaceDialogOpen: true
        })
    };

    folderInputChange = (folderName) => {
        this.setState({
            folderName: folderName.target.value
        })
    };

    handleClickOpen = () => {
        this.setState({
                dialogOpen: true
            }
        );
    };

    handleClose = () => {
        this.setState({
                dialogOpen: false
            }
        );
    };

    handleChangeSpaceClose = () => {
        this.setState({
                changeSpaceDialogOpen: false
            }
        );
    };

    deleteBucketConfirm = async () => {
        this.setState({
            changeSpaceDialogOpen: true,
            bucketDialogTips: "Delete this space ?",
            isChangeBucket: false
        })
    };

    handleChangeSpaceConfirm = async () => {
        if (this.state.isChangeBucket) {
            const value = this.state.changeBucket;
            this.handleChangeSpaceClose();
            if (value != null) {
                this.backDropToggle(true);
                const userIdentity = await getLocalUserIdentity();
                const {bucketKey, buckets} = await getBucketKeyByBucketRoot(userIdentity, value);
                this.setState({
                    bucketKey: bucketKey,
                    buckets: buckets,
                });
                setCurrentBucketZone(value);
                const index = await getFileIndex(this.state.buckets, this.state.bucketKey);
                if (index) {
                    this.setState({
                        index: index
                    })
                    this.filterFile(ALL_FILES)
                }
                this.backDropToggle(false);
            }
        } else {
            this.handleChangeSpaceClose();
            await this.deleteBucket();
        }
    };

    handleConfirm = async () => {
        this.setState({
                dialogOpen: false
            }
        );
        const folderName = this.state.folderName;
        if(folderName!=null && folderName.length>0){
            const response = await this.state.buckets.create(folderName);
            this.setState({
                bucketRoots: [...this.state.bucketRoots, response.root]
            })
        }
        // const path = `${'/'}${folderName}${'/'}${'.seed'}`;
        // await this.state.buckets.pushPath(this.state.bucketKey, path, new Uint8Array(128))
    };

    newFolder = (data) => {
        this.handleClickOpen();
    };

    fileSelectCallback = (data) => {
        this.setState({
            checked: data
        });
    };

    deleteBucket = async () => {
        this.backDropToggle(true);
        if (this.state.bucketRoots.length === 1) {
            return;
        }
        await deleteBucket(this.state.buckets, this.state.bucketKey);
        const bucketRoots = await bucketList(this.state.buckets);
        deleteBucketZone();
        this.setState({
            changeBucket: bucketRoots[0],
            bucketRoots: bucketRoots,
            isChangeBucket: true
        });
        await this.handleChangeSpaceConfirm();
    };
}

export default withStyles(useStyles, {withTheme: true})(DashboardPage);
