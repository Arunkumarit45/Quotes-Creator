# 📚 Quotes Creator App

A responsive React application to **create**, **view**, and **manage quotes** with image uploads. Built using provided APIs from Crafto.

---

## 🔐 Features

- **User Login** using username and OTP (`1234`)
- **Quote Listing** with:
  - Paginated data
  - Images with overlayed text
  - Username and timestamp
- **Quote Creation** page:
  - Upload image
  - Enter quote
  - Submit to API
- **Double-click on Quote** to view full-screen modal
- **Responsive Design** for mobile and desktop

---

## 🚀 Technologies Used

- React (Hooks, Router)
- CSS for responsive styling
- JavaScript Fetch API
- Crafto APIs (Login, Media Upload, Quote Post & Get)

---

## 📁 Project Structure

```bash
my-app/
├── src/
│   ├── Components/
│   │   ├── CreateQuote.js
│   │   ├── Login.js
│   │   ├── Navigation.js
│   │   ├── ShowQuote.js
│   │   └── Showlist.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── public/
├── package.json
├── App.css
└── README.md
```

---

## 🧪 Test Credentials

Use the following to log in:

```
Username: any name (e.g., sandy)
OTP: 1234
```

---

## 📸 API Summary

- **Login:** `POST /login`
- **Upload Media:** `POST /media/assignment/upload`
- **Post Quote:** `POST /postQuote`
- **Get Quotes:** `GET /getQuotes?limit=20&offset=0`

---

## 🖼 UI Details

- Mobile-responsive layout using media queries
- Floating `+` button to create quotes
- Modal with Escape key close and click-away
- CSS animations for smooth UX

---

## 💡 Extra Features (Bonus)

- ✅ **Double-click a quote** to open modal view
- ✅ Responsive UI built manually with media queries
- ✅ Optimized experience for both desktop and mobile

---

## 🛠️ Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Arunkumarit45/Quotes-Creator.git
   cd Quotes-Creator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the app:**

   ```bash
   npm start
   ```

4. **Open in browser:**  
   `http://localhost:3000`

---

## 🌐 Deployment

Live version:  
🔗 [👉 https://quotes-creator-5a3b8.web.app](https://quotes-creator-5a3b8.web.app)

---

## 📧 Author

**Arunkumar A**  
📩 [aarunkumarit45@gmail.com](mailto:aarunkumarit45@gmail.com)

```