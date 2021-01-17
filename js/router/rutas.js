const inicio = { template: `
                <componente-index></componente-index>`,
				name: "inicio" 
}
const productos = {template: `
                    <componente-productos></componente-productos>`,
                    name: "productos"
}
const contacto = {template: `
                    <componente-contacto></componente-contacto>`, 
				    name: "contacto"
}

const routes = [

        { 
            path: '/', component: inicio
        },
        { 
            path: '/productos', component: productos
        },
        { 
            path: '/contacto', component: contacto
        },
        { 
            path: '*', redirect: '/' 
        },

]


const router = new VueRouter({
  routes
})

const app = new Vue({
  router

}).$mount('.cambios')

