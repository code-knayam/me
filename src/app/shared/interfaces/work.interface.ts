interface IPosition {
  title: string;
  duration: string;
}

interface IWork {
  heading: string;
  positions: IPosition[];
}

export interface IWorks {
  title: string;
  subTitle: string;
  works: IWork[];
}
