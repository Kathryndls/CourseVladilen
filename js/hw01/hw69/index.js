// #69

// const idContainer = document.querySelector('#data-container');
// const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// const createHTMLElement = (text) => {
//     const liIElement = document.createElement('li');
//     const ItemAnhor = document.createElement('a');
//     ItemAnhor.href = '#';
//     ItemAnhor.textContent = text;
//     liIElement.append(ItemAnhor);

//     return liIElement;
// };

// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '');
//     }
// };

// const getAllUsers = () => { 
//     toggleLoader();
//     fetch(USERS_URL, {
//         method: 'GET',
//         headers: {},
//     })
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error('Error!');
//         }
//         return response.json();
//     })
//     .then((users) => {
//         (users || []).forEach((user) => {
//             const userHTML = createHTMLElement(user.name);
//             idContainer.append(userHTML);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         toggleLoader();
//     });
// };

// getAllUsers();

// #70

// const getUsersByIds = (ids) => {
//     toggleLoader();

//     Promise.all(ids.map((id) => fetch(`${USERS_URL}/${id}`)))
//     .then((responses) => {
//         return Promise.all(
//             responses
//             .filter((response) => response.ok)
//             .map((response) => response.json())
//             );
//     })
//     .then((user) => {
//         console.log(user);
//         (user || []).forEach((user) => {
//             const userHTMLElem = createHTMLElement(user.name);
//             idContainer.append(userHTMLElem);
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         toggleLoader();
//     });
// };

// getUsersByIds([5, 6, 2, 1]);



// #71 
// const USERS_URL = 'https://jsonplaceholder.typicode.com/photos';

// const createHTMLElement = (text, url) => {
//     const liIElement = document.createElement('li');
//     liIElement.className = 'photo-item';
//     const imgElement = document.createElement('img');
//     imgElement.src = url;
//     const hEllement = document.createElement('h3');
//     hEllement.className = 'photo-item__title';
//     hEllement.textContent = text;
//     liIElement.append(imgElement);
//     liIElement.append(hEllement);

//     return liIElement;
// };

// const getFastestLoadedPhoto = (ids) => {
//     toggleLoader();
//     Promise.race(ids.map((id) => fetch(`${USERS_URL}/${id}`)))
//     .then((response) => response.json())
//     .then((photo) => {
//             const usetHTML = createHTMLElement(photo.title, photo.url);
//             idContainer.append(usetHTML);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         toggleLoader();
//     });
// };

// getFastestLoadedPhoto([60, 12, 55]);


// #72

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;

// const createNewPost = async () => {
//     try {
//         isLoading = true;
//         const respons = await fetch(POSTS_URL, {
//             method: 'POST',
//         });
//         if (!respons.ok) {
//             throw new Error('Error my');
//         }
//         const posts = await respons.json();
//         console.log(posts);
//     } catch (error){
//         console.log(error);
//     }
//     finally {
//         isLoading = false;
//     }
// };
// createNewPost();


// #73

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// const getTodosByIds = async (ids) => {
//     try {
//         const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//         const responses = await Promise.all(requests);
//         const allTasks = await Promise.all(responses.map((data) => data.json()));
//         console.log(allTasks);
//         }
//     catch(error){
//         console.log(error);
//     } 
// };
// getTodosByIds([43, 21, 55, 100, 10]);


 // №74

// const ulDocument = document.querySelector('.container');
// const err = 'Произошла ошибка в получении данных об альбомах...';

// const createHTMLElement = (title) => {
//     const liDocument = document.createElement('li');
//     liDocument.textContent = title;
//     ulDocument.append(liDocument);
// };


// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.getAttribute('hidden') !== null;
//     if(isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '');
//     }
// };

// const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

// const renderAlbums = async (title) => {
//     toggleLoader();
//     try {
//         const respons = await fetch(ALBUMS_URL);
    
//         if (!respons.ok) {
//             throw new Error ('Error');
//         }
//         const alboms = await respons.json();
//         const albomTitl = alboms.forEach((alb) => createHTMLElement(alb.title))
//         ulDocument.append(albomTitl);
//     } catch (err) {
//         ulDocument.innerText = err;   
//     }finally {
//         toggleLoader();
//     }
// };

// renderAlbums();


// #75 
// setTimeout(() => {
//  console.log('setTimeout');
// }, 0);
 
// const promise = new Promise((resolve) => {
//  console.log('Promise');
//  resolve();
// });
 
// promise.then(() => {
//  console.log('Promise resolve');
// });
 
// console.log('End');

// Promise
// end
// promise resolve 
// setTimeout


// function runCode() {
//     console.log('before promise')
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Zero Promise')
        
//             resolve()
//         }, 0)
//         })
//     }
        
// setTimeout(() => {
//     console.log('Zero')
// }, 0)
    
// runCode().then(() => console.log('Zero Promise Invoked'))
    
// console.log('One')

// before promise
// One 
// Zero
// Zero Promise
// Zero Promise Invoked


// #76
// const getData = (callback) => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((response) => response.json())
//     .then((user) => {
//         console.log('Success');
//         callback(user);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }

// getData(() => {
//     console.log('user received');
    
//     const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise resolved');
//     }, 500);
    
//     console.log('in promise');
//     setTimeout(() => {
//         console.log('last set timeout');
//     }, 400);
    
//     });
    
//     promise.then((result) => {
//     console.log(result);
//     })
// });
    
// console.log('End')

    // End
    // Success
    // user received
    // in promise
    // last set timeout
    // promise resolved


//  #77

// const container = document.querySelector('.container');

// const createPost = (autor, text) => {
//     const postComment = document.createElement('div');
//     postComment.className = 'post-comment';
//     const commentAutor = document.createElement('span');
//     commentAutor.className = 'post-comment__author';
//     commentAutor.textContent = autor;
//     const commentText = document.createElement('span');
//     commentText.className = 'post-comment__text';
//     commentText.innerHTML = text;

//     postComment.append(commentAutor, commentText);

//     return postComment;
// };

// const createHTML = (postName, text, comments) => {
//     const post = document.createElement('div');
//     post.className = 'post';
//     post.id = 'post';

//     const h1 = document.createElement('h1');
//     h1.innerHTML = postName;
//     h1.className = 'post__title';
//     const p = document.createElement('p');
//     p.className = 'post__text';
//     p.innerHTML = text;
//     const b = document.createElement('b');
//     b.textContent = 'Комментарии';
//     b.className = 'post__comments-text';

//     const postComments = document.createElement('div');
//     postComments.className = 'post__comments';

//     comments.forEach((comment) => {
//         const commentHTML = createPost(comment.email, comment.body);
//         postComments.append(commentHTML);
//     });
//     post.append(h1, p, b, postComments);
//     return post;
// };

// const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// const renderPost = (postId) => {
//     fetch(`${POSTS_URL}/${postId}`)
//     .then((response) => response.json())
//     .then((post) => {
//         fetch(`${COMMENTS_URL}?postId=${post.id}`)
//             .then((response) => response.json())
//             .then((comments) => {
//                 const displayHTML = createHTML(post.title, post.body, comments);
//                 document.body.append(displayHTML);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };

// renderPost(1);

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];

const allowVisa = (people) => {
    return people.filter((person) => {
        const splittedExpirationDate = person.passportExpiration.split('.');
        const year = splittedExpirationDate[splittedExpirationDate.length - 1];
        const month = splittedExpirationDate[1];
        const date = splittedExpirationDate[0];
        const passportExpirationDate = new Date(year, month - 1, date);
        console.log('passportExpirationDate', passportExpirationDate);
        if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
            return true;
        }

        return false;
    });
};

const result = allowVisa(peopleWithVisa);
console.log( result);