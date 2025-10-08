import { WhyCard, InternationalStandardCard } from "../types/home.types";

export const whyCardsData: WhyCard[] = [
  {
    title: "디지털 트윈 기반",
    description: "실제 설계도 반영",
    image: "/assets/icons/Task.png",
  },
  {
    title: "태양광/단열 조건 비교",
    description: "즉시 효율 계산",
    image: "/assets/home/Rocket.jpg",
  },
  {
    title: "실시간 시뮬레이션",
    description: "다양한 조건 설정",
    image: "/assets/home/Building.jpg",
  },
  {
    title: "UI 직관성",
    description: "누구나 사용 가능",
    image: "/assets/home/Computer.jpg",
  },
];

export const iscCardsData: InternationalStandardCard[] = [
  {
    image: "/assets/home/Star.png",
    title: "ISO 13790",
    content: ["건물 에너지 요구량 계산 기준", "유럽 표준", "DTES 평가 기반"],
    bg: "bg-card-3 text-white",
    arrowColor: "text-white",
  },
  {
    image: "/assets/home/Star_label.jpg",
    title: "DIN V 18599",
    content: [
      "독일 DIN 기준",
      "항목별 분리 에너지 계산",
      "한국 ZEB 대응 기준 근간",
    ],
    bg: "bg-white border border-card-3",
    arrowColor: "text-card-inst-text",
  },
  {
    image: "/assets/home/Energy.jpg",
    title: "IEA · UNEP 기준",
    content: [
      "국제기후기구 협약",
      "건물 에너지 감축 목표 강화",
      "제로에너지빌딩 국제 요구",
    ],
    bg: "bg-white border border-card-3",
    arrowColor: "text-card-inst-text",
  },
];

export const packagesCardsData = [
  {
    title: "DTES Free",
    subtitle: "학생\n설계사",
    image: "/assets/home/card_personal.jpg",
    mainText: "기본 시뮬레이션 기능\n누구나 사용, 무료",
    desc: "학습용, 포트폴리오 기반 활용",
    note: "→ FREE 버전으로 접근 장벽 낮춤",
    headerBg: "bg-card-1",
    btnClass: "bg-button-card-1 text-white hover:bg-sky-600",
  },
  {
    title: "DTES BuildKit",
    subtitle: "대형건설사\n플랫폼",
    image: "/assets/home/card_group.jpg",
    mainText: "설계도면 연동 API\n대규모 설계 시스템 연동",
    desc: "빠르고 직관적인 시뮬레이션 도구",
    note: "→ BuildKit/API로 B2B 확장",
    headerBg: "bg-card-2",
    btnClass: "bg-card-2 text-white hover:bg-blue-700",
  },
  {
    title: "DTES Free",
    subtitle: "시공사",
    image: "/assets/home/card_working.jpg",
    mainText: "에너지 절감 예측, 등급 인증 대응\n고급 분석, 리포트 생성",
    desc: "에너지효율등급 대응, 보고서 생성",
    note: "→ Pro로 인증·분석·리포트 수요 확보",
    headerBg: "bg-card-3",
    btnClass: "bg-card-3 text-white hover:bg-blue-900",
  },
  {
    title: "DTES Insights",
    subtitle: "에너지 컨설턴트\n정부",
    image: "/assets/home/card_co-operate.jpg",
    mainText: "보고서 자동 생성, 분석 통계\n정책/연구 기반 활용",
    desc: "정책/지침 대응용 데이터 기반 분석",
    note: "→ 공공/정책/교육 기관 대응",
    headerBg: "bg-card-4",
    btnClass: "bg-card-4 text-white hover:bg-zinc-900",
  },
];

export const whyBoxesData = [
  {
    title: "디지털 트윈 기반 실시간 에너지 계산",
    text: "",
  },
  {
    title: "",
    text: "디지털 트윈 기술을 활용하여 건물의 구조, 위치, 방향 등을 반영한 정밀한 실시간 에너지 시뮬레이션이 가능합니다. 이를 통해 설계 단계부터 에너지 효율성을 검토하고 최적의 대안을 도출할 수 있습니다.",
  },
  {
    title: "태양광, 단열 조건별 비교 기능",
    text: "태양광 조건 및 다양한 단열 수준을 반영한 시뮬레이션 결과를 서로 비교하여 최적의 건축 자재 및 설계를 선택할 수 있습니다. 정량적 수치로 비교되므로 객관적이고 신뢰도 높은 판단이 가능합니다.",
  },
  {
    title: "",
    text: "DTES는 태양광 입사각, 위치에 따른 일사량, 창호 면적, 단열재 성능 등 다양한 외부 요인을 조합하여 건물 에너지 시뮬레이션을 수행하고, 그 결과를 조건별로 시각화하여 비교할 수 있는 기능을 제공합니다. 이 모든 비교는 수치화된 데이터를 기반으로 제공되기 때문에, 주관적 판단이 개입되지 않고 객관적이고 신뢰도 높은 설계 검토가 가능해집니다.",
  },
  {
    title: "전문가용 정밀 시뮬레이션, 쉬운 UI",
    text: "",
  },
  {
    title: "",
    text: "태양광 조건 및 다양한 단열 수준을 반영한 시뮬레이션 결과를 서로 비교하여 최적의 건축 자재 및 설계를 선택할 수 있습니다. 정량적 수치로 비교되므로 객관적이고 신뢰도 높은 판단이 가능합니다.",
  },
];
