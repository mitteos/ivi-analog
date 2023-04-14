export type LinkType = {
  text: string;
  path: string;
  tooltip?: string;
  isExternal: boolean;
};

export type LinksListProps = {
  direction: 'row' | 'column';
  links: LinkType[];
  title?: string;
};
