# Security policy

## Reporting a vulnerability

Please report suspected vulnerabilities privately to [support@formasty.com](mailto:support@formasty.com) with the subject `Security report: Formasty MCP`.

Include only the minimum information needed to reproduce the issue. Do not include live customer submissions, production credentials, OAuth tokens, API keys, or unrelated personal data. Do not publish a vulnerability as a GitHub issue.

The canonical security overview is available at [formasty.com/security](https://formasty.com/security).

## Authentication and authorization

- OAuth is preferred for user-facing clients.
- OAuth connections remain constrained by approved scopes, workspace selection, membership, and live role permissions.
- API keys are supported only as a fallback for developer-controlled clients.
- Public `tools/list` discovery exposes schemas, not authenticated workspace data.
- Free, Pro, and Business feature gates are enforced by the hosted service.

## Tool safeguards

- Tools publish MCP safety annotations, including read-only, destructive, idempotent, and open-world hints.
- Draft mutations require optimistic revision tokens to prevent silent overwrites.
- Formasty validates the complete draft before publication.
- Create operations support stable idempotency keys and deterministic status reconciliation.
- Consequential actions remain subject to MCP host prompts and explicit user intent.
- Structured errors separate validation, authentication, permission, conflict, rate-limit, request, and server failures.

## Repository scope

This public repository contains documentation and registry metadata only. It is not a self-hostable server distribution and intentionally excludes:

- Formasty backend or application source code
- infrastructure and deployment configuration
- database schemas and migrations
- production logs or customer data
- OAuth client secrets, signing keys, API keys, and environment files

## Supported service

Formasty MCP is a hosted service at `https://app.formasty.com/api/mcp`. Security fixes are applied to the hosted service rather than distributed from this documentation repository.
