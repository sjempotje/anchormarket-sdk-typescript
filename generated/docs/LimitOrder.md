# LimitOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketId** | **string** |  | [optional] [default to undefined]
**outcomeId** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**side** | **number** |  | [optional] [default to undefined]
**price** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [optional] [default to undefined]
**quantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [optional] [default to undefined]
**filledQuantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [optional] [default to undefined]
**totalCost** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [optional] [default to undefined]
**type** | **number** |  | [optional] [default to undefined]
**status** | **number** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**market** | [**Market**](Market.md) |  | [optional] [default to undefined]
**outcome** | [**Outcome**](Outcome.md) |  | [optional] [default to undefined]
**tradeExecutions** | [**Array&lt;TradeExecution&gt;**](TradeExecution.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LimitOrder } from './api';

const instance: LimitOrder = {
    marketId,
    outcomeId,
    userId,
    side,
    price,
    quantity,
    filledQuantity,
    totalCost,
    type,
    status,
    expiresAt,
    market,
    outcome,
    tradeExecutions,
    id,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
