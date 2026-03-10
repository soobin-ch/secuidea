# Secuidea.com 리뉴얼 개발 과정

## 프로젝트 개요
- **프로젝트**: (주)시큐이데아 홈페이지 리뉴얼
- **기반 기술**: Next.js 16.1 + TypeScript + TailwindCSS + Framer Motion
- **디자인 컨셉**: Supabase.com 스타일 다크 모드
- **CI/CD**: GitHub Actions → Coolify Webhook

## 구현 페이지 목록 (총 13개 라우트)
| 경로 | 설명 |
|---|---|
| `/` | 메인 - 히어로, 솔루션 벤토 그리드, 특장점, CTA |
| `/about` | 회사소개 - 인사말 |
| `/about/history` | 걸어온 길 - 타임라인 (2010~현재) |
| `/about/location` | 오시는 길 - 지도, 연락처 |
| `/solutions` | 솔루션 전체 |
| `/solutions/visitone` | VisitOne 내방객 관리 |
| `/solutions/schoolguard-pro` | SchoolGuardPro 학교출입관리 |
| `/solutions/careguard-pro` | CareGuardPro 요양병원 AI |
| `/solutions/medipass` | 메디패스 바코드/QR |
| `/support` | FAQ 아코디언 |
| `/support/news` | 뉴스/이벤트 |
| `/support/contact` | 문의하기 폼 |

## 디자인 시스템
- 배경: `#090909` / 카드: `#111111` / 보더: `#1f1f1f`
- 포인트: `#3B82F6` (블루)
- 폰트: Pretendard(한글) + Inter(영문) CDN
- 애니메이션: Framer Motion FadeIn/ScaleIn

## CI/CD 파이프라인
- `Dockerfile`: Node 20 Alpine 멀티스테이지 Standalone 빌드
- `.github/workflows/deploy.yml`: main push → Coolify Webhook
- GitHub Secrets 필요: `COOLIFY_WEBHOOK_URL`, `COOLIFY_TOKEN`

## Git 배포 명령어
```bash
git add .
git commit -m "feat: secuidea.com 리뉴얼 - Next.js + Supabase 디자인 컨셉"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
