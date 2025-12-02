### Full-Stack Chat App with Image Compression

A real-time chat application built with React frontend, Node.js backend, and WebSockets for instant messaging. Supports image compression to optimize file uploads and reduce bandwidth usage during conversations.​

### Features

Real-time messaging using Socket.IO WebSockets.
Image upload with automatic compression (client-side processing).
User authentication and online status indicators.
Responsive UI with modern React components.
Private and group chat rooms.
Tech Stack
## Frontend

React with hooks and modern conventions
Tailwind CSS for styling.
Socket.IO client for real-time communication.

### Backend

Node.js and Express.js for API endpoints.
Socket.IO for WebSocket handling.
Image compression middleware (e.g., sharp or canvas).

### Installation

Clone the repository:
```
git clone
cd conversicats
```

## Backend setup:

```
cd server
npm install
cp .env.example .env
npm run dev
```

### Frontend setup:

```
cd ../clientnpm installnpm run dev
```

### Usage

Start both backend (npm run dev in /backend) and frontend (npm run dev in /frontend).

Open http://localhost:3000 in your browser.

Register/login, join a chat room, and send messages or compressed images.

Images auto-compress before upload for faster transmission.


### Environment Variables

Create .env files in both backend and frontend with:
```
PORT=5000NODE\_ENV=developmentMONGODB\_URI=your\_mongo\_connection\_stringJWT\_SECRET=your\_jwt\_secret
```

Image Compression

Images compress client-side using browser Canvas API or libraries like browser-image-compression. Reduces file size by 70-90% while maintaining quality before Socket.IO transmission.
