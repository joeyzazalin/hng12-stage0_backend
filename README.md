# HNG12 Stage 0 Backend Task

A simple REST API that returns basic information including email, current datetime, and GitHub repository URL.

## Description

This project is a backend API implementation for the HNG12 internship Stage 0 task. It provides a single endpoint that returns specific information in JSON format.

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/joeyzazalin/hng12-stage0_backend
cd your-repo
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional):
```bash
PORT=3000
```

4. Run the application:
- For development: `npm run dev`
- For production: `npm start`

## API Documentation

### Endpoint

- URL: `GET /`
- Description: Returns basic information including email, current datetime, and GitHub URL

### Response Format

```json
{
  "email": "medlertimmie841@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/joeyzazalin/hng12-stage0_backend"
}
```

### Sample Usage

```bash
curl https://your-deployed-url.com/
```

## Deployment

This API is deployed on [Your Deployment Platform] and can be accessed at:
[Your Deployed URL]

## Related Resources

For more information about Node.js development opportunities, visit:
[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)