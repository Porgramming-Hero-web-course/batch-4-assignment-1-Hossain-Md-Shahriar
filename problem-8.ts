const validateKeys = (obj: object, keys: string[]): boolean => {
    for(const key of keys) {
        if(!(key in obj)) {
           return false;
        }
    }
    return true;
}