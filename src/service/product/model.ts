export type UpdateProductDTO = Partial<Omit<ProductModel, "createdAt">> & {
  optionList?: OptionModel[];
};

export const CURRENCY = {
  CNY: "CNY",
  USD: "USD",
};

export const SHIPPING_TYPE = {
  free: "free",
  charge: "charge",
  charge_each: "charge_each",
};

export type SHIPPING_TYPE = typeof SHIPPING_TYPE[keyof typeof SHIPPING_TYPE];

export type CURRENCY = typeof CURRENCY[keyof typeof CURRENCY];

export interface ProductModel {
  id: number;

  userId: number;

  rawTitle: string;

  title: string;

  categoryId: number;

  contentHtml: string;

  thumbnailUrls: string[];

  tags: string[];

  shippingType: SHIPPING_TYPE;

  shippingPrice: number;

  refundPrice: number;

  exchangePrice: number;

  lastEditedDate: Date;

  lastExcelExportedDate?: Date;

  optionConfirmed: boolean;

  tagConfirmed: boolean;

  contentConfirmed: boolean;

  excelExported: boolean;

  selectedThumbnailUrl: string;

  originalUrl: string;

  isDeleted: boolean;

  rawPrice?: string;

  currency: CURRENCY;

  json: any;

  includesOptionHtml: boolean;

  coupangId?: string;

  st11Id?: string;

  coupangCategoryId?: number;

  st11CategoryId?: number;

  auctionId?: string;

  gmarketId?: string;

  auctionEsmId?: string;

  gmarketEsmId?: string;

  auctionCategoryId?: string;

  gmarketCategoryId?: string;

  addedPrice?: number;

  smartStoreId?: string;

  smartStoreUrl?: string;

  interparkCategoryId?: string;

  interparkId?: string;

  lotteonCategoryId?: string;

  lotteonId?: string;

  talkstoreCategoryId?: string;

  talkstoreId?: string;

  talkstoreUrl?: string;

  exported: boolean;

  wemakepriceId?: string;

  wemakepriceCategoryId?: string;

  lotteonCategoryId2?: string;

  videoUrl?: string;

  coupangFailLog?: string;

  st11FailLog?: string;

  auctionFailLog?: string;

  gmarketFailLog?: string;

  smartstoreFailLog?: string;

  interparkFailLog?: string;

  talkstoreFailLog?: string;

  lotteonFailLog?: string;

  gmarketFaiwemakepriceFailLoglLog?: string;

  includesVideoToHtml?: boolean;

  videoMuted?: boolean;

  ohooImageIdMap: any;

  st11AbroadId?: string;

  st11AbroadCategoryId?: number;

  auction2CategoryId?: string;

  gmarket2CategoryId?: string;

  categoryName?: string;

  createdAt?: Date;

  deletedAt: Date;
}

export type PaginationType = {
  take?: number;
  skip?: number;
  orderByField?: string;
  orderBySort?: string;
};

export type ProductResponseType = {
  totalCount: number;
  list: ProductModel[];
};

export type OptionModel = {
  id: number;
  productId: number;
  title: string;
  rawTitle: string;
  price: number;
  rawPrice: number;
  imageUrls: string[];
  enabled: boolean;
  translatedTitle: string;
  coupangOptionId?: boolean;
  auctionId?: boolean;
  gmarketId?: boolean;
  auctionEsmId?: boolean;
  gmarketEsmId?: boolean;
};
