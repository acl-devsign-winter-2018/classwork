DOM Events and Form Validation
===

## Misc, Feedback, Questions, Issues
* Stretch Goals
* Review "Template"
* ?

## Resource
1. DevTools (open during development)
1. Error Messages
  * Start at the top
  * Actual error message
    * Google the actual error message
      * put double quotes
      * clarify domain
        * add library or framework name
        * javascript
  * File and line number
  * Stack Overflow
    1. Scan Question, but
    2. Go to Accepted Answer
    3. Check dates
1. In-class code example
1. Read the docs
  * For JS, use MDN (not W3C Schools)
  * MDN:
    * Mozilla (Firefox), Google (Chrome), Microsoft (Edge)
    * Highly technical (presumptions about what you know)
    * Browser Compatibly, experimental, polyfills
  * Source Docs for Library or Framework
1. People
  * Peers
  * Instruction Staff


## Agenda

### Project Review

* Webpack Config
* ESLint Config
* Template
* Service Caching

### DOM events

#### Subscribing

* `.onevent = handler`
* `.addEventListener('event', handler)`

#### Router
* `onhashchange`
* Dictionary (strategy pattern) of components

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

#### Post-Submit Validation

* Prevent Default
* Format Data
* Call API
* Respond to Success or Error
