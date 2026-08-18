# Formasty MCP for Gemini CLI

Use the configured `formasty` MCP server to build and operate forms, quizzes, surveys, and response workflows in the authenticated user's Formasty workspaces.

## Connection and authentication

- Use the configured Streamable HTTP endpoint at `https://app.formasty.com/api/mcp`.
- Complete OAuth when Gemini CLI requests authentication. Formasty supports automatic OAuth discovery, dynamic client registration, PKCE, refresh tokens, and revocation.
- Do not ask the user to paste an API key when OAuth is available.
- Never print, commit, or expose access tokens, API keys, response data, or private form URLs.

## Safe operating sequence

1. Inspect the live Formasty tools before acting.
2. List workspaces and use the authenticated user's current workspace permissions.
3. Read the current form and draft revision before editing an existing form.
4. Keep the latest draft revision across every mutation.
5. Validate the draft before publishing.
6. Publish, delete, or modify submissions only when the user's request clearly authorizes it.
7. Keep consequential MCP tool calls subject to Gemini CLI's confirmation flow.

Formasty's workspace roles, OAuth scopes, plan limits, optimistic draft revisions, and server-side validation remain authoritative. A tool error is not permission to bypass those controls.

See [TOOLS.md](TOOLS.md) for the public tool inventory and [SECURITY.md](SECURITY.md) for security reporting.
