import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
    // if (!HAS_INITIALIZED) {
    //     const config = {
    //         apiKey: "AAAA3eM2WeM:APA91bEEuBKNrqJr0idsdZM7r1-wLUdvorz1n4MbET1l8f8aQrO-WK93cuAZCOW-JB-6GKeoP3K310iy6uEro3EaNIs1ZK2kK1IFwBZUSHXCC2T_rtryZ53TnxSLvkG_BJoKIHLcyDHK",
    //         authDomain: "127.0.0.1",
    //         databaseURL: "https://lintok-29090.firebaseio.com/",
    //     }

    //     Firebase.database.enableLogging(true)
    //     Firebase.initializeApp(config)
    //     HAS_INITIALIZED = true
    // }

    if (!HAS_INITIALIZED) {
        const config = {
            apiKey: "AAAAT_aQ72E:APA91bGMTa41Vx0myU2b5beMXMdqCMHAd-_taXTFtoZptFPC8rE-lweEVxfC2F5T6yAJFC57QXVxUjtbzCKpB0DQE4OwHn-XF3pfrZfwepg0aTVR7fnQRMaCRaio4wlOm60sW6PuXrow",
            authDomain: "127.0.0.1",
            databaseURL: "https://lintok-c5e64.firebaseio.com/ ",
        }

        Firebase.database.enableLogging(true)
        Firebase.initializeApp(config)
        HAS_INITIALIZED = true
    }
}

export const getDatabase = () => {
    initFirebase()
    return Firebase.database()
}