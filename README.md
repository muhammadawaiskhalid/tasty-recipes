# 🍽️ Tasty Recipes

A modern, responsive recipe website built with **HTML5, CSS3, and Vanilla JavaScript**. Tasty Recipes provides an easy-to-use interface for browsing, searching, filtering, and viewing detailed recipes across multiple food categories.

## 🌐 Live Demo

**GitHub Pages:**  
https://muhammadawaiskhalid.github.io/tasty-recipes/

## ✨ Features

- Modern and responsive user interface
- Responsive navigation menu
- Recipes dropdown navigation
- Recipe search functionality
- Category-based recipe filtering
- URL-based category filtering
- 9 detailed recipe pages
- Ingredients and step-by-step cooking instructions
- Related recipe recommendations
- About and Contact pages
- Client-side contact form validation
- Scroll reveal animations
- Optimized responsive images
- Custom favicon
- Mobile-friendly layout

## 🍴 Recipe Collection

The website currently includes:

1. Chicken Pasta
2. Beef Burger
3. Fluffy Pancakes
4. Grilled Chicken
5. Homemade Pizza
6. Chocolate Cake
7. Fresh Salad
8. Fried Rice
9. Breakfast Bowl

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js
- Sharp — image optimization
- Git
- GitHub
- GitHub Pages

## 📁 Project Structure

```text
tasty-recipes/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── main.js
├── docs/
│   └── Tasty_Recipes_SRS_v1.0.pdf
├── recipes/
│   ├── beef-burger.html
│   ├── breakfast-bowl.html
│   ├── chicken-pasta.html
│   ├── chocolate-cake.html
│   ├── fresh-salad.html
│   ├── fried-rice.html
│   ├── grilled-chicken.html
│   ├── pancakes.html
│   └── pizza.html
├── scripts/
│   └── optimize-images.js
├── about.html
├── contact.html
├── index.html
├── recipes.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/muhammadawaiskhalid/tasty-recipes.git
```

Open the project directory:

```bash
cd tasty-recipes
```

Then open `index.html` in your browser.

No backend server is required for the website.

## 🖼️ Image Optimization

The project includes a Node.js image optimization script powered by **Sharp**.

Install the development dependencies:

```bash
npm install
```

Run image optimization:

```bash
node scripts/optimize-images.js
```

Original high-resolution image backups are excluded from Git through `.gitignore`.

## 📄 Documentation

The Software Requirements Specification (SRS) is available here:

```text
docs/Tasty_Recipes_SRS_v1.0.pdf
```

It documents the project requirements, architecture, use cases, diagrams, testing, and implementation details.

## ⚠️ Current Limitations

- The website uses static HTML, CSS, and JavaScript.
- No backend or database is currently implemented.
- Contact form validation is client-side only and does not send messages to a server.
- Recipe data is stored directly in HTML pages.

## 📌 Version

**Version 1.0.0**

Initial complete and stable release of Tasty Recipes.

## 👨‍💻 Author

**Muhammad Awais Khalid**

GitHub: https://github.com/muhammadawaiskhalid

## 📜 License

This project is created for learning, software development practice, and portfolio demonstration.