import { ref } from "vue";

export function mainPageView() {
  // 리스트 값 배열
  const listValues = ref<string[]>([]);

  // 리스트 값 추가 핸들러
  const handleAddList = (listValue: string) => {
    listValues.value.push(listValue);
  };

  return { listValues, handleAddList };
}
