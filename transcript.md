# Course Module Transcript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Pre-requisites](#pre-requisites)
- [Part 1](#part-1)
  - [Intro](#intro)
  - [Development part 1a](#development-part-1a)
  - [On site assignment](#on-site-assignment)
  - [Development part 1b](#development-part-1b)
  - [Chores](#chores)
  - [Home Assignment](#home-assignment)
- [Part 2](#part-2)
  - [Assignment Retrospection](#assignment-retrospection)
  - [Development part 2a](#development-part-2a)
  - [Chores](#chores-1)
  - [On site assignment(?)](#on-site-assignment)
  - [Home Assignment](#home-assignment-1)
- [Part 3](#part-3)
  - [Assignment Retrospection](#assignment-retrospection-1)
  - [Handover to Router module](#handover-to-router-module)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
*generated with [DocToc](https://github.com/thlorenz/doctoc)*

## Pre-requisites

What to install before we start:
 - yarn
 - parcel-bundler
 - push-dir

## Part 1

### Intro

1. Intro to App Architecture (MVC => Components)
1. Check dev env readiness
1. Intro to module content
1. Simple web app

### Development part 1a

1. `App` static standalone component (renders in constructor)
1. `Temperature` static standalone component (renders in constructor)
1. `App`: render `Temperature` and a string using `document.createElement()`
1. Introduce `Component`
1. Introduce `Component._render()` to render string and array of HTMLElements
1. `Component._render()`: add `item => [ item ]`, `clearChildren`,
   `ParentNode.append(...children)`
1. Split `index.js` into files per component
   (`Component` => `framework.js` to supplement fw with more features later)
1. Introduce `Component._appendChildren()`
1. Introduce `{tag:string|class|htmlElement}`, `Component._detectType`

### On site assignment

1. Extend `{tag}` into `{tag,id,classList}`
1. Extend `{tag}` with `{children}`

### Development part 1b

1. Extend `{tag}` into `{tag,id,classList,children}` (official)
1. Introduce `props`

### Chores

1. Publish boilerplate

### Home Assignment

1. Inspiration examples
1. Mock weather app
1. Optional: parse `JSX`
1. Register in `kottans/frontend-2019-componental-app` sections
   * weather mock (all)
   * JSX implemented?
   * modular styles implemented?

## Part 2

### Assignment Retrospection

### Development part 2a

1. Present JSX parsing
1. Introduce component state
1. Callbacks for back propagation, `bindAll`
1. Introduce Global State (`useGlobalState`)
1. Fetch

### Chores

1. Make modules (folder per component)
1. Publish boilerplate

### On site assignment(?)

1. Complete weather app

### Home Assignment

1. Star wars

## Part 3

### Assignment Retrospection

### Handover to Router module
