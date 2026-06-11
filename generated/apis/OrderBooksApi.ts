// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { MarketPriceDto } from '../models/MarketPriceDto';
import { MatchingResult } from '../models/MatchingResult';
import { OrderBookDto } from '../models/OrderBookDto';
import { ProblemDetails } from '../models/ProblemDetails';

/**
 * no description
 */
export class OrderBooksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param marketId 
     * @param outcomeId 
     */
    public async apiOrderBooksMarketMarketIdMatchPost(marketId: string, outcomeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("OrderBooksApi", "apiOrderBooksMarketMarketIdMatchPost", "marketId");
        }



        // Path Params
        const localVarPath = '/api/OrderBooks/market/{marketId}/match'
            .replace('{marketId}', encodeURIComponent(String(marketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (outcomeId !== undefined) {
            requestContext.setQueryParam("outcomeId", ObjectSerializer.serialize(outcomeId, "string", "uuid"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketId 
     * @param outcomeId 
     */
    public async apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet(marketId: string, outcomeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("OrderBooksApi", "apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet", "marketId");
        }


        // verify required parameter 'outcomeId' is not null or undefined
        if (outcomeId === null || outcomeId === undefined) {
            throw new RequiredError("OrderBooksApi", "apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet", "outcomeId");
        }


        // Path Params
        const localVarPath = '/api/OrderBooks/market/{marketId}/outcome/{outcomeId}'
            .replace('{marketId}', encodeURIComponent(String(marketId)))
            .replace('{outcomeId}', encodeURIComponent(String(outcomeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketId 
     * @param outcomeId 
     */
    public async apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet(marketId: string, outcomeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("OrderBooksApi", "apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet", "marketId");
        }


        // verify required parameter 'outcomeId' is not null or undefined
        if (outcomeId === null || outcomeId === undefined) {
            throw new RequiredError("OrderBooksApi", "apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet", "outcomeId");
        }


        // Path Params
        const localVarPath = '/api/OrderBooks/market/{marketId}/outcome/{outcomeId}/price'
            .replace('{marketId}', encodeURIComponent(String(marketId)))
            .replace('{outcomeId}', encodeURIComponent(String(outcomeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OrderBooksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiOrderBooksMarketMarketIdMatchPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiOrderBooksMarketMarketIdMatchPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MatchingResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MatchingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MatchingResult", ""
            ) as MatchingResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MatchingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MatchingResult", ""
            ) as MatchingResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiOrderBooksMarketMarketIdOutcomeOutcomeIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiOrderBooksMarketMarketIdOutcomeOutcomeIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderBookDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderBookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderBookDto", ""
            ) as OrderBookDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderBookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderBookDto", ""
            ) as OrderBookDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiOrderBooksMarketMarketIdOutcomeOutcomeIdPriceGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MarketPriceDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MarketPriceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketPriceDto", ""
            ) as MarketPriceDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MarketPriceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketPriceDto", ""
            ) as MarketPriceDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
