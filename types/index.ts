export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface ServiceChild {
  title: string;
  description: string;
}

export interface ServiceCategory {
  icon: string;
  title: string;
  slug: string;
  description: string;
  children: ServiceChild[];
}
