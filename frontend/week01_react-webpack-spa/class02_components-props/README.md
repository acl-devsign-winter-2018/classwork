Components and Props
===

## Questions and Feedback?
* ?

## Learning Objectives

* Students will learn to pass data from parent to child through props
* Students will learn to validate props with PropTypes
* Students will learn to manage controlled inputs
* Students will learn to lift state shared across components to common ancestor

## Misc

* Add `.travis.yml`
* Let's add Object Spread and Class Properties to `babel`
* Conditional rendering via if or ternary (loading example)

## Instantiate a React Component (Birds and the Bees of Parent/Child Components)

### Element/Attribute Syntax

Think of:

```js
<MyComponent foo={foo} bar="BAR" onQux={this.handleQux}/>
```

As:

```js
const myComponent = new MyComponent({
  foo: foo,
  bar: 'BAR',
  onQux: this.handleQux
});
```

### But...

* Components are not "re"-rendered just because prop/state changes
* You can control with `key` if necessary

## State and Props

* Rules of state
    * Sibling components that share state? Must live in common ancestor
    * Push state a far down as possible
* Passing functions as actions
	  * "events up"
* Props are state passed from a parent component
    * Child components **never** modify props directly
* And while we are mentioning it:
    * Never set `state` outside of constructor
    * Never call `setState` during _synchronous_ part of `render()`
    * Use `setState(fn)` when using previous state

### PropTypes

* `npm i prop-types`
* Dev-time feature (not checked in production build)
* Props
 	* [Types](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
	* [Defaults](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

## API Services
* Own folder
    * file per resource
    * or single api if few resources
* Encapsulate calls based on resource
* Isolate components from http or other communication configuration
* (Eventually we will have base "request" or "fetcher" module)
* Service calls and actions  
    * Events happening from view
    * Handlers route call to 
        * `handleAction` method on component, or
        * listener `prop` passed from parent

## Forms

### Controlled vs Uncontrolled

> Where should the state live?

1. In the DOM - good for "event emitting" components
1. In `state` - data is needed in multiple places


### Bonus table of Form events

Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`