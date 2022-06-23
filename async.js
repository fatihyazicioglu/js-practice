//callbacks are be able to use as parameters inside of an any function.
let posts = [
  {
    title: "Title 1",
    body: "Body 1",
  },
  {
    title: "Title 2",
    body: "Body 2",
  },
];
//adding callback parameter, we cann make it synchronized, if we didnt , only 2. function(getAllPosts) would work. but not 1. (addPost)
// Time = 3+2= 5 second
function addPost(callback) {
  setTimeout(function () {
    posts.push({ title: "Title 3", body: "Body 3" });
    callback();
  }, 3000);
}

function getAllPosts() {
  setTimeout(function () {
    // let output = "<ul>";
    posts.forEach(function (post) {
      output += `<li>${post.title}-${post.body}</li>  `;
    });
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
  }, 2000);
}
addPost(getAllPosts);
//getAllPosts();
