import { Buckets, PushPathResult, KeyInfo, PrivateKey, WithKeyInfoOptions, Root } from '@textile/hub'
import {async} from "q";
import {func, string} from "prop-types";

export async function getBucketKeyByBucketRoot(userIdentity:PrivateKey,bucketRoot:string) {
    if (!userIdentity) {
        throw new Error('UserIdentity not set')
    }
    const buckets = await Buckets.withKeyInfo({
        key: 'bbf34lt5akjatszwybsu5nfhdru'
    } ,{
        debug: false
    });

    await buckets.getToken(userIdentity);
    const buck = await buckets.getOrCreate(bucketRoot);
    if (!buck.root) {
        throw new Error('Failed to open bucket')
    }
    return {buckets: buckets, bucketKey: buck.root.key};
}

export async function getBucketKey(userIdentity:PrivateKey) {
    if (!userIdentity) {
        throw new Error('UserIdentity not set')
    }
    const buckets = await Buckets.withKeyInfo({
        key: 'bbf34lt5akjatszwybsu5nfhdru'
    } ,{
        debug: false
    });

    // Authorize the user and your insecure keys with getToken
    await buckets.getToken(userIdentity);
    const bucketZone = getCurrentBucketZone();
    let buck = null;
    if(bucketZone==null){
        buck = await buckets.getOrCreate('private.storage.zone');
        setCurrentBucketZone('private.storage.zone')
    }else{
        buck = await buckets.getOrCreate(bucketZone)
    }
    if (!buck.root) {
        throw new Error('Failed to open bucket')
    }
    return {buckets: buckets, bucketKey: buck.root.key};
}
export  function deleteBucketZone() {
    localStorage.removeItem("bucket.zone");
}

export  function getCurrentBucketZone()  {
    const bucketZone = localStorage.getItem("bucket.zone");
    if( bucketZone==null){
        return null;
    }
    return bucketZone
}

export  function setCurrentBucketZone(bucketZone:string) {
    localStorage.removeItem("bucket.zone");
    localStorage.setItem("bucket.zone",bucketZone)
}


export async function bucketLinks(buckets:Buckets,bucketKey:string) {
    const links = await buckets.links(bucketKey);
    return links;
}

export async function bucketList(buckets:Buckets): Promise<Root[]>  {
    const bucketRoots = await buckets.list();
    return bucketRoots;
}

export async function deleteBucket(buckets:Buckets,bucketKey:string) {
    await buckets.remove(bucketKey)
}

export async function removeBucketPath(buckets:Buckets,bucketKey:string,deleteFilePath: string) {
    const  removeResponse = await buckets.removePath(bucketKey,deleteFilePath)
    return removeResponse;
}