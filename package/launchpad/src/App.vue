<script setup lang="ts">
import { watch, ref } from 'vue'
import { useQuery, useMutation, gql } from '@urql/vue'
import { useToast } from "vue-toastification"
const toast = useToast()

const QUERY = gql`
{
  currentProject {
    id
    message
  }
}
`

const MUTATION = gql`
  mutation UpdateProject($message: String, $id: Int) {
    updateProject(message: $message, id: $id) {
      id
      message
    }
  }
`
// query.data is a ref
const query = useQuery({ query: QUERY})
const mutation = useMutation(MUTATION)
const data = ref()

const updateId = ref()

watch(query.data, (v) => {
  toast.info('Query successfully', {
    timeout: 1000
  })
  data.value = v.currentProject
})

const update = async () => {
  const r = await mutation.executeMutation({ id: Number(updateId.value) })
  toast.success('Update successfully', {
    timeout: 1500
  })
  data.value = r.data.updateProject
}
</script>

<template>
  <div>{{ data }}</div>
  <input placeholder="id" type="number" v-model="updateId"/>
  <button @click="update"> Update </button>
</template>
