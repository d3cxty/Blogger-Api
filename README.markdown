# Blog API

A RESTful API and frontend for a blog application built with Node.js, Express, MongoDB, and React. Supports user authentication with JWT, role-based access control (author/admin), and CRUD operations for blogs and categories.

## Team Members
- [Your Name]: Auth routes, middleware, tests, frontend login/register
- [Partner Name]: Blog/category controllers, routes, frontend blog features

## Setup Instructions

### Backend
1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd blog-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `config/default.json` file with:
   ```json
   {
       "mongoURI": "mongodb://localhost:27017/blog-api",
       "jwtSecret": "your_jwt_secret_key_here",
       "port": 5000
   }
   ```
4. Start MongoDB locally or use a cloud instance.
5. Run the server:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```
6. Run tests:
   ```bash
   npm test
   ```

### Frontend
1. Place `index.html` in a web server directory (e.g., use `npx serve` or a simple HTTP server).
2. Ensure the backend is running at `http://localhost:5000`.
3. Open `index.html` in a browser or access via the web server (e.g., `http://localhost:3000`).

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user (returns JWT)
- `POST /api/auth/login` - Login user (returns JWT)

### Users
- `GET /api/users/me` - Get logged-in user details
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user (own account or admin)
- `DELETE /api/users/:id` - Delete user (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get specific category
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get specific blog
- `POST /api/blogs` - Create blog (authors only)
- `PUT /api/blogs/:id` - Update blog (original author or admin)
- `DELETE /api/blogs/:id` - Delete blog (original author or admin)
- `GET /api/blogs/category/:categoryId` - Get blogs by category

## Database Schema
- **User**: `{ username: String, email: String, password: String, role: String (author/admin), createdAt: Date }`
- **Blog**: `{ title: String, content: String, author: ObjectId (ref: User), category: ObjectId (ref: Category), createdAt: Date, updatedAt: Date }`
- **Category**: `{ name: String, description: String, createdAt: Date }`

## Testing
- Backend tests use Jest and Supertest.
- Run `npm test` to execute the test suite.
- Postman/Thunder Client collection is provided in `BlogAPI.postman_collection.json`.

## Frontend
- Built with React and Tailwind CSS.
- Features: View blogs/categories, register/login, create blogs (authors), manage categories/users (admins).
- Runs directly in the browser via `index.html`.

## Contributions
- [Your Name]: Auth routes, middleware, Jest tests, Postman collection, frontend login/register
- [Partner Name]: Blog/category controllers, routes, database schema, frontend blog features