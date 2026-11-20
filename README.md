# Dhruv Parashar | Personal Portfolio Website

A simple, responsive personal portfolio website built with basic **HTML, CSS and JavaScript**. It introduces who I am, shows my skills and projects, and includes a contact form.

## Features

- **Dark / Light theme toggle** - switch themes with the 🌙 / ☀️ button in the navbar
- **Visitor counter** - counts how many times the page has been opened (saved in the browser using `localStorage`)
- **Contact form with validation** - checks that name, email and message are filled in before "sending"
- **Smooth scrolling** navigation between sections
- **Sticky navbar** that stays at the top while scrolling
- **Responsive design** - layout adjusts for mobile screens
- **Modern look** - gradient text, glowing buttons and hover effects on cards

## Sections

1. **Home** - introduction and call-to-action buttons
2. **About** - a short bio
3. **Skills** - Python, Power BI, Matplotlib
4. **Projects** - cards describing my projects
5. **Education** - academic background
6. **Contact** - message form

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout (Flexbox), theme colours, responsiveness |
| JavaScript | Theme toggle, visitor counter, form validation |

## Project Structure

```
portfolio/
├── index.html    # Page structure and content
├── style.css     # All styling, light theme and mobile layout
└── java.js       # Theme toggle, visitor counter, form validation
```

## How to Run

1. Download or clone this project.
2. Keep `index.html`, `style.css` and `java.js` in the same folder.
3. Double-click `index.html` to open it in any web browser.

No installation or internet connection is needed.

## How It Works

- **Theme toggle:** clicking the button adds or removes a `light` class on the `<body>`, and CSS changes the colours based on it.
- **Visitor counter:** each page load adds 1 to a number stored in `localStorage`, then shows it in the badge. It only counts visits from the same browser.
- **Contact form:** the form is stopped from reloading the page, and an alert warns if any field is empty. The message is not actually sent anywhere, since there is no backend.

## Customisation

- Edit the **About** text and **Projects** cards in `index.html` with your own details.
- Change colours in `style.css` (for example `#3b7bff` for the main blue).
- Add more skills by adding another `<div class="card">` inside the Skills section.

## Future Improvements

- Connect the contact form to a real email service
- Add project screenshots and live links
- Add a downloadable resume button

## Author

**Dhruv Parashar**
B.Tech Computer Science, KIET
Skills: Python, Power BI, Matplotlib
