Vue.component('vue-directives', {
    template: `<div>
                 <h1 v-text="title"></h1>
                  <p v-text="text"></p>
                  <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
                  <DirectiveHtml/>
                  <DirectiveShow/>
                  <DirectiveIf/>
               </div>`,
    data() {
        return {
            title: 'Directivas de vue.js',
            text: 'texto de prueba v-text',
            link: {
                text: 'VueJs Home',
                href: 'https://es.vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    },
    components: {
         DirectiveHtml,
         DirectiveShow,
         DirectiveIf
    }

})