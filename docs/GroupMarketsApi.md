# .GroupMarketsApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGroupMarketsGet**](GroupMarketsApi.md#apiGroupMarketsGet) | **GET** /api/group-markets | 
[**apiGroupMarketsIdCancelPost**](GroupMarketsApi.md#apiGroupMarketsIdCancelPost) | **POST** /api/group-markets/{id}/cancel | 
[**apiGroupMarketsIdGet**](GroupMarketsApi.md#apiGroupMarketsIdGet) | **GET** /api/group-markets/{id} | 
[**apiGroupMarketsIdResolvePost**](GroupMarketsApi.md#apiGroupMarketsIdResolvePost) | **POST** /api/group-markets/{id}/resolve | 
[**apiGroupMarketsPost**](GroupMarketsApi.md#apiGroupMarketsPost) | **POST** /api/group-markets | 


# **apiGroupMarketsGet**
> void apiGroupMarketsGet()


### Example


```typescript
import { createConfiguration, GroupMarketsApi } from '';
import type { GroupMarketsApiApiGroupMarketsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupMarketsApi(configuration);

const request: GroupMarketsApiApiGroupMarketsGetRequest = {
  
  groupId: "groupId_example",
  
  requestingUserId: "requestingUserId_example",
};

const data = await apiInstance.apiGroupMarketsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | (optional) defaults to undefined
 **requestingUserId** | [**string**] |  | (optional) defaults to undefined


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

# **apiGroupMarketsIdCancelPost**
> void apiGroupMarketsIdCancelPost(cancelGroupMarketCommand)


### Example


```typescript
import { createConfiguration, GroupMarketsApi } from '';
import type { GroupMarketsApiApiGroupMarketsIdCancelPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupMarketsApi(configuration);

const request: GroupMarketsApiApiGroupMarketsIdCancelPostRequest = {
  
  id: "id_example",
  
  cancelGroupMarketCommand: {
    marketId: "marketId_example",
    requestingUserId: "requestingUserId_example",
  },
};

const data = await apiInstance.apiGroupMarketsIdCancelPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelGroupMarketCommand** | **CancelGroupMarketCommand**|  |
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

# **apiGroupMarketsIdGet**
> void apiGroupMarketsIdGet()


### Example


```typescript
import { createConfiguration, GroupMarketsApi } from '';
import type { GroupMarketsApiApiGroupMarketsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupMarketsApi(configuration);

const request: GroupMarketsApiApiGroupMarketsIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiGroupMarketsIdGet(request);
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

# **apiGroupMarketsIdResolvePost**
> void apiGroupMarketsIdResolvePost(resolveGroupMarketCommand)


### Example


```typescript
import { createConfiguration, GroupMarketsApi } from '';
import type { GroupMarketsApiApiGroupMarketsIdResolvePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupMarketsApi(configuration);

const request: GroupMarketsApiApiGroupMarketsIdResolvePostRequest = {
  
  id: "id_example",
  
  resolveGroupMarketCommand: {
    marketId: "marketId_example",
    winningOutcomeId: "winningOutcomeId_example",
    resolverId: "resolverId_example",
  },
};

const data = await apiInstance.apiGroupMarketsIdResolvePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolveGroupMarketCommand** | **ResolveGroupMarketCommand**|  |
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

# **apiGroupMarketsPost**
> void apiGroupMarketsPost(createGroupMarketCommand)


### Example


```typescript
import { createConfiguration, GroupMarketsApi } from '';
import type { GroupMarketsApiApiGroupMarketsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupMarketsApi(configuration);

const request: GroupMarketsApiApiGroupMarketsPostRequest = {
  
  createGroupMarketCommand: {
    groupId: "groupId_example",
    creatorId: "creatorId_example",
    title: "title_example",
    description: "description_example",
    resolutionDeadline: new Date('1970-01-01T00:00:00.00Z'),
    outcomeTitles: [
      "outcomeTitles_example",
    ],
  },
};

const data = await apiInstance.apiGroupMarketsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupMarketCommand** | **CreateGroupMarketCommand**|  |


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


