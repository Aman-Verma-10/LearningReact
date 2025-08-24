Learning React

# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching By Parcel - For Faster Builds
- Image Optimization
- Minification
- Bundeling
- Compress File
- Consistent Hashing
- Code Splitting
- Differential Bundling - To support older browsers
- Diagnostic
- Error Handling
- HTTPS - Parcel gives HTTPS as well
- Tree Shaking - Remove unused code
- Different dev and production bundles

# JSX
- JSX is not a part of react
- JSX is not HTML in JS
- It is an HTML-like or XML-like syntax
- Js engine don't understand JSX syntax but JS understands Ecma script(pure JS)
- Browser don't understands JSX syntax
- parcel is transpiling JSX code before it reaches to JS engine and then JS engine recieves the code that browsers can understand
- parcel is using babel(library) which transpiles JSX so that react can understand
- babel also converts new JS for example ES6 code to older code which older browsers can understand
- JSK takes care of injection attacks, it will escape(sanitize) the data, prevents cross-site scripting attacks

# React Component
- Class Based Component
- Functional Component