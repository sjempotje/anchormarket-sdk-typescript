# .UsersApi

All URIs are relative to *http://localhost:5079*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersIdDelete**](UsersApi.md#apiUsersIdDelete) | **DELETE** /api/Users/{id} | 
[**apiUsersIdGet**](UsersApi.md#apiUsersIdGet) | **GET** /api/Users/{id} | 
[**apiUsersIdPut**](UsersApi.md#apiUsersIdPut) | **PUT** /api/Users/{id} | 
[**apiUsersRegisterPost**](UsersApi.md#apiUsersRegisterPost) | **POST** /api/Users/register | 


# **apiUsersIdDelete**
> void apiUsersIdDelete()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiApiUsersIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiApiUsersIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiUsersIdDelete(request);
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

# **apiUsersIdGet**
> void apiUsersIdGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiApiUsersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiApiUsersIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiUsersIdGet(request);
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

# **apiUsersIdPut**
> void apiUsersIdPut(updateUserCommand)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiApiUsersIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiApiUsersIdPutRequest = {
  
  id: "id_example",
  
  updateUserCommand: {
    userId: "userId_example",
    username: "username_example",
    email: "email_example",
  },
};

const data = await apiInstance.apiUsersIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserCommand** | **UpdateUserCommand**|  |
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

# **apiUsersRegisterPost**
> void apiUsersRegisterPost(registerUserCommand)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiApiUsersRegisterPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiApiUsersRegisterPostRequest = {
  
  registerUserCommand: {
    username: "username_example",
    email: "email_example",
  },
};

const data = await apiInstance.apiUsersRegisterPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerUserCommand** | **RegisterUserCommand**|  |


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


