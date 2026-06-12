# GroupsApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiGroupsGet**](#apigroupsget) | **GET** /api/Groups | |
|[**apiGroupsIdDelete**](#apigroupsiddelete) | **DELETE** /api/Groups/{id} | |
|[**apiGroupsIdGet**](#apigroupsidget) | **GET** /api/Groups/{id} | |
|[**apiGroupsIdPut**](#apigroupsidput) | **PUT** /api/Groups/{id} | |
|[**apiGroupsPost**](#apigroupspost) | **POST** /api/Groups | |

# **apiGroupsGet**
> apiGroupsGet()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.apiGroupsGet();
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

# **apiGroupsIdDelete**
> apiGroupsIdDelete()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiGroupsIdDelete(
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

# **apiGroupsIdGet**
> apiGroupsIdGet()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiGroupsIdGet(
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

# **apiGroupsIdPut**
> apiGroupsIdPut(updateGroupCommand)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let updateGroupCommand: UpdateGroupCommand; //

const { status, data } = await apiInstance.apiGroupsIdPut(
    id,
    updateGroupCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupCommand** | **UpdateGroupCommand**|  | |
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

# **apiGroupsPost**
> apiGroupsPost(createGroupCommand)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let createGroupCommand: CreateGroupCommand; //

const { status, data } = await apiInstance.apiGroupsPost(
    createGroupCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupCommand** | **CreateGroupCommand**|  | |


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

