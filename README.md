# yorpw_ui_web
Password manager SPA built using React and Redux

Created using [create-react-app](https://github.com/facebookincubator/create-react-app) and [TypeScript React Start](https://github.com/Microsoft/TypeScript-React-Starter).

With the following additions or modifications:

* Package Manager: yarn
* Editor code styling: EditorConfig
* Node Security: [nsp](https://www.npmjs.com/package/nsp)

### CSS
* CSS imports
* Pre-processor: SASS (Following steps [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md))
* Linter: stylelint using [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
* Coding style: prettier (Following steps [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically) and [here](https://github.com/prettier/prettier/issues/2151))

### TypeScript
* Linter: TSLint
* Coding style: prettier (Using [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier) module)

### Testing & Mocking
* Jest with Enzyme (Following steps [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components))

### React
* Routing: react-router
* State management: redux
* Redux async actions: redux-thunk
* Redux selector library: reselect

### Other
* HTTP: fetch
* Build scripts using TypeScript: ts-node
* CSS framework: Bootstrap 4
* Icons: Font Awesome
* Validation: class-validator