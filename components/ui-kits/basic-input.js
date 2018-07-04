export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inputClass: {
        type: [Object, Array],
        default: function() {
          return {}
        }
      },
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      }
    }
  }