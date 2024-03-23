## 7. Class and Style Bindings
* 링크: https://vuejs.org/guide/essentials/class-and-style.html

### 문제 1: Vue에서 동적으로 클래스를 토글하기 위해 :class에 전달할 수 있는 자료형 두 가지는 무엇인가요?

### 문제 2: :class="{ 'text-danger': hasError }"에서 hasError가 true일 때 HTML에 어떤 클래스가 적용되나요?

### 문제 3: 컴포넌트의 루트 엘리먼트에 이미 class="foo bar"가 있을 때, :class="{ active: isActive }"를 추가하고 isActive가 true일 경우 최종적으로 적용되는 클래스 목록은 무엇인가요?

### 문제 4: Vue에서 ***:class 바인딩***에 사용할 수 있는 문법으로 올바르지 않은 것은?
```js
1) { active: isActive }
2) ['active', 'text-danger']
3) isActive ? 'active' : 'inactive'
4) { 'font-size': '12px' }
```

### 문제 5: Vue에서 :style을 사용하여 인라인 스타일을 동적으로 적용할 때 권장되는 CSS 속성 키의 형식은 무엇인가요?


### 문제 6: :style="{ 'font-size': fontSize + 'px' }"에서 fontSize가 30일 경우, 적용되는 스타일 값은 무엇인가요?


### 문제 7: :style에 배열을 사용하여 여러 스타일 객체를 바인딩할 때, 배열 내의 스타일 객체들은 어떻게 처리되나요?

### 문제 8: 다음 중 :style 바인딩에서 자동 접두어(prefix) 추가 기능에 대한 설명으로 올바른 것은?
```
1) Vue는 런타임에 사용자의 브라우저가 특정 CSS 속성을 지원하는지 확인하지 않습니다.
2) 모든 CSS 속성에 대해 자동으로 접두어를 추가합니다.
3) Vue는 런타임에 브라우저의 CSS 속성 지원 여부를 확인하고, 필요한 경우 적절한 접두어를 자동으로 추가합니다.
4) 접두어는 개발자가 수동으로 추가해야 합니다.
```
> Vue에서는 CSS 속성을 :style 바인딩으로 동적으로 적용할 때, 일부 브라우저에서는 특정 CSS 속성에 대해 접두어(prefix)가 필요할 수 있음
>> 예를 들어, "transform" 속성은 오래된 브라우저에서 -webkit-transform, -ms-transform 등으로 사용될 수 있음

<details>
  <summary>정답 보기</summary>

### 문제 1 답: 
* 객체와 배열입니다.
### 문제 2 답: 
* text-danger 클래스가 적용됩니다.
### 문제 3 답:
* foo bar active가 최종적으로 적용됩니다.
### 문제 4 답: 
* 4). { 'font-size': '12px' }는 스타일 바인딩에 사용되는 문법이며, 클래스 바인딩 문법이 아닙니다.
### 문제 5 답: 
* camelCase 형식이 권장됩니다.
### 문제 6 답: 
* font-size: 30px;
### 문제 7 답: 
* 배열 내의 스타일 객체들은 병합되어 동일한 엘리먼트에 적용됩니다.
### 문제 8 답: 
* 3). Vue는 런타임에 브라우저의 CSS 속성 지원 여부를 확인하고, 필요한 경우 적절한 접두어를 자동으로 추가합니다.

</details>