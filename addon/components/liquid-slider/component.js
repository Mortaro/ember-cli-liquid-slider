import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  layout,

  activeIndex: 0,

  animation: "crossFade",
  interval: 6000,

  prevText: '«',
  nextText: '»',

  autoplay: null,

  start() {
    let autoplay = Ember.run.later(this, () => {
      this.send('next');
    }, this.get('interval'));
    Ember.set(this, 'autoplay', autoplay);
  },

  stop() {
    Ember.run.cancel(Ember.get(this, 'autoplay'));
  },

  didInsertElement() {
    this.start();
  },

  willDestroyElement() {
    this.stop();
  },

  slidesObserver: Ember.observer('slides', function(){
    this.stop();
    this.set('activeIndex', 0);
    this.start();
  }),

  actions: {

    prev() {
      this.stop();
      let lastIndex = this.get('slides.length') - 1;
      if(this.get('activeIndex') == 0) {
        this.set('activeIndex', lastIndex);
      } else {
        this.set('activeIndex', this.get('activeIndex') - 1);
      }
      this.start();
    },

    next() {
      this.stop();
      let lastIndex = this.get('slides.length') - 1;
      if(this.get('activeIndex') == lastIndex) {
        this.set('activeIndex', 0);
      } else {
        this.set('activeIndex', this.get('activeIndex') + 1);
      }
      this.start();
    }

  }

});
