const http = new easyHttp;

//Get Posts

// http.get(
//     'https://jsonplaceholder.typicode.com/posts/2',
//     function (err, posts) {
//         if (err) {
//             console.log(err)
//         } else
//             console.log(posts);
//     }
// )

// Create Data

const data = {
    title: 'custom Post',
    body: 'This is a custom post'
}

http.post('https://jsonplaceholder.typicode.com/posts/', data, function (err, post) {
    if (err) {
        console.log(err);
    } else
        console.log(post);
});