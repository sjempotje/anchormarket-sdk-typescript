# .LimitOrdersApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiLimitOrdersMarketMarketIdGet**](LimitOrdersApi.md#apiLimitOrdersMarketMarketIdGet) | **GET** /api/LimitOrders/market/{marketId} | 
[**apiLimitOrdersOrderIdDelete**](LimitOrdersApi.md#apiLimitOrdersOrderIdDelete) | **DELETE** /api/LimitOrders/{orderId} | 
[**apiLimitOrdersOrderIdGet**](LimitOrdersApi.md#apiLimitOrdersOrderIdGet) | **GET** /api/LimitOrders/{orderId} | 
[**apiLimitOrdersPost**](LimitOrdersApi.md#apiLimitOrdersPost) | **POST** /api/LimitOrders | 


# **apiLimitOrdersMarketMarketIdGet**
> Array<LimitOrderDto> apiLimitOrdersMarketMarketIdGet()


### Example


```typescript
import { createConfiguration, LimitOrdersApi } from '';
import type { LimitOrdersApiApiLimitOrdersMarketMarketIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LimitOrdersApi(configuration);

const request: LimitOrdersApiApiLimitOrdersMarketMarketIdGetRequest = {
  
  marketId: "marketId_example",
  
  outcomeId: "outcomeId_example",
};

const data = await apiInstance.apiLimitOrdersMarketMarketIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **outcomeId** | [**string**] |  | (optional) defaults to undefined


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
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLimitOrdersOrderIdDelete**
> void apiLimitOrdersOrderIdDelete()


### Example


```typescript
import { createConfiguration, LimitOrdersApi } from '';
import type { LimitOrdersApiApiLimitOrdersOrderIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LimitOrdersApi(configuration);

const request: LimitOrdersApiApiLimitOrdersOrderIdDeleteRequest = {
  
  orderId: "orderId_example",
};

const data = await apiInstance.apiLimitOrdersOrderIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLimitOrdersOrderIdGet**
> LimitOrderDetailDto apiLimitOrdersOrderIdGet()


### Example


```typescript
import { createConfiguration, LimitOrdersApi } from '';
import type { LimitOrdersApiApiLimitOrdersOrderIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LimitOrdersApi(configuration);

const request: LimitOrdersApiApiLimitOrdersOrderIdGetRequest = {
  
  orderId: "orderId_example",
};

const data = await apiInstance.apiLimitOrdersOrderIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


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
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLimitOrdersPost**
> string apiLimitOrdersPost(placeLimitOrderRequest)


### Example


```typescript
import { createConfiguration, LimitOrdersApi } from '';
import type { LimitOrdersApiApiLimitOrdersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LimitOrdersApi(configuration);

const request: LimitOrdersApiApiLimitOrdersPostRequest = {
  
  placeLimitOrderRequest: {
    userId: "userId_example",
    marketId: "marketId_example",
    outcomeId: "outcomeId_example",
    side: 1,
    price: 3.14,
    quantity: 3.14,
    expiresAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.apiLimitOrdersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeLimitOrderRequest** | **PlaceLimitOrderRequest**|  |


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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


