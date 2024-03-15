<script setup lang="ts">
import MainModal from "@/components/MainModal.vue";
import { ref } from "vue";
import { mainPageView } from "@/composables/views/mainPageView";

const { listValues, handleAddList } = mainPageView();

const mainModal = ref<InstanceType<typeof MainModal> | null>(null);

// 리스트 값 추가
const addList = (listValue: string) => {
  handleAddList(listValue);
};

// 리스트 추가 모달 열기
const openModal = () => {
  mainModal.value?.openModal();
};
</script>

<template>
  <div class="main-page-view">
    <ul>
      <li v-for="(listValue, index) in listValues" :key="index">
        {{ listValue }}
      </li>
    </ul>
    <button @click="openModal">리스트 추가</button>
    <MainModal ref="mainModal" @addList="addList"> 리스트 추가 </MainModal>
  </div>
</template>
