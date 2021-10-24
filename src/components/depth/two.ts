export default {
  template: `
<div data-scope-components-depth-two>
   <h1>{{text}}</h1>
  Тест
</div>`,
   name: 'DeeperTwo',
   data() {
      return {
         text: 'Hello from a level deeper Component!'
      }
   },
}

// attach styles
fetch('/src/components/depth/two.css').then(res => res.text()).then(style => document.head.insertAdjacentHTML('beforeend', '<style>'+style+'</style>'))
