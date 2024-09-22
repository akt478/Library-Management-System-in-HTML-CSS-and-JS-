// Add Membership
document.getElementById('addMembershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const memberName = document.getElementById('memberName').value;
    const membershipType = document.getElementById('membershipType').value;
    console.log(`Membership Added: ${memberName}, ${membershipType}`);
});

// Update Membership
document.getElementById('updateMembershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const memberNameUpdate = document.getElementById('memberNameUpdate').value;
    const membershipTypeUpdate = document.getElementById('membershipTypeUpdate').value;
    console.log(`Membership Updated: ${memberNameUpdate}, ${membershipTypeUpdate}`);
});

// Add Book
document.getElementById('addBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookISBN = document.getElementById('bookISBN').value;
    console.log(`Book Added: ${bookTitle}, ${bookAuthor}, ISBN: ${bookISBN}`);
});

// Update Book
document.getElementById('updateBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const bookTitleUpdate = document.getElementById('bookTitleUpdate').value;
    const bookAuthorUpdate = document.getElementById('bookAuthorUpdate').value;
    const bookISBNUpdate = document.getElementById('bookISBNUpdate').value;
    console.log(`Book Updated: ${bookTitleUpdate}, ${bookAuthorUpdate}, ISBN: ${bookISBNUpdate}`);
});

// Add Movie
document.getElementById('addMovieForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const movieTitle = document.getElementById('movieTitle').value;
    const movieDirector = document.getElementById('movieDirector').value;
    const movieCode = document.getElementById('movieISBN').value;
    console.log(`Movie Added: ${movieTitle}, ${movieDirector}, Code: ${movieCode}`);
});

// Update Movie
document.getElementById('updateMovieForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const movieTitleUpdate = document.getElementById('movieTitleUpdate').value;
    const movieDirectorUpdate = document.getElementById('movieDirectorUpdate').value;
    const movieCodeUpdate = document.getElementById('movieCodeUpdate').value;
    console.log(`Movie Updated: ${movieTitleUpdate}, ${movieDirectorUpdate}, Code: ${movieCodeUpdate}`);
});

// Add User
document.getElementById('addUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const userRole = document.getElementById('userRole').value;
    console.log(`User Added: ${userName}, Role: ${userRole}`);
});

// Update User
document.getElementById('updateUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userNameUpdate = document.getElementById('userNameUpdate').value;
    const userRoleUpdate = document.getElementById('userRoleUpdate').value;
    console.log(`User Updated: ${userNameUpdate}, Role: ${userRoleUpdate}`);
});
