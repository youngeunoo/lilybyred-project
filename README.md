### 24/01/04

- 컨퍼런스 페이지와 그 레이아웃에 어울릴 리브랜딩 브랜드를 찾음.

### 24/01/05

- 프로젝트 페이지에 사용될 메인 컬러와 폰트 등을 선정함.
- 피그마를 이용하여 전체적인 디자인을 구상하고 필요한 이미지, 아이콘 등을 정리함.

### 24/01/06

- html 마크업 작업 완료. 그 후에 기본적인 css 스타일 작업을 완료함.

### 24/01/07

- gsap scrollTrigger를 사용하여 가장 간단한 효과를 가진 section01, magazine 영역 작업함.
- section01 영역은 스크롤에 따라 이미지 요소들과 로고, 태그들이 차례대로 보여지도록 scale, opacity, x축을 이동하여 작업함.
- magazine 영역은 이미지가 잡지처럼 보여지도록 배치하고, 겹쳐지도록 x축을 이동하여 작업함.

## 24/01/08

- 시작할 때 보이는 main 영역에서 스크롤을 내릴 때 fullpage처럼 보여지도록 작업함.
  처음에는 .from으로 작업했다가, 더욱 fullpage처럼 보여질 수 있도록 onLeave 함수를 이용하여 스크롤을 내리면 opacity 값과 transform 값이 변경되면서 main 화면이 사라지도록 작업함.
- section02 영역이 나타날 때 서서히 나타날 수 있도록 onEnter 함수를 이용해 opacity 값이 0에서 1로 변화되도록 함.
- section03-05 부분은 pin 옵션을 사용하여 고정되게 한 후, 아이템들에 opacity 값과 scale 값의 변경을 줘서 차례대로 나타날 수 있도록 함.
- magazine 영역에 도달해서는 스크롤을 좀 더 내린 후 요소들이 보일 수 있게 start값을 조절함.
- process 영역은 세 영역이 이어지는 것처럼 보일 수 있도록 숫자 영역 간에 선을 이었고, 스크롤에 따라 글과 사진이 보일 수 있도록 함.
- warning 영역에서 outro 영역으로 이동할 때 배경 색이 자연스럽게 바뀌도록 작업함. 처음에는 각 영역의 backgroundColor를 다르게 설정하였는데, 각 영역이 바뀌는 연결 부분이 보여서 자연스럽지 않았음. 이를 해결하기 위해 scrollTrigger에 대한 내용을 더 찾아보았고, warning 영역을 벗어날 때 body의 backgroundColor를 변경하니 원하던 효과가 적용됨.
- 그 외 영역도 onEnter와 onLeave 함수를 이용하여 body의 backgroundColor를 변경하여 각 영역의 이동이 더 자연스럽게 보이도록 함.

### 24/01/09

- 기존 section03에서 section05 영역까지를 같은 섹션으로 합친 후, opacity 값을 조절하여 각 내용이 같은 영역에서 차례대로 나타날 수 있도록 수정함.
- magazine 영역의 아이템들이 해당 영역에 진입할 때 서서히 나타날 수 있도록 onEnter 함수와 opacity 값을 이용하여 수정함.
- process 영역의 숫자 영역들이 보일 때, scale 값과 backgroundColor, border 값에 변화를 주어 진입한다는 느낌을 줄 수 있도록 작업함.
- warning 영역 요소들이 영역에 진입했을 때만 보일 수 있도록 수정함.

### 24/01/10

- main 영역과 section01 영역을 같은 영역으로 합쳐서 메인으로 넘어갈 때 더욱 자연스럽게 화면이 전환될 수 있도록 수정함.
- magazine 영역 요소가 움직일 때 너무 빨리 움직여서 이를 수정하기 위해 duration, scrub 값을 조절하거나 스크롤 위치를 바꿔보았지만 해결되지 않았음.
- process 영역의 사진 구조와 배치가 애매해서 새로 디자인을 구상하였음. 폴더같은 이미지와 아이폰에서 모티브를 따와 색상명을 나열하였는데, 괜찮은지는 적용해봐야 알 것 같음.
- outro의 구조도 애매해서 로고와 글자를 같은 선상에 배치하여 정렬을 새로 함.
- warning 영역에서 포인트로 warning 패널이 스크롤에 맞춰 깜빡거리게 수정함. 그러나 너무 빠르고 부자연스럽게 움직여서, 더 생각을 해보고 수정을 다시 해야할 것 같음.
- warning 영역에서 빠져나갈 때 body의 backgroundColor가 자연스럽게 바뀌지 않고 한 번 깜빡거리며 바뀌는 문제를 발견함. 아직 어떤 부분이 원인인지 몰라 해결하지 못했음.

### 24/01/11

- 새로 디자인한 process 영역의 이미지 요소들을 적용해보았음. 적용해보니 효과가 어울리지 않는 것 같아서 효과를 수정함. 기존에는 opacity 값을 조절하여 서서히 나타나게 하였는데, scale과 y축 값을 조정해서 브라우저 창이 나타나는 것 같은 효과를 주어 연출함. 전체적인 분위기와 훨씬 어울리고 화면 구조 또한 안정적으로 보이는 것 같아 만족함.
- warning 영역의 애니메이션은 스크롤에 따라 움직이게 하지 않고, 영역에 진입하면 일반적인 애니메이션이 나타나게 수정하여 더 자연스럽게 보일 수 있도록 함.
- magazine 영역에 진입할 때 요소들이 보여지는 게 어색해서 그냥 처음처럼 원래 자리에 보여지도록 수정함.
- 스크롤이 너무 빠르게 움직이는 느낌이 있어서 이를 수정하려 다양한 시도를 해봄. 전체 옵션의 duration이나 scrub의 값을 조절해봤지만 스크롤 자체보다는 애니메이션이 뜨는 효과가 느려질 뿐이었고, smoothScrollbar나 scrollproxy 등의 라이브러리, 옵션을 사용해 보았지만 원하는 효과가 이루어지지 않음.

### 24/01/12

- 몇몇 영역들을 내용에 더 적합할 수 있도록 class명을 변경함.
- mega-hot 영역의 배경 이미지가 전체적인 분위기와 어울리지 않는다는 피드백을 받아, 이미지를 새로 찾아봄.
  - 일반적인 불꽃 이미지들은 어울리지 않는 것 같아 피그마로 불씨 요소를 만들어 하나하나 배치하여 이미지를 만들어 보려고 시도했다가 실패함.
  - 그 후 종이가 타오르는 모습의 gif를 찾아서 적용해주었더니 동적인 느낌을 주며 전체적인 분위기와도 어울렸음.
- mega-hot 영역에 진입할 때, 포인트가 되는 이미지에 애니메이션 효과를 주어 더 다채로운 효과를 줌.
- products 영역의 아이템들이 좀 더 화면의 중심으로 모여질 수 있도록 간격을 수정함.
- 경고 느낌을 주는 띠 요소를 페이지 곳곳에 추가하고 배치하여 밋밋함을 줄여줌.
- outro 영역에 공식 홈페이지로 이동할 수 있는 버튼을 추가함.
- scrollTrigger가 좀 더 부드럽게 보일 수 있도록 각 영역의 요소들의 duration 값을 높여줌.
- 스크롤을 더 부드럽고 느리게 제어할 수 있는 효과를 찾아보다가 Lenis라는 플러그인을 발견함.
  - scrollTrigger와 함께 사용할 수 있는 함수가 있어 바로 적용해 보았는데, 적용하니 오히려 너무 느리게 움직여서 불편했음.
  - 무엇이 문제인지 알 수 없어서 함수의 값을 바꿔보고, scrollTrigger의 옵션 값들을 변경해보기도 했는데 여전히 그대로였음.
  - css 값을 살펴보니 scroll-behavior 값이 smooth로 설정되어 있는 게 문제였음. 값을 auto로 변경하니 너무 느리게 움직이는 문제가 해결됨.
- Lenis 함수의 raf 값을 기본 값인 (time _ 1000)에서 (time _ 500)으로 변경하니 원하는 속도와 움직임이 나타나는 것 같음.
- Lenis를 적용한 후, scrollTrigger에서 줬던 duration 값은 전부 삭제하여 정리함.

### 24/01/13

- px 단위로 줬던 position 값들을 다양한 브라우저 사이즈에 대응할 수 있도록 vw 단위로 변경함.
- outro 영역의 홈페이지 바로가기 버튼에 마우스 효과로 color가 변화하는 효과를 줌.

### 24/01/14

- magazine 영역에 진입했을 때 backgroundColor의 duration 값을 0.1에서 0.5로 변경함.
- products 영역에 sel 박스 opacity 값 수정하여 가독성 높임.

### 24/01/15

- warning 영역의 end 값을 조절하여 해당 영역에 더 오래 머무르게 하고, 다음 영역과의 연결이 좀 더 자연스럽게 함.
- process 영역의 이미지들을 더 생기있게 보일 수 있도록 채도를 올림.

### 24/01/16

- outro 영역 구조 변경, 포인트가 되는 문구들 추가하여 채움.
- mega-hot 영역 띠 요소에 스크롤 따라 움직임 줌.
- outro 버튼에 "Click!" 글자 넣어 클릭 유도