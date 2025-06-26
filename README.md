# NPO CMS Backend

Built with Node.js, Express, MongoDB, JWT Auth, and Cloudinary.

## Technologies

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT + bcrypt
- **Media Upload**: Cloudinary
- **Tools**: Postman, MongoDB Compass


### 🔐 API Security and Roles

- **JWT Auth** using `protect` middleware
- **Role-based Access** using `authorizeRoles('admin', 'editor')`
- **Profile**: 
  - `GET /api/users/me` – returns user profile
  - `PUT /api/users/me` – update name or email
- **Input Validation**: Uses `express-validator` to check required fields and input safety

### 👥 User Roles
- `admin`: full access to all resources
- `editor`: content creation and management
- `viewer`: read-only access to dashboard data


## API Routes

| Method | Endpoint              | Description             | Auth Required |
|--------|-----------------------|-------------------------|---------------|
| GET    | /api/projects         | Get all projects        | No            |
| POST   | /api/projects         | Create project          | Yes           |
| GET    | /api/blogs            | List blog posts         | No            |
| POST   | /api/blogs            | Create blog post        | Yes           |
| GET    | /api/events           | Upcoming events         | No            |
| POST   | /api/events           | Add event               | Yes           |
| GET    | /api/pages/:slug      | Dynamic content page    | No            |

## Setup

```bash
npm install
npm run dev
