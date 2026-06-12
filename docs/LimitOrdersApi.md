# LimitOrdersApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiLimitOrdersMarketMarketIdGet**](#apilimitordersmarketmarketidget) | **GET** /api/LimitOrders/market/{marketId} | |
|[**apiLimitOrdersOrderIdDelete**](#apilimitordersorderiddelete) | **DELETE** /api/LimitOrders/{orderId} | |
|[**apiLimitOrdersOrderIdGet**](#apilimitordersorderidget) | **GET** /api/LimitOrders/{orderId} | |
|[**apiLimitOrdersPost**](#apilimitorderspost) | **POST** /api/LimitOrders | |

# **apiLimitOrdersMarketMarketIdGet**
> Array<LimitOrderDto> apiLimitOrdersMarketMarketIdGet()


### Example

```typescript
import {
    LimitOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LimitOrdersApi(configuration);

let marketId: string; // (default to undefined)
let outcomeId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiLimitOrdersMarketMarketIdGet(
    marketId,
    outcomeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] |  | defaults to undefined|
| **outcomeId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<LimitOrderDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiLimitOrdersOrderIdDelete**
> apiLimitOrdersOrderIdDelete()


### Example

```typescript
import {
    LimitOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LimitOrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.apiLimitOrdersOrderIdDelete(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiLimitOrdersOrderIdGet**
> LimitOrderDetailDto apiLimitOrdersOrderIdGet()


### Example

```typescript
import {
    LimitOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LimitOrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.apiLimitOrdersOrderIdGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**LimitOrderDetailDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiLimitOrdersPost**
> string apiLimitOrdersPost(placeLimitOrderRequest)


### Example

```typescript
import {
    LimitOrdersApi,
    Configuration,
    PlaceLimitOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LimitOrdersApi(configuration);

let placeLimitOrderRequest: PlaceLimitOrderRequest; //

const { status, data } = await apiInstance.apiLimitOrdersPost(
    placeLimitOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placeLimitOrderRequest** | **PlaceLimitOrderRequest**|  | |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

