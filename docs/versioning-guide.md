# 게임 개발 버저닝 가이드

## 개발 단계별 버전 관리

게임 개발 과정에서 각 단계별로 적절한 버저닝 체계를 사용하는 것은 개발 진행 상황을 명확히 표현하고 관리하는 데 중요합니다. 아래는 개발 단계별 권장 버전 체계입니다.

### 개발 초기 단계
- `0.0.1-dev` - 최초 개발 버전
- `0.0.x-dev` - 초기 개발 과정에서의 작은 업데이트

### 프리 알파 (Pre-Alpha)
- `0.1.0-pre-alpha` - 기본 기능 구현 시작
- `0.1.x-pre-alpha` - 프리 알파 단계의 개선사항

### 알파 (Alpha)
- `0.x.0-alpha` - 주요 알파 버전
- `0.x.y-alpha.1`, `0.x.y-alpha.2` - 알파 단계 내 반복

### 베타 (Beta)
- `0.x.0-beta` - 첫 베타 버전
- `0.x.y-beta.1`, `0.x.y-beta.2` - 베타 반복

### 릴리스 후보 (RC, Release Candidate)
- `1.0.0-rc.1` - 첫 번째 릴리스 후보
- `1.0.0-rc.2` - 두 번째 릴리스 후보

### 정식 출시
- `1.0.0` - 첫 정식 버전
- `1.0.1`, `1.0.2` - 패치 및 버그 수정
- `1.1.0` - 마이너 기능 추가
- `2.0.0` - 메이저 업데이트

## 시맨틱 버저닝 (Semantic Versioning)

기본적으로 버전은 `Major.Minor.Patch` 형식을 따릅니다:

- **Major**: 이전 버전과 호환되지 않는 변경사항
- **Minor**: 이전 버전과 호환되는 기능 추가/개선
- **Patch**: 버그 수정 및 작은 개선사항

## 개발 상태 표기

개발 상태를 명확히 하기 위해 버전 뒤에 접미사를 추가합니다:
- `-dev`: 개발 중
- `-pre-alpha`: 프리 알파
- `-alpha`: 알파
- `-beta`: 베타
- `-rc`: 릴리스 후보

## 빌드 정보 추가

필요한 경우 빌드 번호를 추가할 수 있습니다:
- `1.2.3-beta.4+build.567`

## 업데이트 시점

- **Patch**: 버그 수정이나 작은 변경사항
- **Minor**: 새로운 기능 추가 (이전 버전과 호환)
- **Major**: 중요한 변경사항 (이전 버전과 호환되지 않을 수 있음)

## 개발 단계 예시

1. 초기 개발: `0.0.1-dev` → `0.0.2-dev` → ...
2. 프리 알파: `0.1.0-pre-alpha` → ...
3. 알파 테스트: `0.2.0-alpha.1` → `0.2.0-alpha.2` → ...
4. 베타 테스트: `0.3.0-beta.1` → ...
5. 릴리스 준비: `1.0.0-rc.1` → `1.0.0-rc.2` → ...
6. 정식 출시: `1.0.0`
7. 패치: `1.0.1` → `1.0.2` → ...
8. 기능 업데이트: `1.1.0` → ...
9. 메이저 업데이트: `2.0.0` → ... 