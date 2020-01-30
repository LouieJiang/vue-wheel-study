import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);

new Vue({
    el:"#app",
    data:{
        loading1: false
    }
});

//单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:"settings",

        }
    });
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    //console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-settings');
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:"settings",
            loading: true
        }
    });
    vm.$mount()
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#icon-loading');
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg');
    console.log('svg',svg)
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()

}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount()
    vm.$on('click',function () {
        console.log(1)
    })
    let button = vm.$el
    button.click()
    vm.$el.remove()
    vm.$destroy()
}