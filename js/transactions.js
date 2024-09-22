// Check Book Availability
document.getElementById('checkAvailabilityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const bookTitle = document.getElementById('bookTitleCheck').value;
    // Simulate book availability check (replace with actual logic)
    const isAvailable = Math.random() > 0.5;  // Randomly determine availability
    document.getElementById('availabilityResult').textContent = isAvailable
        ? `${bookTitle} is available.`
        : `${bookTitle} is not available.`;
});

// Issue a Book
document.getElementById('issueBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('issueUserName').value;
    const bookTitle = document.getElementById('issueBookTitle').value;
    // Simulate book issue (replace with actual logic)
    document.getElementById('issueResult').textContent = `Book "${bookTitle}" has been issued to ${userName}.`;
});

// Return a Book
document.getElementById('returnBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('returnUserName').value;
    const bookTitle = document.getElementById('returnBookTitle').value;
    // Simulate book return (replace with actual logic)
    document.getElementById('returnResult').textContent = `Book "${bookTitle}" has been returned by ${userName}.`;
});

// Pay Fine
document.getElementById('payFineForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('fineUserName').value;
    const fineAmount = document.getElementById('fineAmount').value;
    // Simulate fine payment (replace with actual logic)
    document.getElementById('fineResult').textContent = `${userName} has paid a fine of $${fineAmount}.`;
});
