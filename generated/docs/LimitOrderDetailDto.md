# LimitOrderDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**marketId** | **string** |  | [default to undefined]
**marketTitle** | **string** |  | [default to undefined]
**outcomeId** | **string** |  | [default to undefined]
**outcomeTitle** | **string** |  | [default to undefined]
**userId** | **string** |  | [default to undefined]
**side** | **number** |  | [default to undefined]
**price** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**quantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**filledQuantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**remainingQuantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**averageFillPrice** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**totalCost** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**type** | **number** |  | [default to undefined]
**status** | **number** |  | [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**tradeExecutions** | [**Array&lt;TradeExecutionDto&gt;**](TradeExecutionDto.md) |  | [default to undefined]

## Example

```typescript
import { LimitOrderDetailDto } from './api';

const instance: LimitOrderDetailDto = {
    id,
    marketId,
    marketTitle,
    outcomeId,
    outcomeTitle,
    userId,
    side,
    price,
    quantity,
    filledQuantity,
    remainingQuantity,
    averageFillPrice,
    totalCost,
    type,
    status,
    expiresAt,
    createdAt,
    updatedAt,
    tradeExecutions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
