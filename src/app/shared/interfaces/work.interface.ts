interface IPosition {
  title: string;
  duration: string;
}

interface IWorks {
  heading: string;
  positions: IPosition[];
}

export interface IWork {
  title: string;
  subTitle: string;
  works: IWorks[];
}
