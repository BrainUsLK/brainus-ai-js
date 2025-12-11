/**
 * Brainus AI JavaScript/TypeScript SDK
 *
 * Official SDK for the Brainus AI API - RAG-powered educational content.
 *
 * @packageDocumentation
 */

export { BrainusAI } from "./client";
export {
  BrainusError,
  AuthenticationError,
  RateLimitError,
  QuotaExceededError,
  APIError,
} from "./errors";
export type {
  BrainusAIConfig,
  QueryRequest,
  QueryResponse,
  Citation,
  UsageStats,
  Plan,
  QueryFilters,
  PlanInfo,
} from "./types";
