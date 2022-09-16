const requestDatabase = indexedDB.open('Instagram', 1);

requestDatabase.onsuccess = () => {
    const database =  requestDatabase.result
    console.log('Suceess in creating or acessing database!!!');
    console.log(database);
}

requestDatabase.onerror = () => {
    console.log('Error in creating or accessing database!!!');
}

export { requestDatabase };
