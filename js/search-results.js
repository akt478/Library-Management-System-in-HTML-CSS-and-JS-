// Issue Selected Books
document.getElementById('issueBookBtn').addEventListener('click', function () {
    const selectedBooks = [];
    document.querySelectorAll('input[name="issueBook"]:checked').forEach(book => {
        selectedBooks.push(book.value);
    });
    if (selectedBooks.length > 0) {
        document.getElementById('issueResult').textContent = `Books with serial numbers: ${selectedBooks.join(", ")} have been issued.`;
    } else {
        document.getElementById('issueResult').textContent = "No books selected for issuing.";
    }
});

// Return Selected Book
document.getElementById('returnBookBtn').addEventListener('click', function () {
    const selectedReturnBook = document.querySelector('input[name="returnBook"]:checked');
    if (selectedReturnBook) {
        document.getElementById('returnResult').textContent = `Book with serial number: ${selectedReturnBook.value} has been returned.`;
    } else {
        document.getElementById('returnResult').textContent = "No book selected for return.";
    }
});

// Pay Fine
document.getElementById('payFineBtn').addEventListener('click', function () {
    const selectedFineBook = document.querySelector('input[name="payFine"]:checked');
    if (selectedFineBook) {
        document.getElementById('fineResult').textContent = `Fine for book with serial number: ${selectedFineBook.value} has been paid.`;
    } else {
        document.getElementById('fineResult').textContent = "No fine selected for payment.";
    }
});

// Log Out
document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = 'logout.html';
});
