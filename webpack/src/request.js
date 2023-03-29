async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


getData("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log(data));