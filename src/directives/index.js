// import vClickOutside from 'v-click-outside'

export const focusDirective = {
    mounted: (el) => {
        el.focus()
    }
}

export const clickOutside ={
        mounted: (el, binding, vnode) => {
            // assign event to the element
            el.clickOutsideEvent = function (event) {
                // here we check if the click event is outside the element and it's children
                if (!(el == event.target || el.contains(event.target))) {
                    // if clicked outside, call the provided method
                    console.log('puki');
                    binding.value(event)
                }
            }
            // console.log('v-click-outside', vnode);
            // register click and touch events
            setTimeout(() => {
              document.body.addEventListener('click', el.clickOutsideEvent)
              document.body.addEventListener('touchstart', el.clickOutsideEvent)
            }, 500)
        },
        unmounted: function (el) {
      // unregister click and touch events before the element is unmounted
          // console.log('puki',el.clickOutsideEvent );
          document.body.removeEventListener('click', el.clickOutsideEvent)
          document.body.removeEventListener('touchstart', el.clickOutsideEvent)
        },
        stopProp(event) {
          event.stopPropagation()
        },
      }
     
     
//      <group-menu
//            v-if="showGroupMenu"
//            v-clickoutside="hidePopup"
     
     
     
//      hidePopup() {
//            this.showGroupMenu = false;
//          },
// }

// export const clickOutside = {

// }