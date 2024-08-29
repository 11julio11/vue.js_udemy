let DirectiveHtml = {
    template: `<div>
    <h1 v-text="title"></h1>
    <p v-html="message"></p>
  </div>`,
    data() {
        return {
            title: 'Directivas de v-html',
            message: '<b>Hola desde directives html</b>',

        }
    },
}