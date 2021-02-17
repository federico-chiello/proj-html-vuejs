var app = new Vue({
  el: '#avada',
  data:{
    menu: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'Apply', 'News', 'Get in touch now'],
    agencySeo: [
      {
        logo: 'fas fa-road',
        title: 'Establish Goals',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        logo: 'fas fa-video',
        title: 'Work With a Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        logo: 'fas fa-tint',
        title: 'Get Results',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    services:[
      {
        logo: 'fab fa-google',
        title: 'Google SEO',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        linkArrow: 'fas fa-chevron-right'
      },
      {
        logo: 'fas fa-cog',
        title: 'Brand Strategy',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        linkArrow: 'fas fa-chevron-right'
      },
      {
        logo: 'fas fa-city',
        title: 'Local SEO',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        linkArrow: 'fas fa-chevron-right'
      },
      {
        logo: 'far fa-chart-bar',
        title: 'SEO Analysis',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        linkArrow: 'fas fa-chevron-right'
      }
    ],
    news: [
      {
        image: 'seo/images/related-service-2-320x202.jpg',
        title: 'Why You Need A SEO Agency Now',
        date: 'November 1st, 2017',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        image: 'seo/images/related-service-4-320x202.jpg',
        title: 'SEO Tips For Your Startup',
        date: 'November 1st, 2017',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        image: 'seo/images/blog-post-6-320x202.jpg',
        title: 'Image Optimization For Your Site',
        date: 'November 1st, 2017',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    menuFooter: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'News', 'Get in touch now'],
    counter: 0,
    clients:[
      {
        image: 'seo/images/testimonials-2.jpg',
        review: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.',
        name: 'Luis Desalvo',
        role: 'CREO TECH'
      },
      {
        image: 'seo/images/testimonials-1.jpg',
        review: 'Avada allowed me to carry out advertising campaigns without any difficulty.',
        name: 'Rachel Stuart',
        role: 'DIGITAL MARKETER'
      }
    ]
  },
  stopInterval: '',
  created(){
    this.stopInterval = setInterval(this.nextClient,4000);
  },
  methods: {
    nextClient(){
      (this.counter < (this.clients.length - 1)) ? this.counter++ : this.counter = 0;
    },
    previousClient(){
      (this.counter < 1) ? this.counter = (this.clients.length -1) : this.counter--;
    },
    clickCircle(index){
      this.counter = index;
      clearInterval(this.stopInterval);
    }
  }
});
