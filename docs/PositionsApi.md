# .PositionsApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPositionsByMarketMarketIdGet**](PositionsApi.md#apiPositionsByMarketMarketIdGet) | **GET** /api/Positions/by-market/{marketId} | 
[**apiPositionsGet**](PositionsApi.md#apiPositionsGet) | **GET** /api/Positions | 
[**apiPositionsIdClosePost**](PositionsApi.md#apiPositionsIdClosePost) | **POST** /api/Positions/{id}/close | 
[**apiPositionsIdGet**](PositionsApi.md#apiPositionsIdGet) | **GET** /api/Positions/{id} | 
[**apiPositionsPost**](PositionsApi.md#apiPositionsPost) | **POST** /api/Positions | 
[**apiPositionsWithPnlGet**](PositionsApi.md#apiPositionsWithPnlGet) | **GET** /api/Positions/with-pnl | 


# **apiPositionsByMarketMarketIdGet**
> void apiPositionsByMarketMarketIdGet()


### Example


```typescript
import { createConfiguration, PositionsApi } from '';
import type { PositionsApiApiPositionsByMarketMarketIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request: PositionsApiApiPositionsByMarketMarketIdGetRequest = {
  
  marketId: "marketId_example",
  
  userId: "userId_example",
};

const data = await apiInstance.apiPositionsByMarketMarketIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPositionsGet**
> void apiPositionsGet()


### Example


```typescript
import { createConfiguration, PositionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request = {};

const data = await apiInstance.apiPositionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPositionsIdClosePost**
> void apiPositionsIdClosePost()


### Example


```typescript
import { createConfiguration, PositionsApi } from '';
import type { PositionsApiApiPositionsIdClosePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request: PositionsApiApiPositionsIdClosePostRequest = {
  
  id: "id_example",
  
  userId: "userId_example",
};

const data = await apiInstance.apiPositionsIdClosePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPositionsIdGet**
> void apiPositionsIdGet()


### Example


```typescript
import { createConfiguration, PositionsApi } from '';
import type { PositionsApiApiPositionsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request: PositionsApiApiPositionsIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiPositionsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPositionsPost**
> void apiPositionsPost(placePositionCommand)


### Example


```typescript
import { createConfiguration, PositionsApi } from '';
import type { PositionsApiApiPositionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request: PositionsApiApiPositionsPostRequest = {
  
  placePositionCommand: {
    userId: "userId_example",
    marketId: "marketId_example",
    outcomeId: "outcomeId_example",
    amount: 3.14,
  },
};

const data = await apiInstance.apiPositionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placePositionCommand** | **PlacePositionCommand**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPositionsWithPnlGet**
> void apiPositionsWithPnlGet()


### Example


```typescript
import { createConfiguration, PositionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new PositionsApi(configuration);

const request = {};

const data = await apiInstance.apiPositionsWithPnlGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


