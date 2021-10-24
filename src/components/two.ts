export default {
  template: `
<div class="container" data-scope-components-two>
      <h1 data-scope-components-two>{{text}}</h1>
      I have template defined inside script<br>
      with <code>template: \` ... \`</code><br>
      <span data-scope-components-two>This span is colored purple with scoped styles</span><br>
      <br>
      I also have a div with class <code>.container</code><br>
      But its color is gold, because my scoped styles said so<br>
      <br>
      My styles are also in SCSS by the way
   </div>`,
   name: 'Two',
   data() {
      return {
         text: 'Hello from component Two!'
      }
   },
}

// attach styles
fetch('/src/components/two.css').then(res => res.text()).then(style => document.head.insertAdjacentHTML('beforeend', '<style>'+style+'</style>'))
