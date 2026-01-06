# Cafe24 CCTV 쇼핑몰 템플릿 가이드

## 프로젝트 개요

- **프로젝트명**: YOURLOGO CCTV 쇼핑몰
- **폴더**: `001_cctv/`
- **브랜드 컬러**:
  - Primary: `#1a3a5c` (네이비)
  - Secondary: `#f7941d` (오렌지)
  - Accent: `#00a8e8` (하늘색)

---

## 파일 구조

```
001_cctv/
├── main.html          # 메인 페이지
├── list.html          # 상품 목록 페이지 (Cafe24 템플릿)
├── detail.html        # 상품 상세 페이지 (Cafe24 템플릿)
├── 메인.html          # 메인 미리보기 (한글)
├── 목록.html          # 목록 미리보기 (한글)
├── 상세.html          # 상세 미리보기 (한글)
├── 공통.html          # 공통 헤더/푸터 (한글)
└── css/
    └── style.css      # 메인 스타일시트
```

---

## Cafe24 기본 템플릿 코드

### 1. 상품 상세 페이지 (detail.html)

```html
<!--@layout(/layout/basic/layout.html)-->
<!--@css(/css/style.css)-->
<!--
    $category_page = /product/list.html
    $project_page = /product/project.html
    $jointbuy_page = /product/jointbuy.html
-->
<div class="path" module="product_headcategory">
    <span>현재 위치</span>
    <ol>
        <li><a href="/">홈</a></li>
        <li class="{$disp_cate_1|display}"><a href="{$link_product_list_1}">{$name_1}</a></li>
        <li class="{$disp_cate_2|display}"><a href="{$link_product_list_2}">{$name_2}</a></li>
        <li class="{$disp_cate_3|display}"><a href="{$link_product_list_3}">{$name_3}</a></li>
        <li class="{$disp_cate_4|display}"><strong><a href="{$link_product_list_4}">{$name_4}</a></strong></li>
    </ol>
</div>

<div module="product_detail">
    <!--@css(/css/module/product/detail.css)-->
    <div class="headingArea">
        <h2>[{$product_code}] {$name}</h2>
        <span class="icon">{$soldout_icon} {$recommend_icon} {$new_icon} {$product_icons}</span>
    </div>
    <div class="detailArea">
        <div class="imgArea" module="product_image">
            <!-- 상품 이미지 영역 -->
        </div>
        <div class="infoArea">
            <!-- 상품 정보 테이블 -->
            <!-- 옵션 선택 -->
            <!-- 수량 조절 -->
            <!-- 총 상품금액 -->
            <!-- 구매 버튼 -->
        </div>
    </div>
</div>
```

### 2. 상품 목록 페이지 (list.html)

```html
<!--@layout(/layout/basic/layout.html)-->
<!--@css(/css/style.css)-->
<div module="Product_menupackage">
    <div class="path" module="product_headcategory">
        <!-- 브레드크럼 -->
    </div>
    <div class="title" module="product_headcategory">
        <h2>{$name}</h2>
    </div>
</div>

<div module="product_normalpackage" class="ec-base-product">
    <ul class="prdList grid4">
        <li id="anchorBoxId_{$product_no}">
            <div class="thumbnail">
                <div class="prdImg">
                    <a href="{$link_product_detail}">
                        <img src="{$image_medium}" alt="{$seo_alt_tag}" />
                    </a>
                </div>
                <div class="icon">
                    <div class="promotion">{$soldout_icon} {$new_icon}</div>
                </div>
            </div>
            <div class="description">
                <strong class="name"><a href="{$link_product_detail}">{$product_name}</a></strong>
                <ul module="product_ListItem" class="spec">
                    <li>{$item_content}</li>
                </ul>
            </div>
        </li>
    </ul>
</div>

<div module="product_normalpaging" class="ec-base-paginate">
    <!-- 페이지네이션 -->
</div>
```

### 3. 메인 페이지 상품 모듈 (main.html)

```html
<div module="product_listmain_1" class="ec-base-product">
    <!--
        $count = 8
        $basket_result = /product/add_basket.html
        $basket_option = /product/basket_option.html
    -->
    <ul class="prdList grid4">
        <li id="anchorBoxId_{$product_no}">
            <div class="thumbnail">
                <div class="prdImg">
                    <a href="{$link_product_detail}" name="anchorBoxName_{$product_no}">
                        <img src="{$image_medium}" id="{$image_medium_id}" alt="{$seo_alt_tag}" />
                        <span module="product_Imagestyle">
                            <span class="prdIcon {$icon_class_name}" style="background-image:url('{$icon_url}');"></span>
                        </span>
                    </a>
                    <span class="wish">{$list_wish_icon}</span>
                </div>
                <div class="icon">
                    <div class="promotion">{$soldout_icon} {$stock_icon} {$recommend_icon} {$new_icon} {$product_icons}</div>
                    <div class="button">
                        <div class="likeButton {$disp_likeprd_class}">
                            <button type="button">{$disp_likeprd_icon}<strong>{$disp_likeprd_count}</strong></button>
                        </div>
                        <div class="option">{$option_preview_icon}</div>
                        {$basket_icon} {$zoom_icon}
                    </div>
                </div>
            </div>
            <div class="description">
                <strong class="name">
                    <a href="{$link_product_detail}" class="{$product_name_display|display}">
                        <span class="title {$product_name_title_display|display}">{$product_name_title} :</span>
                        {$product_name}
                    </a>
                </strong>
                <ul module="product_ListItem" class="spec">
                    <li class="{$item_display|display}">
                        <strong class="title {$item_title_display|display}">{$item_title} :</strong>
                        {$item_content}
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
```

---

## CSS 주요 클래스

### Cafe24 기본 클래스
- `.detailArea` - 상품 상세 레이아웃 컨테이너
- `.imgArea` - 상품 이미지 영역
- `.infoArea` - 상품 정보 영역
- `.headingArea` - 상품명 영역
- `.ec-base-product` - 상품 리스트 컨테이너
- `.prdList` - 상품 목록 ul
- `.thumbnail`, `.prdImg` - 상품 썸네일
- `.description` - 상품 설명
- `.ec-base-qty` - 수량 조절
- `.totalPrice` - 총 상품금액
- `.ec-base-button.gColumn` - 액션 버튼 그룹
- `.ec-base-tab` - 탭 네비게이션
- `.ec-base-paginate` - 페이지네이션

### 버튼 클래스
- `.btnSubmit.sizeL` - 바로구매 버튼 (오렌지)
- `.btnNormal.sizeL` - 장바구니 버튼 (네이비)
- `.btnEm.sizeL` - 품절 버튼 (회색)
- `.btnBasic.sizeL` - 관심상품 버튼 (흰색)

---

## 향후 작업 요청 프롬프트

```
Cafe24 CCTV 쇼핑몰 템플릿 작업을 계속해주세요.

### 프로젝트 정보
- 폴더: 001_cctv/
- 브랜드 컬러: Primary #1a3a5c, Secondary #f7941d
- CSS: css/style.css (Cafe24 !important 오버라이드 방식)

### 완료된 작업
1. main.html - 메인 페이지 (product_listmain 모듈)
2. list.html - 상품 목록 (Cafe24 기본 템플릿)
3. detail.html - 상품 상세 (Cafe24 기본 템플릿)
4. style.css - Cafe24 기본 CSS 오버라이드 (~4300줄)
   - .detailArea, .imgArea, .infoArea 레이아웃
   - .ec-base-product, .prdList 상품 리스트
   - .ec-base-button 버튼 스타일
   - .ec-base-tab, .ec-base-paginate
   - 반응형 디자인

### 주요 기술
- Cafe24 레이아웃: <!--@layout(/layout/basic/layout.html)-->
- Cafe24 CSS 연결: <!--@css(/css/style.css)-->
- Google Fonts: @import로 Noto Sans KR 로드
- CSS !important로 Cafe24 기본 스타일 오버라이드

### 요청사항
[여기에 수정/추가 요청 작성]

### 참고
- 템플릿 코드는 CAFE24_TEMPLATE_GUIDE.md 참조
- 스크린샷 비교: 왼쪽(Cafe24 적용) vs 오른쪽(미리보기 HTML)
```

---

## 문제 해결 가이드

### 1. 폰트가 깨질 때
- CSS 파일 상단에 `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR...')` 확인
- `font-family`에 `!important` 추가

### 2. 스타일이 적용 안 될 때
- Cafe24는 자체 CSS를 로드하므로 `!important` 필수
- 선택자를 더 구체적으로: `[module="product_detail"] .className`

### 3. 레이아웃이 다를 때
- Cafe24 기본 템플릿과 미리보기 HTML의 구조가 다름
- Cafe24 클래스명에 맞춰 CSS 작성 필요

### 4. 버튼 글자가 잘릴 때
- `white-space: nowrap !important`
- `overflow: visible !important`
- 버튼 컨테이너에 `flex-wrap: nowrap`

---

## Cafe24 모듈 변수 참조

### 상품 정보
- `{$product_name}` - 상품명
- `{$product_code}` - 상품코드
- `{$image_medium}` - 중간 이미지
- `{$disp_product_price}` - 판매가
- `{$link_product_detail}` - 상품 상세 링크

### 아이콘
- `{$soldout_icon}` - 품절 아이콘
- `{$new_icon}` - NEW 아이콘
- `{$recommend_icon}` - 추천 아이콘
- `{$product_icons}` - 상품 아이콘들

### 기능
- `{$basket_icon}` - 장바구니 아이콘
- `{$list_wish_icon}` - 관심상품 아이콘
- `{$zoom_icon}` - 확대보기 아이콘
