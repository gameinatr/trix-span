/* eslint-disable
    no-var,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export var createEvent = function(type, properties = {}) {
  const event = document.createEvent("Events")
  event.initEvent(type, true, true)
  for (const key in properties) {
    const value = properties[key]
    event[key] = value
  }
  return event
}

export var triggerEvent = (element, type, properties) => element.dispatchEvent(createEvent(type, properties))
