## 8. Conditional Rendering
* 링크: https://vuejs.org/guide/essentials/conditional.html

### 문제 1: v-if와 v-show의 주요 차이점은 무엇이며, 각각 어떤 시나리오에서 사용하는 것이 더 적합한지 설명하세요.

### 문제 2: v-if 지시어가 참으로 평가될 때, 아래의 코드는 어떤 결과를 나타내나요?

```vue
<h1 v-if="true">Vue.js is amazing!</h1>
<h1 v-else>Just another JavaScript framework</h1>
```

```
A) "Vue.js is amazing!"와 "Just another JavaScript framework" 둘 다 화면에 표시된다.
B) "Vue.js is amazing!"만 화면에 표시된다.
C) "Just another JavaScript framework"만 화면에 표시된다.
D) 아무 것도 화면에 표시되지 않는다.
```

### 문제 3: 다음 중 `<template>` 태그와 관련된 설명으로 올바른 것은 무엇인가요?

```
A) <template> 태그는 렌더링 결과에 직접 포함됩니다.
B) v-show 지시어는 <template> 태그와 함께 사용할 수 있습니다.
C) <template> 태그는 조건부 그룹을 렌더링할 때 사용할 수 있는 논리적 컨테이너 역할을 합니다.
D) <template> 태그는 항상 화면에 표시되는 요소를 포함해야 합니다.
```


### 문제 4: v-if와 v-for를 동일한 요소에 사용할 때, 어떤 지시어가 먼저 평가되나요?

```
A) v-if
B) v-for
C) 동시에 평가된다.
D) 사용할 수 없으므로 평가되지 않는다.
```

### 문제 5: v-else-if 지시어 사용 시 주의해야 할 점은 무엇인가요?

```
A) v-else-if는 v-if 또는 다른 v-else-if 요소 바로 뒤에 와야 인식됩니다.
B) v-else-if는 단독으로 사용될 수 있습니다.
C) v-else-if는 v-for와 함께 사용할 수 있습니다.
D) v-else-if는 최대 2개까지만 체이닝할 수 있습니다.
```

<details>
  <summary>정답 보기</summary>

### 문제 1 답: v-if는 조건이 참일 때만 요소를 DOM에 추가하고, 거짓일 때 요소를 완전히 제거합니다. 이는 조건이 자주 변경되지 않을 때 사용하기 적합합니다. 반면, v-show는 요소를 항상 DOM에 유지하되, CSS의 display 속성을 변경하여 요소의 표시 여부를 조절합니다. 이는 조건이 자주 바뀔 때, 즉 토글이 빈번할 때 사용하기 적합합니다.

### 문제 2 답: B) "Vue.js is amazing!"만 화면에 표시된다.

### 문제 3 답: C) `<template>` 태그는 조건부 그룹을 렌더링할 때 사용할 수 있는 논리적 컨테이너 역할을 합니다.

### 문제 4 답: A) v-if

### 문제 5 답: A) v-else-if는 v-if 또는 다른 v-else-if 요소 바로 뒤에 와야 인식됩니다.
</details>