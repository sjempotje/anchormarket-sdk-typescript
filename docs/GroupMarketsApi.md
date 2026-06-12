# GroupMarketsApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiGroupMarketsGet**](#apigroupmarketsget) | **GET** /api/group-markets | |
|[**apiGroupMarketsIdCancelPost**](#apigroupmarketsidcancelpost) | **POST** /api/group-markets/{id}/cancel | |
|[**apiGroupMarketsIdGet**](#apigroupmarketsidget) | **GET** /api/group-markets/{id} | |
|[**apiGroupMarketsIdResolvePost**](#apigroupmarketsidresolvepost) | **POST** /api/group-markets/{id}/resolve | |
|[**apiGroupMarketsPost**](#apigroupmarketspost) | **POST** /api/group-markets | |

# **apiGroupMarketsGet**
> apiGroupMarketsGet()


### Example

```typescript
import {
    GroupMarketsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GroupMarketsApi(configuration);

let groupId: string; // (optional) (default to undefined)
let requestingUserId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiGroupMarketsGet(
    groupId,
    requestingUserId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | (optional) defaults to undefined|
| **requestingUserId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupMarketsIdCancelPost**
> apiGroupMarketsIdCancelPost(cancelGroupMarketCommand)


### Example

```typescript
import {
    GroupMarketsApi,
    Configuration,
    CancelGroupMarketCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GroupMarketsApi(configuration);

let id: string; // (default to undefined)
let cancelGroupMarketCommand: CancelGroupMarketCommand; //

const { status, data } = await apiInstance.apiGroupMarketsIdCancelPost(
    id,
    cancelGroupMarketCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelGroupMarketCommand** | **CancelGroupMarketCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupMarketsIdGet**
> apiGroupMarketsIdGet()


### Example

```typescript
import {
    GroupMarketsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GroupMarketsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiGroupMarketsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupMarketsIdResolvePost**
> apiGroupMarketsIdResolvePost(resolveGroupMarketCommand)


### Example

```typescript
import {
    GroupMarketsApi,
    Configuration,
    ResolveGroupMarketCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GroupMarketsApi(configuration);

let id: string; // (default to undefined)
let resolveGroupMarketCommand: ResolveGroupMarketCommand; //

const { status, data } = await apiInstance.apiGroupMarketsIdResolvePost(
    id,
    resolveGroupMarketCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveGroupMarketCommand** | **ResolveGroupMarketCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupMarketsPost**
> apiGroupMarketsPost(createGroupMarketCommand)


### Example

```typescript
import {
    GroupMarketsApi,
    Configuration,
    CreateGroupMarketCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GroupMarketsApi(configuration);

let createGroupMarketCommand: CreateGroupMarketCommand; //

const { status, data } = await apiInstance.apiGroupMarketsPost(
    createGroupMarketCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupMarketCommand** | **CreateGroupMarketCommand**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

