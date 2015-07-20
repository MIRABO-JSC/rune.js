# rune.js

There are a ton of great open source JavaScript drawing libraries on web, and favorites like [D3.js](http://d3js.org/), [p5.js](http://p5js.org/) and [Two.js](https://jonobr1.github.io/two.js/) is a great fit for many projects.

However, while teaching [my algorithmic graphic design course](printingcode.runemadsen.com) I have run into issues where the syntax is either too difficult for my students, the renderer supports canvas only, or there is a lack of support for the features I care about (typography, computational geometry, etc). That's why I decided to write `rune.js`.

My main goal for the project is to make `rune.js` the best library for making visual design systems in 2D. Here's a quick overview of what I'm working towards:

- **No knowledge about SVG required**. One should not need to know about SVG paths to use the library.
- **SVG only**. Simplify rendering by only focusing on SVG output. SVG is great for both generative design projects that end up as printed products, and web-native projects.
- **Scene Graph**. Make a powerful scene graph with a simple API that gets out of the way for beginners.
- **Virtual dom**. In order to optimize for speed, update the SVG element via a virtual DOM like React.
- **Color modes**. Support both RGB and HSB, and make color generation and conversion dead simple.
- **Computational Geometry**. Provide a full-featured set of functions for things like hit-testing and polygon subtraction, without the need for students to code these functions themselves. 
- **Typography**. Provide lower-level access to webfont vectors.

`rune.js` is very much inspired by Bonsai.js and Two.js.

## Scene graph

Some functions automatically adds the object to the stage? Some doesn't?

## Feature comparison

Here's a small list of things that make `rune.js` different from competitors:

#### Most frameworks

- `rune.js` uses virtual-dom.

#### bonsai.js

- `rune.js` doesn't add global functions to `window`. Everything is namespaced in `Rune`.
- `rune.js` doesn't have runners and contexts, which is a bit hairy to understand for the beginner, and makes things a bit complex architecture-wise.
- `bonsai.js` uses CSS string representations for colors. `rune.js` doesn't require familiarity with CSS, as everything is abstracted into the `Rune.Color` functions.
- `bonsai.js` was originally used for Flash conversion, and the source has a bit of that legacy.

#### snap.svg

- `rune.js` is completely open-source and doesn't require CLA's :)

#### two.js

- `rune.js` remove the complexity of supporting 3 renderers (SVG, canvas and WebGL) with a a single SVG renderer. This makes it possible to simplify the architecture quite a bit.
