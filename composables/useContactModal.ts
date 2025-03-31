import { ref } from 'vue'

const isContactModalOpen = ref(false)

export const useContactModal = () => {
  const openModal = () => {
    isContactModalOpen.value = true
  }

  const closeModal = () => {
    isContactModalOpen.value = false
  }

  return {
    isContactModalOpen,
    openModal,
    closeModal
  }
} 