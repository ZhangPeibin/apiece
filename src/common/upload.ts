import {Buckets} from '@textile/hub'

export async function onDropToUpload(acceptedFiles: File[], buckets: Buckets, bucketKey: string, callback: Function) {
    for (const accepted of acceptedFiles) {
        await handleNewFile(accepted, buckets, bucketKey, callback)
    }
}

async function handleNewFile(file: File, buckets: Buckets, bucketKey: string, callback: Function) {
    const fileSchema: { [key: string]: any } = {};
    const now = new Date().getTime();
    fileSchema['date'] = now;
    fileSchema['name'] = `${file.name}`;
    const filename = `${file.name}`;
    const location = `${'/'}${filename}`;

    if (!buckets || !bucketKey) {
        throw new Error('No bucket client or root key')
    }

    const reader = new FileReader();
    // reader.onabort = () => {
    //     return reject(`file reading was aborted`);
    // }
    // reader.onerror = () => reject('file reading has failed')
    reader.onload = () => {
        const binaryStr = reader.result;
        // Finally, push the full file to the bucket
        buckets.pushPath(bucketKey, location, binaryStr).then((raw) => {
            const metadata = {
                cid: raw.path.cid.toString(),
                name: filename,
                path: location,
                size: file.size,
                date: (new Date()).toLocaleString(),
                type: file.type
            };
            callback(metadata);
        })
    };
    reader.readAsArrayBuffer(file)
}

