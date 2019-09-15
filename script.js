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
