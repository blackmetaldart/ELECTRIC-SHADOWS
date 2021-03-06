
// THESE FUNCTIONS ARE RERESPONSIBLE FOR ACTIVATING A LOADED PAGE
document.getElementById('landingLogo').addEventListener('click', landingChanges);
document.getElementById('footSignUp').addEventListener('click', signUpChanges);
document.getElementById('footLogIn').addEventListener('click', logInChanges);
document.getElementById('createPostText').addEventListener('click', createPostChanges);
document.getElementById('listAllPosts').addEventListener('click', listPostChanges);
document.getElementById('userComments').addEventListener('click', userCommentChanges);
document.getElementById('userPosts').addEventListener('click', userPostChanges);
document.getElementById('logo').addEventListener('click', showUserFunctions);
document.getElementById('submitSign').addEventListener('click', signUp);
document.getElementById('submitLog').addEventListener('click', logIn);
document.getElementById('viewProfilePage').addEventListener('click', getProfile);
document.getElementById('submitPost').addEventListener('click', submitPost);
document.getElementById('viewUserProfile').addEventListener('click', getProfileChanges);
document.getElementById('aboutUs').addEventListener('click', aboutUsChanges);
document.getElementById('submitProfile').addEventListener('click', createProfile);
document.getElementById('createUserProfile').addEventListener('click', createProfileChanges);
document.getElementById('upProfile').addEventListener('click', updateProfileChanges);
document.getElementById('submitChanges').addEventListener('click', updateProfile);
document.getElementById('logOut').addEventListener('click', logOutChanges);

// THESE FUNCTIONS ARE RESPONSIBLE FOR SWITCHING THE SCREENS
function landingChanges (e) {
  document.getElementById('landingDisplay').style.display = 'block';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'block';
  document.getElementById('footLogIn').style.display = 'block';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
}

// THIS FUNCTION DISPLAYS THE SIGNUP // HIDES ELSE
function signUpChanges (e) {

  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'block';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
}

// THIS FUNCTION DISPLAYS THE LOGIN // HIDES ELSE
function logInChanges (e) {
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'block';
  document.getElementById('footLogIn').style.display = 'none';
  document.getElementById('logInForm').style.display = 'block';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
}

// THIS FUNCTION DISPLAYS THE ABOUT PAGE // HIDES ELSE
function aboutUsChanges (e) {
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'block';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
}

// THIS FUNCTION DISPLAUS THE CREATE PROFILE PAGE // HIDES ELSE
function createProfileChanges (e) {
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'block';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "block";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
}

// THIS FUNCTION SHOWS THE USER FUNCTIONS // HIDES ELSE
function showUserFunctions (e) {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('updateProfile').style.display = 'none';
    document.getElementById('landingDisplay').style.display = 'none';
    document.getElementById('footSignUp').style.display = 'none';
    document.getElementById('createPost').style.display = 'none';
    document.getElementById('userFunctions').style.display = 'flex';
    document.getElementById('actionSuccessful').style.display = 'none';
    document.getElementById('actionError').style.display = 'none';
    document.getElementById('viewUserPosts').style.display = 'none';
    document.getElementById('viewAllPosts').style.display = 'none';
    document.getElementById('viewUserComments').style.display = 'none';
    document.getElementById('aboutElectricShadows').style.display = 'none';
    document.getElementById('createProfile').style.display = "none";
    document.getElementById('viewProfilePage').style.display = 'none';
    document.getElementById('logInForm').style.display = 'none';
    document.getElementById('footLogIn').style.display = 'none';
}

// THIS FUNCTION DISPLAYS THE CREATE POST PAGE // HIDES ELSE
function createPostChanges (e) {
  document.getElementById('createPost').style.display = 'block';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
}

// THIS FUNCTION DISPLAYS ALL THE POSTS THROUGH THE API // HIDES ELSE
function listPostChanges (e) {
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'block';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  listAllPosts();
}

// THIS FUNCTION DISPLAYS THE USER'S COMMENTS // HIDES ELSE
function userCommentChanges (e) {
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'block';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  getCommentsByUser();
}

// THIS FUNCTION DISPLAYS THE USER'S POSTS // HIDES ELSE
function userPostChanges (e) {
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none'
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'block';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  getPostsByUser();
}

// THIS FUNCTION DISPLAYS THE USERS PROFILE // HIDES ELSE
function getProfileChanges (e) {
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'block';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
  getProfile();
}

// THIS FUNCTION DISPLAYS THE UPDATE PROFILE PAGE // HIDES ELSE
function updateProfileChanges () {
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'none';
  document.getElementById('viewUserPosts').style.display = 'none';
  document.getElementById('viewAllPosts').style.display = 'none';
  document.getElementById('viewUserComments').style.display = 'none';
  document.getElementById('aboutElectricShadows').style.display = 'none';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
  document.getElementById('updateProfile').style.display = 'block';
  document.getElementById('logInForm').style.display = 'none';
  document.getElementById('footLogIn').style.display = 'none';
}

// THIS IS THE FUNCTION THAT DESTROYS THE USER
function logOutChanges () {
  localStorage.setItem('user', null);
  localStorage.setItem('username', null);
  window.alert("Thank you for logging out! See you next time!")
  landingChanges();
}

// THESE ARE THE FUNCTIONS THAT ARE RESPONSIBLE FOR MANIPULATING THE DOM
// THIS FUNCTION IS USED TO SIGN UP
function signUp (e) {
  e.preventDefault();

  const username = document.querySelector('#signUsername');
  const password = document.querySelector('#signPassword');
  const email = document.querySelector('#signEmail');

  fetch('http://localhost:8080/signup', {
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      username : `${username.value}`,
      password : `${password.value}`,
      email : `${email.value}`
      })
    })
  .then((response) => {return response.json();})
  .then((response) => {localStorage.setItem('user',response.token);
  localStorage.setItem('username', username.value);
  window.alert("Thank you for signing up!");
  createProfileChanges();})
  .catch((err) => {
    console.log(err);
    window.alert(err);
  })
  }

// THIS FUNCTION IS USED TO LOG IN
function logIn (e) {
    e.preventDefault();
    const username = document.querySelector('#logUsername').value;
    const password = document.querySelector('#logPassword').value;

      fetch('http://localhost:8080/login', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
          username : `${username}`,
          password : `${password}`,
          })
        })
      .then((response) => {return response.json();})
      .then((response) => {localStorage.setItem('user',response.token);
      localStorage.setItem('username', username);
      window.alert("Thank you for logging in!");
      getProfileChanges();})
      .catch((err) => {
        console.log(err);
        window.alert(err);
      })
  }

// THIS FUNCTION IS USED TO SUBMIT A POST
function submitPost(e) {
  e.preventDefault();
  const title = document.querySelector('#myTitle');
  const description = document.querySelector('#myDescription');
  const username = localStorage.getItem('username');

    fetch('http://localhost:8080/' + `${username}` + '/makepost', {
      method : 'POST',
      headers : {
          "Authorization" : "Bearer " + localStorage.getItem('user'),
          "Content-Type" : "application/json"
        },
      body : JSON.stringify({
          title : `${title.value}`,
          description : `${description.value}`
      })
    })
    .then((response) => {return response.json();})
    .then((response) => {
      console.log(response);
      window.alert("Thank you for posting!");
      userPostChanges();
    })
}

// THIS FUNCTION IS USED TO CREATE A COMMENT
function createComment (e) {
  e.preventDefault();
  var commentArea = document.querySelector('#commentArea' + this.id);
  fetch('http://localhost:8080/' + `${this.id}`+ '/comment/', {
    method : 'POST',
    headers : {"Authorization" : "Bearer "+ localStorage.getItem('user'),
      "Content-Type" : "application/json"},
    body : JSON.stringify({
      text : `${commentArea.value}`})})
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);
    })
}

// THIS FUNCTION IS USED TO CREATE A PROFILE
function createProfile(e) {
  e.preventDefault();
  const addEmail = document.getElementById('addEmail');
  const addMobile = document.getElementById('addMobile');
  const addAddress = document.getElementById('addAddress');

  fetch('http://localhost:8080/profile/' + `${localStorage.getItem('username')}`, {
    method : 'POST',
    headers : {'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
    body : JSON.stringify({additionalEmail : addEmail.value,
     mobile : addMobile.value, address : addAddress.value})})
   .then((response) => {return response.json();})
   .then((response) => {
     console.log(response);
     window.alert("Thank you for creating a profile!")
   })
   .catch((err) => {
     console.log(err);
     window.alert(err);
   })
 }

// THIS FUNCTION IS USED TO VIEW ALL THE POSTS THROUGH THE API
function listAllPosts () {
  //e.preventDefault();
  fetch('http://localhost:8080/posts/list', {
    method : 'GET',
    headers : {'Content-Type' : 'application/json'}
})
  .then((response) => {return response.json();})
  .then((response) => {
    showAllPosts(response);
 })
}

// THIS FUNCTION IS USED TO VIEW THE COMMENTS
function viewComments (response) {
  let commentsFor = document.getElementById('Article' + this.id);
  let postId = this.id;

  fetch('http://localhost:8080/post/'+ `${postId}`+'/comments',
  {method : 'GET'})
  .then((response2) => {return response2.json();})
  .then((response2) => {
if (response.length != 0) {

  for (var i = response2.length - 1; i >= 0; i--) {
    let comment = document.createElement('p');
    let commentUser = document.createElement('p');

    comment.innerText = response2[i].text;
    commentUser.innerText = response2[i].user.username;
    commentsFor.appendChild(commentUser);
    commentsFor.appendChild(comment);
  }}})
}

// THIS FUNCTION IS USED TO DELETE A COMMENT
function deleteComment (e) {
    e.preventDefault();
  fetch('http://localhost:8080/comment/' + this.id + '',
    {method : 'DELETE',
      headers : {'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('user')}})
    .then((response) => {console.log(response);
      userCommentChanges();
    })
}

// THIS FUNCTION DELETES A USER'S POST
function deletePost (e) {
  e.preventDefault();
  fetch('http://localhost:8080/post/' + this.id + '', {
    method : 'DELETE',
    headers : {'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('user')}})
    .then((response) => {
      console.log(response);
      userPostChanges();
    })
}

// THIS FUNCTION GETS THE USER'S PROFILE THROUGH THE API
function getProfile (e) {
  fetch('http://localhost:8080/profile/' + `${localStorage.getItem('username')}`, {
    method : 'GET',
    headers : {'Authorization' : 'Bearer ' + localStorage.getItem('user'),
    'Content-Type' : 'application/json'}
  })
  .then((response) => {return response.json()})
  .then((response) => {console.log(response);
  showProfile(response);})
}

// THIS FUNCTION DISPLAYS THE USER'S PROFILE
function showProfile (response) {
  const viewProfile = document.getElementById('viewProfilePage');

  let article = document.createElement('article');
  let user = document.createElement('h2');
  let nextEmail = document.createElement('p');
  let mobile = document.createElement('p');
  let address = document.createElement('p');

  user.innerText = `${localStorage.getItem('username')}`;
  nextEmail.innerText = `Email : ${response.additionalEmail}`;
  mobile.innerText = `Mobile : ${response.mobile}`;
  address.innerText = `Address : ${response.address}`;

  article.appendChild(user);
  article.appendChild(nextEmail);
  article.appendChild(mobile);
  article.appendChild(address);
  viewProfile.appendChild(article);

}

// THIS FUNCTION GETS ALL THE COMMENTS BY THE USER
function getCommentsByUser (e) {
  //e.preventDefault();
    fetch('http://localhost:8080/'+ `${localStorage.getItem('username')}` + '/comments', {
      method : 'GET',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'}
    })
    .then((response) => {return response.json()})
    .then((response) => {console.log(response);

    displayUserComments(response);})
}

// THIS FUNCTION DISPLAYS THE COMMENTS BY THE USER
function displayUserComments (response) {
  const vyooUserComments = document.querySelector('#userCommentList');
  const allComments = document.createElement('article');

  for (var i = response.length-1; i >= 0; i--) {
    let article = document.createElement('article');
    let user = document.createElement('h2');
    let text = document.createElement('p');
    let button = document.createElement('button');

    //THIS CREATES THE POST/COMMENT AREA
    user.innerText = response[i].username;
    text.innerText = response[i].text;
    article.appendChild(user);
    article.appendChild(text);
    button.setAttribute('class', 'deleteComment');
    button.innerHTML = ('Delete Comment');
    button.id = response[i].id;
    button.addEventListener('click', deleteComment);
    article.appendChild(button);

    allComments.appendChild(article);
    }
    allComments.style.overflowY = "scroll"
    vyooUserComments.replaceWith(allComments);
    allComments.id = 'userCommentList'
}

// THIS FUNCTION UPDATES THE PROFILE
function updateProfile (e) {
   const mobile = document.getElementById('newMobile').value;

    e.preventDefault();
  fetch('http://localhost:8080/' + `${localStorage.getItem('username')}`, {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'},
      body : JSON.stringify({mobile : `${mobile}`
      })
    })
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);
      actionSuccessful();
    })
}

// THIS FUNCTION GETS ALL THE POSTS BY A USER
function getPostsByUser () {

  fetch ('http://localhost:8080/' + `${localStorage.getItem('username')}` + '/posts', {
    method : 'GET',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'}
    })
    .then((response) => {return response.json();})
    .then((response) => {
      console.log(response);
      showPostHistory(response);
    })
  }

// THIS FUNCTION SHOWS ALL THE POSTS
function showAllPosts (response) {
  const allPosts = document.querySelector('#viewAllPosts');
  const idbase = 'commentArea';

  for (var i = response.length-1; i >= 0; i--) {
    let article = document.createElement('article');
    let heading = document.createElement('h2');
    let text = document.createElement('p');
    let area = document.createElement('textarea');
    let button = document.createElement('button');
    let button2 = document.createElement('button');

    //THIS CREATES THE POST/COMMENT AREA
    heading.innerText = `${response[i].username} : ${response[i].title}` ;
    text.innerText = response[i].description;
    article.appendChild(heading);
    article.appendChild(text);
    article.id = 'Article' + response[i].id;
    area.id = (idbase + response[i].id);
    article.appendChild(area);
    button.setAttribute('class', 'addComment');
    button.innerHTML = ('Add Comment');
    button.id = response[i].id;
    button.addEventListener('click', createComment);
    article.appendChild(button);
    button2.setAttribute('class', 'viewComments');
    button2.innerHTML = ('View Comments');
    button2.id = response[i].id;
    button2.addEventListener('click', viewComments)
    article.appendChild(button2);
    allPosts.appendChild(article);
}
}

// THIS FUNCTION SHOWS ALL OF THE POSTS THROUGH THE API
function showPostHistory (response) {
  const allPosts = document.querySelector('#userPostList');
  const postList = document.createElement('article');
  const idbase = 'commentArea';

  for (var i = response.length-1; i >= 0; i--) {
    let article = document.createElement('article');
    let heading = document.createElement('h2');
    let text = document.createElement('p');
    let area = document.createElement('textarea');
    let button = document.createElement('button');
    let button2 = document.createElement('button');

    //THIS CREATES THE POST/COMMENT AREA
    heading.innerText = response[i].title;
    text.innerText = response[i].description;
    article.appendChild(heading);
    article.appendChild(text);
    area.id = (idbase + response[i].id);
    article.appendChild(area);
    button.setAttribute('class', 'addComment');
    button.innerHTML = ('Add Comment');
    button.id = response[i].id;
    button.addEventListener('click', createComment);
    article.appendChild(button);
    button2.setAttribute('class', 'deletePost');
    button2.innerHTML = ('Delete Post');
    button2.id = response[i].id;
    button2.addEventListener('click', deletePost)
    article.appendChild(button2);

    postList.appendChild(article);
  }
  postList.style.overflowY = "scroll";
  allPosts.replaceWith(postList);
  postList.id = 'userPostList';
}

// THIS FUNCTION DISPLAYS THE ACTION SUCCESSFUL SCREEN
function actionSuccessful () {
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('updateProfile').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'block';
  document.getElementById('actionError').style.display = 'none';
}

// THIS SCREEN DISPLAYS THE ACTION ERROR SCREEN
function actionError () {
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('updateProfile').style.display = 'none';
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'none';
  document.getElementById('createPost').style.display = 'none';
  document.getElementById('userFunctions').style.display = 'none';
  document.getElementById('actionSuccessful').style.display = 'none';
  document.getElementById('actionError').style.display = 'block';
}
