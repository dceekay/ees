# Project image folders

Each project has its own folder here for extra project photos.

To show new photos on a project detail page, upload the image into the matching folder, then add its public path to the project's `gallery` array in `src/data/projects.ts`.

Example:

```ts
gallery: [
  '/images/project1.jpeg',
  '/images/projects/signature-residential-development/living-room.jpeg',
]
```
