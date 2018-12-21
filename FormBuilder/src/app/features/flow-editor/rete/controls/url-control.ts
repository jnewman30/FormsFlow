import { Control } from 'rete';
import Vue from 'vue/dist/vue.esm';

const VueUrlControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  template: '<input type="url" :readonly="readonly" :value="value" @input="change($event)"/>',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    change(e) {
      this.value = e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});

export class UrlControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueUrlControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
