export type Skill = {
  img: string,
  title: string,
  className: string
}

export type Link = {
  icon: string,
  alt: string,
  text: string,
  link: string
}

export type Project = {
  imgMedium: string,
  imgLarge?: string,
  videoMedium?: string,
  videoLarge?: string,
  audio?: boolean,
  title: string,
  text: string,
  type: string[],
  links: Link[],
}

export type Collection = {
  skillSize: string,
  skills: Skill[],
  projects: Project[],
  filters: string[]
}