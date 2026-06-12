# OrderBooksApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiOrderBooksMarketMarketIdMatchPost**](#apiorderbooksmarketmarketidmatchpost) | **POST** /api/OrderBooks/market/{marketId}/match | |
|[**apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet**](#apiorderbooksmarketmarketidoutcomeoutcomeidget) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId} | |
|[**apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet**](#apiorderbooksmarketmarketidoutcomeoutcomeidpriceget) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId}/price | |

# **apiOrderBooksMarketMarketIdMatchPost**
> MatchingResult apiOrderBooksMarketMarketIdMatchPost()


### Example

```typescript
import {
    OrderBooksApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new OrderBooksApi(configuration);

let marketId: string; // (default to undefined)
let outcomeId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiOrderBooksMarketMarketIdMatchPost(
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

**MatchingResult**

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

# **apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet**
> OrderBookDto apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet()


### Example

```typescript
import {
    OrderBooksApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new OrderBooksApi(configuration);

let marketId: string; // (default to undefined)
let outcomeId: string; // (default to undefined)

const { status, data } = await apiInstance.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(
    marketId,
    outcomeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] |  | defaults to undefined|
| **outcomeId** | [**string**] |  | defaults to undefined|


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
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet**
> MarketPriceDto apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet()


### Example

```typescript
import {
    OrderBooksApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new OrderBooksApi(configuration);

let marketId: string; // (default to undefined)
let outcomeId: string; // (default to undefined)

const { status, data } = await apiInstance.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(
    marketId,
    outcomeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] |  | defaults to undefined|
| **outcomeId** | [**string**] |  | defaults to undefined|


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
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

