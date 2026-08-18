# Install Formasty MCP

Formasty is a hosted remote MCP server. This repository contains public documentation and metadata only. Do not clone, build, or execute this repository as the server.

## Connection

- Name: `formasty`
- URL: `https://app.formasty.com/api/mcp`
- Transport: Streamable HTTP
- Authentication: OAuth preferred; API-key fallback only for developer-controlled clients
- Legacy SSE: `https://app.formasty.com/api/mcp/sse`

Configure the client with the remote URL, start the connection, and complete the Formasty OAuth flow in the browser. Do not request, generate, print, or store an API key when OAuth is available.

For Cline CLI:

```bash
cline mcp install formasty --transport http https://app.formasty.com/api/mcp
```

For Cline JSON configuration:

```json
{
  "mcpServers": {
    "formasty": {
      "type": "streamableHttp",
      "url": "https://app.formasty.com/api/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Keep `autoApprove` empty by default. Formasty includes tools that can create, edit, publish, and delete user-owned resources, so consequential calls should remain subject to client and user approval.

## Verify

1. Confirm the MCP connection reports healthy after OAuth.
2. Run `tools/list` and confirm Formasty tools are present.
3. Start with a read-only request such as “List my Formasty forms.”
4. Ask for confirmation before testing a tool that creates, changes, publishes, or deletes data.

See [TOOLS.md](TOOLS.md) for the complete tool inventory and [SUPPORT.md](SUPPORT.md) for troubleshooting.
