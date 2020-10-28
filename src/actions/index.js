export const SUBMIT_TEMPLATE = ' SUBMIT_TEMPLATE'

export function submitParameters(template, article) {
  return {
    type: SUBMIT_TEMPLATE,
    template,
    article
  }
}
