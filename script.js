//THESE FUNCTIONS ARE RERESPONSIBLE FOR ACTIVATING A LOADED PAGE
document.getElementById('landingLogo').addEventListener('click', landingChanges);
document.getElementById('footSignUp').addEventListener('click', signUpChanges);
document.getElementById('createPostText').addEventListener('click', createPostChanges);
document.getElementById('listAllPosts').addEventListener('click', listPostChanges);
document.getElementById('userComments').addEventListener('click', userCommentChanges);
document.getElementById('userPosts').addEventListener('click', userPostChanges);
document.getElementById('logo').addEventListener('mousemove', updateDisplay);
document.getElementById('logo').addEventListener('mouseleave', updateDisplay2);
document.getElementById('logo').addEventListener('click', showUserFunctions);
document.getElementById('submitMain').addEventListener('click', signUp);
document.getElementById('viewProfile').addEventListener('click', getProfile);
document.getElementById('submitPost').addEventListener('click', submitPost);
document.getElementById('viewUserProfile').addEventListener('click', getProfile);
document.getElementById('aboutUs').addEventListener('click', aboutUsChanges);
document.getElementById('submitProfile').addEventListener('click', createProfile);
document.getElementById('createUserProfile').addEventListener('click', createProfileChanges);
document.getElementById('upProfile').addEventListener('click', updateProfileChanges);
document.getElementById('submitChanges').addEventListener('click', updateProfile);
document.getElementById('logOut').addEventListener('click', logOutChanges);

//THESE FUNCTIONS ARE RESPONSIBLE FOR SWITCHING THE SCREENS
function landingChanges (e) {
  document.getElementById('landingDisplay').style.display = 'block';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('footSignUp').style.display = 'block';
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
}

function updateDisplay (e) {
  document.getElementById('logo').innerHTML = '<p>USER OPTIONS</p>';
}

function updateDisplay2 (e) {
  document.getElementById('logo').innerHTML = '<i class="fas fa-bolt"></i>';
}

function aboutUsChanges (e) {
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
  document.getElementById('aboutElectricShadows').style.display = 'block';
  document.getElementById('createProfile').style.display = "none";
  document.getElementById('viewProfilePage').style.display = 'none';
}

function createProfileChanges (e) {
  document.getElementById('landingDisplay').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
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
}

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
}

unction logInChanges (e) {
  //e.preventDefault();
  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('updateProfile').style.display = 'none';
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

function signUpChanges (e) {
  //e.preventDefault();
  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('footSignUp').style.display = 'none';
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
}


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
  listAllPosts();
}

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
  getCommentsByUser();
}

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
  getPostsByUser();
}

function getProfileChanges (e) {
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
  document.getElementById('viewProfilePage').style.display = 'block';
}

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
}

function logOutChanges () {
  localStorage.setItem('user', null);
  landingChanges();
}

//THESE ARE THE FUNCTIONS THAT ARE RESPONSIBLE FOR MANIPULATING THE DOM
function signUp (e) {
  e.preventDefault();
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
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
  console.log(response);
  actionSuccessful();})
  }
