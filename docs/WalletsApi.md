# .WalletsApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWalletsIdGet**](WalletsApi.md#apiWalletsIdGet) | **GET** /api/Wallets/{id} | 
[**apiWalletsIdTransactionsGet**](WalletsApi.md#apiWalletsIdTransactionsGet) | **GET** /api/Wallets/{id}/transactions | 


# **apiWalletsIdGet**
> void apiWalletsIdGet()


### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiApiWalletsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiApiWalletsIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiWalletsIdGet(request);
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

# **apiWalletsIdTransactionsGet**
> void apiWalletsIdTransactionsGet()


### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiApiWalletsIdTransactionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiApiWalletsIdTransactionsGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiWalletsIdTransactionsGet(request);
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


