# MarketPriceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketId** | **string** |  | [default to undefined]
**marketTitle** | **string** |  | [default to undefined]
**outcomeId** | **string** |  | [default to undefined]
**outcomeTitle** | **string** |  | [default to undefined]
**currentPrice** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**previousPrice** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**change24h** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**change24hPercent** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**high24h** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**low24h** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**volume24h** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { MarketPriceDto } from '@anchormarket/anchormarket-sdk-typescript';

const instance: MarketPriceDto = {
    marketId,
    marketTitle,
    outcomeId,
    outcomeTitle,
    currentPrice,
    previousPrice,
    change24h,
    change24hPercent,
    high24h,
    low24h,
    volume24h,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
