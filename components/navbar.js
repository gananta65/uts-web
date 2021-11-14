app.component('navbar-template', {
    template: 
    /*html*/
    `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">{{dashboard}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="nav in basicNnavs">
            <a class="nav-link" :href="nav.url">{{nav.name}}</a>
            </li>
        </ul>  
    </div>
  </nav>`,
    data() {
      return {
        dashboard:'Vue Kaos Kaki',
        basicNnavs:[
            {name:'Home',url:''},
            {name:'Source Code (Github)', url:'https://github.com/gananta65/uts-web'}
        ]
      }
    },
    methods: {
        
    },
    computed: {
       
    }
  })