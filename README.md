# Test

A modern React application demonstrating user management with API integration, state management, and modular component architecture.

## Features

- **User Management:** Fetch, cache, and display users from a remote API.
- **State Management:** Uses [Zustand](https://zustand-demo.pmnd.rs/) for global state.
- **API Layer:** Abstracted API calls for maintainability and scalability.
- **Component-Based UI:** Reusable components for user cards, loading spinners, and error messages.
- **Routing:** Client-side routing with React Router.
- **Styling:** Modular SCSS with variables and mixins for maintainable styles.
- **LocalStorage Caching:** Reduces unnecessary API calls by caching users.

## Project Structure

```
<code>
src/
│   App.jsx
│   main.jsx
│
├───api/                # API abstraction layer
│       baseApi.js
│       UsersApi.js
│
├───assets/             # Static assets (images, fonts, etc.)
│
├───components/         # Reusable UI components
│   ├───ErrorMessage/
│   ├───LoadingSpinner/
│   └───UserCard/
│
├───config/             # App configuration (endpoints, etc.)
│
├───features/           # Feature-specific modules
│   └───users/
│
├───layouts/            # Layout components
│
├───pages/              # Top-level pages
│
├───routes/             # App route definitions
│
├───stores/             # Zustand stores for state management
│
└───styles/             # Global and modular SCSS
    ├───base/
    ├───mixins/
    └───variables/
</code>
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/IceMenethil/react-users-vite-demo.git
cd react-users-vite-demo
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as specified in your Vite config).

### Building for Production

```bash
npm run build
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Key Files

- **`src/stores/useUsersStore.js`**  
  Zustand store for user state, including localStorage caching logic.
- **`src/api/UsersApi.js`**  
  Handles all user-related API requests.
- **`src/components/UserCard/`**  
  Displays individual user information.
- **`src/features/users/UsersPage.jsx`**  
  Main page for listing users.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

[MIT](LICENSE)

---
