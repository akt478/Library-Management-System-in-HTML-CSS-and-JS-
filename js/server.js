const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, and JS

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_db'
});

// Connect to MySQL and create database/tables if not exist
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');

    // Create Database if it doesn't exist
    db.query(`CREATE DATABASE IF NOT EXISTS library_db`, err => {
        if (err) throw err;
    });

    // Create Books table
    db.query(`CREATE TABLE IF NOT EXISTS books (
        serial_no INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        author_name VARCHAR(255),
        category VARCHAR(255),
        status VARCHAR(255),
        cost DECIMAL(10, 2),
        procurement_date DATE
    )`, err => {
        if (err) throw err;
        console.log("Books table ready");
    });

    // Create Movies table
    db.query(`CREATE TABLE IF NOT EXISTS movies (
        serial_no INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        author_name VARCHAR(255),
        category VARCHAR(255),
        status VARCHAR(255),
        cost DECIMAL(10, 2),
        procurement_date DATE
    )`, err => {
        if (err) throw err;
        console.log("Movies table ready");
    });

    // Create Memberships table
    db.query(`CREATE TABLE IF NOT EXISTS memberships (
        membership_id INT AUTO_INCREMENT PRIMARY KEY,
        member_name VARCHAR(255),
        contact VARCHAR(15),
        address VARCHAR(255),
        aadhar_card_no VARCHAR(15),
        start_date DATE,
        end_date DATE,
        status VARCHAR(255),
        amount_pending DECIMAL(10, 2)
    )`, err => {
        if (err) throw err;
        console.log("Memberships table ready");
    });

    // Create Users table
    db.query(`CREATE TABLE IF NOT EXISTS users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        contact VARCHAR(15),
        email VARCHAR(255),
        role VARCHAR(50) DEFAULT 'user',
        status VARCHAR(50) DEFAULT 'active'
    )`, err => {
        if (err) throw err;
        console.log("Users table ready");
    });

    // Create Issued Books table
    db.query(`CREATE TABLE IF NOT EXISTS issued_books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        serial_no INT,
        member_id INT,
        issue_date DATE,
        return_date DATE,
        FOREIGN KEY (serial_no) REFERENCES books(serial_no),
        FOREIGN KEY (member_id) REFERENCES memberships(membership_id)
    )`, err => {
        if (err) throw err;
        console.log("Issued Books table ready");
    });
});

// Fetch Books
app.get('/api/books', (req, res) => {
    const sql = 'SELECT * FROM books';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Add a new Book
app.post('/api/books', (req, res) => {
    const { name, author_name, category, status, cost, procurement_date } = req.body;
    const sql = 'INSERT INTO books (name, author_name, category, status, cost, procurement_date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, author_name, category, status, cost, procurement_date], (err) => {
        if (err) return res.status(500).json({ error: 'Error adding book' });
        res.send('Book added successfully');
    });
});

// Fetch Movies
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Add a new Movie
app.post('/api/movies', (req, res) => {
    const { name, author_name, category, status, cost, procurement_date } = req.body;
    const sql = 'INSERT INTO movies (name, author_name, category, status, cost, procurement_date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, author_name, category, status, cost, procurement_date], (err) => {
        if (err) return res.status(500).json({ error: 'Error adding movie' });
        res.send('Movie added successfully');
    });
});

// Fetch Memberships
app.get('/api/memberships', (req, res) => {
    const sql = 'SELECT * FROM memberships';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Add a new Membership
app.post('/api/memberships', (req, res) => {
    const { member_name, contact, address, aadhar_card_no, start_date, end_date, status, amount_pending } = req.body;
    const sql = 'INSERT INTO memberships (member_name, contact, address, aadhar_card_no, start_date, end_date, status, amount_pending) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [member_name, contact, address, aadhar_card_no, start_date, end_date, status, amount_pending], (err) => {
        if (err) return res.status(500).json({ error: 'Error adding membership' });
        res.send('Membership added successfully');
    });
});

// Fetch Users
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Add a new User
app.post('/api/users', (req, res) => {
    const { name, contact, email, role, status } = req.body;
    const sql = 'INSERT INTO users (name, contact, email, role, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, contact, email, role, status], (err) => {
        if (err) return res.status(500).json({ error: 'Error adding user' });
        res.send('User added successfully');
    });
});

// Update User
app.put('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const { name, contact, email, role, status } = req.body;
    const sql = 'UPDATE users SET name = ?, contact = ?, email = ?, role = ?, status = ? WHERE user_id = ?';
    db.query(sql, [name, contact, email, role, status, userId], (err) => {
        if (err) return res.status(500).json({ error: 'Error updating user' });
        res.send('User updated successfully');
    });
});

// Update Membership
app.put('/api/memberships/:membershipNumber', (req, res) => {
    const membershipNumber = req.params.membershipNumber;
    const { member_name, contact, address, aadhar_card_no, start_date, end_date, status, amount_pending } = req.body;
    const sql = 'UPDATE memberships SET member_name = ?, contact = ?, address = ?, aadhar_card_no = ?, start_date = ?, end_date = ?, status = ?, amount_pending = ? WHERE membership_id = ?';
    db.query(sql, [member_name, contact, address, aadhar_card_no, start_date, end_date, status, amount_pending, membershipNumber], (err) => {
        if (err) return res.status(500).json({ error: 'Error updating membership' });
        res.send('Membership updated successfully');
    });
});

// Update Book/Movie
app.put('/api/books-movies/:serialNo', (req, res) => {
    const serialNo = req.params.serialNo;
    const { name, author_name, category, status, cost, procurement_date } = req.body;
    const sql = 'UPDATE books SET name = ?, author_name = ?, category = ?, status = ?, cost = ?, procurement_date = ? WHERE serial_no = ?';
    db.query(sql, [name, author_name, category, status, cost, procurement_date, serialNo], (err) => {
        if (err) return res.status(500).json({ error: 'Error updating book/movie' });
        res.send('Book/Movie updated successfully');
    });
});

// Search Books
app.get('/api/search-book', (req, res) => {
    const bookName = req.query.bookName;
    const sql = 'SELECT * FROM books WHERE name LIKE ?';
    db.query(sql, [`%${bookName}%`], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Issue Book
app.post('/api/issue-book', (req, res) => {
    const { serialNo, memberId, issueDate } = req.body;
    const sql = 'INSERT INTO issued_books (serial_no, member_id, issue_date) VALUES (?, ?, ?)';
    db.query(sql, [serialNo, memberId, issueDate], (err) => {
        if (err) return res.status(500).json({ error: 'Error issuing book' });
        res.send('Book issued successfully');
    });
});

// Return Book
app.post('/api/return-book', (req, res) => {
    const { serialNo, memberId } = req.body;
    const sql = 'UPDATE issued_books SET return_date = ? WHERE serial_no = ? AND member_id = ? AND return_date IS NULL';
    db.query(sql, [new Date(), serialNo, memberId], (err) => {
        if (err) return res.status(500).json({ error: 'Error returning book' });
        res.send('Book returned successfully');
    });
});

// Pay Fine
app.post('/api/pay-fine', (req, res) => {
    const { serialNumber, actualReturnDate, finePaid, remarks } = req.body;

    // First, fetch the original book details to calculate any outstanding fine if needed
    const fetchBookSql = 'SELECT * FROM books WHERE serial_no = ?';
    db.query(fetchBookSql, [serialNumber], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error fetching book details');
        }

        if (results.length === 0) {
            return res.status(404).send('Book not found');
        }

        const book = results[0];
        const returnDate = new Date(book.return_date);
        const actualReturn = new Date(actualReturnDate);

        // Calculate fine if the book was returned late
        let fineAmount = 0;
        if (actualReturn > returnDate) {
            const daysLate = Math.ceil((actualReturn - returnDate) / (1000 * 60 * 60 * 24));
            fineAmount = daysLate * 5; // Example: $5 fine per day late
        }

        // Update the book's status and record the payment
        const updateBookSql = `
            UPDATE books 
            SET status = ?, actual_return_date = ?, fine_paid = ?, remarks = ?, fine_amount = ?
            WHERE serial_no = ?
        `;
        const newStatus = finePaid ? 'Available' : 'Checked Out'; // Adjust based on fine payment

        db.query(updateBookSql, [newStatus, actualReturnDate, finePaid, remarks, fineAmount, serialNumber], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error processing fine payment');
            }

            res.send('Fine payment processed successfully');
        });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
