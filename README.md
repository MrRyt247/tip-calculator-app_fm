# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop view](./design/Desktop%20view.jpeg)
![Mobile view](./design/Mobile%20view.png)

### Links

- Solution URL: [https://github.com/MrRyt247/tip-calculator-app_fm.git](https://github.com/MrRyt247/tip-calculator-app_fm.git)
- Live Site URL: [https://mrryt247.github.io/tip-calculator-app_fm](https://mrryt247.github.io/tip-calculator-app_fm/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [jQuery](https://jquery.com/) - JS library

### What I learned

- With the help of ChatGPT, I was able to get the value of a button when clicked from a group of buttons

```html
<div class="grid-layout">
  <button value=.05>5%</button>
  <button value=.1>10%</button>
  <button value=.15>15%</button>
  <button value=.25>25%</button>
  <button value=.5>50%</button>
</div>
```

```js
$(".grid-layout button").click(function() {
    b = 1;
    tip = $(this).val();
})
```

### Continued development

- jQuery

### Useful resources

- [Sololearn](https://www.sololearn.com) - A great app to learn web development. It helped me in gaining jQuery knowledge.

## Author

- Frontend Mentor - [@MrRyt247](https://www.frontendmentor.io/profile/MrRyt247)
- X - [@MrRyt19](https://www.twitter.com/MrRyt19)

## Acknowledgments

- OpenAI ChatGPT
- Sololearn