import MyComponent from '../../../../slices/HeroBanner';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroBanner'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":[{"type":"heading1","text":"Brand distributed users","spans":[]}],"description":[{"type":"paragraph","text":"Ex qui consectetur magna laborum. Proident ipsum commodo nisi eu dolor commodo consequat culpa Lorem aliquip aliquip nulla. Ipsum commodo elit ea sit magna ea non Lorem aliqua labore consectetur veniam quis anim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
