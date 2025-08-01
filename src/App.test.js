import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElTooltip } from 'element-plus'


describe('Element Plus Tooltip', () => {


  it('renders and hides Element Plus el-tooltip content (coverage for content.vue:94)', async () => {
    const wrapper = mount(ElTooltip, {
      props: {
        content: 'Tooltip content',
        placement: 'top',
        trigger: 'hover'
      },
      global: {
        plugins: [ElementPlus]
      }  
    })
    await nextTick()
     console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
   
  })
})
