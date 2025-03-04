'use strict'

const { validateRequiredParameters } = require('../../helpers/validation')
/**
 * API Convert endpoints
 * @module Convert
 * @param {*} superclass
 */
const Convert = (superclass) =>
  class extends superclass {
    /**
     * Get Convert Trade History (USER_DATA)<br>
     *
     * GET /sapi/v1/convert/tradeFlow<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#get-convert-trade-history-user_data}
     *
     * @param {number} [startTime]
     * @param {number} [endTime]
     * @param {object} [options]
     * @param {number} [options.limit] - Default 100, Max 1000
     * @param {number} [options.recvWindow]
     *
     */
    convertTradeHistory (startTime, endTime, options = {}) {
      validateRequiredParameters({ startTime, endTime })

      return this.signRequest(
        'GET',
        '/sapi/v1/convert/tradeFlow',
        Object.assign(options, { startTime, endTime })
      )
    }

    /**
     * Get The Exchange Info Between Two Assets<br>
     *
     * /sapi/v1/convert/exchangeInfo<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#convert-endpoints}
     *
     * @param {string} [fromAsset]
     * @param {string} [toAsset]
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     *
     */
    exchangeInfo (fromAsset, toAsset, options = {}) {
      validateRequiredParameters({ fromAsset, toAsset })

      return this.signRequest(
        'GET',
        `/sapi/v1/convert/exchangeInfo?fromAsset=${fromAsset}&toAsset=${toAsset}`
      )
    }
  }
module.exports = Convert
