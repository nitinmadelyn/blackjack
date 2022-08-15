const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
};

const getLocalStorage = (name) => {
    return localStorage.getItem(name);
};

const deleteLocalStorage = (name) => {
    localStorage.removeItem(name);
};

export { setLocalStorage, getLocalStorage, deleteLocalStorage }