export interface AllPageProps {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  mainImage?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  pageDescription?: string;
  slug?: string;
  title?: string;
}

export interface AssetProps {
  _ref: string;
  _type: string;
}

export interface ImageObj {
  _type: string;
  asset: AssetProps;
}

export interface AuthorProps {
  _id: string;
  firstName: string;
  lastName: string;
  photo: ImageProps;
  slug: string;
  company: {
    link: {
      icon: string;
      url: string;
    };
  };
}

export interface ImageProps {
  _key?: string;
  aspectRatio: number;
  crop?: any;
  height: number;
  hotspot?: any;
  lqip: string;
  reference: ImageObj;
  alt: string;
  url: string;
  width: number;
}

export interface FormFieldProps {
  _key: string;
  disabled?: boolean;
  description?: string;
  hideLabel?: boolean;
  index?: number;
  initialValue?: string;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type: string;
  validation?: string;
  choices?: {
    _key: string;
    copy: string;
    value: string;
  }[];
}

export interface FormProps {
  _id: string;
  beforeSubmitCopy?: any[];
  className?: string;
  description?: any[];
  formClassName?: string;
  formFields: FormFieldProps[];
  heading?: string;
  recipient: string;
  subject: string;
  submitButtonCopy?: string;
  thankYouMessage: string;
  errorMessage: string;
}

export interface DynamicPageDataProps extends AllPageProps {
  page?: AllPageProps;
  pageContent?: BlockProps[] | any[];
}

export interface DynamicPageProps {
  data?: DynamicPageDataProps;
  global?: GlobalProps;
}

export interface BlockProps {
  _key: string;
  _type: string;
  altLayout?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  backgroundImage?: ImageProps;
  backgroundVideo?: string;
  children?: any;
  className?: string;
  colorCutOff?: boolean;
  colorHeight?: number | string;
  componentId?: string;
  custom?: boolean;
  customStyles?: boolean;
  customStyleCode?: {
    code: string;
  };
  heading?: string;
  index?: number;
  subHeading?: string;
}

export interface ColorProps {
  title?: string;
  value?: string;
}

export interface LinkProps {
  _key?: string;
  anchor?: boolean;
  anchorName?: string;
  ariaLabel?: string;
  children?: any;
  className?: string;
  clickFunction?: Function;
  copy?: string;
  internalLink?: { _type?: string; slug: { current: string } };
  newTab?: boolean;
  subItems?: {
    _key?: string;
    anchor?: boolean;
    anchorName?: string;
    className?: string;
    copy: string;
    internalLink?: { slug: { current: string } };
    newTab?: boolean;
    url?: string;
  }[];
  url?: string;
}

export interface ContactProps {
  address?: string;
  address2?: string;
  cityState?: string;
  mainEmail?: string;
  mainPhone?: string;
  zip?: string;
}

export interface AlertBarProps {
  _id: string;
  content?: any[];
  startDate?: string;
  endDate?: string;
}

export interface SearchItem {
  _id?: string;
  _type?: string;
  mainImage?: string;
  slug?: string;
  title?: string;
  date?: string;
}

export interface SiteProps {
  siteTitle: string;
  socials?: {
    icon: string;
    url: string;
    _key: string;
  }[];
  alertBar?: AlertBarProps;
  siteDescription?: string;
  defaultOgImage: ImageProps;
  iconImage?: ImageProps;
  customIcon?: string;
  contact?: ContactProps;
  enableSearch?: boolean;
}

export interface NavProps {
  items?: {
    _key: string;
    link?: LinkProps;
  }[];
}

export interface GlobalProps {
  footerNavigation?: NavProps;
  mainNavigation?: NavProps;
  site: SiteProps;
  search?: SearchItem[];
}

export interface AffiliateCardProps {
  _id: string;
  title: string;
  description?: string;
  links?: LinkProps[];
  hasBg?: boolean;
  colorCutOff?: boolean;
  iconImage?: ImageProps;
  customIcon?: {
    customStyleCode: {
      code: string;
    };
  };
}

export interface PersonCardProps {
  _id: string;
  company?: {
    _id: string;
    title: string;
  };
  firstName: string;
  lastName?: string;
  photo: ImageProps;
  position?: string;
  description?: string;
  socials?: {
    _key: string;
    icon: string;
    url: string;
  }[];
}

export interface CommonPageProps {
  doc?: AllPageProps;
  global?: GlobalProps;
}

export interface PostCardProps {
  _id: string;
  postImage: ImageProps;
  pageDescription: string;
  publishDate: string;
  slug: string;
  title: string;
  className?: string;
  categories?: {
    _id: string;
    title: string;
    slug: string;
  }[];
  bodyContent: any[];
  authors?: AuthorProps[];
}

export interface EventProps {
  _id: string;
  title: string;
  date: string;
  slug: string;
  description?: any;
  postImage?: ImageProps;
  mainImage?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  location?: {
    cityStateZip: string;
    name?: string;
    street: string;
  };
  physicalLocation?: boolean;
  time?: string;
  links?: LinkProps[];
}

export interface ProgressiveImageProps extends ImageProps {
  alt: string;
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  isBackground?: boolean;
  mobileCrop?: boolean | 'squared';
  overrideSize?: boolean;
  priority?: boolean;
  quality?: number;
  thin?: boolean;
  title?: string;
}
