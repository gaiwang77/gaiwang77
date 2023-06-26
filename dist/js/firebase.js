const firebaseConfig = {

    apiKey: "AIzaSyDgvqX_e8a8PzKkGUv5nUDdYpDIO_IyVqU",
    authDomain: "f20230626-aa6d7.firebaseapp.com",
    databaseURL: "https://f20230626-aa6d7-default-rtdb.firebaseio.com",
    projectId: "f20230626-aa6d7",
    storageBucket: "f20230626-aa6d7.appspot.com",
    messagingSenderId: "807237881982",
    appId: "1:807237881982:web:0d210b7320712b329cc82f"
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
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
