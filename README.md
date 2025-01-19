# Nodemailer Secure O365 App Password

A Node.js application for sending emails through Office 365 using Nodemailer, with an **App Password** instead of your main account password. This is especially handy if you use multi-factor authentication (MFA) and want to keep your primary credentials secure.

## Features

- Sends emails via Office 365 (smtp.office365.com, port 587).
- Uses **App Password** rather than your main password.
- Simple setup with **Express** + **Nodemailer**.
- Includes CORS and body-parser out of the box.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- Office 365 account with **App Password** generated
- Basic knowledge of using the command line/terminal

### Generate an App Password

1. Log in to [Microsoft 365](https://office.com).  
2. Go to **My Account** → **Security Info** → **Add Method**.  
3. Select **App Password**, generate one, and store it securely.  
4. Use this app password instead of your main account password.

---

## Installation

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/your-username/nodemailer-secure-o365-app-password.git
   cd nodemailer-secure-o365-app-password
2. **Install Dependencies:**
    ```bash
    npm install
This will install:
- **express** for the web server
- **nodemailer** for sending email
- **body-parser** for parsing JSON bodies
- **cors** for cross-origin resource sharing
3. **Update** the **Server.js** with your **Office 365** email and **App Password**:
    ```js
    auth: {
    user: 'your_email@domain.com',
    pass: 'your_app_password'
    }
## Usage
1. **Start the Server:**
    ```bash
    npm start
or
    
    
    node Server.js

 
By default, the server listens on port **5000** (or whatever is set in the code).

2. **Send a Test Request:**
Use a tool like **Postman**, **cURL**, or any **HTTP** client to send a **POST** request to:

    ```
    http://localhost:5000/send-email
with a **JSON** body, for example:

    
    {
    "to": "recipient@example.com",
    "subject": "Test Email",
    "text": "Hello from Node.js and Office 365!"
    }
    

3. **Check the response:**
- If successful, you’ll see a JSON message like "Email sent: ..."
- Check the email inbox of your recipient to confirm delivery.

---

## Configuration
- **Port**: Set the PORT in your environment or modify it in **Server.js**.
- **Credentials**: Keep your **Office 365 email** and **app password** secure—do **not** share them publicly or commit them to public repos.
- **CORS**: If you need to customize cross-origin settings, look in **Server.js** for the cors() usage.

---
## Contributing
Contributions or suggestions are welcome! Feel free to:
1. Open an issue describing a bug or idea.
2. Fork the repo and make a pull request.
---
## License
This project is currently licensed under MIT (as noted in package.json).

---
## Author
**Umutcan SAHIN (a.k.a. Daniel HAWK)**

---
**Disclaimer:** This code is provided as an example. Please follow your organization’s security policies and best practices when handling credentials or deploying to production.