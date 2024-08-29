let DirectiveShow = {
    template: `<div>
    <h1 v-text="title"></h1>
    <p v-show="mostrar" v-html="message"></p>
    <p v-show="user.permission">El usuario tiene permiso para ver esto</p>
    <p v-show="!user.permission">El usuario no permiso</p>
  </div>`,
    data() {
        return {
            title: 'Directivas de v-show',
            message: '<b>Hola desde vue.js directives v-show</b>',
            mostrar:  true,
            user:{
                Permission: false,
            }
        }
    }
}