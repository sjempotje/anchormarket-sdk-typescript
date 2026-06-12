# WalletsApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiWalletsIdGet**](#apiwalletsidget) | **GET** /api/Wallets/{id} | |
|[**apiWalletsIdTransactionsGet**](#apiwalletsidtransactionsget) | **GET** /api/Wallets/{id}/transactions | |

# **apiWalletsIdGet**
> apiWalletsIdGet()


### Example

```typescript
import {
    WalletsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiWalletsIdGet(
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

# **apiWalletsIdTransactionsGet**
> apiWalletsIdTransactionsGet()


### Example

```typescript
import {
    WalletsApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new WalletsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiWalletsIdTransactionsGet(
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

