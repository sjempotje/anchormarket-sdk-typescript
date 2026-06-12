# UsersApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiUsersIdDelete**](#apiusersiddelete) | **DELETE** /api/Users/{id} | |
|[**apiUsersIdGet**](#apiusersidget) | **GET** /api/Users/{id} | |
|[**apiUsersIdPut**](#apiusersidput) | **PUT** /api/Users/{id} | |

# **apiUsersIdDelete**
> apiUsersIdDelete()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiUsersIdDelete(
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

# **apiUsersIdGet**
> apiUsersIdGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiUsersIdGet(
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

# **apiUsersIdPut**
> apiUsersIdPut(updateUserCommand)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserCommand
} from '@anchormarket/anchormarket-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)
let updateUserCommand: UpdateUserCommand; //

const { status, data } = await apiInstance.apiUsersIdPut(
    id,
    updateUserCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserCommand** | **UpdateUserCommand**|  | |
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

