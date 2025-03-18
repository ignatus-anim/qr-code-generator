# QR Code Generator (React + Vite)

A simple web application built with React and Chakra UI to generate QR codes easily.

## 🚀 Features

- Generate QR codes instantly
- Customize QR code colors
- Download QR codes as images
- Responsive UI with Chakra UI

## 🛠 Tech Stack

- **Frontend:** React, Vite, Chakra UI, Framer Motion
- **Testing:** Jest, Testing Library
- **Linting:** ESLint
- **Containerization:** Docker

## 📦 Setup & Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/godcandidate/qr-code-generator.git
   cd frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run in development mode:**

   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

## 🐳 **Run with Docker**

1. **Build the Docker image:**

   ```sh
   docker build -t qr-code-generator .
   ```

2. **Run the container:**
   ```sh
   docker run -p 80:80 qr-code-generator
   ```

## ✅ **Testing**

Run tests using:

```sh
npm run test
```

## 📜 **License**

This project is open-source and available under the MIT License.
