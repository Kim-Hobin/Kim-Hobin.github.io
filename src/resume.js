export const resume = {
    profiles: {
        subject: "Profiles", name: "김호빈", intro: "Front-and 개발자 지망생",
        contents: [
            { title: "전화번호", link: "010 - 5534 - 0573", style: "fas fa-phone-volume" },
            { title: "email", link: "isb0573@naver.com", style: "fas fa-at" },
            { title: "git", link: "https://github.com/Kim-Hobin", style: "fab fa-github" },
            { title: "blog", link: "https://isb0573.tistory.com/", style: "fas fa-blog" },
        ],
    },
    intro: {
        subject: "About Me",
        content: "안녕하세요"
    },

    skills: {
        subject: "Skills",
        contents: [
            {
                title: "Front-and",
                content: [
                    "HTML/CSS", "javaScrpit", "React"
                ],
            },
            {
                title: "Back-end",
                content: [
                    "C", "C++", "PHP", "Android", "Java", "Node.js"
                ],
            },
            {
                title: "ETC",
                content: [
                    "mySQL", "MongoDB", "Git"
                ],
            },
        ],
    },
    projects: {
        subject: "Projects",
        contents: [
            {
                left_title: "",
                left_subtitle: "2021.9 ~ 2021.9",
                left_add: "https:/asdadasd.com",
                right_title: "기술 이력서",
                right_subtitle: "Github Page 이력서",
                content: [
                    { main: "웹 프론트엔드 프레임워크인 리엑트를 공부하며 실습으로 만든 이력서", sub: [] },
                    { main: "전체를 Wrapper, Left, Right 3부분으로 컴포넌트를 나누어 재사용할 수 있도록 구현", sub: [] },
                    { main: "동적인 프로필 버튼과 이미지 모달 구현", sub: ["asdfasfsadf", "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ", "ㅁㅁㄴㅇㄴㅁㅇㅁㅁㅁ"] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./resume",
                images: [

                ],
                pdfs: [
                ]
            },
            {
                left_title: "",
                left_subtitle: "2021.07 ~ 2021.08",
                left_add: "https:/asdadasd.com",
                right_title: "하우스 매뉴얼",
                right_subtitle: "숙박 예약 페이지 솔루션 프로젝트",
                content: [
                    { main: "고객이 숙박을 예약하면 URl을 통해 고객이 예약정보를 알 수 있도록 함", sub: [] },
                    { main: "html, css, javascript로 클라이언트, Django + MongoDB 서버 구현", sub: [] },
                    { main: "기본적인 CRUD 및 반응형 웹앱으로 구현", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./house-manual",
                images: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
                pdfs: [
                ]
            },
            {
                left_title: "",
                left_subtitle: "2020.03 ~ 2020.12",
                left_add: "https:/asdadasd.com",
                right_title: "광학음악인식기반 자동편곡시스템",
                right_subtitle: "캡스톤디자인1, 2 교과목 연계 졸업프로젝트",
                content: [
                    {
                        main: "비전문가들도 악보를 데이터화하여 쉽게 편집하고 음악 파일로\
                    출력할 수 있는 악보 인식 기반 편곡 장치를 제공하고자 함", sub: []
                    },
                    { main: "사용자는 편곡하고자 하는 음악의 악보를 입력하고 편곡된 음악 파일을 제공 받음", sub: [] },
                    { main: "크게 광학 음악 인식 모듈과 자동 편곡 모듈로 구성", sub: [] },
                    {
                        main: "광학 음악 인식 모듈에 OpenCV 라이브러리를 사용하였으며,\
                    속도를 위해 jni + ndk를 사용함", sub: []
                    },
                    { main: "클라이언트는 안드로이드 애플리케이션, 서버는 파이썬으로 구현", sub: [] },
                    { main: "악보를 인식하는 과정은 30여 개가 넘는 악보의 구성요소들을 인식하고 분류해야함", sub: [] },
                    { main: "본 프로젝트를 통해 작게 나마 컴퓨터비전, 머신 러닝 등 인공지능 분야의 학습 계기가 됨", sub: [] },
                    { main: "느낀점 ---- ", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./senior-project",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [
                ]
            },
            {
                left_title: "",
                left_subtitle: "2019.09 ~ 2019.12",
                left_add: "https:/asdadasd.com",
                right_title: "PC 견적관리 웹사이트",
                right_subtitle: "데이터베이스설계 교과목 연계 프로젝트",
                content: [
                    { main: "PC부품에 대한 지식 없이 조립형 PC를 구매할 수 있는 PC견적 및 경매 사이트", sub: [] },
                    { main: "로그인, 로그아웃, 회원가입, 역경매/입찰, 페이징, 관리자 페이지 등의 기능 제공", sub: [] },
                    { main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./pc-auction",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [

                ]
            },
            {
                left_title: "",
                left_subtitle: "2019.09 ~ 2019.12",
                left_add: "",
                right_title: "도서 관리시스템",
                right_subtitle: "데이터베이스설계 교과목 연계 프로젝트",
                content: [
                    { main: "데이터베이스 실습을 위해 알라딘, YES24, 리디북스와 같은 온라인 도서 구매 사이트를 구현", sub: [] },
                    { main: "로그인/로그아웃, 회원가입, 마이페이지(신용카드, 장바구니, 주문내역, 주문상세), 주문, 리뷰 등의 기능 제공", sub: [] },
                    { main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현", sub: [] },
                    { main: "MySQL로 객체의 속성이나 관계에 대해 직접 설계", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./book-manage",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [
                ]
            },
            {
                left_title: "",
                left_subtitle: "2019.09 ~ 2019.12",
                left_add: "https:/asdadasd.com",
                right_title: "플리마켓 통합관리시스템",
                right_subtitle: "소프트웨어분석설계과목 교과목 연계 프로젝트",
                content: [
                    {
                        main: "해당 프로젝트는 개발 직전 단계까지의 설계를 목표로 두고 프로젝트 정의서, \
                    다양한 문서를 작성 해본 프로젝트", sub: []
                    },
                    {
                        main: "플리마켓의 셀러와 주최자, 참가자에게 기존의 불편한 요소들을 해소할 수 있도록 \
                    하는 플리마켓 통합 관리 시스템", sub: []
                    },
                    { main: "설계 문서는 프로젝트 정의서, 요구사항기술서, 클래스분석서, UI설계서, 데이트베이스설계서 등을 작성", sub: [] },
                    { main: "프로젝트 설계방법과 StarUML과 같은 설계툴에 대해 배울수 있었음", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./fleamarket",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [
                    '1',
                    '2',
                ]
            },
            {
                left_title: "",
                left_subtitle: "2019.09 ~ 2019.12",
                left_add: "",
                right_title: "TAPC2",
                right_subtitle: "소프트웨어개발실습4 교과목 연계 프로젝트",
                content: [
                    { main: "고지대에 위치한 학교의 지리적 특성에 택시합승관련 어플리케이션을 설계, 개발", sub: [] },
                    { main: "클라이언트는 안드로이드 애플리케이션, 서버는 Node.js, DB는 MySQL로 구현", sub: [] },
                    { main: "로그인/로그아웃, 회원가입 등을 위한 http 서버와 매칭/채팅을 위한 소켓 서버를 구현", sub: [] },
                    { main: "안드로이드 애플리케이션과 웹서버를 처음 연동한 프로젝트", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./tapc2",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [

                ]
            },
            {
                left_title: "",
                left_subtitle: "2018.03 ~ 2018.06",
                left_add: "",
                right_title: "배드민턴 쇼핑몰",
                right_subtitle: "소프트웨어개발실습2 교과목 연계 프로젝트",
                content: [
                    { main: "배드민턴 관련 쇼핑몰 사이트", sub: [] },
                    { main: "html + css + javascript을 기반으로 서버가 없는 정적 페이지", sub: [] },
                ],
                keywords: [
                    "HTML", "CSS", "JS"
                ],
                folder: "./badmintorn-market",
                images: [
                    '1',
                    '2',
                ],
                pdfs: [

                ]
            },
        ],
    },
    educations: {
        subject: "Education",
        contents: [
            {
                id: 1,
                left_title: "",
                left_subtitle: "2014.12 ~ 2015.11",
                right_title: "동서대학교 졸업",
                right_subtitle:
                    "컴퓨터공학과 / 소프트웨어 전공 / AI공학 부전공 / 학점 : 4.17",
                right: [
                ],
            },
            {
                id: 2,
                left_title: "",
                left_subtitle: "2014.12 ~ 2015.11",
                left_add: "",
                right_title: "부산용인고 졸업",
                right_subtitle: "부산광역시 동래구 명장동",
                right: [
                ],
            },
        ],
    },
    awards: {
        subject: "Awards",
        contents: [
            {
                left_subtitle: "2020.12.17",
                right_title: "2020년도 온택트기반 동서인 FAIR - 최우수상",
                right_subtitle: "",
                right: [],
            },
            {
                left_subtitle: "2020.11.28",
                right_title: "한국지능시스템학회 30주년 기념 2020 추계학술대회 - 우수논문상",
                right_subtitle: "",
                right: [],
            },
            {
                left_subtitle: "2020.08.31",
                right_title: "동서인 AI해커톤 경진대회 - 장려상",
                right_subtitle: "",
                right: [],
            },
            {
                left_subtitle: "2020.06.08",
                right_title: "2020년도 동서 AI·SW 아이디어 경진대회 - 장려상",
                right_subtitle: "",
                right: [],
            },

        ],
    },
    reserchs: {
        subject: "Reserch",
        contents: [
            {
                left_subtitle: "2020.01.18",
                right_title: "Journal of The Korean Instiute of Inteligent System",
                right_subtitle: "Optical Music Recognition-based Auto Arrangement System",
                right: [
                    "구분 : Journal",
                    "흔히 음악을 추상적이고 불확실성이 높은 예술 분야라 생각하지만, 엄연히 화성학과 대위법 등 정립된\
                     이론이 존재한다. 컴퓨터와 인공지능이 등장함에 따라 이런 이론들을 바탕으로 음악을 작곡하거나 편곡하려는 시도가 생겨났고, 현재까지도 많은 연구가 진행되고 있다. 본 논문에서는 악보 이미지를 입력받아 알고리즘을 통해 자동 편곡한 음악 파일을 출력할 수 있도록 하는 악보 인식 기반 자동 편곡 시스템을 제안하였다. 광학 음악 인식을 통해 악보를 컴퓨터가 이해하기 쉬운 데이터 형태로 변환하였고, 멜로디를 기반으로 코드를 생성함으로써 편곡 시스템의 일부분을 구현하였다. 코드를 생성하는 작업에는 실제 악곡의 멜로디와 코드를 기반으로 심층 신경망을 사용하였다. 코드를 생성하는 데에는 다양한 선택지가 있음에도 불구, 실제 악곡과의 비교에서 약 55%의 일치율을 보였다.",
                ],
            },
            {
                left_subtitle: "2020.11.28",
                right_title: "컴퓨터공학부졸업논문집",
                right_subtitle: "광학 음악 인식 기반 편곡 시스템",
                right: [
                    "구분 : Thesis",
                    "4차 산업혁명이 진행되며 인공지능이 다양한 분야에서 활용되고 있다. 음악 분야 또한 인공지능과의 융합에 많은 연구가 진행되고 있다.\
                    한편 사회 전반적으로 음악에 대한 수요는 꾸준히 늘고 있으며, 그중에서도 편곡에 대한 관심이 늘고 있다. 다만 편곡 작업은 진입장벽이 높아, 전공자가 아닌 일반인들이 시도하기에는 어려움이 있다. 이에 따라 본 논문에서는 광학 음악 인식 기반 자동 편곡 시스템을 제안한다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 편곡 과정 중, 화성 생성의 경우 멜로디에 기반한 신경망 기법을 사용하였다. 제안한 광학 음악 인식 기법은 복잡도 ‘하’에 해당하는 악보 20장에 대해 95%의 인식률을 보였으며 신경망을 통해 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용할 수 있음을 확인하였다."
                ],
            },
            {
                left_subtitle: "2020.11.28",
                right_title: "한국지능시스템학회 30주년 기념 2020 추계학술대회",
                right_subtitle: "광학 음악 인식 기반 편곡 시스템",
                right: [
                    "구분 : Conference",
                    "인공지능에 대한 관심과 활용이 증가함에 따라 4차 산업혁명의 주요 기술로 각광받고 있다. \
                    음악분야에서도 인공지능과의 융합에 많은 연구가 활발히 진행되고 있다. 본 논문에서는 광학음악인식 기반 자동 편곡 시스템을 제안한다. \
                    편곡에는 템포 조절, 조옮김, 화성 생성과 같은 다양한 과정이 포함된다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 멜로디에 \
                    어울리는 화성을 생성하기 위해 신경망 기법을 사용하였다. 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용시킬 수 있음을 확인하였다."
                ],
            },
            {
                left_subtitle: "2020.11.10",
                right_title: "발명 특허 출원",
                right_subtitle: "악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법",
                right: [
                    "구분 : Conference",
                    "본 발명은 악보 인식 기반 편곡 장치 및 방법에 관한 것으로, 더 상세하게는 광학 인식 알고리즘을 이용하여 악보로부터 데이터를 추출하고, \
                    추출된 데이터를 편집함으로써 사용자가 쉽게 악보를 편곡하도록 제공하며, 편곡된 음악을 파일로 제공받도록 하는 악보 인식 기반 편곡 장치 및 방법에 관한 것이다."
                ],
            },
            {
                left_subtitle: "2020.08.31",
                right_title: "ICCT202 SCOPUS",
                right_subtitle: "Computer-Vision-based Advanced Optical Music Recognition System",
                right: [
                    "구분 : SCOPUS",
                    "Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process."
                ],
            },
            {
                left_subtitle: "2020.07.09",
                right_title: "The 10th International Conference on Convergence Technology in 2020",
                right_subtitle: "Advanced Optical Music Recognition System for Automatic Arrangement",
                right: [
                    "구분 : Conference",
                    "In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility."
                ],
            },
        ],
    },
    certificates: {
        subject: "certificate",
        contents: [
            {
                left_subtitle: "-",
                right_title: "정보처리기사",
                right_subtitle: "한국산업인력공단",
                right: [],
            },
            {
                left_subtitle: "-",
                right_title: "리눅스 마스터 2급",
                right_subtitle: "대한상공회의소 자격팡가사업단",
                right: [],
            },
            {
                left_subtitle: "-",
                right_title: "워드프로세스 1급",
                right_subtitle: "대한상공회의소 자격팡가사업단",
                right: [],
            },
            {
                left_subtitle: "-",
                right_title: "컴퓨터활용능력 1급",
                right_subtitle: "대한상공회의소 자격팡가사업단",
                right: [],
            },
        ],
    },
};
