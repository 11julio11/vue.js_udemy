Vue.component('vue-directives', {
    template: `<div>
                  <p v-text="text"></p>
                  <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
               </div>`,
    data() {
        return {
            text: 'texto de prueba v-text',
            link: {
                text: 'VueJs Home',
                href: 'https://es.vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    }
})