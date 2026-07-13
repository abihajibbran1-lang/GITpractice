# GitHub Workflow Practice

Learning GitHub repositories, issues, branches, pull requests, and project boards.
<br>
# Restaurant Landing Page

## Purpose
A static one-page portfolio site for a fictional restaurant, built as a
git/GitHub practice project (issues, sub-issues, PRs, stacked PRs, merge
conflicts, and the three GitHub merge strategies).

## Setup
No build step required. Either:
- Open `index.html` directly in a browser, or
- Serve it locally, e.g. `npx serve .` or `python3 -m http.server`

## Usage
Single scrolling page: Home → Menu → About → Testimonials → Contact,
reachable via the sticky navbar (with a mobile hamburger menu below 700px).

## Project structure

# Manual Test Checklist

Run the relevant section before merging the PR that introduces it.

## Hero (PR1)
- [ ] Hero fills the viewport and text is readable over the background
- [ ] "View Menu" button scrolls to the menu section

## Navbar (PR2)
- [ ] Navbar stays visible when scrolling (sticky)
- [ ] Below 700px width, hamburger icon appears and toggles the menu
- [ ] On mobile width, opening the menu and tapping a link closes the menu
      (⚠ expected to FAIL at PR2 — this is issue #7, fixed at PR6)

## Menu (PR3)
- [ ] All three dishes render with name, description, and price
- [ ] Grid reflows to a single column on narrow screens

## About (PR4)
- [ ] About section renders below the menu section
- [ ] Text is centered and readable

## Contact (PR5)
- [ ] Form requires name, email, and message before submitting
- [ ] Submitting shows a confirmation message and clears the form

## Bug fix (PR6)
- [ ] Re-run the navbar mobile-menu-close check from PR2 — should now PASS

## Testimonials — base (PR7)
- [ ] All three testimonial cards render with quote and author

## Testimonials — carousel (PR8)
- [ ] Prev/next buttons move between testimonials
- [ ] Carousel wraps around at the first/last testimonial

## Testimonials — styling (PR9)
- [ ] Dots indicator matches the number of testimonials
- [ ] Clicking a dot jumps to that testimonial
- [ ] Active dot updates when using prev/next
