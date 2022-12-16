-- 코드그룹기본 테이블 생성
CREATE TABLE TB_BI_CD_GRP_BSC (
	GRP_CD			VARCHAR(6) primary key,	/*그룹코드*/
	GRP_CD_NM		VARCHAR(100),			/*그룹코드명*/
	GRP_CD_ENG_NM	VARCHAR(100),			/*그룹코드영문명*/
	GRP_CD_DESC		VARCHAR(1000),			/*그룹코드설명*/
	GRP_CD_ENG_DESC	VARCHAR(1000),			/*그룹코드영문설명*/
	USE_YN			CHAR(1),				/*사용여부*/
	REG_EMPNO		DECIMAL(4),				/*등록사원번호*/
	REG_DTTM		DATETIME,				/*등록일시*/
	UPD_EMPNO		DECIMAL(4),				/*수정사원번호*/
	UPD_DTTM		DATETIME,				/*수정일시*/
);

comment on table TB_BI_CD_GRP_BSC is '코드그룹기본';
comment on column TB_BI_CD_GRP_BSC.GRP_CD is '그룹코드';
comment on column TB_BI_CD_GRP_BSC.GRP_CD_NM is '그룹코드명';
comment on column TB_BI_CD_GRP_BSC.GRP_CD_ENG_NM is '그룹코드영문명';
comment on column TB_BI_CD_GRP_BSC.GRP_CD_DESC is '그룹코드설명';
comment on column TB_BI_CD_GRP_BSC.GRP_CD_ENG_DESC is '그룹코드영문설명';
comment on column TB_BI_CD_GRP_BSC.USE_YN is '사용여부';
comment on column TB_BI_CD_GRP_BSC.REG_EMPNO is '등록사원번호';
comment on column TB_BI_CD_GRP_BSC.REG_DTTM is '등록일시';
comment on column TB_BI_CD_GRP_BSC.UPD_EMPNO is '수정사원번호';
comment on column TB_BI_CD_GRP_BSC.UPD_DTTM is '수정일시';

-- 코드상세 테이블 생성
CREATE TABLE TB_BI_CD_DTL (
	GRP_CD			VARCHAR(6) primary key,	/*그룹코드*/
	CD				VARCHAR(6) primary key,	/*코드*/
	CD_NM			VARCHAR(100),			/*코드명*/
	CD_ENG_NM		VARCHAR(100),			/*코드영문명*/
	CD_DESC			VARCHAR(1000),			/*코드설명*/
	CD_ENG_DESC		VARCHAR(1000),			/*그룹코드영문설명*/
	UPP_CD			VARCHAR(6),				/*상위코드*/
	DPTH			DECIMAL(3),				/*깊이*/
	SORT_ODR		DECIMAL(11),			/*정렬순서*/
	OPT_1			VARCHAR(1000),			/*옵션1*/
	OPT_2			VARCHAR(1000),			/*옵션2*/
	OPT_3			VARCHAR(1000),			/*옵션3*/
	OPT_4			VARCHAR(1000),			/*옵션4*/
	OPT_5			VARCHAR(1000),			/*옵션5*/
	USE_YN			CHAR(1),				/*사용여부*/
	REG_EMPNO		DECIMAL(4),				/*등록사원번호*/
	REG_DTTM		DATETIME,				/*등록일시*/
	UPD_EMPNO		DECIMAL(4),				/*수정사원번호*/
	UPD_DTTM		DATETIME,				/*수정일시*/
);

comment on table TB_BI_CD_DTL is '코드상세';
comment on column TB_BI_CD_GRP_BSC.GRP_CD is '그룹코드';
comment on column TB_BI_CD_GRP_BSC.CD is '코드';
comment on column TB_BI_CD_GRP_BSC.CD_NM is '코드명';
comment on column TB_BI_CD_GRP_BSC.CD_ENG_NM is '코드영문명';
comment on column TB_BI_CD_GRP_BSC.CD_DESC is '코드설명';
comment on column TB_BI_CD_GRP_BSC.CD_ENG_DESC is '코드영문설명';
comment on column TB_BI_CD_GRP_BSC.UPP_CD is '상위코드';
comment on column TB_BI_CD_GRP_BSC.DPTH is '깊이';
comment on column TB_BI_CD_GRP_BSC.SORT_ODR is '정렬순서';
comment on column TB_BI_CD_GRP_BSC.OPT_1 is '옵션1';
comment on column TB_BI_CD_GRP_BSC.OPT_2 is '옵션2';
comment on column TB_BI_CD_GRP_BSC.OPT_3 is '옵션3';
comment on column TB_BI_CD_GRP_BSC.OPT_4 is '옵션4';
comment on column TB_BI_CD_GRP_BSC.OPT_5 is '옵션5';
comment on column TB_BI_CD_GRP_BSC.USE_YN is '사용여부';
comment on column TB_BI_CD_GRP_BSC.REG_EMPNO is '등록사원번호';
comment on column TB_BI_CD_GRP_BSC.REG_DTTM is '등록일시';
comment on column TB_BI_CD_GRP_BSC.UPD_EMPNO is '수정사원번호';
comment on column TB_BI_CD_GRP_BSC.UPD_DTTM is '수정일시';