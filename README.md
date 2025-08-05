# GeozillaTest

A minimal React + Vite project demonstrating user listing and detail pages, using Zustand for state management, Axios for API calls, and React Router for routing.

---

## 🗂️ Project Structure
<code>
src/
│   App.jsx
│   main.jsx
├───api
│       baseApi.js
│       UsersApi.js
├───assets
├───components
│       UserCard.jsx
│       UserCard.module.scss
├───config
│       endpoints.js
├───features
│   └───users
│           UserDetailPage.jsx        
│           UserDetailPage.module.scss
│           UsersPage.jsx
│           UsersPage.module.scss    
├───layouts
│       MainLayout.jsx
│       MainLayout.module.scss
├───pages
│       AboutPage.jsx
│       NotFoundPage.jsx
├───routes
│       AppRoutes.jsx
├───stores
│       useUsersStore.js
└───styles
    │   index.scss
    ├───base
    │       _reset.scss
    ├───mixins
    │       _media.scss
    └───variables
            _breakpoints.scss
            _colors.scss
</code>
---

🗂️ Key Files & Directories
src/App.jsx — Root component, initializes layout and routing.
src/main.jsx — App entry point, renders <App />.

📦 API
src/api/ — Axios-based API logic.
baseApi.js — Axios instance with base config.
UsersApi.js — Methods to fetch user data.

🧩 Components
src/components/UserCard.jsx — Reusable UI card component for user preview.
UserCard.module.scss — SCSS module styles scoped to the UserCard component.

⚙️ Config
src/config/endpoints.js — Centralized API endpoint definitions.

🔧 Features
src/features/users/ — Feature-based folder for user-related logic.
UsersPage.jsx — Page for listing and filtering users.
UserDetailPage.jsx — Page for viewing individual user details.
*.module.scss — Scoped styles for each page.

🧱 Layouts
src/layouts/MainLayout.jsx — Shared app layout with navigation.
MainLayout.module.scss — Styles for layout elements.

📄 Pages
src/pages/AboutPage.jsx — Static "About" page.
src/pages/NotFoundPage.jsx — 404 fallback page.

🛣 Routing
src/routes/AppRoutes.jsx — React Router DOM route definitions.

🗂 State Management
src/stores/useUsersStore.js — Zustand store for managing user state.

🎨 Styles
src/styles/index.scss — Global SCSS entry point (resets, variables, mixins).
base/_reset.scss — Basic CSS reset using SCSS.
mixins/_media.scss — Responsive mixins using breakpoints.
variables/ — Project-wide variables:
_colors.scss — Color system.
_breakpoints.scss — Responsive breakpoints.

---

## 🎨 SCSS Integration

- SCSS was implemented for better style structure and maintainability.
- Global styles are placed in `src/styles/`, including:
  - `variables/` for colors, spacing, breakpoints
  - `mixins/` for media queries, utility helpers
  - `base/_reset.scss` for CSS reset
- Component-level styling uses SCSS Modules (`*.module.scss`) for local scope.

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
SCSS for modular styling
Responsive layout via SCSS mixins
