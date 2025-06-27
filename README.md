

# 📦 NPO CMS Backend

A content management backend for nonprofit organizations built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.

---

## 🚀 Tech Stack

| Layer        | Technologies             |
| ------------ | ------------------------ |
| **Backend**  | Node.js + Express        |
| **Database** | MongoDB (via Mongoose)   |
| **Auth**     | JWT + bcrypt             |
| **Tools**    | Postman, MongoDB Compass |

---

## 🔐 Authentication & Access Control

* **JWT Authentication** using `protect` middleware
* **Role-Based Access Control (RBAC)** via `authorizeRoles('admin', 'editor')`
* **User Profile Routes**:

  * `GET /api/users/me` – Get authenticated user profile
  * `PUT /api/users/me` – Update user’s name or email
* **Input Validation** via `express-validator` for input safety and structure

---

## 👥 User Roles

| Role     | Permissions                        |
| -------- | ---------------------------------- |
| `admin`  | Full access to all resources       |
| `editor` | Create and manage content          |
| `viewer` | Read-only access to dashboard/data |

---

## 🧪 Input Validation

Using [`express-validator`](https://express-validator.github.io/) for all routes to ensure valid input data.

| Feature          | Method | Endpoint          | Required Fields                      |
| ---------------- | ------ | ----------------- | ------------------------------------ |
| **Team Members** | POST   | `/api/team/`      | `name`, `title`, `bio`               |
|                  | PUT    | `/api/team/:id`   | Optional: `name`, `title`, `bio`     |
| **Pages**        | POST   | `/api/pages/`     | `title`, `slug`, `content`           |
|                  | PUT    | `/api/pages/:id`  | Optional: `title`, `slug`, `content` |
| **Blog Posts**   | POST   | `/api/blog/`      | `title`, `slug`, `content`           |
|                  | PUT    | `/api/blog/:id`   | Optional: `title`, `slug`, `content` |
| **Events**       | POST   | `/api/events/`    | `name`, `date`, `location`, `desc`   |
|                  | PUT    | `/api/events/:id` | Optional: all fields above           |
| **User Profile** | PUT    | `/api/users/me`   | Optional: `name`, `email`            |

### Example Validation Error Response

```json
{
  "errors": [
    {
      "msg": "Field is required",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

---

## 📡 API Routes Overview

| Method | Endpoint           | Description              | Auth Required |
| ------ | ------------------ | ------------------------ | ------------- |
| GET    | `/api/projects`    | Retrieve all projects    | ❌ No          |
| POST   | `/api/projects`    | Create new project       | ✅ Yes         |
| GET    | `/api/blogs`       | Get list of blog posts   | ❌ No          |
| POST   | `/api/blogs`       | Create new blog post     | ✅ Yes         |
| GET    | `/api/events`      | Get upcoming events      | ❌ No          |
| POST   | `/api/events`      | Add new event            | ✅ Yes         |
| GET    | `/api/pages/:slug` | Get dynamic page content | ❌ No          |

---

## ⚙️ Environment Setup

Create a `.env` file in the root of the project:

```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
```

* `MONGO_URI`: Your MongoDB connection string (e.g. from Atlas or local instance)
* `JWT_SECRET`: A secret string used for signing JWTs
* `JWT_EXPIRE`: Token expiration (e.g. `30d` for 30 days)

---

## 🚀 Deployment

### 🐳 Docker (Optional)

If you're using Docker:

```bash
docker build -t npo-cms-backend .
docker run -p 5000:5000 --env-file .env npo-cms-backend
```

### 🟩 Vercel / Netlify (Frontend)

For frontend deployments (React), connect your repo to **Vercel** or **Netlify**, and ensure that it points to the correct backend API URLs.

### 🌐 Heroku / Railway / Render (Backend)

1. Push your project to GitHub
2. Link to a platform like [Render](https://render.com), [Railway](https://railway.app), or [Heroku](https://heroku.com) (We have more options at the bottom of this read me)
3. Set the same environment variables in their dashboard
4. Make sure your frontend references the deployed backend URL


## 🧰 Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `npm install` | Install dependencies       |
| `npm run dev` | Start server in dev mode   |
| `npm start`   | Start server in production |

---

# Bonus: 

## Tech Nonprofit Discounts

[GitHub for Good](https://github.com/social-impact) – Free GitHub Team/Pro

[Google for Nonprofits](https://www.google.com/nonprofits/) – Workspace, YouTube credits

[Microsoft for Nonprofits](https://nonprofit.microsoft.com/en-us/getting-started) – Azure credits

[AWS Activate for Nonprofits](https://aws.amazon.com/government-education/nonprofits/?ps-events.sort-by=item.additionalFields.startDateTime&ps-events.sort-order=asc) – AWS credits for infra

## 🏆 Best Tech Combinations for NPOs

| Backend Platform | Frontend Platform | DB Host       | Notes                              |
| ---------------- | ----------------- | ------------- | ---------------------------------- |
| Railway (Free)   | Vercel (Free)     | MongoDB Atlas | Easiest setup, mostly free         |
| Render (Free)    | Netlify (Free)    | MongoDB Atlas | Stable, nonprofit-friendly         |
| Fly.io (Free)    | Vercel            | MongoDB Atlas | Powerful, but more technical setup |

