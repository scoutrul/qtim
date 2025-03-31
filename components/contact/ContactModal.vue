<script setup lang="ts">
import Modal from '@/components/ui/Modal.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import Button from '@/components/ui/Button.vue'
import { useContactModal } from '@/composables/useContactModal'

const { isContactModalOpen, closeModal } = useContactModal()
</script>

<template>
  <Modal 
    v-model="isContactModalOpen" 
    @close="closeModal"
    title="Связаться с нами"
    size="sm"
    :persistent="false"
  >
    <ContactForm @submit="closeModal" />
    <template #footer>
      <Button 
        variant="underlined" 
        size="lg" 
        @click="closeModal"
        class="mr-3 font-tt-commons"
      >
        Отмена
      </Button>
    </template>
  </Modal>
</template> 