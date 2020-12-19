import { ref } from 'vue'

import axios from 'axios'

function userUrlLorder<T>(usr: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const errors = ref(false)
  axios.get(usr).then(data => {
    loading.value = false
    result.value = data.data
    loaded.value = true

  }).catch(err => {
    errors.value = true
    result.value = err
    loaded.value = false
  })
  return {
    result, loading, loaded, errors

  }
}

export default userUrlLorder