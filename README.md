
## UC Tutors - "Connecting Students, Empowering Learning."

## Meet the Developers

Joshua Beed - I am the Lead Developer for UC Tutors. I collborated in the planning, designing, and  implemention of  features, both on the frontend and backend, for the application such as authentication, recommendation system, and message system to name a few. I also designed the database schemas and served as the database administrator. Finally I acted as a solo backend developer and was reponsible for making decisions for the overall system.

Aidan Ching - I implemented the dashboard, administrator panel, as well as the review system.

Jason Guan -  I designed the login page and built the messaging system for UC Tutors. I focused on creating a user-friendly login experience and ensuring smooth communication between users.

Joseph Flores - I am the front-end developer for the signup page, the filter, and the settings components. I ensured the styling and the variables communicated across servers were consistent and properly named.


## What is UC Tutors?

This app allows UC students to get paired with other students on campus who feel they understand the material well enough to tutor others. We have seen how some upper and lower division classes can be tough for students, and some schools do not offer tutoring for certain courses. They mainly focus on the notoriously difficult ones and leave some other classes without tutors. With our app, we aim to bridge that gap and make it easier for students to help each other.


## Tools & Technologies Used

- Figma
- React
- MongoDB
- Express
- Node JS

## Features

**Log In:**

-   Users can login to their respective accounts using Google Login. Once logged in, they are either redirected to the Sign Up page or dashboard.

**Sign Up:**

-  The Sign Up page consist of a form where a user can enter information about themselves so that the system can recommend students or tutors to them. This inforation is further used in the information system as well. 

**Dashboard:**

- The Dashboard consists of a filter section and recommeded user section where the user can view students they match with based off of the filter or the recommendation system.

**Chat Catalog:**

-   Features chat rooms where a user can directly communicate with a student or tutor.

**Database:**

-   Used MongoDB.
-   Contains user information such as their name, what UC they attend, their chat history, reviews, the subject they need help with the most, their current grade level, whether or not they want to attend a session online or in person, and descriptions of themselves.
-   The database also contains admin information as well as session information.

**Recommendation System:**

- Based on the information we collect about the user, we use a metric to score the potential quality of the student or tutor match. The scoring ranges from 0 (least compatible/able to help the user learn the material) to 5 (most compatible/able to help the user learn the material). We then sort the results, putting the most compatible student at the top of the list and the least compatible student at the bottom, and return that list to the user. As needs change, we can easily fine-tune the recommendation system. This is used when there are no filters turned on in the filter part of the application.

## Final Design


### Login Page

<img width="1279" alt="login-page" src="https://github.com/jbeed33/cs110_project/assets/70536517/22bd5902-41e6-48c2-87da-044fe8ea2256">


### Sign-Up

<img width="1280" alt="sign-up" src="https://github.com/jbeed33/cs110_project/assets/70536517/8eabc933-2ea9-48f5-a6cf-1995b7e0ca6a">


### Settings

<img width="1280" alt="settings page" src="https://github.com/jbeed33/cs110_project/assets/70536517/270ca229-8054-4459-b12b-a4b26e04cf11">


### Dashboard

<img width="1280" alt="dashboard" src="https://github.com/jbeed33/cs110_project/assets/70536517/0b5046b4-191d-4f19-ae94-5e8d4dc79569">

### Chat Rooms

<img width="1280" alt="message" src="https://github.com/jbeed33/cs110_project/assets/70536517/348a51be-3e8d-4aa9-a421-04a74894662e">

### Admin

<img width="1276" alt="admin panel" src="https://github.com/jbeed33/cs110_project/assets/70536517/d3fce62b-175f-4454-97f6-79367117ec4a">


### Reviews

<img width="1280" alt="reviews" src="https://github.com/jbeed33/cs110_project/assets/70536517/837c5a4b-ef35-4b87-a1ce-b04ab3681d48">


## Setup Instructions

### Step 1: Download the Repository

1. Download the GitHub repository to your local system.

### Step 2: Start the Frontend

1. Navigate to the project folder on your local system.
2. Ensure you are in the `cs110-project` directory.
3. Run the following commands to install dependencies and start the frontend:

    ```bash
    npm install
    npm install axios
    npm start
    ```

### Step 3: Prepare the Backend

1. Create a `.env` file in the `backend` folder.
2. Paste the content from the provided document into the `.env` file. Note that you may need to request access to the document. 

    [Access .env File Information](https://docs.google.com/document/d/14rPbs5nc9ZmLm78AERuZGk32V3H1XIjZuTvc99qEq5U/edit?usp=sharing)

### Step 4: Start the Backend

1. Navigate to the `backend` directory.
   
    ```bash
    cd backend
    ```
    Note: your path should look something like "<path>/cs110-project/backend" now.
    
2. Run the following commands to install dependencies and start the backend server:

    ```bash
    npm install
    node server.js
    ```

If all steps were followed correctly, you should now have access to UC Tutor!



