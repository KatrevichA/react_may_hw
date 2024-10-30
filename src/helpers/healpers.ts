export const retriveLocalStorage = <T,>(key:string)=> {
    const object = localStorage.getItem(key) || '';
    // у випадку якщо приходить пустий обєкт
    if (!object){
        return {} as T;
    }
    // у випадку якщо приходить відповідь примусово повертаємо parse
    const parse = JSON.parse(object);
    return parse as T;

}