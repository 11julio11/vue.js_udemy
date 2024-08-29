let DirectiveIf = {
    template: `<div>
    <h1 v-text="title"></h1>
    <p v-if="mostrar" v-html="message"></p>
    <h1>Uso de V-if / v-else</h1>
    <p v-if="user.permission">El usuario tiene permiso para ver esto</p>
    <p v-show="!user.permission">El usuario no permiso</p>
  </div>`,
    data() {
        return {
            title: 'Directivas de v-if',
            message: '<b>Hola desde vue.js directives v-if</b>',
            mostrar:  true,
            user:{
                Permission: false,
            }
        }
    }
}