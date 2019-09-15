postId;
var commentId;


//THESE FUNCTIONS ARE RERESPONSIBLE FOR ACTIVATING A LOADED PAGE
document.getElementById('landingLogo').addEventListener('click', landingChanges);
document.getElementById('footLogIn').addEventListener('click', logInChanges);
document.getElementById('footSignUp').addEventListener('click', signUpChanges);
document.getElementById('createPostText').addEventListener('click', createPostChanges);
document.getElementById('listAllPosts').addEventListener('click', listPostChanges);
document.getElementById('userComments').addEventListener('click', userCommentChanges);
document.getElementById('userPosts').addEventListener('click', userPostChanges);
document.getElementById('logo').addEventListener('mousemove', updateDisplay);
document.getElementById('logo').addEventListener('mouseleave', updateDisplay2);
document.getElementById('logo').addEventListener('click', showUserFunctions);
//document.getElementById('createProfile').addEventListener('click', createPro);

//THIS IS THE FUNCTION THAT CLEARS ALL THE DISPLAYS
function clearPage(e) {
  var elems = document.getElementsByClassName('.infoDiv');
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }
}

function clearFoot(){
  var elems = document.getElementsByClassName('.footLink');
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }

}

//THESE FUNCTIONS LOAD THE ACTIVE DISPLAY
function landingChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();

  document.getElementById('landingDisplay').style.display = 'block';
  document.getElementById('footSignUp').style.display = 'block';
  document.getElementById('footLogIn').style.display = 'block';

}

function signUpChanges (e) {
  //e.preventDefault();
  //document.getElementById('updateProfile').style.display = 'block';
  clearPage();
  clearFoot();
  document.getElementById('signUpForm').style.display = 'block';
}

function logInChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();
  document.getElementById('signUpForm').style.display = 'block';
}


function updateDisplay (e) {
  //e.preventDefault();
  document.getElementById('logo').innerHTML = '<p>USER OPTIONS</p>';
}

function updateDisplay2 (e) {
  //e.preventDefault();
  document.getElementById('logo').innerHTML = '<i class="fas fa-bolt"></i>';
}

function showUserFunctions (e) {
    //e.preventDefault();
    clearPage();
    clearFoot();
    document.getElementById('userFunctions').style.display = 'flex';
}

function createPostChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();
  document.getElementById('createPost').style.display = 'block';
}

function listPostChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();
  document.getElementById('footDeletePost').style.display = 'block';
}

function userCommentChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();
}

function userPostChanges (e) {
  //e.preventDefault();
  clearPage();
  clearFoot();
}


//THESE ARE THE FUNCTIONS THAT ARE RESPONSIBLE FOR MANIPULATING THE DOM
function signUp (e) {
  //e.preventDefault();
  const email = document.querySelector('#email');
  const password = document.quesrySelector('#password');
  const username = document.querySelector('#username');

  fetch('http://thesi.generalassemb.ly:8080/signup', {
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      email : `${email.value}`,
      password : `${password.value}`,
      username : `${username.value}`})
    })
  .then((response) => {return response.json();})
  .then((response) => {localStorage.setItem('user',response.token);

  actionSuccessful();})
  }

function createPost(e) {
e.preventDefault();
const email = document.querySelector('#title');
const title = document.querySelector('#description');

  fetch('http://thesi.generalassemb.ly:8080/post', {
    method : 'POST',
    headers : {
        "Authorization" : "Bearer " + localStorage.getItem('user'),
        "Content-Type" : "application/json"},
    body : JSON.stringify({
        title : `${title.value}`,
        description : `${description.value}`
    })
  })
  .then((response) => {return response.json();})
  .then((response) => {console.log(response);

  actionSuccessful();})
}

function createComment (e, postId) {
  e.preventDefault();
  const comment = document.querySelector('#comment');
  fetch('http://thesi.generalassemb.ly:8080/comments/' + `${$postId}`, {
    method : 'GET',
    headers : {"Authorization" : "Bearer "+ localStorage.getItem('user'),
      "Content-Type" : "applicatino/json"},
    body : JSON.stringify({mode : raw,
      text : `${comment.value}`})})
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);

    actionSuccessful();})
}

function createProfile(e) {
  e.preventDefault();
  const addEmail = document.querySelector('addEmail');
  const addMobile = document.querySelector('addMobile');
  const addAddress = document.querySelector('addAddress');

  fetch('http://thesi.generalassembly.:8080/profile', {
    method : 'POST',
    headers : {'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
    body : JSON.stringify({mode : raw, raw : `${addEmail}`,
     mobile : `${addMobile}`, address : `${addAddress}`})
   })
   .then((response => {return response.json()}))
   .then((response) => {console.log(response);

   actionSuccessful();})
 }

function listAllPosts (e) {
  e.preventDefault();
  fetch('http://thesi.generalassemb.ly:8080/post/list', {method : 'GET'})
  .then((response) => {return response.json;})
  .then((response) => {return showPostHistory(response);
  console.log(response);})
}

function getCommentsByPostId (e, postId) {
  e.preventDefault();
  fetch('http://thesi.generalassemb.ly:8080/post/'+ `${postId}`+'/comment',
  {method : 'GET'})
  .then((response) =>{return response.json();})
  .then((response) => {console.log(response);})

  viewComments();
}

// viewComments (e, postId) {
//
// }

function deleteCommentsByCommentId (e, commentId) {
    e.preventDefault();
  fetch('http://thesi.generalassemb.ly:8080/post/' + `${commentid}` + 'comment',
    {method : 'DELETE',
      headers : {'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('user')}})
    .then((response) => {return response.json()})
    .then((response) => {console.log(response);

    actionSuccessful();})
}

function deletePostByPostId (e, postId) {
  fetch('http://thesi.generalassemb.ly:8080/post/' + `${postId}`, {
    method : 'DELETE',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'}
    })
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);
  actionSuccessful();})
}

function getProfile (e) {
  fetch('http://thesi.generalassemb.ly:8080/profile', {
    method : 'GET',
    headers : {'Authorization' : 'Bearer ' + localStorage.getItem('user'),
    'Content-Type' : 'application/json'}
  })
  .then((response) => {return response.json()})
  .then((response) => {console.log(response);})
}

function getCommentsByUser (e) {
  e.preventDefault();
    fetch('http://thesi.generalassemb.ly:8080/user/comment', {
      method : 'GET',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'}
    })
    .then((response) => {return reponse.json()})
    .then((response) => {console.log(response);

    displayUserComments();})
}
//
// displayUserComments (){
//
//
// }

function updateProfile (e) {
   const mobile = document.getElementById('mobile');

    e.preventDefault();
  fetch('http://thesi.generalassemb.ly:8080/profile', {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'},
      body : JSON.stringify({
        mode : raw,
        raw : {mobile : `${mobile.value}`}
      })
      })
      .then((response) => {return response.json();})
      .then((response) => {console.log(response);
      })

      getProfile();
}

function getPostsByUser () {
  fetch ('http://thesi.generalassemb.ly:8080/user/post', {
    method : 'GET',
    header : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'}
    })
    .then((response) => {return response.json()})
    .then((response) => {console.log(response);

    showPostHistory();})
}



function showPostHistory (response) {
  const postHistory = document.querySelector('.postHistory');

  for (var i = response.length-1; i >= 0; i--) {
    let article = document.createElement('article');
    let heading = document.createElement('h2');
    let text = document.createElement('p');

    heading.innerText = response[i].title;
    text.innerText = response[i].description;
    article.appendChild(heading);
    article.appendChild(text);
    postHistory.appendChild(article);
  }
}
