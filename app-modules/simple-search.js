//Фунакция для простого поиска
export default function(arr, arg, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][arg] === target) return arr[i];
    }
    return false;
}