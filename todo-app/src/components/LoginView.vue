<template>
    <form @submit.prevent="submitForm">
        <div>
            <input
                id="id"
                name="id"
                type="text"
                class="id"
                placeholder="아이디"
                v-model="logInfo.userId"
                autocomplete="off"
            />
        </div>
        <div>
            <input
                id="password"
                name="password"
                type="password"
                class="password"
                placeholder="비밀번호"
                v-model="logInfo.userPwd"
                autocomplete="off"
            />
        </div>
        <div>
            <button type="submit" class="btn-login">로그인</button>
        </div>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { object, string } from 'yup';

const logInfo = reactive({
  userId: '',
  userPwd: '',
});

const schema = object().shape({
  userId: string()
    .required('아이디를 입력하세요.')
    .min(5, '아이디는 5글자 이상 입력'),
  userPwd: string()
    .required('패스워드를 입력하세요.')
    .min(5, data => `패스워드는 ${data.min}글자 이상 입력`),
});

const submitForm = async () => {
  try {
    await schema.validateSync(logInfo, { abortEarly: false });
  } catch (error) {
    const result = error.inner[0];
    console.log(result.message);
  }
};
</script>