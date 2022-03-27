# Risks Dashboard

## Technologies

* [Vue](https://vuejs.org/) - frontend framework
* [Buefy](https://buefy.org/) - vue UI components
* [Vega-lite](https://vega.github.io/vega-lite/) - charting
* [Surge](https://surge.sh/) - static site hosting
* [Vue CLI](https://cli.vuejs.org/) - project scaffolding for vue
* [yarn](https://yarnpkg.com/) - package manager
* [Node](https://nodejs.org/)

## prerequisites

The following will need to be installed globally before running this project locally

* node `v16.x`
* vue-cli
* yarn

## Project setup

First the packages need to be installed

```bash
yarn install
```

### Compiles and hot-reloads for development

To run the development server locally use:

```bash
yarn serve
```

The development server will then be available at `http://localhost:8080`

### Compiles and minifies for production

```bash
yarn build
```

Once `yarn build` is run the static files are available in the `dist/` directory. These static files can be used for simple hosting services like [surge](https://surge.sh/) or [netlify](https://www.netlify.com/) or similar

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Data ingestion script

I've created a script `scripts/separateRisks.js` in the project that went through `audit.json` and found all of the items containing risks. This script writes the results to a new json file `src/data/risks.json`. `audit.json` was too large to add to the repository, but if anyone would want to test out the script they can add a file named `audit.json` to the root directory and run the script in the terminal using the following command:

```bash
node scripts/separateRisks.js
```

## Hosted URL

[https://nathan-risks-dashboard.surge.sh/](https://nathan-risks-dashboard.surge.sh/)
