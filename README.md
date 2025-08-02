# GeozillaTest

A minimal React + Vite project demonstrating user listing and detail pages, using Zustand for state management, Axios for API calls, and React Router for routing.

---

## Project Structure

src/
├── App.jsx
├── main.jsx
├── api/
│ ├── baseApi.js
│ └── UsersApi.js
├── assets/
├── components/
│ └── UserCard.jsx
├── config/
│ └── endpoints.js
├── features/
│ └── users/
│ ├── UserDetailPage.jsx
│ └── UsersPage.jsx
├── layouts/
│ └── MainLayout.jsx
├── pages/
│ ├── AboutPage.jsx
│ └── NotFoundPage.jsx
├── routes/
│ └── AppRoutes.jsx
├── stores/
│ └── useUsersStore.js
└── styles/
└── index.css

---

## Key Files & Directories

- **src/App.jsx**: Main app component, sets up routing and layout.
- **src/main.jsx**: Entry point, renders the app.
- **src/api/**: API abstraction using Axios.
  - [`baseApi.js`](src/api/baseApi.js): Base API class with Axios instance.
  - [`UsersApi.js`](src/api/UsersApi.js): User-specific API methods.
- **src/components/UserCard.jsx**: Card component for displaying user info.
- **src/config/endpoints.js**: API endpoint constants.
- **src/features/users/**: User-related pages.
  - [`UsersPage.jsx`](src/features/users/UsersPage.jsx): User list with filter.
  - [`UserDetailPage.jsx`](src/features/users/UserDetailPage.jsx): User detail view.
- **src/layouts/MainLayout.jsx**: App layout with navigation.
- **src/pages/**: Static pages (About, Not Found).
- **src/routes/AppRoutes.jsx**: Route definitions.
- **src/stores/useUsersStore.js**: Zustand store for user state.
- **src/styles/index.css**: Global styles and CSS reset.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install Dependencies

```sh
npm install
```

API
By default, the app fetches users from JSONPlaceholder.
You can override the API base URL by setting the REACT_APP_API_BASE_URL environment variable in a .env file at the project root.

Features
User list with filter
User detail page
Zustand for state management
Axios for HTTP requests
React Router v7 for routing
Minimal global styling
