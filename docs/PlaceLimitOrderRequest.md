# PlaceLimitOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [default to undefined]
**marketId** | **string** |  | [default to undefined]
**outcomeId** | **string** |  | [default to undefined]
**side** | **number** |  | [default to undefined]
**price** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**quantity** | [**LimitOrderPrice**](LimitOrderPrice.md) |  | [default to undefined]
**expiresAt** | **string** |  | [default to undefined]

## Example

```typescript
import { PlaceLimitOrderRequest } from '@anchormarket/anchormarket-sdk-typescript';

const instance: PlaceLimitOrderRequest = {
    userId,
    marketId,
    outcomeId,
    side,
    price,
    quantity,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
