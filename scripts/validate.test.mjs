import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repoRoot = new URL("../", import.meta.url);

const readText = async (path) =>
  readFile(new URL(path, repoRoot), "utf8");

test("registry metadata describes the official hosted Formasty MCP server", async () => {
  const metadata = JSON.parse(await readText("server.json"));

  assert.equal(metadata.name, "com.formasty/form-builder");
  assert.equal(metadata.version, "1.0.1");
  assert.equal(metadata.websiteUrl, "https://formasty.com");
  assert.equal(metadata.repository?.url, "https://github.com/QuantumCoderSys/formasty-mcp");
  assert.ok(metadata.description.length > 0);
  assert.ok(metadata.description.length <= 100);
  assert.deepEqual(metadata.remotes, [
    {
      type: "streamable-http",
      url: "https://app.formasty.com/api/mcp",
    },
  ]);
});

test("the documented tool list matches the machine-readable operation list", async () => {
  const operations = JSON.parse(await readText("operations.json"));
  const toolsMarkdown = await readText("TOOLS.md");
  const documented = [
    ...new Set(toolsMarkdown.match(/`formasty_[a-z0-9_]+`/g) ?? []),
  ].map((value) => value.slice(1, -1));

  assert.equal(operations.length, 75);
  assert.equal(new Set(operations).size, operations.length);
  assert.deepEqual(documented.sort(), [...operations].sort());
});

test("client installation guides use the canonical remote endpoint", async () => {
  const readme = await readText("README.md");
  const agentInstall = await readText("llms-install.md");

  for (const client of ["Claude", "Cursor", "VS Code", "Cline", "ChatGPT"]) {
    assert.match(readme, new RegExp(`### ${client}`));
  }

  assert.match(readme, /"type": "http"/);
  assert.match(agentInstall, /"type": "streamableHttp"/);
  assert.match(agentInstall, /"autoApprove": \[\]/);
  assert.ok(
    [...readme.matchAll(/https:\/\/app\.formasty\.com\/api\/mcp/g)].length >= 5,
  );
});

test("public documentation does not point users to the private application repository", async () => {
  const publicFiles = [
    "README.md",
    "TOOLS.md",
    "PRIVACY.md",
    "SECURITY.md",
    "SUPPORT.md",
    "CHANGELOG.md",
    "llms-install.md",
    "server.json",
  ];
  const contents = await Promise.all(publicFiles.map(readText));

  for (const content of contents) {
    assert.doesNotMatch(content, /github\.com\/QuantumCoderSys\/Formasty(?:\b|\/)/);
    assert.doesNotMatch(content, /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/);
  }
});
