export type LinkType = {
  text: string;
  path: string;
  title?: string;
  isExternal: boolean;
  hasGradient?: boolean;
};

export type LinksListProps = {
  direction: 'row' | 'column';
  links: LinkType[];
};
