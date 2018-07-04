<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div class="form-group" :class="{'has-feedback':true, 'has-error': error}" >
            <input 
                :type="type" 
                ref="input" 
                class="form-control" 
                :placeholder="plholder" 
                :value="value" 
                @input="updateValue($event.target.value)"
                @blur="$emit('blur')"
                @change="$emit('change')"
                @keypress="$emit('keypress')"
                @keydown="$emit('keydown')"
                :readonly="readonly"
                :disabled="disabled"
                >
            <span v-if="icon" :class="icon"></span>
            <span class="help-block" v-show="error">{{errormsg}}</span>
        </div>
    </div>
</template>

<script>
import BasicInput from './basic-input'
export default {
    mixins: [BasicInput],
    props: {
        errormsg: {
            type: String,
            default: 'Trường này là bắt buộc'
        },
        icon: {
            type: [Object,Array],
            required: false,
            default: function () {
                return null
            }
        },
        error: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            required: false,
            default: ''
        }
    },
    methods: {
        updateValue: function (value) {
        // Emit the number value through the input event
        this.$emit('input', value)
        }
    },
    computed: {
        plholder () {
            return this.placeholder ? this.placeholder : this.label
        }
    }
}
</script>

<style>

</style>
