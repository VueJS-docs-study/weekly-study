<template>
  <div>
    <form class="submit-form" @submit.prevent="handleSubmit">
      <label for="name">이름:</label>
      <input required type="text" id="name" v-model="name">
      <label for="email">Email:</label>
      <input required type="email" id="email" v-model="email">
      <label for="feedback">문의사항:</label>
      <textarea required id="feedback" v-model="feedback"></textarea>
      <button type="submit">제출</button>
    </form>
    <p v-if="submitted">문의사항이 성공적으로 전송되었습니다!</p>
    <button style="width: 100%;" @click.stop="toggleModal">더 많은 정보...</button>
    <teleport to="body">
      <div v-if="showModal" class="show-modal" @click="hideModal">
        <div class="modal-overlay">
          <div class="modal-content" @click.stop>
            <img src="https://i.pinimg.com/564x/dc/74/d5/dc74d5e30d9fb344ebc7108b3fd59ce9.jpg">
            <button style="width: 100%;" @click="hideModal">닫기</button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
const email = ref<string>('');
const feedback = ref<string>('');
const submitted = ref<boolean>(false);
const showModal = ref<boolean>(false);

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => submitted.value = false, 5000);
  resetForm();
};

const resetForm = () => {
  name.value = '';
  email.value = '';
  feedback.value = '';
};

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const hideModal = () => {
  showModal.value = false;
};
</script>

<style>
.submit-form {
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: auto;
}

.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  margin: auto;
  z-index: 1001;
}

.show-modal {
  display: block;
}
</style>