// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    if(user.userRole === "ADMIN") {
        return true;
    }else {
        return false;
    }
}

function getEmail(user){
    return user.firstName
    .concat(".", user.lastName, "@codeimmersives.com")
    .toLowerCase();
}

function getPlaylistLength(list){
    return list.songs.length;
}

function getHardestHomework(hardest){
    let lowestScore = 9999999;
    let nameOfHardestHw = "";

    for(const item of hardest){

        if(item.averageScore < lowestScore){

            lowestScore = item.averageScore;
            nameOfHardestHw = item.name;
        }
    }
    return nameOfHardestHw;
}

function createPhonebook(firstNameArr, numArr, phonebook = {}){
    for(let i = 0; i < firstNameArr.length; i ++){
        let firstName = firstNameArr[i];
        let phone = numArr[i];
        phonebook[firstName] = phone;
    }
    return phonebook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
