var app = new Vue({
  el: '#avada',
  data:{
    menu: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers Apply', 'News', 'Get in touch now'],
    menuFooter: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'News', 'Get in touch now'],
    counter: 0,
    clients:[
      {
        image: 'seo/images/testimonials-2.jpg',
        review: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.',
        name: 'Luis Desalvo',
        role: 'CREO TECH',
        visible: 'show'
      },
      {
        image: 'seo/images/testimonials-1.jpg',
        review: 'Avada allowed me to carry out advertising campaigns without any difficulty.',
        name: 'Rachel Stuart',
        role: 'DIGITAL MARKETER',
        unvisible: 'hidden'
      }
    ]
  },
  methods: {
    nextClient(index){
      (this.counter < (this.clients.length - 1)) ? this.counter++ : this.counter = 0;
      // if (this.counter == this.clients[index]) {
      //   this.visible;
      // } else {
      //   this.unvisible;
      // }
      // console.log(this.clients);
      console.log(this.counter);
    },
    previousClient(){
      (this.counter < 1) ? this.counter = (this.clients.length -1) : this.counter--;
      console.log(this.counter);
    },
    clickCircle(index){
      this.counter = index;
    }
  }
});
