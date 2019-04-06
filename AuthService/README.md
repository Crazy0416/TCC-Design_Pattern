# TCC Sample Auth Service

## 기능서 
// swagger 추가해보기
- 페이지
	- 로그인 페이지
		- GET /auth/login.html
	- 회원가입 페이지
		- GET /auth/join.html
	- 마이 페이지
		- GET /auth/mypage.html
- API
	- 회원 가입
		- POST /auth/api/member.join
	- 로그인
		- POST /auth/api/member.login
	- 로그아웃
		- DELETE /auth/api/member.logout
	- 회원 정보 수정
		- PUT /auth/api/member.modify
	- 회원 삭제
		- DELETE /auth/api/member.delete
