### Babel
We use babel-cli to run command from `package.json` script.
We have installed two babel `presets` namely `react` and `env`.
`env` preset is used to transpile code to es5 from es6 and beyond.
`react` preset is used to transpile code related to react.
All babel packages require `babel-core` to be installed.

#### Branch `ch3_webpack_setup`

Problem
 - Unable to import css files in react component.

Solution
 - We will need to setup webpack 