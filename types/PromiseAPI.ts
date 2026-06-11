import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { CancelGroupMarketCommand } from '../models/CancelGroupMarketCommand';
import { CreateGroupCommand } from '../models/CreateGroupCommand';
import { CreateGroupMarketCommand } from '../models/CreateGroupMarketCommand';
import { CreateMarketCommand } from '../models/CreateMarketCommand';
import { Group } from '../models/Group';
import { GroupMembership } from '../models/GroupMembership';
import { LimitOrder } from '../models/LimitOrder';
import { LimitOrderDetailDto } from '../models/LimitOrderDetailDto';
import { LimitOrderDto } from '../models/LimitOrderDto';
import { LimitOrderPrice } from '../models/LimitOrderPrice';
import { Market } from '../models/Market';
import { MarketPriceDto } from '../models/MarketPriceDto';
import { MarketResolution } from '../models/MarketResolution';
import { MatchingResult } from '../models/MatchingResult';
import { MatchingResultTradesExecuted } from '../models/MatchingResultTradesExecuted';
import { OrderBookDto } from '../models/OrderBookDto';
import { OrderBookDtoBestBid } from '../models/OrderBookDtoBestBid';
import { OrderBookLevelDto } from '../models/OrderBookLevelDto';
import { Outcome } from '../models/Outcome';
import { PlaceLimitOrderRequest } from '../models/PlaceLimitOrderRequest';
import { PlacePositionCommand } from '../models/PlacePositionCommand';
import { ProblemDetails } from '../models/ProblemDetails';
import { ProblemDetailsStatus } from '../models/ProblemDetailsStatus';
import { RegisterUserCommand } from '../models/RegisterUserCommand';
import { ResolveGroupMarketCommand } from '../models/ResolveGroupMarketCommand';
import { TradeExecution } from '../models/TradeExecution';
import { TradeExecutionDto } from '../models/TradeExecutionDto';
import { UpdateGroupCommand } from '../models/UpdateGroupCommand';
import { UpdateMarketCommand } from '../models/UpdateMarketCommand';
import { UpdateUserCommand } from '../models/UpdateUserCommand';
import { ObservableGroupMarketsApi } from './ObservableAPI';

import { GroupMarketsApiRequestFactory, GroupMarketsApiResponseProcessor} from "../apis/GroupMarketsApi";
export class PromiseGroupMarketsApi {
    private api: ObservableGroupMarketsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupMarketsApiRequestFactory,
        responseProcessor?: GroupMarketsApiResponseProcessor
    ) {
        this.api = new ObservableGroupMarketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [groupId]
     * @param [requestingUserId]
     */
    public apiGroupMarketsGetWithHttpInfo(groupId?: string, requestingUserId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsGetWithHttpInfo(groupId, requestingUserId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [groupId]
     * @param [requestingUserId]
     */
    public apiGroupMarketsGet(groupId?: string, requestingUserId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsGet(groupId, requestingUserId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param cancelGroupMarketCommand
     */
    public apiGroupMarketsIdCancelPostWithHttpInfo(id: string, cancelGroupMarketCommand: CancelGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdCancelPostWithHttpInfo(id, cancelGroupMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param cancelGroupMarketCommand
     */
    public apiGroupMarketsIdCancelPost(id: string, cancelGroupMarketCommand: CancelGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdCancelPost(id, cancelGroupMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupMarketsIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupMarketsIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param resolveGroupMarketCommand
     */
    public apiGroupMarketsIdResolvePostWithHttpInfo(id: string, resolveGroupMarketCommand: ResolveGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdResolvePostWithHttpInfo(id, resolveGroupMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param resolveGroupMarketCommand
     */
    public apiGroupMarketsIdResolvePost(id: string, resolveGroupMarketCommand: ResolveGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsIdResolvePost(id, resolveGroupMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createGroupMarketCommand
     */
    public apiGroupMarketsPostWithHttpInfo(createGroupMarketCommand: CreateGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsPostWithHttpInfo(createGroupMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createGroupMarketCommand
     */
    public apiGroupMarketsPost(createGroupMarketCommand: CreateGroupMarketCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupMarketsPost(createGroupMarketCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableGroupsApi } from './ObservableAPI';

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class PromiseGroupsApi {
    private api: ObservableGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiGroupsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiGroupsGet(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupsIdDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupsIdDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupsIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiGroupsIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateGroupCommand
     */
    public apiGroupsIdPutWithHttpInfo(id: string, updateGroupCommand: UpdateGroupCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdPutWithHttpInfo(id, updateGroupCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateGroupCommand
     */
    public apiGroupsIdPut(id: string, updateGroupCommand: UpdateGroupCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsIdPut(id, updateGroupCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createGroupCommand
     */
    public apiGroupsPostWithHttpInfo(createGroupCommand: CreateGroupCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsPostWithHttpInfo(createGroupCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createGroupCommand
     */
    public apiGroupsPost(createGroupCommand: CreateGroupCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiGroupsPost(createGroupCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLimitOrdersApi } from './ObservableAPI';

import { LimitOrdersApiRequestFactory, LimitOrdersApiResponseProcessor} from "../apis/LimitOrdersApi";
export class PromiseLimitOrdersApi {
    private api: ObservableLimitOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LimitOrdersApiRequestFactory,
        responseProcessor?: LimitOrdersApiResponseProcessor
    ) {
        this.api = new ObservableLimitOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiLimitOrdersMarketMarketIdGetWithHttpInfo(marketId: string, outcomeId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LimitOrderDto>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersMarketMarketIdGetWithHttpInfo(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiLimitOrdersMarketMarketIdGet(marketId: string, outcomeId?: string, _options?: PromiseConfigurationOptions): Promise<Array<LimitOrderDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersMarketMarketIdGet(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdDeleteWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersOrderIdDeleteWithHttpInfo(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdDelete(orderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersOrderIdDelete(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdGetWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LimitOrderDetailDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersOrderIdGetWithHttpInfo(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdGet(orderId: string, _options?: PromiseConfigurationOptions): Promise<LimitOrderDetailDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersOrderIdGet(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param placeLimitOrderRequest
     */
    public apiLimitOrdersPostWithHttpInfo(placeLimitOrderRequest: PlaceLimitOrderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersPostWithHttpInfo(placeLimitOrderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param placeLimitOrderRequest
     */
    public apiLimitOrdersPost(placeLimitOrderRequest: PlaceLimitOrderRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiLimitOrdersPost(placeLimitOrderRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMarketsApi } from './ObservableAPI';

import { MarketsApiRequestFactory, MarketsApiResponseProcessor} from "../apis/MarketsApi";
export class PromiseMarketsApi {
    private api: ObservableMarketsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketsApiRequestFactory,
        responseProcessor?: MarketsApiResponseProcessor
    ) {
        this.api = new ObservableMarketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiMarketsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiMarketsGet(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiMarketsIdDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiMarketsIdDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiMarketsIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiMarketsIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateMarketCommand
     */
    public apiMarketsIdPutWithHttpInfo(id: string, updateMarketCommand: UpdateMarketCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdPutWithHttpInfo(id, updateMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateMarketCommand
     */
    public apiMarketsIdPut(id: string, updateMarketCommand: UpdateMarketCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsIdPut(id, updateMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createMarketCommand
     */
    public apiMarketsPostWithHttpInfo(createMarketCommand: CreateMarketCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsPostWithHttpInfo(createMarketCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createMarketCommand
     */
    public apiMarketsPost(createMarketCommand: CreateMarketCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiMarketsPost(createMarketCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrderBooksApi } from './ObservableAPI';

import { OrderBooksApiRequestFactory, OrderBooksApiResponseProcessor} from "../apis/OrderBooksApi";
export class PromiseOrderBooksApi {
    private api: ObservableOrderBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderBooksApiRequestFactory,
        responseProcessor?: OrderBooksApiResponseProcessor
    ) {
        this.api = new ObservableOrderBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(marketId: string, outcomeId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MatchingResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiOrderBooksMarketMarketIdMatchPost(marketId: string, outcomeId?: string, _options?: PromiseConfigurationOptions): Promise<MatchingResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdMatchPost(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(marketId: string, outcomeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderBookDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(marketId: string, outcomeId: string, _options?: PromiseConfigurationOptions): Promise<OrderBookDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(marketId: string, outcomeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketPriceDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(marketId: string, outcomeId: string, _options?: PromiseConfigurationOptions): Promise<MarketPriceDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(marketId, outcomeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePositionsApi } from './ObservableAPI';

import { PositionsApiRequestFactory, PositionsApiResponseProcessor} from "../apis/PositionsApi";
export class PromisePositionsApi {
    private api: ObservablePositionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PositionsApiRequestFactory,
        responseProcessor?: PositionsApiResponseProcessor
    ) {
        this.api = new ObservablePositionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param marketId
     * @param [userId]
     */
    public apiPositionsByMarketMarketIdGetWithHttpInfo(marketId: string, userId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsByMarketMarketIdGetWithHttpInfo(marketId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param marketId
     * @param [userId]
     */
    public apiPositionsByMarketMarketIdGet(marketId: string, userId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsByMarketMarketIdGet(marketId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiPositionsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiPositionsGet(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userId]
     */
    public apiPositionsIdClosePostWithHttpInfo(id: string, userId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsIdClosePostWithHttpInfo(id, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userId]
     */
    public apiPositionsIdClosePost(id: string, userId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsIdClosePost(id, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiPositionsIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiPositionsIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param placePositionCommand
     */
    public apiPositionsPostWithHttpInfo(placePositionCommand: PlacePositionCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsPostWithHttpInfo(placePositionCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param placePositionCommand
     */
    public apiPositionsPost(placePositionCommand: PlacePositionCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsPost(placePositionCommand, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiPositionsWithPnlGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsWithPnlGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiPositionsWithPnlGet(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiPositionsWithPnlGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public apiUsersIdDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserCommand
     */
    public apiUsersIdPutWithHttpInfo(id: string, updateUserCommand: UpdateUserCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdPutWithHttpInfo(id, updateUserCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateUserCommand
     */
    public apiUsersIdPut(id: string, updateUserCommand: UpdateUserCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersIdPut(id, updateUserCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param registerUserCommand
     */
    public apiUsersRegisterPostWithHttpInfo(registerUserCommand: RegisterUserCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersRegisterPostWithHttpInfo(registerUserCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param registerUserCommand
     */
    public apiUsersRegisterPost(registerUserCommand: RegisterUserCommand, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiUsersRegisterPost(registerUserCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWalletsApi } from './ObservableAPI';

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class PromiseWalletsApi {
    private api: ObservableWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public apiWalletsIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiWalletsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWalletsIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiWalletsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWalletsIdTransactionsGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiWalletsIdTransactionsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWalletsIdTransactionsGet(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiWalletsIdTransactionsGet(id, observableOptions);
        return result.toPromise();
    }


}



