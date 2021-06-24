import {FileIndex} from "./Types";
import { Buckets} from '@textile/hub'
import {getLocalUserIdentity} from "./user";

 export async function getFileIndex(buckets:Buckets,bucketKey:string) :Promise<FileIndex>{
    try {
        const metadata = buckets.pullPath(bucketKey ,'index.json');
        const { value } = await metadata.next();
        let str = "";
        // for (let i = 0; i < value.length; i++) {
        //     str += String.fromCharCode(parseInt(String(value[i])));
        // }
        str = Utf8ArrayToStr(value);
        const index: FileIndex = JSON.parse(str);
        return index
    } catch (error) {
        const index = await initIndex(buckets,bucketKey);
        return index
    }
}

async function  initIndex(buckets:Buckets,bucketKey:string) :Promise<FileIndex> {
    const identity = await getLocalUserIdentity();
    if (!identity) {
        console.error('Identity not set');
        // @ts-ignore
        return null;
    }
    const index = {
        author: identity.public.toString(),
        counts: 0,
        paths: []
    };
    await storeIndex(index,buckets,bucketKey);
    return index
}

export async function  storeIndex(index: FileIndex,buckets:Buckets,bucketKey:string) {
    const buf = Buffer.from(JSON.stringify(index, null, 2))
    const path = `index.json`;
    await buckets.pushPath(bucketKey, path, buf)
}

function Utf8ArrayToStr(array:Uint8Array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while(i < len) {
        c = array[i++];
        switch(c >> 4)
        {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
            case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}