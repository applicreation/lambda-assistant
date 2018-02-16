export default class Event {
  /**
   * @param {Object} event
   * @return {Object}
   */
  static getAuthorizer(event) {
    if (!Object.prototype.hasOwnProperty.call(event, 'requestContext')) {
      return {};
    }

    return event.requestContext.authorizer || {};
  }

  /**
   * @param {Object} event
   * @return {String}
   */
  static getAuthorizerSub(event) {
    const authorizer = Event.getAuthorizer(event);

    if (!Object.prototype.hasOwnProperty.call(authorizer, 'claims')) {
      return '';
    }

    return authorizer.claims.sub || '';
  }

  /**
   * @param {Object} event
   * @return {Object}
   */
  static getBody(event) {
    return JSON.parse(event.body || '{}');
  }

  /**
   * @param {Object} event
   * @return {Object}
   */
  static getPathParameters(event) {
    return event.pathParameters || {};
  }

  /**
   * @param {Object} event
   * @param {String} parameter
   * @return {*|null}
   */
  static getPathParameter(event, parameter) {
    const parameters = Event.getPathParameters(event);

    return parameters[parameter] || null;
  }

  /**
   * @param {Object} event
   * @return {Object}
   */
  static getQueryStringParameters(event) {
    return event.queryStringParameters || {};
  }

  /**
   * @param {Object} event
   * @param {String} parameter
   * @return {*|null}
   */
  static getQueryStringParameter(event, parameter) {
    const parameters = Event.getQueryStringParameters(event);

    return parameters[parameter] || null;
  }
}
