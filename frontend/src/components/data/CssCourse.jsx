// src/data/cssMasterCourse.js

export const cssCourse = {
  title: 'CSS Mastery - 20 Day Course',
  sections: [
    {
      id: 'day-1',
      title: 'Day 1 - Introduction to CSS',
     content: `
CSS (Cascading Style Sheets) is the language used to style HTML documents. It describes how elements should be rendered on screen, paper, or in other media.

## 🧠 Why CSS?

Without CSS, all websites would look like plain HTML documents. CSS enables:

- Custom colors, fonts, spacing, and layouts
- Responsiveness (mobile-friendly designs)
- Interactive elements and animations
- Separation of content (HTML) and design (CSS)

---

## 🛠️ Ways to Use CSS

### 1. Inline CSS
Applied directly to an HTML element using the \`style\` attribute.

\`\`\`html
<p style="color: blue; font-size: 20px;">Hello, world!</p>
\`\`\`

✅ Good for quick tests.  
❌ Not recommended for large projects due to poor maintainability.

---

### 2. Internal CSS
Defined inside a \`<style>\` tag in the \`<head>\` of an HTML file.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This is red text.</p>
</body>
</html>
\`\`\`

✅ Useful for single-page documents.  
❌ Hard to reuse styles across pages.

---

### 3. External CSS (Recommended)
A separate \`.css\` file linked to the HTML file.

\`\`\`html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

\`\`\`css
/* styles.css */
p {
  color: green;
  font-size: 16px;
}
\`\`\`

✅ Best practice for real-world projects.  
✅ Encourages modular and maintainable code.

---

## ✍️ CSS Syntax Basics

A CSS rule consists of:
- A **selector**: targets HTML elements
- A **declaration block**: contains one or more **property-value** pairs

\`\`\`css
p {
  color: blue;
  font-size: 20px;
}
\`\`\`

🔹 Selector: \`p\`  
🔹 Properties: \`color\`, \`font-size\`  
🔹 Values: \`blue\`, \`20px\`

---

## 🔍 Multiple Selectors and Comments

\`\`\`css
/* This styles multiple elements */
h1, h2, p {
  font-family: Arial, sans-serif;
}
\`\`\`

---

## 🧪 Quick Practice

1. Create a new file named \`index.html\`
2. Create a file named \`styles.css\`
3. Link the CSS file and apply basic styling to a paragraph.

\`\`\`html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Intro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to CSS!</h1>
  <p>This is styled with external CSS.</p>
</body>
</html>
\`\`\`

\`\`\`css
/* styles.css */
body {
  background-color: #f4f4f4;
  font-family: Helvetica, sans-serif;
  padding: 20px;
}

h1 {
  color: #2c3e50;
}

p {
  color: #555;
  font-size: 18px;
}
\`\`\`

---

## 📌 Summary

- CSS is essential for styling web content.
- Use **external CSS** for large and scalable projects.
- Understand **selectors, properties, and values**.
- Practice writing and linking CSS files!

Ready to go deeper? Next up: **Selectors** — how to target HTML elements precisely.
`

    },
    {
      id: 'day-2',
      title: 'Day 2 - CSS Selectors',
      content: `Selectors target HTML elements:
- Element selector (p, h1)
- Class selector (.class-name)
- ID selector (#id)
- Grouping selector (h1, p)
- Universal selector (*)
Understand how to combine them and the basics of specificity.`
    },
    {
      id: 'day-3',
      title: 'Day 3 - Colors & Units',
      content: `Learn how to use different color formats:
- Hex: #ffffff
- RGB: rgb(255, 255, 255)
- HSL: hsl(0, 0%, 100%)
And units like:
- px (pixels)
- %, em, rem
- vw (viewport width), vh (viewport height)
Use them to make flexible designs.`
    },
    {
      id: 'day-4',
      title: 'Day 4 - Typography',
      content: `Control text appearance with:
- font-family, font-size, line-height
- font-weight, text-align, text-transform
- letter-spacing, word-spacing
Use Google Fonts for beautiful typography.`
    },
    {
      id: 'day-5',
      title: 'Day 5 - The Box Model',
      content: `Every HTML element is a box with:
- Content
- Padding (space inside)
- Border
- Margin (space outside)
Understand how box-sizing: border-box affects layout. Use developer tools to inspect elements.`
    },
    {
      id: 'day-6',
      title: 'Day 6 - Backgrounds',
      content: `Style elements with:
- background-color
- background-image (with URLs)
- gradients: linear-gradient, radial-gradient
- background-repeat, position, size, attachment
Use combinations for modern designs.`
    },
    {
      id: 'day-7',
      title: 'Day 7 - Borders & Shadows',
      content: `Add visual depth using:
- border-style, width, color, radius
- border-radius for rounded corners
- box-shadow for soft or hard shadows
Create card-like UI with shadow and border.`
    },
    {
      id: 'day-8',
      title: 'Day 8 - CSS Display & Visibility',
      content: `Understand how elements are displayed:
- block vs inline vs inline-block
- display: none vs visibility: hidden
- display: flex, grid, table
Use visibility and display together for toggling UI.`
    },
    {
      id: 'day-9',
      title: 'Day 9 - Positioning',
      content: `Use position to place elements:
- static (default), relative, absolute, fixed, sticky
- top, left, right, bottom properties
- z-index for stacking
Build sticky headers and tooltips.`
    },
    {
      id: 'day-10',
      title: 'Day 10 - Float & Clear',
      content: `Float elements for layout:
- float: left/right
- clear: both to stop wrapping
- clearfix hack to fix container height
Great for older layouts before Flexbox.`
    },
    {
      id: 'day-11',
      title: 'Day 11 - Flexbox Basics',
      content: `Flexible box layout for 1D layouts:
- display: flex
- flex-direction, justify-content, align-items
- flex-wrap, align-content
Use Flexbox for navbars, centered layouts, and more.`
    },
    {
      id: 'day-12',
      title: 'Day 12 - Flexbox Advanced',
      content: `More power with:
- align-self, order
- flex-grow, flex-shrink, flex-basis
- responsive flex layouts using media queries
Build a pricing card layout using Flexbox.`
    },
    {
      id: 'day-13',
      title: 'Day 13 - CSS Grid Basics',
      content: `Grid layout for 2D layouts:
- display: grid
- grid-template-columns/rows
- grid-gap
Design image galleries and dashboards.`
    },
    {
      id: 'day-14',
      title: 'Day 14 - Grid Advanced',
      content: `Advanced features:
- grid-template-areas
- grid-auto-flow
- spanning rows and columns
- implicit/explicit grids
Create magazine-style layouts.`
    },
    {
      id: 'day-15',
      title: 'Day 15 - Media Queries',
      content: `Make your site responsive:
@media (max-width: 768px) { ... }
- Target different screen sizes
- Use em, rem, min-width/max-width
- Create breakpoints for mobile/tablet/desktop`
    },
    {
      id: 'day-16',
      title: 'Day 16 - Transitions & Animations',
      content: `Animate UI:
- transition: ease-in-out, duration
- transform: scale, rotate, translate
- @keyframes and animation-name
Create hover effects, loaders, and more.`
    },
    {
      id: 'day-17',
      title: 'Day 17 - Pseudo-classes & Elements',
      content: `Add interactivity with:
- :hover, :focus, :nth-child, :first-child
- ::before, ::after
Decorate with badges, tooltips, or indicators.`
    },
    {
      id: 'day-18',
      title: 'Day 18 - CSS Variables',
      content: `Create reusable styles:
--main-color: #3498db;
Use var(--main-color)
Helpful for themes, design tokens, and maintainability.`
    },
    {
      id: 'day-19',
      title: 'Day 19 - CSS Best Practices',
      content: `Write maintainable CSS:
- Use BEM naming
- Keep files modular
- Avoid !important unless necessary
- Use shorthand properties
- Leverage comments and consistent formatting`
    },
    {
      id: 'day-20',
      title: 'Day 20 - Final Project',
      content: `Apply everything you’ve learned:
- Build a responsive personal portfolio site
- Use Flexbox/Grid for layout
- Add transitions, variables, and media queries
- Keep code clean with best practices
Deploy on GitHub Pages or Netlify.`
    },
  ],
};
