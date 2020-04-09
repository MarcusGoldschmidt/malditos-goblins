const storage = {
    setItem: (key, data) => {
        const string = JSON.stringify(data);
        sessionStorage.setItem(key, string);
    },
    getItem(key){
        return sessionStorage.getItem(key)
    },
    getObject(key){
        try{
            return JSON.parse(sessionStorage.getItem(key));
        }catch(e){
            return null
        }
    }
}

export default storage;