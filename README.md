# Business App

Landing page for a productivity app with autoplaying sliders, a photo lightbox and an FAQ accordion. Built in May 2021 as a learning project.

**Live demo:** [androfficial.github.io/business-app](https://androfficial.github.io/business-app/)

## Features

- The header stays fixed, and its links and the footer links scroll smoothly to their sections, stopping 80 px short so the header does not cover the heading. Below 992 px a burger button opens the menu and locks page scroll.
- The intro slider (Slick) fades between three slides every 4 seconds and has dots.
- The blog slider (Slick) fades between two posts every 4 seconds, with dots and arrow buttons that hide below 993 px. The photos of each post open in an fslightbox gallery.
- The testimonials slider (Swiper) moves by drag or by its clickable dots.
- Clicking an FAQ question expands or collapses its answer.
- Other sections: partner logos, app features, two statistics, a call to action and a newsletter sign-up.

## Tech stack

- **Framework:** none, plain HTML and JavaScript
- **UI:** jQuery 3, Slick, Swiper 6, fslightbox
- **Styling:** SCSS compiled to CSS (the SCSS sources are not in the repository)
- **Tooling:** built with Gulp 4, which produced the plain and minified bundles in `css/` and `js/` (the page loads the minified ones)
- **Hosting:** GitHub Pages

## Getting started

The repository holds the compiled site, with no dependencies and no build step, so a browser is all it needs.

```bash
git clone https://github.com/androfficial/business-app.git
cd business-app
```

Then open `index.html` in a browser.

## Notes

- The newsletter form, the video buttons and the call to action links are layout only: they have no handlers or targets.
