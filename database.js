
// SETTING UP THE DATABASE
// Request to open the database
const request = indexedDB.open('Instagram', 5);

// checking for success
request.onsuccess = () => {
    const database =  request.result;
    console.log('Suceess in creating or acessing database!!!');
    console.log(database);

}

// Run when there is an upgrade in the version
request.onupgradeneeded = () => {
    const database = request.result;
    database.createObjectStore('bio', {autoIncrement: true});
    database.createObjectStore('gallery', {autoIncrement: true});
}

// checking for error
request.onerror = () => {
    console.log('Error in creating or accessing database!!!');
}

const addEntryToDb = (storeName, entry) => {
    const database = request.result;
    // Request to add to the database
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add(entry);

}

export { request, addEntryToDb };