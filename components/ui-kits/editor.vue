<template>
    <div>
        <textarea 
            :id="id" 
            :value="value" 
            class="form-control"
            ></textarea>
        <script type="text/javascript">
            CKEDITOR.replace({{id}}, {
                customConfig: '/js/config-editor.js'
            }); 
        </script>
    </div>
</template>

<script>
import BasicInput from './basic-input'
export default {
    mixins: [BasicInput],
    props: ["id","dataChange"],
    watch: {
      dataChange () {
          CKEDITOR.instances[this.id].setData(this.value);
      }  
    },
    data () {
        return {
        }
    },
    components: {
    },
    methods: {
        updateValue (val) {
            this.$emit('input', val)
        }
    },
    mounted () {
        const self = this
        CKEDITOR.instances[this.id].on('change', function() { 
            self.updateValue(this.getData())
        });
    }
}
</script>

<style>

</style>
