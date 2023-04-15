export type LinkType = {
  text: string;
  path: string;
  title?: string;
  isExternal: boolean;
};

export type LinksListProps = {
  direction: 'row' | 'column';
  links: LinkType[];
};
