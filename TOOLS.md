# Formasty MCP tool list

The hosted Formasty MCP server currently advertises 75 operations. The live MCP `tools/list` response is the authoritative source for input schemas, output schemas, titles, descriptions, and safety annotations.

All successful tool calls return an operation envelope shaped as `{ operation_id, response }`. Tool failures return `{ operation_id, error }` with structured category, status, retry guidance, and recovery information.

## Discovery and capabilities

| Tool | Purpose |
| --- | --- |
| `formasty_get_capabilities` | Inspect the authenticated connection, workspace access, scopes, roles, available operations, and limitations. |
| `formasty_get_workflow_capabilities` | Inspect workflow-specific capabilities before editing routing or variables. |
| `formasty_get_mcp_audit_matrix` | Inspect the MCP contract audit matrix and supported operation coverage. |

## Workspaces, branding, and analytics

| Tool | Purpose |
| --- | --- |
| `formasty_list_workspaces` | List workspaces accessible to the authenticated user. |
| `formasty_get_workspace` | Get one workspace and its current metadata. |
| `formasty_list_workspace_forms` | Page through the forms in a workspace. |
| `formasty_create_workspace` | Create a workspace. |
| `formasty_update_workspace` | Update workspace details. |
| `formasty_delete_workspace` | Delete a workspace when permitted. |
| `formasty_get_workspace_branding` | Read workspace-level branding. |
| `formasty_update_workspace_branding` | Update workspace-level branding. |
| `formasty_get_dashboard_analytics` | Read dashboard analytics available to the user. |

## Form lifecycle

| Tool | Purpose |
| --- | --- |
| `formasty_create_form` | Create a custom unpublished form draft. |
| `formasty_get_create_form_status` | Safely reconcile an interrupted idempotent form creation. |
| `formasty_list_starter_templates` | List built-in starter templates. |
| `formasty_create_form_from_starter_template` | Create a draft from a starter template. |
| `formasty_clone_form` | Clone an accessible form into a writable workspace. |
| `formasty_delete_form` | Delete a form when permitted. |
| `formasty_get_form` | Read the current form, draft, published state, and revision. |
| `formasty_validate_draft` | Validate a draft before publishing. |
| `formasty_audit_form` | Audit form quality and configuration. |
| `formasty_save_draft` | Save a complete builder-compatible draft. |
| `formasty_publish_form` | Publish a validated draft revision. |
| `formasty_get_connect_assets` | Retrieve share, embed, and connection assets. |
| `formasty_get_published_fields` | Read the public field contract for a published form. |

## Settings, design, scheduling, and endings

| Tool | Purpose |
| --- | --- |
| `formasty_get_form_settings` | Read form settings. |
| `formasty_update_form_settings` | Update supported form settings. |
| `formasty_upload_form_link_asset` | Upload and attach a supported link or share asset. |
| `formasty_patch_design` | Patch supported theme and design properties. |
| `formasty_configure_scheduler_provider` | Configure a supported scheduling provider. |
| `formasty_update_thank_you` | Update the default thank-you experience. |
| `formasty_create_ending_screen` | Create an additional ending screen. |
| `formasty_delete_ending_screen` | Delete an ending screen and reconcile references. |

## Steps and fields

| Tool | Purpose |
| --- | --- |
| `formasty_add_step` | Add a draft step. |
| `formasty_update_step` | Update a draft step. |
| `formasty_delete_step` | Delete a draft step. |
| `formasty_reorder_steps` | Reorder all draft steps. |
| `formasty_move_step` | Move one draft step. |
| `formasty_add_field` | Add a supported field to a draft step. |
| `formasty_update_field` | Update a draft field. |
| `formasty_delete_field` | Delete a draft field and reconcile references. |
| `formasty_reorder_fields` | Reorder all fields in a step. |
| `formasty_move_field` | Move one field within its step. |

## Workflow and quizzes

| Tool | Purpose |
| --- | --- |
| `formasty_update_step_logic` | Update conditional logic attached to a step. |
| `formasty_upsert_workflow_rule` | Create or replace a workflow routing rule. |
| `formasty_configure_workflow_variables` | Configure supported hidden workflow variables. |
| `formasty_set_workflow_step_actions` | Configure actions that run for a workflow step. |
| `formasty_configure_quiz` | Configure the form's quiz mode and shared quiz settings. |
| `formasty_configure_matching_rules` | Configure matching, personality, or recommendation outcomes. |
| `formasty_configure_score_calculation` | Configure score calculations and score-range outcomes. |

## Images and imports

| Tool | Purpose |
| --- | --- |
| `formasty_search_unsplash_images` | Search supported Unsplash images. |
| `formasty_apply_unsplash_image` | Apply a selected Unsplash image to a supported target. |
| `formasty_upload_generated_image` | Ingest and apply an agent-generated image. |
| `formasty_import_google_form` | Import a supported Google Form. |
| `formasty_import_typeform` | Import a supported Typeform form. |

## Responses and exports

| Tool | Purpose |
| --- | --- |
| `formasty_get_responses_bootstrap` | Load response-view metadata and filter options. |
| `formasty_list_submissions` | List accessible submissions with supported filters and pagination. |
| `formasty_get_submission` | Read one submission. |
| `formasty_update_submission` | Update supported submission properties. |
| `formasty_delete_submission` | Delete a submission when permitted. |
| `formasty_create_submission_export` | Start a response export. |
| `formasty_get_submission_export` | Check and retrieve a response export. |

## Integrations and domains

| Tool | Purpose |
| --- | --- |
| `formasty_get_webhook_integration` | Read webhook configuration. |
| `formasty_set_webhook_integration` | Configure a webhook integration. |
| `formasty_delete_webhook_integration` | Remove webhook configuration. |
| `formasty_get_facebook_pixel_integration` | Read Meta/Facebook Pixel configuration. |
| `formasty_set_facebook_pixel_integration` | Configure Meta/Facebook Pixel. |
| `formasty_delete_facebook_pixel_integration` | Remove Meta/Facebook Pixel configuration. |
| `formasty_get_google_tag_manager_integration` | Read Google Tag Manager configuration. |
| `formasty_set_google_tag_manager_integration` | Configure Google Tag Manager. |
| `formasty_delete_google_tag_manager_integration` | Remove Google Tag Manager configuration. |
| `formasty_get_custom_domain` | Read custom-domain state. |
| `formasty_set_custom_domain` | Configure a custom domain. |
| `formasty_verify_custom_domain` | Verify custom-domain DNS state. |
| `formasty_disconnect_custom_domain` | Disconnect a custom domain. |

## Important limitations

- Payment fields are not currently exposed through Formasty MCP.
- Tool access never bypasses workspace roles, scopes, plan gates, or server-side validation.
- Draft mutations require the latest `draftRevision`; reload and reapply changes after a conflict.
- Free workspaces can use MCP for Free-plan operations. Pro and Business features keep their normal product gates.
- Use `formasty_get_capabilities` before a multi-step workflow instead of inferring access from this document.
