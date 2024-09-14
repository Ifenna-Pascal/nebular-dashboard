export interface ILink {
  name: string;
  href: string;
  click?: () => void;
  isActive: boolean;
}
