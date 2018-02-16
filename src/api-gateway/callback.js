export default class Callback {
  /**
   * @param {Object} body
   * @return {{statusCode, body}|*}
   */
  static ok(body) {
    return Callback.build(200, body);
  }

  /**
   * @param {Object} err
   * @return {{statusCode, body}|*}
   */
  static failure(err) {
    return Callback.build(err.status, { errors: err.errors || [{ message: err.message }] });
  }

  /**
   * @param {Number} statusCode
   * @param {Object} body
   * @return {{statusCode: Number, body: String}}
   */
  static build(statusCode, body) {
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  }
}
