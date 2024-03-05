### Blog App

This is a full-stack web application for managing a blog. It allows users to create, read, update, and delete blog posts, as well as interact with other users through comments and likes.

## **Project Deployment Lin**k: -

[https://blog-app-4x0y.onrender.com/](https://blog-app-4x0y.onrender.com/)

#### Technologies Used:

- **Frontend:**

  - React.js
  - Redux for state management
  - Flowbite-React for UI components
  - React Router for routing
  - Tailwind CSS for styling
  - Moment.js for date formatting
  - React Icons for iconography
- **Backend:**

  - Node.js with Express.js for the server
  - MongoDB for the database
  - Mongoose for object modeling
  - JWT for user authentication
  - Bcrypt for password hashing

#### Features:

- **User Authentication:** Users can sign up, sign in, and sign out securely using JWT tokens.
- **Blog Management:**

  - Create, read, update, and delete blog posts.
  - Users can upload images for their blog posts.
- **Commenting System:** Users can comment on blog posts and interact with other users' comments through likes.
- **Admin Panel:** Administrators have access to a dashboard where they can view and manage users, comments, and posts.

#### Installation:

1. Clone the repository:

   ```
   git clone https://github.com/Soumik-Abir/Blog-app.git
   ```
2. Navigate to the project directory:

   ```
   cd Blog-app
   ```
3. Install dependencies:

   ```
   npm install
   ```
4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```
5. Run the application:

   ```
   npm start
   ```

#### Usage:

- Visit `http://localhost:3000` in your web browser to access the application.
- Sign up for a new account or use the provided credentials to sign in.
- Explore the blog, create new posts, comment on existing posts, and interact with other users.

#### Credits:

This project is created and maintained by [Soumik Abir](https://github.com/Soumik-Abir).

Feel free to contribute by submitting bug reports, feature requests, or pull requests. We appreciate your feedback and contributions!
