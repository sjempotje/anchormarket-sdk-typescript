# .OrderBooksApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOrderBooksMarketMarketIdMatchPost**](OrderBooksApi.md#apiOrderBooksMarketMarketIdMatchPost) | **POST** /api/OrderBooks/market/{marketId}/match | 
[**apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet**](OrderBooksApi.md#apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId} | 
[**apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet**](OrderBooksApi.md#apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId}/price | 


# **apiOrderBooksMarketMarketIdMatchPost**
> MatchingResult apiOrderBooksMarketMarketIdMatchPost()


### Example


```typescript
import { createConfiguration, OrderBooksApi } from '';
import type { OrderBooksApiApiOrderBooksMarketMarketIdMatchPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderBooksApi(configuration);

const request: OrderBooksApiApiOrderBooksMarketMarketIdMatchPostRequest = {
  
  marketId: "marketId_example",
  
  outcomeId: "outcomeId_example",
};

const data = await apiInstance.apiOrderBooksMarketMarketIdMatchPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **outcomeId** | [**string**] |  | (optional) defaults to undefined


### Return type

**MatchingResult**

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

# **apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet**
> OrderBookDto apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet()


### Example


```typescript
import { createConfiguration, OrderBooksApi } from '';
import type { OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderBooksApi(configuration);

const request: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdGetRequest = {
  
  marketId: "marketId_example",
  
  outcomeId: "outcomeId_example",
};

const data = await apiInstance.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **outcomeId** | [**string**] |  | defaults to undefined


### Return type

**OrderBookDto**

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

# **apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet**
> MarketPriceDto apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet()


### Example


```typescript
import { createConfiguration, OrderBooksApi } from '';
import type { OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderBooksApi(configuration);

const request: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetRequest = {
  
  marketId: "marketId_example",
  
  outcomeId: "outcomeId_example",
};

const data = await apiInstance.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **outcomeId** | [**string**] |  | defaults to undefined


### Return type

**MarketPriceDto**

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


