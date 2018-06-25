import Debug from 'debug';

const debug = Debug('vesc:data-consumer');

/**
 * @typedef {Object} VescDeviceFilter
 * @property {String} pid
 * @property {String} vid
 * @property {String} serialId
 * @property {String} uuid
 */

/**
 * @typedef {Object} Options
 * @property {VescDeviceFilter[]} filters
 */

export default class VescDataConsumer {
  /**
   * @param {Options} options
   */
  constructor(options) {
    this.deviceFilters = options.filters || [];
  }
}
