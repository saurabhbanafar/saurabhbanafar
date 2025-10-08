# Personal Portfolio & Blog of Saurabh Singh Banafar

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

This repository contains the source code for my personal portfolio website, built from scratch to showcase my skills, projects, and articles on data science and web development.

**Live Demo: [saurabhbanafar.com](https://saurabhbanafar.com/)**

## ✨ Features

This portfolio is more than just a static page. It's packed with features designed for a modern, engaging user experience.

#### Design & UX:
* **Dual-Theme Mode:** A sleek, modern dark theme (default) and a clean light theme. The user's preference is saved in `localStorage` and automatically syncs with their system's `prefers-color-scheme` if no preference is set.
* **Glassmorphism UI:** The dark theme heavily utilizes translucent, blurred backgrounds (`--glass-backdrop`) for a modern "glass" effect on cards and the navbar.
* **Fully Responsive:** The layout is optimized for all devices, from large desktops to mobile phones, using fluid grids and media queries.
* **Smooth Animations:**
    * **Scroll-triggered animations:** Elements like skill cards and project cards elegantly fade and slide into view using the `IntersectionObserver` API.
    * **Interactive UI elements:** Buttons and links feature subtle hover and active state transitions for better feedback.
    * **Dynamic Typewriter Effect:** The hero section features a bio that types, deletes, and re-types different roles, implemented with vanilla JavaScript.

#### Technical Functionality:
* **SEO Optimized:** Comprehensive meta tags for search engines and social media (Open Graph, Twitter Cards), along with `Schema.org` structured data (`ld+json`) for rich snippets.
* **Modular Components:** The navbar and footer are loaded dynamically using a JavaScript component loader (`component-loader.js`), keeping the HTML clean and maintainable.
* **Interactive Contact Form:**
    * Seamlessly integrated with **Formspree** for serverless email handling.
    * Features custom JavaScript for an AJAX submission, providing real-time `loading`, `success`, and `error` states on the submit button without a page reload.
* **Dedicated Blog Page:** A separate, fully styled blog section to host articles, complete with a newsletter subscription form.

## 🛠️ Tech Stack

This project was built using core web technologies, with a focus on clean, vanilla code without heavy frameworks.

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling:** Custom CSS variables for easy theming and scalability.
* **Animations:** Lottie for the hero section animation and CSS Transitions/Animations.
* **Form Handling:** [Formspree](https://formspree.io/) for the contact form backend.
* **Version Control:** Git & GitHub.

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/saurabhbanafar/saurabhbanafar.git](https://github.com/saurabhbanafar/saurabhbanafar.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd saurabhbanafar
    ```

3.  **Open `index.html` in your browser:**
    You can simply open the `index.html` file directly in your web browser. For the best experience (to avoid potential CORS issues with the component loader), it's recommended to use a simple local server.

4.  **(Optional) Use a live server:**
    If you have VS Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. Right-click on `index.html` and select "Open with Live Server".

## 🤝 Connect with Me

I'm always open to connecting with other developers, data science enthusiasts, and potential collaborators.

* **LinkedIn:** [linkedin.com/in/saurabhbanafar](https://www.linkedin.com/in/saurabhbanafar/)
* **GitHub:** [@saurabhbanafar](https://github.com/saurabhbanafar)
* **X (Twitter):** [@saurabhbanafar_](https://x.com/saurabhbanafar_)
* **Email:** [hello@saurabhbanafar.com](mailto:hello@saurabhbanafar.com)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
