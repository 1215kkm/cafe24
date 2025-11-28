# Cafe24 스마트디자인 모듈 완벽 가이드

## 목차
1. [모듈 기본 개념](#1-모듈-기본-개념)
2. [변수(치환코드) 시스템](#2-변수치환코드-시스템)
3. [주요 모듈 코드 예제](#3-주요-모듈-코드-예제)
4. [페이지별 파일 구조](#4-페이지별-파일-구조)
5. [실전 활용 팁](#5-실전-활용-팁)

---

## 1. 모듈 기본 개념

### 모듈이란?
모듈은 카페24 스마트디자인의 **최소 기능 단위**로, HTML과 변수가 하나로 묶여 동작하는 독립된 프로그램입니다.

### 모듈 기본 문법
```html
<div module="모듈아이디">
  <!--@css(/css/module/경로/파일.css)-->
  <!--@js(/js/module/경로/파일.js)-->
  <!-- $count = 8 -->

  <!-- 반복 영역 시작 -->
  <ul>
    <li>{$변수명}</li>
  </ul>
  <!-- 반복 영역 끝 -->
</div>
```

### 모듈 주석 설정
```html
<!-- $count = 8 -->           <!-- 표시할 상품 개수 -->
<!-- $basket_result = /product/add_basket.html -->  <!-- 장바구니 결과 URL -->
<!-- $basket_option = /product/basket_option.html --> <!-- 장바구니 옵션 URL -->
<!-- $moreview = yes -->      <!-- 더보기 버튼 표시 -->
```

---

## 2. 변수(치환코드) 시스템

### 변수 사용법
- 형식: `{$변수명}`
- 조건부 표시: `{$변수명|display}` (값이 있을 때만 표시)
- 클래스에 적용: `class="{$item_display|display}"`

### 상품 기본 정보 변수

| 변수 | 설명 |
|------|------|
| `{$product_no}` | 상품 번호 |
| `{$product_name}` | 상품명 |
| `{$name}` | 상품명 (상세페이지) |
| `{$product_price}` | 판매가 |
| `{$product_sale_price}` | 할인가 |
| `{$disp_product_price}` | 표시용 판매가 |
| `{$product_custom}` | 커스텀 상품 정보 |
| `{$prd_price_sale}` | 세일 가격 |
| `{$product_summary}` | 상품 요약 설명 |
| `{$param}` | 상품 상세 페이지 파라미터 |
| `{$link_product_detail}` | 상품 상세 링크 |

### 상품 이미지 변수

| 변수 | 설명 | FTP 경로 |
|------|------|----------|
| `{$image_big}` | 대형 이미지 | /web/product/big/ |
| `{$image_medium}` | 중간 이미지 (목록용) | /web/product/medium/ |
| `{$image_small}` | 축소 이미지 | /web/product/small/ |
| `{$image_tiny}` | 초소형 이미지 | /web/product/tiny/ |
| `{$image_original}` | 원본 이미지 | /web/product/original/ |
| `{$seo_alt_tag}` | SEO용 alt 태그 | - |

### 아이콘/상태 변수

| 변수 | 설명 |
|------|------|
| `{$soldout_icon}` | 품절 아이콘 |
| `{$recommend_icon}` | 추천 아이콘 |
| `{$new_icon}` | NEW 아이콘 |
| `{$product_icons}` | 상품 아이콘 모음 |
| `{$img_mileage_icon}` | 적립금 아이콘 |
| `{$basket_icon}` | 장바구니 아이콘 |
| `{$zoom_icon}` | 확대보기 아이콘 |
| `{$option_preview_icon}` | 옵션 미리보기 아이콘 |

### 가격/할인 관련 변수

| 변수 | 설명 |
|------|------|
| `{$product_price_del}` | 정가 취소선 |
| `{$discount_rate}` | 할인율 |
| `{$txt_product_price_ref}` | 가격 참조 텍스트 |
| `{$delivery_price}` | 배송비 |
| `{$mileage}` | 적립금 |

### 카테고리/분류 변수

| 변수 | 설명 |
|------|------|
| `{$category_title_text}` | 카테고리 제목 |
| `{$cate_no}` | 카테고리 번호 |
| `{$display_group}` | 분류 그룹 |

### 옵션 관련 변수

| 변수 | 설명 |
|------|------|
| `{$option_name}` | 옵션명 |
| `{$add_option_name}` | 추가 옵션명 |
| `{$form.option}` | 옵션 폼 |
| `{$form.add_option}` | 추가 옵션 폼 |
| `{$form.noneoption}` | 미선택 옵션 폼 |
| `{$option_maxlength}` | 옵션 최대 글자수 |

### 합계/수량 변수

| 변수 | 설명 |
|------|------|
| `{$total.total_cnt}` | 총 수량 |
| `{$total.total_id}` | 총합 ID |
| `{$total.total_display\|display}` | 총합 표시 |

### 액션 버튼 변수

| 변수 | 설명 |
|------|------|
| `{$action_basket}` | 장바구니 담기 액션 |
| `{$action_wishlist}` | 관심상품 추가 액션 |
| `{$action_buy}` | 바로구매 액션 |

---

## 3. 주요 모듈 코드 예제

### 3.1 메인 상품 진열 모듈 (product_listmain_N)

```html
<!-- 추천상품/신상품/베스트 등 메인 진열 -->
<div module="product_listmain_1">
  <!--@css(/css/module/product/listmain.css)-->
  <!-- $count = 8
       $basket_result = /product/add_basket.html
       $basket_option = /product/basket_option.html -->

  <h2><span>{$category_title_text}</span></h2>

  <ul class="prdList column4">
    <li class="item" id="anchorBoxId_{$product_no}">
      <div class="box">
        <!-- 상품 이미지 -->
        <a href="/product/detail.html{$param}" name="anchorBoxName_{$product_no}">
          <img src="{$image_medium}" alt="{$seo_alt_tag}" class="thumb" />
        </a>

        <!-- 상태 아이콘 -->
        <div class="status">
          <div class="icon">
            {$soldout_icon} {$recommend_icon} {$new_icon} {$product_icons}
          </div>
          <div class="button">
            <div class="option">{$option_preview_icon}</div>
            {$basket_icon} {$zoom_icon}
          </div>
        </div>

        <!-- 상품명 -->
        <p class="name">
          <a href="/product/detail.html{$param}">
            <strong class="title {$product_name_title_display|display}">
              {$product_name_title} :
            </strong>
            {$product_name}
          </a>
        </p>

        <!-- 상품 정보 항목 (product_ListItem 서브모듈) -->
        <ul module="product_ListItem">
          <li class="{$item_display|display}">
            <strong class="title {$item_title_display|display}">{$item_title} :</strong>
            {$item_content}
          </li>
        </ul>

        <!-- 가격 -->
        <div class="price">
          <span class="sale">{$disp_product_price}</span>
          <span class="origin {$product_price_ref_display|display}">{$txt_product_price_ref}</span>
        </div>
      </div>
    </li>
  </ul>
</div>
```

### 3.2 상품 목록 모듈 (갤러리형)

```html
<div class="typeGallery" module="product_list">
  <!--@css(/css/module/product/list.css)-->
  <!--@js(/js/module/product/list.js)-->
  <!-- $count = 20 -->

  <ul class="grid4">
    <li id="anchorBoxId_{$product_no}">
      <div class="thumbnail">
        <a href="/product/detail.html{$param}">
          <img src="{$image_medium}" alt="{$seo_alt_tag}">
        </a>
        <div class="overlay">
          {$basket_icon}
          {$zoom_icon}
        </div>
      </div>

      <div class="information">
        <p class="name {$product_name_display|display}">{$product_name}</p>
        <p class="summary {$product_summary_display|display}">{$product_summary}</p>
        <p class="price">
          <span class="sale {$product_price_display|display}">{$disp_product_price}</span>
          <span class="origin {$product_price_ref_display|display}">
            <del>{$txt_product_price_ref}</del>
          </span>
        </p>
        <div class="icons">
          {$soldout_icon} {$recommend_icon} {$new_icon}
        </div>
      </div>
    </li>
  </ul>

  <!-- 페이지네이션 -->
  <div class="pagination" module="product_Paging">
    <a href="{$first_page_url}">처음</a>
    <a href="{$prev_page_url}">이전</a>
    <ol>
      <li class="{$is_current_page|display}">
        <a href="{$page_url}">{$page_num}</a>
      </li>
    </ol>
    <a href="{$next_page_url}">다음</a>
    <a href="{$last_page_url}">마지막</a>
  </div>
</div>
```

### 3.3 상품 목록 모듈 (리스트형)

```html
<div class="typeList" module="product_list">
  <!--@css(/css/module/product/list_list.css)-->
  <!-- $count = 10 -->

  <table>
    <thead>
      <tr>
        <th>이미지</th>
        <th>상품정보</th>
        <th>판매가</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody>
      <tr id="anchorBoxId_{$product_no}">
        <td class="thumb">
          <a href="/product/detail.html{$param}">
            <img src="{$image_small}" alt="{$seo_alt_tag}">
          </a>
        </td>
        <td class="info">
          <p class="name">
            <a href="/product/detail.html{$param}">{$product_name}</a>
          </p>
          <p class="summary">{$product_summary}</p>
        </td>
        <td class="price">{$disp_product_price}</td>
        <td class="icons">{$soldout_icon}</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 3.4 상품 상세 모듈 (product_detail)

```html
<div module="product_detail">
  <!--@css(/css/module/product/detail.css)-->
  <!--@js(/js/module/product/detail.js)-->

  <div id="titleArea">
    <h2>상품상세정보</h2>
  </div>

  <!-- 상품명 -->
  <h1 class="name">{$name}</h1>

  <!-- 아이콘 영역 -->
  <p class="prdIcon">
    {$soldout_icon} {$recommend_icon} {$new_icon}
    {$img_mileage_icon} {$product_icons}
  </p>

  <!-- 상품 이미지 -->
  <div class="imgArea">
    <div class="mainImg">
      <img src="{$image_big}" alt="{$seo_alt_tag}" id="bigImage">
    </div>
    <div class="addImg" module="product_Addimage">
      <img src="{$image_small}" alt="" onclick="changeImage('{$image_big}')">
    </div>
  </div>

  <!-- 상품 정보 테이블 -->
  <table class="infoTable">
    <tbody module="product_Info">
      <tr class="{$item_display|display}">
        <th>{$item_title}</th>
        <td>{$item_content}</td>
      </tr>
    </tbody>
  </table>

  <!-- 가격 정보 -->
  <div class="priceArea">
    <dl>
      <dt>판매가</dt>
      <dd>{$disp_product_price}</dd>
    </dl>
    <dl class="{$product_price_ref_display|display}">
      <dt>정가</dt>
      <dd><del>{$txt_product_price_ref}</del></dd>
    </dl>
    <dl class="{$discount_rate_display|display}">
      <dt>할인율</dt>
      <dd>{$discount_rate}%</dd>
    </dl>
  </div>

  <!-- 옵션 선택 -->
  <div class="optionArea">
    <table module="product_Option">
      <tr class="{$option_display|display}">
        <th>{$option_name}</th>
        <td>{$form.option}</td>
      </tr>
    </table>

    <!-- 추가 옵션 -->
    <table module="product_AddOption">
      <tr class="{$add_option_display|display}">
        <th>{$add_option_name}</th>
        <td>{$form.add_option}</td>
      </tr>
    </table>
  </div>

  <!-- 수량 선택 -->
  <div class="quantityArea">
    <input type="text" name="quantity" value="1">
    <button type="button" onclick="increaseQty()">+</button>
    <button type="button" onclick="decreaseQty()">-</button>
  </div>

  <!-- 합계 금액 -->
  <div class="totalArea" id="{$total.total_id}">
    <span class="total">총 상품금액 : </span>
    <span class="price">{$total.total_price}</span>
    <span class="count">({$total.total_cnt}개)</span>
  </div>

  <!-- 구매 버튼 -->
  <div class="btnArea">
    <button type="button" class="buy">{$action_buy}바로구매</button>
    <button type="button" class="cart">{$action_basket}장바구니</button>
    <button type="button" class="wish">{$action_wishlist}관심상품</button>
  </div>
</div>
```

### 3.5 로그인 상태 모듈 (Layout_stateLogon)

```html
<!-- 로그인/로그아웃 상태 표시 (공통 레이아웃에 위치) -->
<div module="Layout_stateLogon">
  <!--@css(/css/module/layout/stateLogon.css)-->

  <!-- 비로그인 상태 -->
  <div class="xans-logged-out">
    <a href="/member/login.html">로그인</a>
    <a href="/member/join.html">회원가입</a>
  </div>

  <!-- 로그인 상태 -->
  <div class="xans-logged-in">
    <span>{$name}님</span>
    <a href="/myshop/order/list.html">마이페이지</a>
    <a href="{$action_logout}">로그아웃</a>
  </div>
</div>
```

### 3.6 장바구니 정보 모듈 (Layout_shoppingInfo)

```html
<!-- 장바구니 미니 뷰 -->
<div module="Layout_shoppingInfo">
  <!--@css(/css/module/layout/shoppingInfo.css)-->

  <a href="/order/basket.html">
    <span class="cartIcon">장바구니</span>
    <span class="count">{$basket_count}</span>
  </a>
</div>
```

### 3.7 상품 검색 모듈 (searchHeader)

```html
<div module="searchHeader">
  <!--@css(/css/module/layout/searchHeader.css)-->

  <form action="/product/search.html" method="get">
    <fieldset>
      <legend>상품검색</legend>
      <input type="text" name="keyword" placeholder="검색어를 입력하세요">
      <button type="submit">검색</button>
    </fieldset>
  </form>
</div>
```

### 3.8 카테고리 메뉴 모듈 (Layout_category)

```html
<nav module="Layout_category">
  <!--@css(/css/module/layout/category.css)-->

  <ul class="mainCategory">
    <li class="{$display_group}">
      <a href="{$link_category}">{$name}</a>

      <!-- 서브 카테고리 -->
      <ul class="subCategory" module="Layout_category_sub">
        <li class="{$display_group}">
          <a href="{$link_category}">{$name}</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

### 3.9 장바구니 페이지 모듈 (Order_basket)

```html
<div module="Order_basket">
  <!--@css(/css/module/order/basket.css)-->
  <!--@js(/js/module/order/basket.js)-->

  <!-- 장바구니 탭 -->
  <div module="Order_TabInfo">
    <ul class="tabs">
      <li class="{$is_domestic|display}">
        <a href="#domestic">국내배송상품 ({$domestic_count})</a>
      </li>
      <li class="{$is_overseas|display}">
        <a href="#overseas">해외배송상품 ({$overseas_count})</a>
      </li>
    </ul>
  </div>

  <!-- 상품 목록 -->
  <table class="cartList">
    <thead>
      <tr>
        <th><input type="checkbox" id="checkAll"></th>
        <th>상품정보</th>
        <th>수량</th>
        <th>가격</th>
        <th>배송비</th>
        <th>선택</th>
      </tr>
    </thead>
    <tbody module="Order_BasketOption">
      <tr>
        <td><input type="checkbox" name="item" value="{$basket_no}"></td>
        <td class="product">
          <a href="/product/detail.html{$param}">
            <img src="{$image_small}" alt="">
            <span class="name">{$product_name}</span>
          </a>
          <p class="option">{$option_str}</p>
        </td>
        <td class="quantity">
          <input type="text" value="{$quantity}" name="quantity">
        </td>
        <td class="price">{$product_price}</td>
        <td class="shipping">{$delivery_price}</td>
        <td class="action">
          <button type="button" class="delete">삭제</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- 합계 정보 -->
  <div class="totalInfo" module="Order_DcInfo">
    <dl>
      <dt>총 상품금액</dt>
      <dd>{$total_product_price}</dd>
    </dl>
    <dl>
      <dt>총 배송비</dt>
      <dd>{$total_delivery_price}</dd>
    </dl>
    <dl class="total">
      <dt>결제예정금액</dt>
      <dd>{$total_order_price}</dd>
    </dl>
  </div>

  <!-- 버튼 영역 -->
  <div class="btnArea">
    <button type="button" class="allBuy">전체상품주문</button>
    <button type="button" class="selectBuy">선택상품주문</button>
  </div>
</div>
```

### 3.10 푸터 모듈 (Layout_footer)

```html
<footer module="Layout_footer">
  <!--@css(/css/module/layout/footer.css)-->

  <div class="footerInner">
    <!-- 회사 정보 -->
    <div class="companyInfo">
      <p class="name">{$company_name}</p>
      <p>대표: {$president_name}</p>
      <p>사업자등록번호: {$company_registration_no}</p>
      <p>통신판매업신고: {$telecommunication_no}</p>
      <p>주소: {$address}</p>
      <p>전화: {$phone} | 팩스: {$fax}</p>
      <p>이메일: {$email}</p>
    </div>

    <!-- 고객센터 -->
    <div class="customerService">
      <p class="phone">{$cs_phone}</p>
      <p class="time">{$cs_time}</p>
    </div>

    <!-- 저작권 -->
    <div class="copyright">
      <p>{$copyright}</p>
    </div>
  </div>
</footer>
```

---

## 4. 페이지별 파일 구조

### 기본 레이아웃 파일
```
/layout/
├── layout.html         # 공통 레이아웃 (헤더, 푸터 포함)
├── layout_top.html     # 상단 영역
├── layout_bottom.html  # 하단 영역
└── layout_aside.html   # 사이드바
```

### 상품 관련 파일
```
/product/
├── list.html           # 상품 목록
├── detail.html         # 상품 상세
├── search.html         # 상품 검색
└── category.html       # 카테고리
```

### 주문/결제 파일
```
/order/
├── basket.html         # 장바구니
├── order.html          # 주문서
├── orderform.html      # 주문서 작성
└── complete.html       # 주문 완료
```

### 회원 관련 파일
```
/member/
├── login.html          # 로그인
├── join.html           # 회원가입
├── find_id.html        # 아이디 찾기
└── find_pw.html        # 비밀번호 찾기
```

### CSS/JS 경로
```
/css/
├── module/
│   ├── product/
│   │   ├── list.css
│   │   ├── detail.css
│   │   └── listmain.css
│   ├── order/
│   │   └── basket.css
│   └── layout/
│       ├── header.css
│       └── footer.css
└── common.css

/js/
├── module/
│   ├── product/
│   │   ├── list.js
│   │   └── detail.js
│   └── order/
│       └── basket.js
└── common.js
```

---

## 5. 실전 활용 팁

### 5.1 조건부 표시 (display)
```html
<!-- 값이 있을 때만 해당 영역 표시 -->
<div class="{$soldout_icon|display}">품절</div>

<!-- 클래스에 조건 적용 -->
<li class="item {$is_new|display}">
```

### 5.2 이미지 크기 변경
```html
<!-- 기본 중간 이미지 -->
<img src="{$image_medium}">

<!-- 큰 이미지가 필요한 경우 -->
<img src="{$image_big}">

<!-- 썸네일용 작은 이미지 -->
<img src="{$image_small}">
```

### 5.3 모듈 개수 설정
```html
<!-- 상품 8개 표시 -->
<!-- $count = 8 -->

<!-- 상품 12개 표시 -->
<!-- $count = 12 -->
```

### 5.4 더보기 버튼 설정
```html
<!-- 더보기 버튼 활성화 -->
<!-- $moreview = yes -->

<!-- 더보기 버튼 비활성화 -->
<!-- $moreview = no -->
```

### 5.5 반복 구문 활용
```html
<!-- 상품 리스트 반복 -->
<ul module="product_listmain_1">
  <!-- 이 li가 상품 개수만큼 반복됨 -->
  <li>
    <a href="{$link_product_detail}">
      <img src="{$image_medium}">
      <span>{$product_name}</span>
    </a>
  </li>
</ul>
```

### 5.6 서브 모듈 활용
```html
<div module="product_detail">
  <!-- 메인 모듈 내부에 서브 모듈 배치 -->
  <ul module="product_ListItem">
    <li>{$item_content}</li>
  </ul>

  <table module="product_Option">
    <tr>{$form.option}</tr>
  </table>
</div>
```

### 5.7 CSS/JS 연결
```html
<div module="product_list">
  <!--@css(/css/module/product/list.css)-->
  <!--@js(/js/module/product/list.js)-->
  <!-- 이 모듈 전용 스타일/스크립트 로드 -->
</div>
```

### 5.8 Swiper 슬라이더 연동
```html
<div class="swiper-container" module="product_listmain_1">
  <!--@js(/js/swiper.min.js)-->
  <!-- $count = 10 -->

  <ul class="swiper-wrapper">
    <li class="swiper-slide">
      <img src="{$image_medium}">
    </li>
  </ul>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>

<script>
new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
</script>
```

---

## 주요 참고 자료

- [스마트디자인 서포트](https://sdsupport.cafe24.com/)
- [카페24 Help Center](https://support.cafe24.com/)
- [카페24 개발자 센터](https://developers.cafe24.com/)
- [스마트디자인 매뉴얼 PDF](https://img.echosting.cafe24.com/guide/cafe24_smartdesign_serviceguide_v2.pdf)

---

## 주의사항

1. **관리자 설정 필수**: 스마트디자인에 모듈의 HTML이 존재하더라도 **쇼핑몰 관리자에서 사용설정**을 해야 적용됩니다.

2. **모듈 코드 자동 생성**: `product_listmain_N`의 N은 메인진열 관리에서 자동 생성되며, 삭제한 모듈 코드는 복구할 수 없습니다.

3. **뉴상품관리 전용 변수**: 일부 변수는 뉴상품관리 전용이며, 다른 곳에서 사용하면 정상 동작하지 않을 수 있습니다.

4. **기본 디자인 참고**: 샘플코드는 이해용이며, 실제 적용 시 기본 디자인을 참고하세요.
