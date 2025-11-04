# Amazon Clone (MERN Stack)

A full-featured **Amazon-style e-commerce web application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
The platform allows users to browse products, view detailed information, add items to their cart, and proceed to checkout.  
It includes **user authentication**, **admin controls**, and **Stripe payment integration** for a complete online shopping experience.  
The frontend is built using **React** and **Bootstrap**, ensuring a modern and responsive design.

---

## Features

### User Features
- Create an account and log in securely  
- Browse and search for products  
- View detailed product pages  
- Add items to the shopping cart  
- Proceed to checkout and make payments using Stripe  
- Responsive UI for both desktop and mobile  

### Admin Features
- Add, edit, or delete products  
- Manage users and orders  
- Dashboard for monitoring sales and inventory  
- Role-based authentication (User/Admin)  

---

## Tech Stack

| Layer | Technologies Used |
|-------|-------------------|
| Frontend | React, Bootstrap, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Token (JWT), bcrypt.js |
| Payment Gateway | Stripe API |
| Tools | Git, Postman, Vercel, MongoDB Atlas, Visual Studio Code |

---

## Installation and Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/asinsakthivel/amazon-clone.git
cd Amazon
2. Setup the backend
cd backend
npm install
npm start


The backend will run on http://localhost:5000

3. Setup the frontend
cd frontend
npm install
npm start


The frontend will run on http://localhost:3000

4. Environment Variables

Create a .env file in the backend folder and include the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_api_key
PORT=5000

5. View the Application

Once both servers are running:

Open your browser and go to http://localhost:3000

Register or log in to explore the Amazon Clone.
Future Enhancements

Add product reviews and ratings

Implement order tracking system

Include wish list and recommendation features

Integrate real-time inventory management

Improve admin analytics dashboard
 Author

Asin Sakthivel
Full Stack Developer (MERN Stack)
Email: asinsakthivel0033@gmail.com

Portfolio: https://portfolio-lk7dzj6we-asinsakthivels-projects.vercel.app

GitHub: https://github.com/asinsakthivel

Location: Tamil Nadu, India

License

This project is open-source and available under the MIT License.

Deployment Ready: Frontend deployed on Vercel, backend on Render/Railway.
