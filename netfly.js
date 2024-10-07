const updateButton = document.getElementById('update-button');
const profilePic = document.getElementById('profile-pic');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');

 
const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const picInput = document.getElementById('pic-input');

 
updateButton.addEventListener('click', function() {
     
    const newName = nameInput.value;
    const newBio = bioInput.value;
    const newPicUrl = picInput.value;

    
    if (newName) {
        profileName.innerText = `Name: ${newName}`;
    }
    if (newBio) {
        profileBio.innerText = `Bio: ${newBio}`;
    }
    if (newPicUrl) {
        profilePic.src = newPicUrl;
    }
});