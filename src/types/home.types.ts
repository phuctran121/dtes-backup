export interface WhyCard {
  title: string;
  description: string;
  image: string;
}

export interface InternationalStandardCard {
  image: string;
  title: string;
  content: string[];
  bg: string;
  arrowColor: string;
  py?: boolean;
}

export interface PackageItem {
  title: string;
  subtitle: string;
  image: string;
  mainText: string;
  desc: string;
  note: string;
  headerBg: string;
  btnClass: string;
}

export interface WhyDTESBoxItem {
  title: string;
  text: string;
}
