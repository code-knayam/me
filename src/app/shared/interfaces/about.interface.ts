interface ILink {
  href: string;
  icon: string;
}

interface IContent {
  text: string;
  links?: ILink[];
}

export interface IAbout {
  title: string;
  subTitle: string;
  heading: string;
  content: IContent[];
}
