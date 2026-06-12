## @anchormarket/anchormarket-sdk-typescript@1.0.2

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @anchormarket/anchormarket-sdk-typescript@1.0.2 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:5079*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GroupMarketsApi* | [**apiGroupMarketsGet**](docs/GroupMarketsApi.md#apigroupmarketsget) | **GET** /api/group-markets | 
*GroupMarketsApi* | [**apiGroupMarketsIdCancelPost**](docs/GroupMarketsApi.md#apigroupmarketsidcancelpost) | **POST** /api/group-markets/{id}/cancel | 
*GroupMarketsApi* | [**apiGroupMarketsIdGet**](docs/GroupMarketsApi.md#apigroupmarketsidget) | **GET** /api/group-markets/{id} | 
*GroupMarketsApi* | [**apiGroupMarketsIdResolvePost**](docs/GroupMarketsApi.md#apigroupmarketsidresolvepost) | **POST** /api/group-markets/{id}/resolve | 
*GroupMarketsApi* | [**apiGroupMarketsPost**](docs/GroupMarketsApi.md#apigroupmarketspost) | **POST** /api/group-markets | 
*GroupsApi* | [**apiGroupsGet**](docs/GroupsApi.md#apigroupsget) | **GET** /api/Groups | 
*GroupsApi* | [**apiGroupsIdDelete**](docs/GroupsApi.md#apigroupsiddelete) | **DELETE** /api/Groups/{id} | 
*GroupsApi* | [**apiGroupsIdGet**](docs/GroupsApi.md#apigroupsidget) | **GET** /api/Groups/{id} | 
*GroupsApi* | [**apiGroupsIdPut**](docs/GroupsApi.md#apigroupsidput) | **PUT** /api/Groups/{id} | 
*GroupsApi* | [**apiGroupsPost**](docs/GroupsApi.md#apigroupspost) | **POST** /api/Groups | 
*LimitOrdersApi* | [**apiLimitOrdersMarketMarketIdGet**](docs/LimitOrdersApi.md#apilimitordersmarketmarketidget) | **GET** /api/LimitOrders/market/{marketId} | 
*LimitOrdersApi* | [**apiLimitOrdersOrderIdDelete**](docs/LimitOrdersApi.md#apilimitordersorderiddelete) | **DELETE** /api/LimitOrders/{orderId} | 
*LimitOrdersApi* | [**apiLimitOrdersOrderIdGet**](docs/LimitOrdersApi.md#apilimitordersorderidget) | **GET** /api/LimitOrders/{orderId} | 
*LimitOrdersApi* | [**apiLimitOrdersPost**](docs/LimitOrdersApi.md#apilimitorderspost) | **POST** /api/LimitOrders | 
*MarketsApi* | [**apiMarketsGet**](docs/MarketsApi.md#apimarketsget) | **GET** /api/Markets | 
*MarketsApi* | [**apiMarketsIdDelete**](docs/MarketsApi.md#apimarketsiddelete) | **DELETE** /api/Markets/{id} | 
*MarketsApi* | [**apiMarketsIdGet**](docs/MarketsApi.md#apimarketsidget) | **GET** /api/Markets/{id} | 
*MarketsApi* | [**apiMarketsIdPut**](docs/MarketsApi.md#apimarketsidput) | **PUT** /api/Markets/{id} | 
*MarketsApi* | [**apiMarketsPost**](docs/MarketsApi.md#apimarketspost) | **POST** /api/Markets | 
*OrderBooksApi* | [**apiOrderBooksMarketMarketIdMatchPost**](docs/OrderBooksApi.md#apiorderbooksmarketmarketidmatchpost) | **POST** /api/OrderBooks/market/{marketId}/match | 
*OrderBooksApi* | [**apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet**](docs/OrderBooksApi.md#apiorderbooksmarketmarketidoutcomeoutcomeidget) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId} | 
*OrderBooksApi* | [**apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet**](docs/OrderBooksApi.md#apiorderbooksmarketmarketidoutcomeoutcomeidpriceget) | **GET** /api/OrderBooks/market/{marketId}/outcome/{outcomeId}/price | 
*PositionsApi* | [**apiPositionsByMarketMarketIdGet**](docs/PositionsApi.md#apipositionsbymarketmarketidget) | **GET** /api/Positions/by-market/{marketId} | 
*PositionsApi* | [**apiPositionsGet**](docs/PositionsApi.md#apipositionsget) | **GET** /api/Positions | 
*PositionsApi* | [**apiPositionsIdClosePost**](docs/PositionsApi.md#apipositionsidclosepost) | **POST** /api/Positions/{id}/close | 
*PositionsApi* | [**apiPositionsIdGet**](docs/PositionsApi.md#apipositionsidget) | **GET** /api/Positions/{id} | 
*PositionsApi* | [**apiPositionsPost**](docs/PositionsApi.md#apipositionspost) | **POST** /api/Positions | 
*PositionsApi* | [**apiPositionsWithPnlGet**](docs/PositionsApi.md#apipositionswithpnlget) | **GET** /api/Positions/with-pnl | 
*UsersApi* | [**apiUsersIdDelete**](docs/UsersApi.md#apiusersiddelete) | **DELETE** /api/Users/{id} | 
*UsersApi* | [**apiUsersIdGet**](docs/UsersApi.md#apiusersidget) | **GET** /api/Users/{id} | 
*UsersApi* | [**apiUsersIdPut**](docs/UsersApi.md#apiusersidput) | **PUT** /api/Users/{id} | 
*WalletsApi* | [**apiWalletsIdGet**](docs/WalletsApi.md#apiwalletsidget) | **GET** /api/Wallets/{id} | 
*WalletsApi* | [**apiWalletsIdTransactionsGet**](docs/WalletsApi.md#apiwalletsidtransactionsget) | **GET** /api/Wallets/{id}/transactions | 


### Documentation For Models

 - [CancelGroupMarketCommand](docs/CancelGroupMarketCommand.md)
 - [CreateGroupCommand](docs/CreateGroupCommand.md)
 - [CreateGroupMarketCommand](docs/CreateGroupMarketCommand.md)
 - [CreateMarketCommand](docs/CreateMarketCommand.md)
 - [Group](docs/Group.md)
 - [GroupMembership](docs/GroupMembership.md)
 - [LimitOrder](docs/LimitOrder.md)
 - [LimitOrderDetailDto](docs/LimitOrderDetailDto.md)
 - [LimitOrderDto](docs/LimitOrderDto.md)
 - [LimitOrderPrice](docs/LimitOrderPrice.md)
 - [Market](docs/Market.md)
 - [MarketPriceDto](docs/MarketPriceDto.md)
 - [MarketResolution](docs/MarketResolution.md)
 - [MatchingResult](docs/MatchingResult.md)
 - [MatchingResultTradesExecuted](docs/MatchingResultTradesExecuted.md)
 - [OrderBookDto](docs/OrderBookDto.md)
 - [OrderBookDtoBestBid](docs/OrderBookDtoBestBid.md)
 - [OrderBookLevelDto](docs/OrderBookLevelDto.md)
 - [Outcome](docs/Outcome.md)
 - [PlaceLimitOrderRequest](docs/PlaceLimitOrderRequest.md)
 - [PlacePositionCommand](docs/PlacePositionCommand.md)
 - [ProblemDetails](docs/ProblemDetails.md)
 - [ProblemDetailsStatus](docs/ProblemDetailsStatus.md)
 - [ResolveGroupMarketCommand](docs/ResolveGroupMarketCommand.md)
 - [TradeExecution](docs/TradeExecution.md)
 - [TradeExecutionDto](docs/TradeExecutionDto.md)
 - [UpdateGroupCommand](docs/UpdateGroupCommand.md)
 - [UpdateMarketCommand](docs/UpdateMarketCommand.md)
 - [UpdateUserCommand](docs/UpdateUserCommand.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

