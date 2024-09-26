# React.js Login Form with Password Validation

## Project Overview
This project demonstrates a simple **login form** built using **React.js**. The form includes password validation and conditional rendering of a success message when the user enters the correct credentials.

### Features:
- Username and password input fields.
- Password verification with predefined credentials.
- Error message on incorrect password input.
- Success message on successful login.

---

## Project Structure
The project consists of a single React component called `Login.js`. This component handles both the **user authentication** logic and UI rendering.

### Key Files:
- **Login.js** – The main component that contains the login form and handles the state management for login, password validation, and conditional rendering.

### Key Technologies:
- **React.js**: Frontend framework used for building the component.
- **CSS in JS**: Inline styling is used for a minimalistic and clean design.

---

## How It Works

### State Management
The component uses React’s `useState` to manage the state of the **username**, **password**, **login status** (`isLoggedIn`), and **error messages** (`errorMessage`).

### Password Verification
On form submission, the entered password is checked against a predefined password (`12345`). If the password is correct, the user is logged in and a success message is displayed.

### Conditional Rendering
If the login is successful (`isLoggedIn` is `true`), the success message "We are happy to have you!" is rendered instead of the login form.

---

## How to Run

1. Clone this repository.
2. Install dependencies by running `npm install` in the project folder.
3. Start the project using `npm start`.
4. Navigate to `http://localhost:3000` to see the login form.
5. Use any username and the correct password (`12345`) to see the success message.

---

## Future Enhancements

- **Backend Integration**: Add real user authentication via a backend API.
- **Password Hashing**: Implement secure password handling with hashing techniques.
- **Form Validation**: Add more comprehensive validation for inputs like email format or password strength.
