# web-development
This is a repo for all the web development projects.

Overview :-
This React application is a multi-page web application using React Router for navigation. It includes authentication handling, allowing different user experiences based on the login state. The application features various pages like Login, Register, Home, About, and more, including admin and delivery partner dashboards.

Components :-

'App'

The main component that orchestrates the application. It uses React Router for handling routing within the application.

STATES:

isLoggedIn: A boolean state that tracks whether a user is logged in or not.

FUNCTIONS:

handleLogin(): Sets isLoggedIn to true.
handleLogout(): Sets isLoggedIn to false.

ROUTES:

Public Routes: Accessible without login (Login, Register, ForgotPassword).

Private Routes: Accessible only when isLoggedIn is true (MainPage, Home, About, etc.).

Redirect: Non-logged-in users trying to access private routes are redirected to the Login page.

LoginPage, RegisterPage, ForgotPasswordPage :-
These components handle user authentication processes like logging in, registering, and password recovery.

MainPage, Home, About, Jobs, Profile :-
These are content pages accessible after successful login, providing various functionalities and information:

MainPage: The main landing page after login.
Home: A general home page.
BookingForm, MenuTab, CheckoutPage
These components offer specific functionalities:

BookingForm: For making bookings or reservations.
MenuTab: Navigation or additional options.
CheckoutPage: Handles checkout processes.
AdminDashboard, DeliveryPartnerDashboard
Specialized dashboard components for different user roles:

AdminDashboard: For administrative tasks and management.
DeliveryPartnerDashboard: For delivery partners to manage deliveries.

NAVIGATION FLOW : 

There are 3 different types of users/admins 

1. Admin - As an admin I can login to the application 
           I get a seperate admin specific dashboard where I can view and search the Table reservations 

2. Customer - While registering there is an option to select the role as 'Customer' 
              As a customer I can login to the application 
              I get a seperate customer specific dashboard where I can see the Menu Tab , Reserve a Table options on the nav bar
              I get to Add items to the cart 
              I get to do a checkout 
              We've also included payment gateway 

3. Delivery Partner -As an Delivery Partner I can login to the application 
           I get a seperate specific dashboard where I can view and search the Order details 





FEATURES :-

User Authentication: Users can log in by providing their email and password.

Forgot Password: A link to a forgot password page for users who need to reset their passwords.

New User Registration: A link for new users to navigate to the registration page.

Dynamic Navigation: Depending on the user's role, after successful login, the user is navigated to different dashboards (AdminDashboard, DeliveryPartnerDashboard, or the main dashboard).

COMPONENT STRUCTURE

State Variables :-
email: Stores the user's email.

password: Stores the user's password.

role: Stores the user's role (not currently used in the form but prepared for future implementation).

loading: Indicates whether a request is being processed.

error: Stores any error messages received.

showForgotPasswordModal: Boolean to control the display of the forgot password modal (not currently implemented in the UI).
Methods:

handleSignIn: Handles the sign-in process, including validation and navigation based on the user's role.
Form Submission:

The form submission is handled by the handleSignIn method, which prevents the default form submission behavior, makes a POST request to the server, and navigates the user based on the response.

USAGE

Login Form:

Users need to enter their email and password. Upon clicking the 'Sign in' button, authentication is performed.
If credentials are valid, users are redirected to the appropriate dashboard.

Links for Additional Actions:

Users can navigate to the 'Forgot Password' page or the 'Register' page using the provided links.

Styling:

The component uses CSS for styling, defined in LoginPage.css.


REGISTERPAGE COMPONENT OVERVIEW :

The RegisterPage component is a React-based component used in a web application for user registration. This component provides a form where users can enter their email, full name, password, and select their role. It includes validation for email, password, and full name, and communicates with a backend server to register the user.

FEATURES :-

User Registration Form: Allows new users to register by providing their email, full name, password, and role.

Field Validation: Includes basic validation for email, password, and full name.

Role Selection: Users can choose their role from predefined options (e.g., Customer, Delivery Partner).

Server Communication: Communicates with a backend server to register the user.

COMPONENT STRUCTURE :-
useState Hooks:

regEmail: Stores the user's registration email.

regPassword: Stores the user's registration password.

fullname: Stores the user's full name.

role: Stores the user's role.

VALIDATION FUNCTIONS:

validateEmail: Validates the email format using a regular expression.

validatePassword: Validates the password length (minimum 6 characters).

validateFullName: Validates the full name length (minimum 4 characters).

EVENT HANDLERS:

handleRegister: Handles the registration process on form submission.

Styling:

The component uses CSS for styling, defined in LoginPage.css.
Usage
Registration Form:

Users fill in their email, full name, password, and select a role.
The form includes validation for each field.

Registration Process:

Upon submission, handleRegister is invoked.
The function validates the input fields. If validation fails, it alerts the user.
If validation passes, a POST request is sent to http://localhost:3000/user/create.
On successful registration, the user is alerted and redirected to the login page.

Error Handling:

Handles network errors and registration errors, logging them to the console.
Integration with Backend
The component sends a POST request to http://localhost:3000/user/create.
The request body includes the email, full name, password, and role of the user.
The backend should handle this request by creating a new user record and returning a suitable response.
Security Considerations
Ensure secure transmission of data, especially for passwords.
Implement further validation and error handling as needed.
Additional Notes
The className attribute in the top-level div tag should be className, not classNameName.
The login link at the bottom of the form does not have a href attribute pointing to the login route. This should be implemented for proper navigation.
The component currently assumes a successful registration redirects to the main page, which may need adjustment based on user flow.
