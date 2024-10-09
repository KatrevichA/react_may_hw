import {IDimensionsModel} from "./IDimensionsModel";
import {IMetaModel} from "./IMetaModel";
import {IReviewsModel} from "./IReviewsModel";

export interface IProductType {
    "id"?: number,
    "title"?: string,
    "description"?: string,
    "category"?: string,
    "price"?: number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "tags"?: string [],
    "brand"?: string,
    "sku"?: string,
    "weight"?: number,
    "dimensions"?: IDimensionsModel,
    "warrantyInformation"?: string,
    "shippingInformation"?: string,
    "availabilityStatus"?: string,
    "reviews"?: IReviewsModel [],
    "returnPolicy"?: string,
    "minimumOrderQuantity"?: number,
    "meta"?: IMetaModel,
    "thumbnail"?: string,
    "images"?: string []
}