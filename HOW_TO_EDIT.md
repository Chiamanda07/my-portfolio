# How To Add Or Update Things

This site is a simple static HTML/CSS/JS portfolio, so updates are straightforward.

## Where To Edit

- Main page content lives in `index.html`
- Styling lives in `styles.css`
- Small interactions live in `script.js`

## If You Want To Add A New Resume Later

- Put the new PDF in the project folder
- Change the resume links in the popup inside `index.html`
- If you want, the resume chooser can later be turned into a reusable list so you can add more versions without touching much code

## If You Want To Add A New Project

- Copy one of the project cards in the `Projects` section in `index.html`
- Replace:
  - title
  - description
  - tech stack
  - impact
  - image file path
- Add the image into the same folder and point the `src` to it

## If You Want To Add A New Experience

- Copy one of the cards inside the `Experience` section in `index.html`
- Update:
  - organization
  - role
  - dates
  - summary
  - bullets

## If You Want To Add A New Leadership Item

- Copy the leadership card area in `index.html`
- Edit the title, description, and stats

## Quick Tip

If you want easier future editing, I can also refactor the site so the content lives in one separate file like `content.json` or `data.js`.
