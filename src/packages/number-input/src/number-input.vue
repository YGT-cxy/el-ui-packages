<!-- 数字型的输入框 -->
<template>
  <el-input
    ref="input"
    :value="inputValue"
    v-bind="$attrs"
    v-on="inputListeners"
  >
    <template #prefix>
      <slot name="prefix" />
    </template>
    <template #suffix>
      <slot name="suffix" />
    </template>
    <template #prepend>
      <slot name="prepend" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <!-- <slot slot="prefix" name="prefix" />
    <slot slot="suffix" name="suffix" />
    <slot slot="prepend" name="prepend" />
    <slot slot="append" name="append" /> -->
  </el-input>
</template>

<script>
import { formatPrice } from './utils.js'

export default {
  name: 'NumberInput',
  props: {
    value: {
      required: true,
      type: [String, Number],
      default: ''
    },
    // 限制是否只能为正数
    positive: {
      required: false,
      type: Boolean,
      defalut: true
    },
    /**
     * 小数点的长度，默认为零
     */
    remain: {
      required: false,
      type: [Number, String],
      default: 0
    },
    /**
     * 输入的值最大值范围
     */
    max: {
      required: false,
      type: [Number, String],
      default: ''
    },
    /**
     * 输入的值最小值范围
     */
    min: {
      required: false,
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: this.handleInputValue
      })
    }
  },
  watch: {
    /**
     * 监听value
     */
    value: {
      immediate: true,
      handler: function(newValue) {
        this.inputValue = newValue
      }
    }
  },
  methods: {
    /**
     * 输入框获得焦点
     */
    focus() {
      this.$refs['input'].focus()
    },

    handleInputValue(value) {
      // 控制只能输入正数
      if (this.positive) {
        value = value.replace(/[^0-9.]/g, '')
      } else {
        value = value.replace(/[^0-9.-]/g, '')
      }

      // 判断是否存在小数点
      if (this.remain) {
        value = value && formatPrice(value, this.remain) // 格式化处理带小数点的情况
      } else {
        value = value.replace(/[^\d]/g, '')
      }

      // 校验当前的值是否符合定义的值范围
      const verifyRresult = this.verifyValue(value)
      this.$emit('change', verifyRresult.value)
      this.$emit('input', verifyRresult.value)
    },

    /**
     * 校验值
     */
    verifyValue(value) {
      let max = this.max
      let min = this.min
      let flag = true
      let resultValue = value

      // 存在最大值
      if (max !== '') {
        max = +max
        flag = value <= max

        if (!flag) {
          resultValue = max
        }
      }

      // 存在最小值，且flag 为 true
      if (flag && min !== '') {
        min = +min
        flag = value >= min

        if (!flag) {
          resultValue = min
        }
      }

      return {
        status: flag,
        value: resultValue
      }
    }
  }
}
</script>
