async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response) throw new Error("Error");
    const data = await response.json();
    console.log(data.title);//sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  } catch (error) {
    console.log(error);
    
  }
}
getData();

/**This is best way of async to output without any error */