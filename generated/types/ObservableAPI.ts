import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { GroupMarketsApiRequestFactory, GroupMarketsApiResponseProcessor} from "../apis/GroupMarketsApi";
export class ObservableGroupMarketsApi {
    private requestFactory: GroupMarketsApiRequestFactory;
    private responseProcessor: GroupMarketsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupMarketsApiRequestFactory,
        responseProcessor?: GroupMarketsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupMarketsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupMarketsApiResponseProcessor();
    }

    /**
     * @param [groupId]
     * @param [requestingUserId]
     */
    public apiGroupMarketsGetWithHttpInfo(groupId?: string, requestingUserId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupMarketsGet(groupId, requestingUserId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupMarketsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [groupId]
     * @param [requestingUserId]
     */
    public apiGroupMarketsGet(groupId?: string, requestingUserId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupMarketsGetWithHttpInfo(groupId, requestingUserId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param cancelGroupMarketCommand
     */
    public apiGroupMarketsIdCancelPostWithHttpInfo(id: string, cancelGroupMarketCommand: CancelGroupMarketCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupMarketsIdCancelPost(id, cancelGroupMarketCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupMarketsIdCancelPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param cancelGroupMarketCommand
     */
    public apiGroupMarketsIdCancelPost(id: string, cancelGroupMarketCommand: CancelGroupMarketCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupMarketsIdCancelPostWithHttpInfo(id, cancelGroupMarketCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiGroupMarketsIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupMarketsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupMarketsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiGroupMarketsIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupMarketsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param resolveGroupMarketCommand
     */
    public apiGroupMarketsIdResolvePostWithHttpInfo(id: string, resolveGroupMarketCommand: ResolveGroupMarketCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupMarketsIdResolvePost(id, resolveGroupMarketCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupMarketsIdResolvePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param resolveGroupMarketCommand
     */
    public apiGroupMarketsIdResolvePost(id: string, resolveGroupMarketCommand: ResolveGroupMarketCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupMarketsIdResolvePostWithHttpInfo(id, resolveGroupMarketCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createGroupMarketCommand
     */
    public apiGroupMarketsPostWithHttpInfo(createGroupMarketCommand: CreateGroupMarketCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupMarketsPost(createGroupMarketCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupMarketsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createGroupMarketCommand
     */
    public apiGroupMarketsPost(createGroupMarketCommand: CreateGroupMarketCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupMarketsPostWithHttpInfo(createGroupMarketCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class ObservableGroupsApi {
    private requestFactory: GroupsApiRequestFactory;
    private responseProcessor: GroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupsApiResponseProcessor();
    }

    /**
     */
    public apiGroupsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiGroupsGet(_options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiGroupsIdDeleteWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupsIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiGroupsIdDelete(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiGroupsIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiGroupsIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateGroupCommand
     */
    public apiGroupsIdPutWithHttpInfo(id: string, updateGroupCommand: UpdateGroupCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupsIdPut(id, updateGroupCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateGroupCommand
     */
    public apiGroupsIdPut(id: string, updateGroupCommand: UpdateGroupCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupsIdPutWithHttpInfo(id, updateGroupCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createGroupCommand
     */
    public apiGroupsPostWithHttpInfo(createGroupCommand: CreateGroupCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiGroupsPost(createGroupCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGroupsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createGroupCommand
     */
    public apiGroupsPost(createGroupCommand: CreateGroupCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiGroupsPostWithHttpInfo(createGroupCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LimitOrdersApiRequestFactory, LimitOrdersApiResponseProcessor} from "../apis/LimitOrdersApi";
export class ObservableLimitOrdersApi {
    private requestFactory: LimitOrdersApiRequestFactory;
    private responseProcessor: LimitOrdersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LimitOrdersApiRequestFactory,
        responseProcessor?: LimitOrdersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LimitOrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LimitOrdersApiResponseProcessor();
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiLimitOrdersMarketMarketIdGetWithHttpInfo(marketId: string, outcomeId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<LimitOrderDto>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiLimitOrdersMarketMarketIdGet(marketId, outcomeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLimitOrdersMarketMarketIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiLimitOrdersMarketMarketIdGet(marketId: string, outcomeId?: string, _options?: ConfigurationOptions): Observable<Array<LimitOrderDto>> {
        return this.apiLimitOrdersMarketMarketIdGetWithHttpInfo(marketId, outcomeId, _options).pipe(map((apiResponse: HttpInfo<Array<LimitOrderDto>>) => apiResponse.data));
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdDeleteWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiLimitOrdersOrderIdDelete(orderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLimitOrdersOrderIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdDelete(orderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiLimitOrdersOrderIdDeleteWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdGetWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LimitOrderDetailDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiLimitOrdersOrderIdGet(orderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLimitOrdersOrderIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderId
     */
    public apiLimitOrdersOrderIdGet(orderId: string, _options?: ConfigurationOptions): Observable<LimitOrderDetailDto> {
        return this.apiLimitOrdersOrderIdGetWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<LimitOrderDetailDto>) => apiResponse.data));
    }

    /**
     * @param placeLimitOrderRequest
     */
    public apiLimitOrdersPostWithHttpInfo(placeLimitOrderRequest: PlaceLimitOrderRequest, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiLimitOrdersPost(placeLimitOrderRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLimitOrdersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param placeLimitOrderRequest
     */
    public apiLimitOrdersPost(placeLimitOrderRequest: PlaceLimitOrderRequest, _options?: ConfigurationOptions): Observable<string> {
        return this.apiLimitOrdersPostWithHttpInfo(placeLimitOrderRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { MarketsApiRequestFactory, MarketsApiResponseProcessor} from "../apis/MarketsApi";
export class ObservableMarketsApi {
    private requestFactory: MarketsApiRequestFactory;
    private responseProcessor: MarketsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketsApiRequestFactory,
        responseProcessor?: MarketsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MarketsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MarketsApiResponseProcessor();
    }

    /**
     */
    public apiMarketsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiMarketsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiMarketsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiMarketsGet(_options?: ConfigurationOptions): Observable<void> {
        return this.apiMarketsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiMarketsIdDeleteWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiMarketsIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiMarketsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiMarketsIdDelete(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiMarketsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiMarketsIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiMarketsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiMarketsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiMarketsIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiMarketsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateMarketCommand
     */
    public apiMarketsIdPutWithHttpInfo(id: string, updateMarketCommand: UpdateMarketCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiMarketsIdPut(id, updateMarketCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiMarketsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateMarketCommand
     */
    public apiMarketsIdPut(id: string, updateMarketCommand: UpdateMarketCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiMarketsIdPutWithHttpInfo(id, updateMarketCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createMarketCommand
     */
    public apiMarketsPostWithHttpInfo(createMarketCommand: CreateMarketCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiMarketsPost(createMarketCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiMarketsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createMarketCommand
     */
    public apiMarketsPost(createMarketCommand: CreateMarketCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiMarketsPostWithHttpInfo(createMarketCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OrderBooksApiRequestFactory, OrderBooksApiResponseProcessor} from "../apis/OrderBooksApi";
export class ObservableOrderBooksApi {
    private requestFactory: OrderBooksApiRequestFactory;
    private responseProcessor: OrderBooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderBooksApiRequestFactory,
        responseProcessor?: OrderBooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderBooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderBooksApiResponseProcessor();
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(marketId: string, outcomeId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<MatchingResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiOrderBooksMarketMarketIdMatchPost(marketId, outcomeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId
     * @param [outcomeId]
     */
    public apiOrderBooksMarketMarketIdMatchPost(marketId: string, outcomeId?: string, _options?: ConfigurationOptions): Observable<MatchingResult> {
        return this.apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(marketId, outcomeId, _options).pipe(map((apiResponse: HttpInfo<MatchingResult>) => apiResponse.data));
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(marketId: string, outcomeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrderBookDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(marketId, outcomeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(marketId: string, outcomeId: string, _options?: ConfigurationOptions): Observable<OrderBookDto> {
        return this.apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(marketId, outcomeId, _options).pipe(map((apiResponse: HttpInfo<OrderBookDto>) => apiResponse.data));
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(marketId: string, outcomeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<MarketPriceDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(marketId, outcomeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId
     * @param outcomeId
     */
    public apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(marketId: string, outcomeId: string, _options?: ConfigurationOptions): Observable<MarketPriceDto> {
        return this.apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(marketId, outcomeId, _options).pipe(map((apiResponse: HttpInfo<MarketPriceDto>) => apiResponse.data));
    }

}

import { PositionsApiRequestFactory, PositionsApiResponseProcessor} from "../apis/PositionsApi";
export class ObservablePositionsApi {
    private requestFactory: PositionsApiRequestFactory;
    private responseProcessor: PositionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PositionsApiRequestFactory,
        responseProcessor?: PositionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PositionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PositionsApiResponseProcessor();
    }

    /**
     * @param marketId
     * @param [userId]
     */
    public apiPositionsByMarketMarketIdGetWithHttpInfo(marketId: string, userId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsByMarketMarketIdGet(marketId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsByMarketMarketIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId
     * @param [userId]
     */
    public apiPositionsByMarketMarketIdGet(marketId: string, userId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsByMarketMarketIdGetWithHttpInfo(marketId, userId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiPositionsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiPositionsGet(_options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param [userId]
     */
    public apiPositionsIdClosePostWithHttpInfo(id: string, userId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsIdClosePost(id, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsIdClosePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param [userId]
     */
    public apiPositionsIdClosePost(id: string, userId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsIdClosePostWithHttpInfo(id, userId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiPositionsIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiPositionsIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param placePositionCommand
     */
    public apiPositionsPostWithHttpInfo(placePositionCommand: PlacePositionCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsPost(placePositionCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param placePositionCommand
     */
    public apiPositionsPost(placePositionCommand: PlacePositionCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsPostWithHttpInfo(placePositionCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiPositionsWithPnlGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiPositionsWithPnlGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPositionsWithPnlGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiPositionsWithPnlGet(_options?: ConfigurationOptions): Observable<void> {
        return this.apiPositionsWithPnlGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * @param id
     */
    public apiUsersIdDeleteWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiUsersIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiUsersIdDelete(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiUsersIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiUsersIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiUsersIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiUsersIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiUsersIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateUserCommand
     */
    public apiUsersIdPutWithHttpInfo(id: string, updateUserCommand: UpdateUserCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiUsersIdPut(id, updateUserCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateUserCommand
     */
    public apiUsersIdPut(id: string, updateUserCommand: UpdateUserCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiUsersIdPutWithHttpInfo(id, updateUserCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param registerUserCommand
     */
    public apiUsersRegisterPostWithHttpInfo(registerUserCommand: RegisterUserCommand, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiUsersRegisterPost(registerUserCommand, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersRegisterPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param registerUserCommand
     */
    public apiUsersRegisterPost(registerUserCommand: RegisterUserCommand, _options?: ConfigurationOptions): Observable<void> {
        return this.apiUsersRegisterPostWithHttpInfo(registerUserCommand, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class ObservableWalletsApi {
    private requestFactory: WalletsApiRequestFactory;
    private responseProcessor: WalletsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletsApiResponseProcessor();
    }

    /**
     * @param id
     */
    public apiWalletsIdGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiWalletsIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiWalletsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiWalletsIdGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiWalletsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public apiWalletsIdTransactionsGetWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.apiWalletsIdTransactionsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiWalletsIdTransactionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public apiWalletsIdTransactionsGet(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.apiWalletsIdTransactionsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
