import * as bip39 from "bip39";
import {pbkdf2Sync} from "crypto";
import {PrivateKey} from '@textile/hub'

/**
 * 创建助词器
 */
export function createMnemonic() {
    var bip39Mnemonic = bip39.generateMnemonic();
    console.log("mnemonic:"+bip39Mnemonic)
    return bip39Mnemonic
}

export function createSeedByMnemonic(mnemonic:string) {
    const seed= pbkdf2Sync(mnemonic, 'salt', 1024, 32, 'sha512');
    return seed
}

export  function userIdentityFromSeed(seed:Uint8Array) : Promise<PrivateKey> {
    // @ts-ignore
    return new PrivateKey(seed, 'ed25519');
}

export async  function getLocalUserIdentity() : Promise<PrivateKey> {
    const localUserIdentity = localStorage.getItem("private.user.identity");
    if( localUserIdentity==null){
        // @ts-ignore
        return null;
    }
    const restored = PrivateKey.fromString(localUserIdentity);
    return restored
}

export function saveLocalUserIdentity(userIdentity : string){
    localStorage.setItem("private.user.identity", userIdentity);
}

