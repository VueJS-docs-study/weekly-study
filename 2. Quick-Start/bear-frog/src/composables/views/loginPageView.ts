import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store";
import type { User } from "@/types/views";

export function loginPageView() {
  const router = useRouter();
  const userStore = useUserStore(); // 사용자 정보 저장 스토어
  const { initUserStore } = userStore;

  // 사용자 유효성 판단 값
  // 임의로 클라이언트 값 사용
  const VALIDATE_USER = {
    ID: "id",
    PASSWORD: "password",
  };

  // 사용자 입력 객체
  const user = reactive<User>({
    id: "",
    password: "",
  });

  // 유효성 판단 결과
  const validateResult = ref(true);

  // 로그인 핸들러
  const handleLogin = async () => {
    // 로그인 정보 값 유효 판단
    const validate = () =>
      user.id === VALIDATE_USER.ID && user.password === VALIDATE_USER.PASSWORD;

    if (validate()) {
      // 유효하다면
      initUserStore(user); // 사용자 store 초기화
      await router.push("/main"); // main페이지 라우팅
    } else {
      validateResult.value = false; // 유효값 플래그 false 지정
    }
  };

  return {
    user,
    validateResult,
    handleLogin,
  };
}
