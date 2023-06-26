const firebaseConfig = {
    apiKey: "AIzaSyD5OgGBF1gF1qC_uzPHBeP353q50FoiOj0",
    authDomain: "f20230626.firebaseapp.com",
    databaseURL: "https://f20230626-default-rtdb.firebaseio.com",
    projectId: "f20230626",
    storageBucket: "f20230626.appspot.com",
    messagingSenderId: "421448782268",
    appId: "1:421448782268:web:454015a639972b2000dbb9"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    // let result = await write('BBB', 'test')
    // console.log(result)

    // let response = await read('test')
    // console.log(response)

    // listen('test', (value) => {
    //     console.log(value)
    // })
})()