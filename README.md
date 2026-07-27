# DayFit

HTML / CSS / JavaScript만으로 제작된 운동 기록 및 계획 관리 웹앱입니다. 별도의 백엔드 서버 없이 브라우저의 `localStorage`를 데이터 저장소로 사용합니다.

> 이 프로젝트는 HTML / CSS / JavaScript 학습을 목적으로 제작되었으며, SPOANY, 온핏(OnFit), 롯데월드 민속박물관 등의 사이트를 참고했습니다.

## 주요 기능

- **온보딩** (`onboard/`): 닉네임, 성별, 생년월일, 신체정보와 벤치프레스/스쿼트/데드리프트 1RM을 입력받아 초기 운동 수준을 진단
- **마이페이지** (`mypage/`)
  - `home.html` : 타이머 기반 운동 진행 화면 (원형 프로그레스, 분/초 조절)
  - `plan.html` : 캘린더(flatpickr) 기반 운동 계획 등록/관리
  - `review.html` : 캘린더로 지난 운동 기록을 되돌아보고 진행률 확인
- **인증** (`auth/`): 로그인 / 회원가입
- **커뮤니티** (`community/`): FAQ, 문의 게시판(목록 · 작성 · 조회)
- **공통 컴포넌트** (`components/`): 헤더/푸터를 모듈로 분리해 각 페이지에서 동적으로 마운트
- **관리자** (`admin/`): 현재 `admin-setup.html`만 존재하며 미구현 상태

## 기술 스택

- HTML5, CSS3, Vanilla JavaScript (ES Modules)
- 데이터 저장: 브라우저 `localStorage` (`users` 키에 사용자/계획/기록 저장, 서버·DB 없음)
- 외부 라이브러리: [flatpickr](https://flatpickr.js.org/) (캘린더 UI, CDN)
- 커스텀 폰트: Elms Sans

## 폴더 구조

```
DayFit/
├── admin/         # 관리자 페이지 (미완성)
├── assets/        # css, js, fonts, images, json(운동/온보딩 데이터) 등 정적 리소스
├── auth/          # 로그인 / 회원가입
├── community/     # FAQ, 문의 게시판
├── components/    # 헤더/푸터 공통 컴포넌트 (html/css/js)
├── mypage/        # 홈(타이머), 계획, 되돌아보기(기록)
├── onboard/       # 온보딩 플로우
├── index.html     # 메인 랜딩 페이지
└── settings.html  # 계정 설정 페이지
```

## 실행 방법

별도의 빌드 과정 없이 정적 파일이므로, 로컬 서버로 실행하면 됩니다. (모듈 스크립트 및 절대경로 리소스 참조 때문에 `file://`로 직접 여는 것보다 로컬 서버 사용을 권장합니다.)

```bash
# 예: VSCode Live Server 확장 사용
# 또는 Python 내장 서버
python -m http.server 5500
```

이후 브라우저에서 `http://localhost:5500/index.html` 접속

## 알려진 이슈 / 미상 영역

- `admin/admin-setup.html`은 빈 상태로, 관리자 기능은 아직 구현되지 않음
- 대부분의 페이지 로직은 별도 JS 파일이 아니라 각 HTML 내 `<script type="module">`에 인라인되어 있어, 리팩토링 시 분리 검토 필요

## License

미정
