export interface Route {
  name?: string;
  path: string;
  component: any;
  data?: any;
  description?: any;
  title?: string;
  navbarTools?: any[];
  breadcrumb?: Array<{
    title: string;
    link?: string;
  }>
  | false;
  breadcrumbData?: any;

  layout?: boolean;
  canActivate?: any[];
}
