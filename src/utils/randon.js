export function random(num){
    return Math.floor(Math.random() * (num + 1)); 
}

export function getRandonProp(obj){
    const keys = Object.keys(obj);
	return obj[keys[Math.floor(Math.random() * keys.length)]];
}