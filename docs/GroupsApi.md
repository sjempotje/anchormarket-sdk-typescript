# .GroupsApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGroupsGet**](GroupsApi.md#apiGroupsGet) | **GET** /api/Groups | 
[**apiGroupsIdDelete**](GroupsApi.md#apiGroupsIdDelete) | **DELETE** /api/Groups/{id} | 
[**apiGroupsIdGet**](GroupsApi.md#apiGroupsIdGet) | **GET** /api/Groups/{id} | 
[**apiGroupsIdPut**](GroupsApi.md#apiGroupsIdPut) | **PUT** /api/Groups/{id} | 
[**apiGroupsPost**](GroupsApi.md#apiGroupsPost) | **POST** /api/Groups | 


# **apiGroupsGet**
> void apiGroupsGet()


### Example


```typescript
import { createConfiguration, GroupsApi } from '';

const configuration = createConfiguration();
const apiInstance = new GroupsApi(configuration);

const request = {};

const data = await apiInstance.apiGroupsGet(request);
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

# **apiGroupsIdDelete**
> void apiGroupsIdDelete()


### Example


```typescript
import { createConfiguration, GroupsApi } from '';
import type { GroupsApiApiGroupsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupsApi(configuration);

const request: GroupsApiApiGroupsIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiGroupsIdDelete(request);
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

# **apiGroupsIdGet**
> void apiGroupsIdGet()


### Example


```typescript
import { createConfiguration, GroupsApi } from '';
import type { GroupsApiApiGroupsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupsApi(configuration);

const request: GroupsApiApiGroupsIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiGroupsIdGet(request);
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

# **apiGroupsIdPut**
> void apiGroupsIdPut(updateGroupCommand)


### Example


```typescript
import { createConfiguration, GroupsApi } from '';
import type { GroupsApiApiGroupsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupsApi(configuration);

const request: GroupsApiApiGroupsIdPutRequest = {
  
  id: "id_example",
  
  updateGroupCommand: {
    groupId: "groupId_example",
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.apiGroupsIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGroupCommand** | **UpdateGroupCommand**|  |
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

# **apiGroupsPost**
> void apiGroupsPost(createGroupCommand)


### Example


```typescript
import { createConfiguration, GroupsApi } from '';
import type { GroupsApiApiGroupsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GroupsApi(configuration);

const request: GroupsApiApiGroupsPostRequest = {
  
  createGroupCommand: {
    name: "name_example",
    description: "description_example",
    ownerId: "ownerId_example",
  },
};

const data = await apiInstance.apiGroupsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupCommand** | **CreateGroupCommand**|  |


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


