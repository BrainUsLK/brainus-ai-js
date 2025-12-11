/**
 * Custom error classes for the Brainus AI SDK
 */

export class BrainusError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BrainusError'
  }
}

export class AuthenticationError extends BrainusError {
  constructor(message: string = 'Invalid or missing API key') {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export class RateLimitError extends BrainusError {
  retryAfter?: number

  constructor(message: string = 'Rate limit exceeded', retryAfter?: number) {
    super(message)
    this.name = 'RateLimitError'
    this.retryAfter = retryAfter
  }
}

export class QuotaExceededError extends BrainusError {
  constructor(message: string = 'Monthly quota exceeded') {
    super(message)
    this.name = 'QuotaExceededError'
  }
}

export class APIError extends BrainusError {
  statusCode?: number

  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = 'APIError'
    this.statusCode = statusCode
  }
}



