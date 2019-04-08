# NoSQL Schema Design

Schema design for library application

## Collections

The application has the following collections:

- Books
- Students
- Author

### Book

The book document stores the following properties:

- ISBN: Book number
- Author: Author object
- Tags: Array of tags
- BorrowedBy: Student Object
- BorrowedDate: Date of borrowing
- ReturnDate: Date of return

### Student

The student document stores the following properties:

- Id: Student id
- Name: Student name
- Course: Student course
- Address: Addres of student
- Contacts: Array of student contacts

### Author

The author document has the following properties:

- Name: Name of the author
- Books: List of books by the author