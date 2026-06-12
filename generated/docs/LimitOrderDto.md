# LimitOrderDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**marketId** | **string** |  | [default to undefined]
**outcomeId** | **string** |  | [default to undefined]
**userId** | **string** |  | [default to undefined]
**side** | **number** |  | [default to undefined]
**price** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**quantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**filledQuantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**totalCost** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**type** | **number** |  | [default to undefined]
**status** | **number** |  | [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { LimitOrderDto } from './api';

const instance: LimitOrderDto = {
    id,
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
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
