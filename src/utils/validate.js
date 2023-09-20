/**
 * 判断是否是外部链接
 */

export const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path)
