interface IProject {
  heading: string;
  subHeading: string;
  repoLink: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
}

export interface IProjects {
  title: string;
  subTitle: string;
  projects: IProject[];
}
