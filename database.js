
// Request to open the database
const request = indexedDB.open('Instagram', 2);

// checking for success
request.onsuccess = () => {
    const database =  request.result;
    console.log('Suceess in creating or acessing database!!!');
    console.log(database);
}

request.onupgradeneeded = () => {
    console.log('Hey Bio!!!');
    const database = request.result;
    database.createObjectStore('bio');
    database.createObjectStore('gallery');
}

// checking for error
request.onerror = () => {
    console.log('Error in creating or accessing database!!!');
}

export { request };