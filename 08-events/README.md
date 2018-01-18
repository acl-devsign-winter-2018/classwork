DOM Events and Form Validation
===

## Misc, Feedback, Questions, Issues
* 

## Resource
1. DevTools (open during development)
1. Error Messages
  * actual error message
  * file and line number

## Agenda

### Project Review

* Webpack Config
* ESLint Config
* Template
* Service Caching

### DOM events

#### Subscribing

* `.addEventListener('event', handler)`
* `.onevent = handler`

#### Types

* Keyboard
  * When
  * Special Keys
* Mouse
  * `click` and `double-click`
* Touch
  * "Translated" to `click`
  * Unique gestures: `swipe`, `pinch`
  * Multiple "touches"
* Wheel, pointer, etc.
* Other specific events...
  * `onhashchange`

### Fundamentals of Functions

* Value and Reference Variables  
  * Variable table (stack)
  * Heap (objects)
* Definition vs Execution (calling) 
* parameters vs arguments
* Arguments are new variable table entry
* But not closures...

### Event Handlers

* `event` parameter
* Default Behavior
  * `.preventDefault()`
* Capture/direction
  * `.stopPropagation()`
* Getting to elements
  * `this` in event handlers
  * `event.src`
  * `event.target`
* Delegation

### Validation

* Pre vs Post

#### Constraint Validation (html markup)

* `require`
* `type`
* `min` and `max`
* `regex`

#### Adding JavaScript

Why?

1. Timing - validation does not occur until submit
2. Error Message - at the whim of the browser, may be very general
3. Validation - thing you want to validate isn't part of HTML Forms Validation

Options:

* force reporting of validation
  * Pro: fail earlier
  * Con: traps user
* Custom messages
  * Try regex first
  * Use `title` attribute
  * Use .setCustomValidity

#### Validity API

* '.setValidation([error-message])`
* `.reportValidation()`
* `.checkValidation()`???

#### Styling

* `:valid` and `:invalid`
* DEMO: custom error approach

#### Post-Submit Validation

* Prevent Default
* Format Data
* Call API
* Respond to Success or Error

#### Router
* `onhashchange`
* Dictionary (strategy pattern) of components
