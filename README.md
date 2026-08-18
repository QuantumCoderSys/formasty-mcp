# Formasty MCP

Build and operate production-ready forms, quizzes, surveys, workflows, and response pipelines from AI agents.

This is the public documentation repository for Formasty's official remote Model Context Protocol (MCP) server. The Formasty application and backend remain private. This repository intentionally contains no server implementation, infrastructure configuration, customer data, or credentials.

## Connect

| Setting | Value |
| --- | --- |
| Server name | `formasty` |
| Remote MCP URL | `https://app.formasty.com/api/mcp` |
| Transport | Streamable HTTP |
| Legacy SSE URL | `https://app.formasty.com/api/mcp/sse` |
| Authentication | OAuth, with API-key fallback for developer-controlled clients |
| Official registry name | `com.formasty/form-builder` |

For clients that support remote MCP servers, add `https://app.formasty.com/api/mcp` and complete the Formasty OAuth flow. The repository is documentation only: do not clone or run it as a server.

### Claude

In Claude, open **Customize > Connectors**, add a custom connector, enter the remote MCP URL, and authenticate with Formasty. The same connector works across the Claude surfaces that support remote MCP.

### Cursor

Add the following to your user or project MCP configuration:

```json
{
  "mcpServers": {
    "formasty": {
      "url": "https://app.formasty.com/api/mcp"
    }
  }
}
```

Cursor supports Streamable HTTP and OAuth for remote MCP servers.

### VS Code and GitHub Copilot

Add the following to your user profile or workspace `mcp.json`:

```json
{
  "servers": {
    "formasty": {
      "type": "http",
      "url": "https://app.formasty.com/api/mcp"
    }
  }
}
```

### Cline

Use Cline's remote-server UI, or install from the CLI:

```bash
cline mcp install formasty --transport http https://app.formasty.com/api/mcp
```

### ChatGPT

In a workspace with MCP app developer access, create a custom app using `https://app.formasty.com/api/mcp` as the MCP server URL, complete OAuth, and review the requested tool permissions before publishing it to the workspace.

### Compatibility bridge

For stdio-only clients such as older Claude Desktop versions, use the remote bridge:

```json
{
  "mcpServers": {
    "formasty": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.formasty.com/api/mcp"
      ]
    }
  }
}
```

Never place a Formasty API key in a public repository, shared configuration, issue, or screenshot. Prefer OAuth for user-facing clients.

Agents and marketplace reviewers can use [llms-install.md](llms-install.md) for the concise installation and verification path.

## What agents can do

- Create forms from scratch or from Formasty starter templates.
- Build lead-capture forms, surveys, intake forms, applications, booking forms, waitlists, polls, and quizzes.
- Add, update, move, reorder, and remove steps and fields.
- Configure themes, covers, scheduling, settings, thank-you screens, and endings.
- Build conditional workflows, variables, routing rules, matching quizzes, and score quizzes.
- Validate and audit drafts before publishing.
- Publish forms and retrieve share, embed, and connection assets.
- Read and manage submissions and create response exports, subject to user permissions.
- Configure supported webhooks, analytics pixels, tag managers, and custom domains.
- Import supported Google Forms and Typeform forms.

The current public contract exposes 75 operations. See [TOOLS.md](TOOLS.md) or use MCP `tools/list` for the live, authoritative schemas and safety annotations.

## Authentication and permissions

OAuth connections act as the signed-in Formasty user. Tool access is still constrained by:

- OAuth scopes or API-key scopes
- workspace membership and role permissions
- selected workspace access
- Free, Pro, and Business feature gates
- optimistic draft revisions and server-side validation
- explicit host and user approval for consequential operations

Public discovery reveals tool definitions only. Invoking tools or accessing workspace data requires authentication.

## Useful links

- [Formasty](https://formasty.com)
- [Documentation](https://formasty.com/documentation)
- [Official MCP Registry entry](https://registry.modelcontextprotocol.io/v0.1/servers?search=formasty&version=latest)
- [Privacy Policy](https://formasty.com/privacy)
- [Security](https://formasty.com/security)
- [Terms of Service](https://formasty.com/terms)
- [Data Processing Agreement](https://formasty.com/dpa)

## Security and privacy

Read [SECURITY.md](SECURITY.md) before reporting a vulnerability and [PRIVACY.md](PRIVACY.md) for the MCP-specific data flow. Do not include access tokens, API keys, form responses, customer data, private form URLs, or reproduction data from a real workspace in a public issue.

## Support

See [SUPPORT.md](SUPPORT.md) or email [support@formasty.com](mailto:support@formasty.com) for account, billing, privacy, or security-sensitive support.

## License

The documentation and metadata in this repository are available under the [MIT License](LICENSE). Use of the hosted Formasty service is governed by the [Formasty Terms of Service](https://formasty.com/terms).
