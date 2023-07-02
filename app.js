function handleEditProfile() {
    var name = document.getElementById("name").textContent; //ahmed abdelrahman
    var inputName = document.getElementById("input-name");
    inputName.value = name;

    var email = document.getElementById("email").textContent;
    var inputEmail = document.getElementById("input-email");
    inputEmail.value = email;
    // test
    console.log(inputEmail.value);
    var interests = document.getElementById("interests").textContent;
    var inputInterests = document.getElementById("input-interests");
    inputInterests.value = interests;
    // test
    console.log(inputInterests.value);
    document.getElementById("edit-view").style.display = "block";
    document.getElementById("display-view").style.display = "none";
}

function handleUpdateProfile() {
    var updatedName = document.getElementById("input-name").value;
    var name = document.getElementById("name");
    name.textContent = updatedName;
    // test 
    console.log(name.textContent);
    var updatedEmail = document.getElementById("input-email").value;
    var email = document.getElementById("email");
    email.textContent = updatedEmail;
    // test
    console.log(email.textContent);
    var updatedInterests = document.getElementById("input-interests").value;
    var interests = document.getElementById("interests");
    interests.textContent = updatedInterests;
    // test
    console.log(interests.textContent);
    console.log(interests.textContent);
    document.getElementById("edit-view").style.display = "none";
    document.getElementById("display-view").style.display = "block";
}

function goAccount(e) {
    window.location = 'https://github.com/Ahmed-DotNetDev';
}