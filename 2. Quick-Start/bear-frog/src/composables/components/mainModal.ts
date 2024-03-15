import { ref } from "vue";

export function mainModal() {
  const listValue = ref(""); // 리스트 값 바인딩
  const isVisible = ref(false); // 모달 visible 여부 확인
  const isEmptyListValue = ref(true); // 리스트 값 유효성 판단

  // 모달 열기
  const openModal = () => {
    isVisible.value = true;
  };

  // 모달 닫기
  const closeModal = () => {
    isVisible.value = false; // 모달 닫기
    resetModal();
  };

  // 리스트 값 추가 핸들러
  const handleAddListValue = (
    emit: (event: "addList", value: string) => void,
  ) => {
    if (listValue.value === "") {
      isEmptyListValue.value = false;
    } else {
      emit("addList", listValue.value);
      closeModal();
      resetModal();
    }
  };

  // 리스트 값 리셋
  const resetModal = () => {
    listValue.value = ""; // 리스트 값 리셋
    isEmptyListValue.value = true; // 유효성 값 리셋
  };

  return {
    isVisible,
    listValue,
    isEmptyListValue,
    openModal,
    closeModal,
    handleAddListValue,
  };
}
