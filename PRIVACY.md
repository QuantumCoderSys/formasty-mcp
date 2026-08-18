# Privacy for Formasty MCP

This document explains the MCP-specific data flow. The canonical, legally controlling privacy terms remain the [Formasty Privacy Policy](https://formasty.com/privacy), [Terms of Service](https://formasty.com/terms), and [Data Processing Agreement](https://formasty.com/dpa).

## Public discovery

MCP clients may inspect `tools/list` without authentication. Public discovery returns tool names, descriptions, schemas, and safety annotations. It does not return private workspace data, form responses, access tokens, or account data.

## Authenticated use

When you connect an MCP client through Formasty OAuth, the client acts with your approved Formasty access. Requests remain constrained by the approved connection, workspace access, live membership and role, product plan, and server-side validation.

Depending on the tool you invoke, Formasty may process and return:

- workspace and form metadata
- form drafts, settings, workflow rules, quiz configuration, and published state
- submission data and exports you are authorized to access
- integration and custom-domain configuration
- audit, validation, and capability information

The MCP client or AI provider receives the data returned for the operation you request. That provider's own privacy, retention, and training terms also apply. Review the provider before connecting it to sensitive forms or response data.

## API-key fallback

API keys are intended for developer-controlled clients that cannot complete OAuth. Treat a key like a password. Never commit it to Git, paste it into a public issue, embed it in client-side code, or share it in screenshots.

## Respondent data

The organization that created a Formasty form may be the controller of respondent submission data. Formasty commonly acts as its processor. Form owners are responsible for appropriate notices, consent, access controls, retention choices, and lawful use of connected AI or automation providers.

## Revocation and privacy requests

Revoke MCP access through Formasty's connection management and rotate a dedicated API key if it may have been exposed. Privacy questions and requests can be sent to [support@formasty.com](mailto:support@formasty.com).

Do not open a public GitHub issue containing personal data, form responses, private form URLs, access tokens, or account identifiers.
