# Virtual Library

## Install
`$ git clone https://github.com/matilore/library.git`
`$ cd library`
`$ npm install`

## Usage
`$ npm start`

## Build with
- React v15.6.1
- Node v6.9.1
- npm v4.0.2

#### Packages used

- styled-components


### Notes

I wanted to structured the code using a main container in charge of maintaining the state of the app through the components and to display the correct component. This is why I didn't use redux or react router.
The state of the app changes thanks to the execution of methods of the main container that are passed to the sub components as props. 
I used styled-components to style the components in javascript. Further development should be dedicated to make some of those styled-components reusable.