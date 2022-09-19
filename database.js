
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
    // Request to add data to the database
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add(entry);
    // use transaction properties..."complete" and "error" to check for a success or error when updating(adding or removing) entries.
    transaction.oncomplete = () => {
        alert(`Entry added to the ${storeName}`);
    }
    transaction.onerror = (event) => {
        console.log(`Error adding entry to the ${storeName}`);
        console.log(event.target.onerror);
    }
}

const getEntryFromDb = (storeName, id) => {
    const database = request.result;
    // Request to get data from the database
    const transaction = database.transaction([storeName]);
    const store = transaction.objectStore(storeName);
    const getData = id ? store.get(id) : store.getAll();
    // use the transaction properties..."complete" amd "error" to check for a success or error when updating entries/ quering the entries
    getData.onsuccess = () => {
        console.log(`success in accesing store from database!!!`, getData.result);
    }
    getData.onerror = () => {
        console.log(`Error in accessing store from database!!!`);
    }
}

export { request, addEntryToDb, getEntryFromDb };

