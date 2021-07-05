export function isFileImage(fileTye: string) {
    return fileTye && fileTye.split('/')[0] === 'image';
}

export function isFileVideo(fileTye: string) {
    return fileTye && fileTye.split('/')[0] === 'video';
}

//text/plain
export function isFileDocument(fileTye: string) {
    if (fileTye) {
        const type = fileTye.split('/')[0];
        return type === "text" || type === "application"
    }
    return false;
}

export function isFileOther(fileTye: string) {
    if (fileTye !=null) {
        const type = fileTye.split('/')[0];
        return type != "text" && type != "application" && type != "image" && type != "video"
    }
    return false;
}

