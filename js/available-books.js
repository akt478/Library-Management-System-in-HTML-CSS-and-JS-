// Book Search
document.getElementById('searchBookBtn').addEventListener('click', function () {
    const bookName = document.getElementById('bookSearchInput').value;
    // Simulate a book search (replace with actual search logic)
    const isAvailable = Math.random() > 0.5;  // Random availability
    document.getElementById('searchResult').textContent = isAvailable
        ? `${bookName} is available.`
        : `${bookName} is not available.`;
});

// Issue a Book
document.getElementById('issueBookBtn').addEventListener('click', function () {
    const bookName = document.getElementById('bookNameIssue').value;
    const category = document.getElementById('categoryDropdownIssue').value;
    // Simulate book issue (replace with actual logic)
    document.getElementById('issueResult').textContent = `Book "${bookName}" from "${category}" category has been issued.`;
});

// Return a Book
document.getElementById('returnBookBtn').addEventListener('click', function () {
    const authorName = document.getElementById('authorNameReturn').value;
    const category = document.getElementById('categoryDropdownReturn').value;
    // Simulate book return (replace with actual logic)
    document.getElementById('returnResult').textContent = `Book by "${authorName}" from "${category}" category has been returned.`;
});

// Pay Fine
document.getElementById('payFineBtn').addEventListener('click', function () {
    const fineAmount = document.getElementById('fineAmount').value;
    // Simulate fine payment (replace with actual logic)
    document.getElementById('fineResult').textContent = `Fine of $${fineAmount} has been paid.`;
});
