import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableGroupMarketsApi } from "./ObservableAPI";
import { GroupMarketsApiRequestFactory, GroupMarketsApiResponseProcessor} from "../apis/GroupMarketsApi";

export interface GroupMarketsApiApiGroupMarketsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupMarketsApiapiGroupMarketsGet
     */
    groupId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupMarketsApiapiGroupMarketsGet
     */
    requestingUserId?: string
}

export interface GroupMarketsApiApiGroupMarketsIdCancelPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupMarketsApiapiGroupMarketsIdCancelPost
     */
    id: string
    /**
     * 
     * @type CancelGroupMarketCommand
     * @memberof GroupMarketsApiapiGroupMarketsIdCancelPost
     */
    cancelGroupMarketCommand: CancelGroupMarketCommand
}

export interface GroupMarketsApiApiGroupMarketsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupMarketsApiapiGroupMarketsIdGet
     */
    id: string
}

export interface GroupMarketsApiApiGroupMarketsIdResolvePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupMarketsApiapiGroupMarketsIdResolvePost
     */
    id: string
    /**
     * 
     * @type ResolveGroupMarketCommand
     * @memberof GroupMarketsApiapiGroupMarketsIdResolvePost
     */
    resolveGroupMarketCommand: ResolveGroupMarketCommand
}

export interface GroupMarketsApiApiGroupMarketsPostRequest {
    /**
     * 
     * @type CreateGroupMarketCommand
     * @memberof GroupMarketsApiapiGroupMarketsPost
     */
    createGroupMarketCommand: CreateGroupMarketCommand
}

export class ObjectGroupMarketsApi {
    private api: ObservableGroupMarketsApi

    public constructor(configuration: Configuration, requestFactory?: GroupMarketsApiRequestFactory, responseProcessor?: GroupMarketsApiResponseProcessor) {
        this.api = new ObservableGroupMarketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsGetWithHttpInfo(param: GroupMarketsApiApiGroupMarketsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupMarketsGetWithHttpInfo(param.groupId, param.requestingUserId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsGet(param: GroupMarketsApiApiGroupMarketsGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupMarketsGet(param.groupId, param.requestingUserId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdCancelPostWithHttpInfo(param: GroupMarketsApiApiGroupMarketsIdCancelPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupMarketsIdCancelPostWithHttpInfo(param.id, param.cancelGroupMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdCancelPost(param: GroupMarketsApiApiGroupMarketsIdCancelPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupMarketsIdCancelPost(param.id, param.cancelGroupMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdGetWithHttpInfo(param: GroupMarketsApiApiGroupMarketsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupMarketsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdGet(param: GroupMarketsApiApiGroupMarketsIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupMarketsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdResolvePostWithHttpInfo(param: GroupMarketsApiApiGroupMarketsIdResolvePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupMarketsIdResolvePostWithHttpInfo(param.id, param.resolveGroupMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsIdResolvePost(param: GroupMarketsApiApiGroupMarketsIdResolvePostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupMarketsIdResolvePost(param.id, param.resolveGroupMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsPostWithHttpInfo(param: GroupMarketsApiApiGroupMarketsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupMarketsPostWithHttpInfo(param.createGroupMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupMarketsPost(param: GroupMarketsApiApiGroupMarketsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupMarketsPost(param.createGroupMarketCommand,  options).toPromise();
    }

}

import { ObservableGroupsApi } from "./ObservableAPI";
import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";

export interface GroupsApiApiGroupsGetRequest {
}

export interface GroupsApiApiGroupsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupsApiapiGroupsIdDelete
     */
    id: string
}

export interface GroupsApiApiGroupsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupsApiapiGroupsIdGet
     */
    id: string
}

export interface GroupsApiApiGroupsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GroupsApiapiGroupsIdPut
     */
    id: string
    /**
     * 
     * @type UpdateGroupCommand
     * @memberof GroupsApiapiGroupsIdPut
     */
    updateGroupCommand: UpdateGroupCommand
}

export interface GroupsApiApiGroupsPostRequest {
    /**
     * 
     * @type CreateGroupCommand
     * @memberof GroupsApiapiGroupsPost
     */
    createGroupCommand: CreateGroupCommand
}

export class ObjectGroupsApi {
    private api: ObservableGroupsApi

    public constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiGroupsGetWithHttpInfo(param: GroupsApiApiGroupsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsGet(param: GroupsApiApiGroupsGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdDeleteWithHttpInfo(param: GroupsApiApiGroupsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdDelete(param: GroupsApiApiGroupsIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdGetWithHttpInfo(param: GroupsApiApiGroupsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdGet(param: GroupsApiApiGroupsIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdPutWithHttpInfo(param: GroupsApiApiGroupsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupsIdPutWithHttpInfo(param.id, param.updateGroupCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsIdPut(param: GroupsApiApiGroupsIdPutRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupsIdPut(param.id, param.updateGroupCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsPostWithHttpInfo(param: GroupsApiApiGroupsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiGroupsPostWithHttpInfo(param.createGroupCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiGroupsPost(param: GroupsApiApiGroupsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiGroupsPost(param.createGroupCommand,  options).toPromise();
    }

}

import { ObservableLimitOrdersApi } from "./ObservableAPI";
import { LimitOrdersApiRequestFactory, LimitOrdersApiResponseProcessor} from "../apis/LimitOrdersApi";

export interface LimitOrdersApiApiLimitOrdersMarketMarketIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitOrdersApiapiLimitOrdersMarketMarketIdGet
     */
    marketId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitOrdersApiapiLimitOrdersMarketMarketIdGet
     */
    outcomeId?: string
}

export interface LimitOrdersApiApiLimitOrdersOrderIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitOrdersApiapiLimitOrdersOrderIdDelete
     */
    orderId: string
}

export interface LimitOrdersApiApiLimitOrdersOrderIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitOrdersApiapiLimitOrdersOrderIdGet
     */
    orderId: string
}

export interface LimitOrdersApiApiLimitOrdersPostRequest {
    /**
     * 
     * @type PlaceLimitOrderRequest
     * @memberof LimitOrdersApiapiLimitOrdersPost
     */
    placeLimitOrderRequest: PlaceLimitOrderRequest
}

export class ObjectLimitOrdersApi {
    private api: ObservableLimitOrdersApi

    public constructor(configuration: Configuration, requestFactory?: LimitOrdersApiRequestFactory, responseProcessor?: LimitOrdersApiResponseProcessor) {
        this.api = new ObservableLimitOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersMarketMarketIdGetWithHttpInfo(param: LimitOrdersApiApiLimitOrdersMarketMarketIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<LimitOrderDto>>> {
        return this.api.apiLimitOrdersMarketMarketIdGetWithHttpInfo(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersMarketMarketIdGet(param: LimitOrdersApiApiLimitOrdersMarketMarketIdGetRequest, options?: ConfigurationOptions): Promise<Array<LimitOrderDto>> {
        return this.api.apiLimitOrdersMarketMarketIdGet(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersOrderIdDeleteWithHttpInfo(param: LimitOrdersApiApiLimitOrdersOrderIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiLimitOrdersOrderIdDeleteWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersOrderIdDelete(param: LimitOrdersApiApiLimitOrdersOrderIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiLimitOrdersOrderIdDelete(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersOrderIdGetWithHttpInfo(param: LimitOrdersApiApiLimitOrdersOrderIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<LimitOrderDetailDto>> {
        return this.api.apiLimitOrdersOrderIdGetWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersOrderIdGet(param: LimitOrdersApiApiLimitOrdersOrderIdGetRequest, options?: ConfigurationOptions): Promise<LimitOrderDetailDto> {
        return this.api.apiLimitOrdersOrderIdGet(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersPostWithHttpInfo(param: LimitOrdersApiApiLimitOrdersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.apiLimitOrdersPostWithHttpInfo(param.placeLimitOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLimitOrdersPost(param: LimitOrdersApiApiLimitOrdersPostRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.apiLimitOrdersPost(param.placeLimitOrderRequest,  options).toPromise();
    }

}

import { ObservableMarketsApi } from "./ObservableAPI";
import { MarketsApiRequestFactory, MarketsApiResponseProcessor} from "../apis/MarketsApi";

export interface MarketsApiApiMarketsGetRequest {
}

export interface MarketsApiApiMarketsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MarketsApiapiMarketsIdDelete
     */
    id: string
}

export interface MarketsApiApiMarketsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MarketsApiapiMarketsIdGet
     */
    id: string
}

export interface MarketsApiApiMarketsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MarketsApiapiMarketsIdPut
     */
    id: string
    /**
     * 
     * @type UpdateMarketCommand
     * @memberof MarketsApiapiMarketsIdPut
     */
    updateMarketCommand: UpdateMarketCommand
}

export interface MarketsApiApiMarketsPostRequest {
    /**
     * 
     * @type CreateMarketCommand
     * @memberof MarketsApiapiMarketsPost
     */
    createMarketCommand: CreateMarketCommand
}

export class ObjectMarketsApi {
    private api: ObservableMarketsApi

    public constructor(configuration: Configuration, requestFactory?: MarketsApiRequestFactory, responseProcessor?: MarketsApiResponseProcessor) {
        this.api = new ObservableMarketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiMarketsGetWithHttpInfo(param: MarketsApiApiMarketsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiMarketsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsGet(param: MarketsApiApiMarketsGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiMarketsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdDeleteWithHttpInfo(param: MarketsApiApiMarketsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiMarketsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdDelete(param: MarketsApiApiMarketsIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiMarketsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdGetWithHttpInfo(param: MarketsApiApiMarketsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiMarketsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdGet(param: MarketsApiApiMarketsIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiMarketsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdPutWithHttpInfo(param: MarketsApiApiMarketsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiMarketsIdPutWithHttpInfo(param.id, param.updateMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsIdPut(param: MarketsApiApiMarketsIdPutRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiMarketsIdPut(param.id, param.updateMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsPostWithHttpInfo(param: MarketsApiApiMarketsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiMarketsPostWithHttpInfo(param.createMarketCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiMarketsPost(param: MarketsApiApiMarketsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiMarketsPost(param.createMarketCommand,  options).toPromise();
    }

}

import { ObservableOrderBooksApi } from "./ObservableAPI";
import { OrderBooksApiRequestFactory, OrderBooksApiResponseProcessor} from "../apis/OrderBooksApi";

export interface OrderBooksApiApiOrderBooksMarketMarketIdMatchPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdMatchPost
     */
    marketId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdMatchPost
     */
    outcomeId?: string
}

export interface OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdOutcomeOutcomeIdGet
     */
    marketId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdOutcomeOutcomeIdGet
     */
    outcomeId: string
}

export interface OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet
     */
    marketId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderBooksApiapiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet
     */
    outcomeId: string
}

export class ObjectOrderBooksApi {
    private api: ObservableOrderBooksApi

    public constructor(configuration: Configuration, requestFactory?: OrderBooksApiRequestFactory, responseProcessor?: OrderBooksApiResponseProcessor) {
        this.api = new ObservableOrderBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(param: OrderBooksApiApiOrderBooksMarketMarketIdMatchPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<MatchingResult>> {
        return this.api.apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdMatchPost(param: OrderBooksApiApiOrderBooksMarketMarketIdMatchPostRequest, options?: ConfigurationOptions): Promise<MatchingResult> {
        return this.api.apiOrderBooksMarketMarketIdMatchPost(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(param: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderBookDto>> {
        return this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(param: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdGetRequest, options?: ConfigurationOptions): Promise<OrderBookDto> {
        return this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(param: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketPriceDto>> {
        return this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(param.marketId, param.outcomeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(param: OrderBooksApiApiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetRequest, options?: ConfigurationOptions): Promise<MarketPriceDto> {
        return this.api.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(param.marketId, param.outcomeId,  options).toPromise();
    }

}

import { ObservablePositionsApi } from "./ObservableAPI";
import { PositionsApiRequestFactory, PositionsApiResponseProcessor} from "../apis/PositionsApi";

export interface PositionsApiApiPositionsByMarketMarketIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PositionsApiapiPositionsByMarketMarketIdGet
     */
    marketId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PositionsApiapiPositionsByMarketMarketIdGet
     */
    userId?: string
}

export interface PositionsApiApiPositionsGetRequest {
}

export interface PositionsApiApiPositionsIdClosePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PositionsApiapiPositionsIdClosePost
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PositionsApiapiPositionsIdClosePost
     */
    userId?: string
}

export interface PositionsApiApiPositionsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PositionsApiapiPositionsIdGet
     */
    id: string
}

export interface PositionsApiApiPositionsPostRequest {
    /**
     * 
     * @type PlacePositionCommand
     * @memberof PositionsApiapiPositionsPost
     */
    placePositionCommand: PlacePositionCommand
}

export interface PositionsApiApiPositionsWithPnlGetRequest {
}

export class ObjectPositionsApi {
    private api: ObservablePositionsApi

    public constructor(configuration: Configuration, requestFactory?: PositionsApiRequestFactory, responseProcessor?: PositionsApiResponseProcessor) {
        this.api = new ObservablePositionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiPositionsByMarketMarketIdGetWithHttpInfo(param: PositionsApiApiPositionsByMarketMarketIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsByMarketMarketIdGetWithHttpInfo(param.marketId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsByMarketMarketIdGet(param: PositionsApiApiPositionsByMarketMarketIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsByMarketMarketIdGet(param.marketId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsGetWithHttpInfo(param: PositionsApiApiPositionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsGet(param: PositionsApiApiPositionsGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsIdClosePostWithHttpInfo(param: PositionsApiApiPositionsIdClosePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsIdClosePostWithHttpInfo(param.id, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsIdClosePost(param: PositionsApiApiPositionsIdClosePostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsIdClosePost(param.id, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsIdGetWithHttpInfo(param: PositionsApiApiPositionsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsIdGet(param: PositionsApiApiPositionsIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsPostWithHttpInfo(param: PositionsApiApiPositionsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsPostWithHttpInfo(param.placePositionCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsPost(param: PositionsApiApiPositionsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsPost(param.placePositionCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsWithPnlGetWithHttpInfo(param: PositionsApiApiPositionsWithPnlGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiPositionsWithPnlGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPositionsWithPnlGet(param: PositionsApiApiPositionsWithPnlGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiPositionsWithPnlGet( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiApiUsersIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiapiUsersIdDelete
     */
    id: string
}

export interface UsersApiApiUsersIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiapiUsersIdGet
     */
    id: string
}

export interface UsersApiApiUsersIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiapiUsersIdPut
     */
    id: string
    /**
     * 
     * @type UpdateUserCommand
     * @memberof UsersApiapiUsersIdPut
     */
    updateUserCommand: UpdateUserCommand
}

export interface UsersApiApiUsersRegisterPostRequest {
    /**
     * 
     * @type RegisterUserCommand
     * @memberof UsersApiapiUsersRegisterPost
     */
    registerUserCommand: RegisterUserCommand
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDeleteWithHttpInfo(param: UsersApiApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDelete(param: UsersApiApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdGetWithHttpInfo(param: UsersApiApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiUsersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdGet(param: UsersApiApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiUsersIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPutWithHttpInfo(param: UsersApiApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiUsersIdPutWithHttpInfo(param.id, param.updateUserCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPut(param: UsersApiApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiUsersIdPut(param.id, param.updateUserCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersRegisterPostWithHttpInfo(param: UsersApiApiUsersRegisterPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiUsersRegisterPostWithHttpInfo(param.registerUserCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersRegisterPost(param: UsersApiApiUsersRegisterPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiUsersRegisterPost(param.registerUserCommand,  options).toPromise();
    }

}

import { ObservableWalletsApi } from "./ObservableAPI";
import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";

export interface WalletsApiApiWalletsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WalletsApiapiWalletsIdGet
     */
    id: string
}

export interface WalletsApiApiWalletsIdTransactionsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WalletsApiapiWalletsIdTransactionsGet
     */
    id: string
}

export class ObjectWalletsApi {
    private api: ObservableWalletsApi

    public constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiWalletsIdGetWithHttpInfo(param: WalletsApiApiWalletsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiWalletsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWalletsIdGet(param: WalletsApiApiWalletsIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiWalletsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWalletsIdTransactionsGetWithHttpInfo(param: WalletsApiApiWalletsIdTransactionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiWalletsIdTransactionsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWalletsIdTransactionsGet(param: WalletsApiApiWalletsIdTransactionsGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiWalletsIdTransactionsGet(param.id,  options).toPromise();
    }

}
