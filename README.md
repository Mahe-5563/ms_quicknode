This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Rules

- All the pages are created under src/app/<folder-with-page-name>/page.tsx => Please stick to this naming convention.
- Do not write the logics for the particular pages in page.tsx. Rather create a component in src/components/ folder, write the functions and logics for the application in that file and import that component onto the page.tsx.
- The application uses Tailwind as the base css framework. Tailwind has classes for every situations and requirements. Please make sure you stick with Tailwind classes rather than creating external CSS files. Create CSS files only in inevitable situations and during those situations, please stick with modular css. For references on Modular CSS, refer the following [link](https://spaceninja.com/blog/2018/what-is-modular-css/).
- Since the application uses TypeScript over conventional JavaScript, please maintain the type conventions for the variables. It is important that the type definitions are mentioned for every variables and if you are not sure of the type, please go ahead with "any" type.
- Please stick with functional components over class components.
- Use lifecycle methods wherever necessary.
- Use proper nomenclatures for variables. Refrain from using more than three words (or) 25 characters for the variables.
- If the variable has more than one word, separate the words using an underscore ( _ ). Maintain all the words in the variable in lowercase. For Example: dropdown_values.
- Use proper nomenclatures for functions. Refrain from using more than three words (or) 25 character for the function name.
- If the function has more than one word, use camelCase to differentiate the words. For Example: funcPerfAdd().
- Always create a new branch everytime you work on a task. Make sure the new branch you created is in sync with the master branch.


