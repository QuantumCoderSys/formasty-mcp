# Support

## Connection checklist

1. Confirm the server URL is `https://app.formasty.com/api/mcp`.
2. Prefer Streamable HTTP when your client supports remote MCP servers.
3. Complete the Formasty OAuth flow and approve the intended workspace access.
4. Run MCP `tools/list`, then call `formasty_get_capabilities` before planning a multi-step workflow.
5. Confirm your workspace role and plan include the operation you want to use.
6. Reload the form and retry with the latest `draftRevision` after a draft conflict.

## Where to ask for help

- Documentation and metadata problems that contain no sensitive data may be reported in this repository.
- Account, billing, privacy, connection, or security-sensitive questions should go to [support@formasty.com](mailto:support@formasty.com).
- Product documentation is available at [formasty.com/documentation](https://formasty.com/documentation).

Before posting publicly, remove API keys, OAuth tokens, form responses, private URLs, account identifiers, and customer data.
