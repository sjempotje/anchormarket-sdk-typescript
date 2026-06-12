# OrderBookDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketId** | **string** |  | [default to undefined]
**marketTitle** | **string** |  | [default to undefined]
**outcomeId** | **string** |  | [default to undefined]
**outcomeTitle** | **string** |  | [default to undefined]
**bids** | [**Array&lt;OrderBookLevelDto&gt;**](OrderBookLevelDto.md) |  | [default to undefined]
**asks** | [**Array&lt;OrderBookLevelDto&gt;**](OrderBookLevelDto.md) |  | [default to undefined]
**bestBid** | [**OrderBookDtoBestBid**](OrderBookDtoBestBid.md) |  | [default to undefined]
**bestAsk** | [**OrderBookDtoBestBid**](OrderBookDtoBestBid.md) |  | [default to undefined]
**spread** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { OrderBookDto } from '@anchormarket/anchormarket-sdk-typescript';

const instance: OrderBookDto = {
    marketId,
    marketTitle,
    outcomeId,
    outcomeTitle,
    bids,
    asks,
    bestBid,
    bestAsk,
    spread,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
