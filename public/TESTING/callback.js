const posts = [{
    title: 'Post one',
    body: 'This is the body post one'
}, {
    title: 'Post two',
    body: 'This is the body post two'
}, {
    title: 'Post three',
    body: 'This is the body post three'
}]

// Synchronous way

// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.getElementById('callback').innerHTML = output;
//     }, 1000)


// }

// createPost({
//     title: 'Post Fout',
//     body: 'This is post four'
// });

// getPost();

// The Create post doesm't work/show because it has browser already got the output before it was created.

//Therefore, a callback is needed fix that an make it asychronous

function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

document.getElementById('callback-button').addEventListener('click', getPost);


function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.getElementById('callback').innerHTML = output;
    }, 1000)


}

createPost({
    title: 'Post Four',
    body: 'This is post four'
}, getPost);