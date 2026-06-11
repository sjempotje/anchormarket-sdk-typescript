# .MarketsApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMarketsGet**](MarketsApi.md#apiMarketsGet) | **GET** /api/Markets | 
[**apiMarketsIdDelete**](MarketsApi.md#apiMarketsIdDelete) | **DELETE** /api/Markets/{id} | 
[**apiMarketsIdGet**](MarketsApi.md#apiMarketsIdGet) | **GET** /api/Markets/{id} | 
[**apiMarketsIdPut**](MarketsApi.md#apiMarketsIdPut) | **PUT** /api/Markets/{id} | 
[**apiMarketsPost**](MarketsApi.md#apiMarketsPost) | **POST** /api/Markets | 


# **apiMarketsGet**
> void apiMarketsGet()


### Example


```typescript
import { createConfiguration, MarketsApi } from '';

const configuration = createConfiguration();
const apiInstance = new MarketsApi(configuration);

const request = {};

const data = await apiInstance.apiMarketsGet(request);
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

# **apiMarketsIdDelete**
> void apiMarketsIdDelete()


### Example


```typescript
import { createConfiguration, MarketsApi } from '';
import type { MarketsApiApiMarketsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MarketsApi(configuration);

const request: MarketsApiApiMarketsIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiMarketsIdDelete(request);
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

# **apiMarketsIdGet**
> void apiMarketsIdGet()


### Example


```typescript
import { createConfiguration, MarketsApi } from '';
import type { MarketsApiApiMarketsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MarketsApi(configuration);

const request: MarketsApiApiMarketsIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiMarketsIdGet(request);
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

# **apiMarketsIdPut**
> void apiMarketsIdPut(updateMarketCommand)


### Example


```typescript
import { createConfiguration, MarketsApi } from '';
import type { MarketsApiApiMarketsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MarketsApi(configuration);

const request: MarketsApiApiMarketsIdPutRequest = {
  
  id: "id_example",
  
  updateMarketCommand: {
    marketId: "marketId_example",
    title: "title_example",
    description: "description_example",
    resolutionDeadline: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.apiMarketsIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMarketCommand** | **UpdateMarketCommand**|  |
 **id** | [**string**] |  | defaults to undefined


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

# **apiMarketsPost**
> void apiMarketsPost(createMarketCommand)


### Example


```typescript
import { createConfiguration, MarketsApi } from '';
import type { MarketsApiApiMarketsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MarketsApi(configuration);

const request: MarketsApiApiMarketsPostRequest = {
  
  createMarketCommand: {
    title: "title_example",
    description: "description_example",
    resolutionDeadline: new Date('1970-01-01T00:00:00.00Z'),
    scope: 1,
    creatorId: "creatorId_example",
    groupId: "groupId_example",
    outcomeTitles: [
      "outcomeTitles_example",
    ],
  },
};

const data = await apiInstance.apiMarketsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMarketCommand** | **CreateMarketCommand**|  |


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


