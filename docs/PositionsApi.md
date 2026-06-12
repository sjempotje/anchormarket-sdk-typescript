# PositionsApi

All URIs are relative to *http://localhost:5079*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiPositionsByMarketMarketIdGet**](#apipositionsbymarketmarketidget) | **GET** /api/Positions/by-market/{marketId} | |
|[**apiPositionsGet**](#apipositionsget) | **GET** /api/Positions | |
|[**apiPositionsIdClosePost**](#apipositionsidclosepost) | **POST** /api/Positions/{id}/close | |
|[**apiPositionsIdGet**](#apipositionsidget) | **GET** /api/Positions/{id} | |
|[**apiPositionsPost**](#apipositionspost) | **POST** /api/Positions | |
|[**apiPositionsWithPnlGet**](#apipositionswithpnlget) | **GET** /api/Positions/with-pnl | |

# **apiPositionsByMarketMarketIdGet**
> apiPositionsByMarketMarketIdGet()


### Example

```typescript
import {
    PositionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

let marketId: string; // (default to undefined)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiPositionsByMarketMarketIdGet(
    marketId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|


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

# **apiPositionsGet**
> apiPositionsGet()


### Example

```typescript
import {
    PositionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

const { status, data } = await apiInstance.apiPositionsGet();
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

# **apiPositionsIdClosePost**
> apiPositionsIdClosePost()


### Example

```typescript
import {
    PositionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

let id: string; // (default to undefined)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiPositionsIdClosePost(
    id,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|


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

# **apiPositionsIdGet**
> apiPositionsIdGet()


### Example

```typescript
import {
    PositionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiPositionsIdGet(
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

# **apiPositionsPost**
> apiPositionsPost(placePositionCommand)


### Example

```typescript
import {
    PositionsApi,
    Configuration,
    PlacePositionCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

let placePositionCommand: PlacePositionCommand; //

const { status, data } = await apiInstance.apiPositionsPost(
    placePositionCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placePositionCommand** | **PlacePositionCommand**|  | |


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

# **apiPositionsWithPnlGet**
> apiPositionsWithPnlGet()


### Example

```typescript
import {
    PositionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PositionsApi(configuration);

const { status, data } = await apiInstance.apiPositionsWithPnlGet();
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

