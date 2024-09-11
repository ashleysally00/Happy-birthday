# Interactive Birthday Card

This project is a simple yet charming interactive birthday card created using p5.js. It displays a festive "Happy Birthday" message with a cupcake emoji on a vibrant background.

![Birthday Card Preview](https://github.com/ashleysally00/Happy-birthday/blob/main/p5bdaysmPNG.png)

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Colorful background with white text
- Centered canvas display
- Cupcake emoji for a celebratory touch
- Responsive layout that works on various devices
- Accessibility description for screen readers

## Prerequisites

Before you begin, ensure you have the following installed:
- A modern web browser
- A text editor for modifying the code (e.g., Visual Studio Code, Sublime Text)

## Installation

1. Clone this repository or download the ZIP file.
2. Extract the files to your desired location.

No additional installation steps are required as the project uses CDN-hosted libraries.

## Usage

1. Open the `index.html` file in a web browser.
2. You'll see a tomato red background with "Happy Birthday" written in white, along with a cupcake emoji.

## File Structure

```
birthday-card/
│
├── index.html
├── style.css
├── sketch.js
└── README.md
```

- `index.html`: The main HTML file that structures the web page and includes necessary scripts.
- `style.css`: Contains the styles for centering the canvas and setting up the page layout.
- `sketch.js`: The p5.js script that creates the birthday card design.

## Customization

To customize the birthday card:

1. Modify the `sketch.js` file:
   - Change colors: Adjust the `background()` and `fill()` functions.
   - Modify text: Update the `text()` function calls.
   - Resize the canvas: Alter the values in `createCanvas()`.
   - Change the emoji: Replace the cupcake emoji in the `text()` function.

2. Adjust the styles in `style.css`:
   - Modify the centering or layout of the canvas.

3. Update the content in `index.html` if you need to add or remove elements.

## Code Breakdown

### sketch.js
```javascript
function setup() {
  var canvas = createCanvas(300, 400);
  canvas.parent("CanvasDiv");
}

function draw() {
  background(255, 99, 71);
  fill(255, 255, 255);
  stroke(19);
  textSize(40);
  text("happy", 70, 80);
  text("birthday", 100, 174);
  textSize(75);
  text("🧁", 103, 305);
  describe(
    "Happy birthday in white letters on tomato red background with a cupcake."
  );
}
```

This script creates a canvas, sets up the background color, and draws the "Happy Birthday" text and cupcake emoji. The `describe()` function provides an accessibility description for screen readers.

### style.css
```css
html, body {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

These styles ensure that the canvas is centered both horizontally and vertically on the page.

## Contributing

Contributions to improve the birthday card are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## MIT License

Copyright (c) 2024 Ashley Rice

---

Feel free to contact the project maintainer for any questions or suggestions.
