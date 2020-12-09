import { ref, onMounted, onUnmounted, reactive, toRefs } from 'vue'
function useMousePoisition() {

  const mouseData = reactive({
    a: 0,
    b: 0,
    updataAb: (e: MouseEvent) => {
      mouseData.a = e.pageX
      mouseData.b = e.pageY
    }

  })
  const x = ref(0)
  const y = ref(0)
  const ClickNumber = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener("click", mouseData.updataAb)
    document.addEventListener("click", ClickNumber)
  })
  onUnmounted(() => {
    document.removeEventListener("click", mouseData.updataAb)
    document.removeEventListener("click", ClickNumber)
  })

  return { mouseData, x, y }
}

export default useMousePoisition