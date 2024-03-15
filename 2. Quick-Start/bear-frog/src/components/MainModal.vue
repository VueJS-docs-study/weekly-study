<script setup lang="ts">
import { defineEmits } from "vue";
import { mainModal } from "@/composables/components/mainModal";

const emit = defineEmits<{
  addList: [listValue: string];
}>();

const addListValue = () => {
  handleAddListValue(emit);
};

const {
  listValue,
  openModal,
  closeModal,
  handleAddListValue,
  isVisible,
  isEmptyListValue,
} = mainModal();

// Main 페이지, 모달 간 결합도가 높다고 생각해 별도 모듈 분류 하지 않고 defineExpose 사용해 결합도 향상시키는 전략 사용함
defineExpose({ openModal, closeModal });
</script>
<template>
  <teleport to="body">
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <slot></slot>
        <div>
          <input
            v-model="listValue"
            @focus="() => (isEmptyListValue = true)"
            type="text"
            placeholder="리스트 항목 입력"
          />
        </div>
        <input type="button" value="추가하기" @click="addListValue" />
        <div v-if="!isEmptyListValue">
          <span style="color: red; font-weight: bold">{{
            "빈 값은 안 돼요!"
          }}</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  /* 모달 내용에 따라 크기를 조절하세요 */
  width: 90%;
  max-width: 500px;
}
</style>
