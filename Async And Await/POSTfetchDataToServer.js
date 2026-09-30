async function createPost() {
  const post = {
    tittle: "Learning JavaScript",
    body: "Async And Await Function",
    userId:3978
  };


try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", 
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(`HTTPS error:${response.status}`);
  }
  const data = await response.json();
  console.log("Created", data);
} catch (error) {
  console.error("Failed:",error);
}
}
createPost();
