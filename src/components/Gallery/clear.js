const request = indexedDB.open('favoritesDB', 1);

request.onerror = function(event) {
    console.error("IndexedDB error:", event.target.error);
};

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    // Удалить хранилище "favoritesStore", если оно существует
    if (db.objectStoreNames.contains('favoritesStore')) {
        db.deleteObjectStore('favoritesStore');
        console.log("favoritesStore has been deleted.");
    }
};

request.onsuccess = function(event) {
    const db = event.target.result;
    db.close();
};
