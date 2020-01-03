/**
 * Get a list of running applications.
 * @example
 * ```
 * const winds = require("winds");
 *
 * (async () => {
 *     await winds()
 *     //=> ['Richienb/winds: Get a list of running applications. - Google Chrome', 'index.js - winds - Visual Studio Code']
 * })()
 * ```
*/
declare function winds(): Promise<string[]>;

export = winds;
