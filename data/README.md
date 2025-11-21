# JSON 기반 방송 데이터 관리 시스템

이제 방송 쇼케이스 데이터를 JSON 파일로 관리할 수 있습니다!

## 📁 생성된 파일

### 1. `data/broadcasts.json`
모든 방송 아이템 데이터가 저장된 JSON 파일입니다.

**구조:**
```json
{
  "categories": {
    "baby": {
      "id": "baby",
      "name": "육아/유아",
      "items": [
        {
          "title": "제품명",
          "description": "제품 설명",
          "image": "이미지 경로",
          "imageFallback": "대체 이미지 (선택사항)",
          "link": "링크 URL"
        }
      ]
    }
  }
}
```

### 2. `assets/js/broadcasts.js`
JSON 데이터를 자동으로 로드하고 HTML로 렌더링하는 JavaScript 모듈입니다.

### 3. `index.html` (수정됨)
- 하드코딩된 아이템들을 모두 제거
- 빈 탭 컨테이너만 남김
- `broadcasts.js` 스크립트 추가

## 🎯 사용 방법

### 새로운 아이템 추가하기

`data/broadcasts.json` 파일을 열고 해당 카테고리의 `items` 배열에 새 객체를 추가하세요:

```json
{
  "title": "새 제품",
  "description": "제품 설명",
  "image": "images/custom/제품이미지.jpg",
  "link": "https://naver.me/링크주소"
}
```

### 카테고리 수정하기

카테고리 이름이나 ID를 변경하려면:
1. JSON 파일에서 해당 카테고리 정보 수정
2. HTML의 탭 버튼 ID와 매칭 확인 (`#baby-pane`, `#health-pane` 등)

### 이미지 대체 처리

이미지 로드 실패 시 대체 이미지를 표시하려면 `imageFallback` 속성을 추가하세요:

```json
{
  "image": "images/custom/제품.jpg",
  "imageFallback": "https://placehold.co/600x400/1a1a2e/c5a059?text=Fallback"
}
```

## ✅ 장점

1. **간편한 관리**: HTML 수정 없이 JSON만 편집
2. **데이터 중앙화**: 모든 방송 정보가 한 파일에
3. **유지보수 용이**: 구조가 명확하고 읽기 쉬움
4. **확장 가능**: 새로운 필드 추가 가능

## 🔄 작동 방식

1. 페이지 로드 시 `broadcasts.js`가 자동 실행
2. `data/broadcasts.json` 파일을 fetch로 로드
3. 각 카테고리별로 HTML 요소 동적 생성
4. 해당 탭 컨테이너에 삽입

이제 `data/broadcasts.json` 파일만 수정하면 웹사이트가 자동으로 업데이트됩니다!
