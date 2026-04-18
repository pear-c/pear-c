# 배성환 (pear-c)

<p>
  <a href="mailto:bsh00611@gmail.com">
    <img src="https://img.shields.io/badge/-bsh00611@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white" />
  </a>
  <a href="https://pear-c.tistory.com/">
    <img src="https://img.shields.io/badge/Blog-Tistory-orange?style=flat" />
  </a>
</p>

---

## Backend Developer

Java/Spring 기반 백엔드 개발자입니다.
기술 선택 시 부하테스트, 벤치마크 등 정량적 데이터로 트레이드오프를 판단합니다.

현재 메시징 플랫폼 회사에서 발송 엔진과 모니터링 시스템을 개발하고 있으며,
로그 기반 에러 분석에 LLM을 접목하는 등 백엔드 경험 위에 AI 엔지니어링을 결합하고 있습니다.

---

## Experience

### Mono-Communications (2025.11 ~) - Backend Developer

**Odyssey — 온프렘 메시징 발송 엔진**
- Pure Java → Spring Boot 3 마이그레이션으로 발송 속도 70% 이상 개선
- SMS/LMS/MMS/RCS/카카오 알림톡 5개 채널 통합 발송 엔진
- 외부 통신 연동으로 고객사 에러 발생 시 선제 대응 체계 구축 (기존: 고객사 내부에서만 관리)

**Poseidon — 메시징 엔진 모니터링 서비스**
- 고객사 에러 및 인스턴스를 직접 관제할 수 있는 모니터링 시스템 구축
- 에러 로그 기반 원인 분석 AI 에이전트 접목 (LLM 활용)
- 기술지원팀 ↔ 개발자 간 중간 소통 과정을 대폭 단축

**CP (Message-CrossPlatform) — 대량 메시징 발송 데스크톱 앱**
- Tauri + Rust 기반 크로스플랫폼 앱으로 메모리 점유 10MB 안팎 (기존 Java/Spring 대비 현저히 절감)
- sqlx 비동기 처리로 TPS 3,000 이상 확보 (로컬 DB 단독 발송 기준)

### (주)아이엠지로드 인턴 (2024.03 ~ 2024.08)
- ESG 경영 솔루션 플랫폼 개발

### NHN Academy (2025.02 ~ 2025.07)
- Backend Course 수료

### 동아대학교 (2019 ~ 2025)
- 컴퓨터공학과 졸업

---

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white"/>
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/JPA-59666C?style=flat&logo=hibernate&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"/>
</p>

---
## Projects

### Document Q&A API — RAG 기반 문서 질의응답
개인 프로젝트

- 문서 업로드 → 벡터 검색 → LLM 답변 생성 파이프라인 설계
- 3단계 캐싱(정확 일치 + 유사 질문 + 무효화)으로 동일 질문 즉시 응답
- 50케이스 자체 평가 하네스로 임베딩 모델/LLM 성능 비교 후 기술 선택
- Python, FastAPI, Chroma, Redis, Claude SDK, Docker

### Book1lluwa — MSA 기반 온라인 서점
팀장 (8인) | 2025.06 ~ 2025.07

- Saga 패턴 + RabbitMQ 비동기 전환으로 처리량 66.7% 향상 (2.7→4.5 TPS), 타임아웃 0% 달성
- ELK 모니터링 + Blue-Green 무중단 배포로 다운타임 0초, 배포 시간 80% 단축
- Spring Boot, Spring Cloud, MySQL, Redis, RabbitMQ, Elasticsearch, GitHub Actions
- [GitHub](https://github.com/pear-c/1lluwa)

---

## Certification

- 정보처리기사 (2024.12)
