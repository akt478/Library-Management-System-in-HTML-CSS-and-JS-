// Example data for demonstration (Replace with actual data fetching logic)
const activeIssuesData = [
    { user: 'John Doe', bookTitle: 'The Great Gatsby', issueDate: '2024-08-10', dueDate: '2024-09-10' },
    { user: 'Jane Smith', bookTitle: '1984', issueDate: '2024-08-15', dueDate: '2024-09-15' }
];

const membershipsData = [
    { memberName: 'John Doe', membershipType: 'Gold', startDate: '2024-01-01', expirationDate: '2025-01-01' },
    { memberName: 'Jane Smith', membershipType: 'Silver', startDate: '2024-05-01', expirationDate: '2025-05-01' }
];

// Function to populate table data
function populateTable(tableId, data) {
    const tableBody = document.querySelector(`${tableId} tbody`);
    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}

// Populate Active Issues
populateTable('#activeIssuesTable', activeIssuesData);

// Populate Master List of Memberships
populateTable('#membershipsTable', membershipsData);

// Populate other sections similarly by fetching or using static data
