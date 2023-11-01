# Postbox

Postbox is a social media platform that allows users to share thoughts, articles, and engage in discussions. This platform is built using Next.js, NextAuth for authentication, and various integrations for services such as GitHub, Google, Cloudinary, and Pusher.

## Installation

To get started with the Postbox project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Ghanemla/postbox.git
cd postbox
```

### 2. Set up Environment Variables

Create a `.env` file in the root directory of the project. Add the following environment variables and obtain their respective values:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_ID=
PUSHER_SECRET=
```

Make sure to fill in the values for these variables according to your setup and configurations. This file is crucial for the proper functioning of the application.

## Environment Variables

- `DATABASE_URL`: Your database connection URL.
- `NEXTAUTH_SECRET`: Secret key for NextAuth authentication.
- `GITHUB_ID` and `GITHUB_SECRET`: API keys for GitHub authentication.
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: API keys for Google authentication.
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for image handling.
- `NEXT_PUBLIC_PUSHER_APP_KEY`: Pusher app key for real-time functionality.
- `PUSHER_ID` and `PUSHER_SECRET`: Pusher API keys for real-time functionality.

### 3. Install Dependencies

```
npm install
# or
yarn install
```

### 4. Run the Application

```
npm run dev
# or
yarn dev
```

This will start the development server. You can view the application by visiting `http://localhost:3000`.

## Routing in the API Folder

The API folder within this project contains Next.js API routes, which handle various server-side functionalities and serve as endpoints for the application. These routes are responsible for managing data retrieval, authentication, and other backend operations.

## Demo

For a live demo of the Postbox application, you can visit [Postbox Live Demo](https://postbox-kappa.vercel.app/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE).
