function fetchPosts(){
    const response =fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response);
}
fetchPosts()