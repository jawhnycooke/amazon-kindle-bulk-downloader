// Generated by https://quicktype.io

export interface GetContentOwnershipDataResponse {
  success: boolean;
  GetContentOwnershipData: GetContentOwnershipDataClass;
}

export interface GetContentOwnershipDataClass {
  hasMoreItems: boolean;
  numberOfItems: number;
  success: boolean;
  items: ContentItem[];
  contentCategoryReference: string;
}

export interface ContentItem {
  readStatus: string;
  targetDevices: { [key: string]: number };
  bookProducerDetails: BookProducerDetail[];
  orderId: string;
  isNellOptimized: boolean;
  title: string;
  isGiftOption: boolean;
  sortableAuthors: string;
  isPurchased: boolean;
  excludedDeviceMap: { [key: string]: number };
  audibleAsin: string;
  getOrderDetails: boolean;
  expiredPublicLibraryLending: boolean;
  productImage: string;
  acquiredDate: string;
  isDeleteRestrictionEnabled: boolean;
  isGift: boolean;
  collectionList: unknown[];
  contentCategoryType: string;
  orderDetailURL: string;
  showProductDetails: boolean;
  isContentValid: boolean;
  canLoan: boolean;
  statusFromPlatformSearch: string;
  udlCategory: string;
  renderDownloadElements: boolean;
  acquiredTime: number;
  sortableTitle: string;
  refundEligibility: boolean;
  originType: string;
  capabilityList: string[];
  dpURL: string;
  isInstitutionalRental: boolean;
  collectionCount: number;
  isAudibleOwned: boolean;
  asin: string;
  isKCRSupported: boolean;
  contentIdentifier: string;
  category: string;
  isPrimeShared: boolean;
  actions: string[];
  authors: string;
  readAlongSupport?: string;
  isUpdateAvailable?: string;
  allowedVersion?: string;
}

export interface BookProducerDetail {
  role: string;
  name: string;
  asin: string;
}
