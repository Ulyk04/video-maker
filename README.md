# Video Maker

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007800?style=for-the-badge&logo=ffmpeg&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

---

## Project Overview

Welcome to **Video Maker**! This project provides a simple web application for uploading and performing basic editing (trimming) of video files. The frontend is built with **React**, offering a user-friendly interface, while the backend leverages **Node.js** with **Express.js** to handle video processing using the powerful **FFmpeg** library.

The core functionality allows users to:
1.  **Upload** a video.
2.  **Edit** the video by specifying start and end times for trimming.
3.  **Download** the trimmed video.

---

## Features

* **Video Upload:** Easily upload video files from your local machine.
* **Intuitive Editing Interface:** A simple interface to define video trimming segments.
* **Backend Video Processing:** Efficient video trimming handled by FFmpeg on the server-side.
* **Download Edited Videos:** Get your processed videos directly from the application.

---

## Technologies Used

### Frontend (`client-side`)

* **React:** A JavaScript library for building user interfaces.
* **Material-UI (MUI):** A popular React UI framework for beautiful and responsive designs.
* **`@toolpad/core`:** Used for the dashboard layout and routing.

### Backend (`server-side`)

* **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **`fluent-ffmpeg`:** A Node.js wrapper for FFmpeg, making it easy to interact with the FFmpeg command-line tool.
* **FFmpeg:** The essential open-source multimedia framework for handling video, audio, and other multimedia files and streams.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended)
    * [Download Node.js](https://nodejs.org/en/download/)
* **npm** or **Yarn** (Node.js package managers)
    * npm comes with Node.js.
    * [Install Yarn](https://yarnpkg.com/getting-started/install)
* **FFmpeg** (Crucial for video processing on the backend)
    * **Linux (Debian/Ubuntu):** `sudo apt update && sudo apt install ffmpeg`
    * **macOS (with Homebrew):** `brew install ffmpeg`
    * **Windows:** [Download FFmpeg](https://ffmpeg.org/download.html) and add it to your system's PATH. Refer to the FFmpeg official documentation or online guides for detailed Windows installation steps.
    * Verify FFmpeg installation by running `ffmpeg -version` in your terminal.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/video-maker.git](https://github.com/YOUR_USERNAME/video-maker.git)
    cd video-maker
    ```

2.  **Install Frontend Dependencies:**

    Navigate into the `client-side` directory and install the necessary packages.

    ```bash
    cd client-side
    npm install # or yarn install
    ```

3.  **Install Backend Dependencies:**

    Navigate into the `server-side` directory and install the necessary packages.

    ```bash
    cd ../server-side
    npm install # or yarn install
    ```

---

## Running the Application

You'll need to run both the backend server and the frontend React application simultaneously.

1.  **Start the Backend Server:**

    From the `server-side` directory:

    ```bash
    npm start # or node index.js
    ```

    The server will typically run on `http://localhost:5000`.

2.  **Start the Frontend Application:**

    Open a **new terminal window**, navigate back to the `client-side` directory:

    ```bash
    cd ../client-side
    npm start
    ```

    The React app will typically open in your browser at `http://localhost:3000`.

---

## Usage

1.  **Upload:** On the "Upload" page, select a video file and enter a title. Click "Next: Edit" to proceed.
2.  **Edit:** On the "Edit" page, click "Edit" to bring up the video editor. Here you can specify the start and end times for trimming. After applying edits, the processed video will be displayed.
3.  **Export:** Click "Next: Export" to go to the "Export" page, where you can download your final edited video.

---

## Project Structure
  ``` bash
      video-maker/
    ├── client-side/               # React frontend application
    │   ├── public/
    │   ├── src/
    │   │   ├── component/         # Reusable React components (Upload, Edit, Export, VideoEditor)
    │   │   ├── MainPage.jsx       # Main application layout and routing
    │   │   └── App.js             # Main React component
    │   │   └── index.js           # Entry point for the React application
    │   ├── package.json
    │   └── ...
    ├── server-side/               # Node.js Express backend
    │   ├── uploads/               # Directory for uploaded videos
    │   ├── processed_videos/      # Directory for edited videos
    │   ├── index.js               # Main server file with API endpoints
    │   ├── package.json
    │   └── ...
    └── README.md
```
---

## Contributing

Feel free to fork this repository, submit pull requests, or open issues. Any contributions are welcome!

---

## License

(Add your license information here, e.g., MIT License, if applicable)

---
