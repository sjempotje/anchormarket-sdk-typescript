# TradeExecutionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**limitOrderId** | **string** |  | [default to undefined]
**buyerOrderId** | **string** |  | [default to undefined]
**sellerOrderId** | **string** |  | [default to undefined]
**initiatorUserId** | **string** |  | [default to undefined]
**shares** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**executedPrice** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**totalValue** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]

## Example

```typescript
import { TradeExecutionDto } from './api';

const instance: TradeExecutionDto = {
    id,
    limitOrderId,
    buyerOrderId,
    sellerOrderId,
    initiatorUserId,
    shares,
    executedPrice,
    totalValue,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
