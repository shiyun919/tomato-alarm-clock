Component({
  properties: {
    visible: {
      type: Boolean,
      value: ''
    },
    placeholder: {
    type: String,
    value: ''
    },
  },
  data: {
    value: ''
  },
  methods: {
    submit() {
      this.triggerEvent('submit', this.data.value)
    },
    hide() {
      this.triggerEvent('hide', '隐藏输入框')
    },
    getContent(event){
      console.log(event.detail.value)
      this.data.value = event.detail.value
    }
  },
})