# MarketsApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMarketsGet**](#apimarketsget) | **GET** /api/Markets | |
|[**apiMarketsIdDelete**](#apimarketsiddelete) | **DELETE** /api/Markets/{id} | |
|[**apiMarketsIdGet**](#apimarketsidget) | **GET** /api/Markets/{id} | |
|[**apiMarketsIdPut**](#apimarketsidput) | **PUT** /api/Markets/{id} | |
|[**apiMarketsPost**](#apimarketspost) | **POST** /api/Markets | |

# **apiMarketsGet**
> apiMarketsGet()


### Example

```typescript
import {
    MarketsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MarketsApi(configuration);

const { status, data } = await apiInstance.apiMarketsGet();
```

### Parameters
This endpoint does not have any parameters.


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

# **apiMarketsIdDelete**
> apiMarketsIdDelete()


### Example

```typescript
import {
    MarketsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MarketsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiMarketsIdDelete(
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

# **apiMarketsIdGet**
> apiMarketsIdGet()


### Example

```typescript
import {
    MarketsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MarketsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiMarketsIdGet(
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

# **apiMarketsIdPut**
> apiMarketsIdPut(updateMarketCommand)


### Example

```typescript
import {
    MarketsApi,
    Configuration,
    UpdateMarketCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MarketsApi(configuration);

let id: string; // (default to undefined)
let updateMarketCommand: UpdateMarketCommand; //

const { status, data } = await apiInstance.apiMarketsIdPut(
    id,
    updateMarketCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMarketCommand** | **UpdateMarketCommand**|  | |
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

# **apiMarketsPost**
> apiMarketsPost(createMarketCommand)


### Example

```typescript
import {
    MarketsApi,
    Configuration,
    CreateMarketCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MarketsApi(configuration);

let createMarketCommand: CreateMarketCommand; //

const { status, data } = await apiInstance.apiMarketsPost(
    createMarketCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMarketCommand** | **CreateMarketCommand**|  | |


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

