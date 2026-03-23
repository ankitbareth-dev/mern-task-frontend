# Frontend Setup

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ankitbareth-dev/mern-task-frontend
cd frontend
npm install
```

## Environment Configuration

Create a `.env` file in the root of the frontend project:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Update the URL if your backend runs on a different .

## Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## Notes

- Ensure the backend server is running before using the app.
- The frontend depends on the following API endpoints:
  - `POST /api/ask-ai`
  - `POST /api/save`
