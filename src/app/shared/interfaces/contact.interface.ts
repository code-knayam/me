interface ISocial {
  icon: string;
  link: string;
}

export interface IContact {
  title: string;
  subTitle: string;
  heading: string;
  social: ISocial[];
}
