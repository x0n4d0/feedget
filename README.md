<div align='justify'>

![Cover](./docs/assets/cover.png)

> A widget to facilitate the sending of feedbacks, developed using React.js and TailwindCSS.

➡️ The release **1.0.0** will be available when the **\<FeedGet \/\>** component is published to npm as 'feedget'.

#
- [About](#about)
- [Using](#using)
- [Techs](#techs)
- [Reposiroty Architecture](#reposiroty-architecture)
- [Learned](#learned)
- [Credits](#credits)
- [License](#license)
#

<br>

## **About**

For any company, receiving feedback is extremely important to know how to improve their product. For any customer, giving feedback is extremely important to tell them how the product can be better. Thinking in this way, FeedGet aims to make a bridge between the two sides, facilitating this communication between customer and company.

## **Using**

### Requirements

- [Nodejs](https://nodejs.org/en/download/) - v.16+
- [Docker](https://docs.docker.com/engine/install/ubuntu/)

### CLI

#### Install root and all packages dependencies
```bash
npm ci && npm run bootstrap
```

#### Run packages in development mode

```bash
npm run dev
```

## **Reposiroty Architecture**

This repository was created as 'Monorepo'.

- [`./packages/web`](./packages/web) - The website project.
- [`./packages/api`](./packages/api) - The api project.
- [`./packages/app`](./packages/app) - The mobile app project.

## **Techs**

- [React.js](https://reactjs.org/) - Start using [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/en/)
- [React Native]() - Start using [Expo](https://expo.dev/)
- Shared:
  - [Lerna](https://github.com/lerna/lerna)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Editorconfig](https://editorconfig.org/)
  - [Jest](https://jestjs.io/)

## **Tools**

- [Insomnia](https://insomnia.rest/)
- [Mailtrap](https://mailtrap.io/)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app/)


## **Learned**

- Develop a Widget
- Take screenshot with html2canvas
- Accessibility
- Loading Component

## **Credits**

- The version **v0.1.0** of this project was developed at [Next Level Week](https://nextlevelweek.com) event provided by [Rocketseat](https://www.rocketseat.com.br/)
- The project layout was developed by [Ilana Mallak](https://www.figma.com/@ilanamallak)

## **License**

[MIT](./LICENSE)

</div>
