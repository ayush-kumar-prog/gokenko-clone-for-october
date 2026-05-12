#!/usr/bin/env node
/**
 * Import the Kenko homepage+pricing variant canvas into October.
 *
 * Creates (or refreshes — idempotent on title + route_path):
 *   1. dash_projects row pointing at the GitHub repo.
 *   2. canvases row owned by Harsh, public + share-tokened.
 *   3. Eight canvas_screens — baseline / + /pricing + 3 home variants + 3 pricing variants.
 *   4. Two canvas_experiments rows (homepage + pricing) — status='draft',
 *      informational only (no live PostHog flag routing in this iteration).
 *
 * Run with:
 *   VITE_SUPA_PROJECT_URL=... VITE_SUPA_SERVICE_ROLE=... \
 *   VERCEL_BASE=https://your-vercel-url.vercel.app \
 *   node scripts/import-october-canvas.mjs
 *
 * Or drop the vars into a sibling .env.local file.
 */

import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const SUPA_URL = process.env.VITE_SUPA_PROJECT_URL;
const SUPA_KEY = process.env.VITE_SUPA_SERVICE_ROLE;
if (!SUPA_URL || !SUPA_KEY) {
  console.error("Missing VITE_SUPA_PROJECT_URL or VITE_SUPA_SERVICE_ROLE in .env.local");
  process.exit(1);
}

const HARSH_USER_ID = "60dc01e1-b7f8-4e24-aa85-86115e4272ec";
const VERCEL_BASE =
  process.env.VERCEL_BASE || "https://gokenko-clone-for-october.vercel.app";
const REPO_URL = "https://github.com/ayush-kumar-prog/gokenko-clone-for-october.git";
const REPO_OWNER = "ayush-kumar-prog";
const REPO_NAME = "gokenko-clone-for-october";
const CANVAS_TITLE = "Kenko — Homepage & Pricing Variants";

// Top row: home baseline + 3 home variants
// Bottom row: pricing baseline + 3 pricing variants
const SCREENS = [
  {
    title: "Baseline · Kenko home",
    route_path: "/",
    iframe_url: `${VERCEL_BASE}/`,
    position: { x: 0, y: 0 },
  },
  {
    title: "Home Variant A · Outcome-first",
    route_path: "/v/home-a",
    iframe_url: `${VERCEL_BASE}/v/home-a`,
    position: { x: 1500, y: 0 },
  },
  {
    title: "Home Variant B · Comparison",
    route_path: "/v/home-b",
    iframe_url: `${VERCEL_BASE}/v/home-b`,
    position: { x: 3000, y: 0 },
  },
  {
    title: "Home Variant C · Owner-story",
    route_path: "/v/home-c",
    iframe_url: `${VERCEL_BASE}/v/home-c`,
    position: { x: 4500, y: 0 },
  },
  {
    title: "Baseline · Kenko pricing",
    route_path: "/pricing",
    iframe_url: `${VERCEL_BASE}/pricing`,
    position: { x: 0, y: 1100 },
  },
  {
    title: "Pricing Variant A · Single tier + ROI",
    route_path: "/v/pricing-a",
    iframe_url: `${VERCEL_BASE}/v/pricing-a`,
    position: { x: 1500, y: 1100 },
  },
  {
    title: "Pricing Variant B · Hidden price + qualifier",
    route_path: "/v/pricing-b",
    iframe_url: `${VERCEL_BASE}/v/pricing-b`,
    position: { x: 3000, y: 1100 },
  },
  {
    title: "Pricing Variant C · Outcome-anchored tiers",
    route_path: "/v/pricing-c",
    iframe_url: `${VERCEL_BASE}/v/pricing-c`,
    position: { x: 4500, y: 1100 },
  },
];

const SCREEN_W = 1280;
const SCREEN_H = 820;

function generateShareToken(len = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < len; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

const supabase = createClient(SUPA_URL, SUPA_KEY);

async function upsertDashProject() {
  const { data: existing } = await supabase
    .from("dash_projects")
    .select("*")
    .eq("user_id", HARSH_USER_ID)
    .eq("github_owner", REPO_OWNER)
    .eq("github_repo", REPO_NAME)
    .maybeSingle();

  if (existing) {
    console.log(`✓ dash_project exists ${existing.id}`);
    return existing;
  }

  const insert = {
    id: randomUUID(),
    user_id: HARSH_USER_ID,
    github_repo_url: REPO_URL,
    github_owner: REPO_OWNER,
    github_repo: REPO_NAME,
    default_branch: "main",
    name: "gokenko-clone-for-october",
    framework: "Next.js",
    language: "TypeScript",
    description:
      "UI clone of gokenko.com (Kenko — fitness studio marketing + booking SaaS) with 3 homepage variants and 3 pricing variants. Live at " +
      VERCEL_BASE,
    analysis_status: "complete",
  };

  const { data, error } = await supabase
    .from("dash_projects")
    .insert(insert)
    .select()
    .single();
  if (error) throw new Error(`dash_projects insert: ${error.message}`);
  console.log(`+ dash_project ${data.id}`);
  return data;
}

async function upsertCanvas(dashProjectId) {
  const { data: existing } = await supabase
    .from("canvases")
    .select("*")
    .eq("user_id", HARSH_USER_ID)
    .eq("title", CANVAS_TITLE)
    .maybeSingle();

  if (existing) {
    const updates = {
      dash_project_id: dashProjectId,
      is_public: true,
      share_token: existing.share_token || generateShareToken(),
      share_settings: { allowComments: true, allowDuplication: true },
      render_settings: {
        mode: "desktop-web",
        viewport: { width: 1280, height: 820 },
      },
    };
    const { data, error } = await supabase
      .from("canvases")
      .update(updates)
      .eq("id", existing.id)
      .select()
      .single();
    if (error) throw new Error(`canvases update: ${error.message}`);
    console.log(`✓ canvas refreshed ${data.id} share=${data.share_token}`);
    return data;
  }

  const insert = {
    id: randomUUID(),
    user_id: HARSH_USER_ID,
    title: CANVAS_TITLE,
    description:
      "UI clone of gokenko.com (B2B fitness-studio SaaS) plus 3 homepage variants (Outcome-first / Comparison / Owner-story) and 3 pricing variants (Single-tier+ROI / Hidden+qualifier / Outcome-anchored). Side-by-side comparison surface.",
    is_default: false,
    zoom: 0.32,
    center_x: 2300,
    center_y: 960,
    render_settings: {
      mode: "desktop-web",
      viewport: { width: 1280, height: 820 },
    },
    dash_project_id: dashProjectId,
    is_public: true,
    share_token: generateShareToken(),
    share_settings: { allowComments: true, allowDuplication: true },
  };

  const { data, error } = await supabase
    .from("canvases")
    .insert(insert)
    .select()
    .single();
  if (error) throw new Error(`canvases insert: ${error.message}`);
  console.log(`+ canvas ${data.id} share=${data.share_token}`);
  return data;
}

async function upsertScreen(canvasId, dashProjectId, screen) {
  const { data: existing } = await supabase
    .from("canvas_screens")
    .select("*")
    .eq("canvas_id", canvasId)
    .eq("route_path", screen.route_path)
    .maybeSingle();

  const payload = {
    canvas_id: canvasId,
    dash_project_id: dashProjectId,
    title: screen.title,
    code: "// Live deployment — edit at " + REPO_URL,
    position_x: screen.position.x,
    position_y: screen.position.y,
    width: SCREEN_W,
    height: SCREEN_H,
    mode: "desktop-web",
    source: "imported",
    iframe_url: screen.iframe_url,
    route_path: screen.route_path,
  };

  if (existing) {
    const { data, error } = await supabase
      .from("canvas_screens")
      .update(payload)
      .eq("id", existing.id)
      .select()
      .single();
    if (error) throw new Error(`canvas_screens update: ${error.message}`);
    console.log(`✓ screen refreshed ${data.id} ${data.route_path}`);
    return data;
  }

  const { data, error } = await supabase
    .from("canvas_screens")
    .insert({ id: randomUUID(), ...payload })
    .select()
    .single();
  if (error) throw new Error(`canvas_screens insert: ${error.message}`);
  console.log(`+ screen ${data.id} ${data.route_path}`);
  return data;
}

async function upsertExperiment(canvasId, spec) {
  const { data: existing } = await supabase
    .from("canvas_experiments")
    .select("*")
    .eq("canvas_id", canvasId)
    .eq("name", spec.name)
    .maybeSingle();

  const payload = {
    canvas_id: canvasId,
    name: spec.name,
    hypothesis: spec.hypothesis,
    status: "draft",
    variant_screen_ids: spec.variant_screen_ids,
    variant_allocations: spec.variant_allocations,
    posthog_flag_key: spec.posthog_flag_key,
    position_x: spec.position.x,
    position_y: spec.position.y,
    width: 360,
    height: 220,
  };

  if (existing) {
    const { data, error } = await supabase
      .from("canvas_experiments")
      .update(payload)
      .eq("id", existing.id)
      .select()
      .single();
    if (error) throw new Error(`canvas_experiments update: ${error.message}`);
    console.log(`✓ experiment refreshed ${spec.name}`);
    return data;
  }

  const { data, error } = await supabase
    .from("canvas_experiments")
    .insert({ id: randomUUID(), ...payload })
    .select()
    .single();
  if (error) throw new Error(`canvas_experiments insert: ${error.message}`);
  console.log(`+ experiment ${spec.name}`);
  return data;
}

async function main() {
  console.log("Importing Kenko canvas into October...");
  const dashProject = await upsertDashProject();
  const canvas = await upsertCanvas(dashProject.id);

  const screens = [];
  for (const screen of SCREENS) {
    screens.push(await upsertScreen(canvas.id, dashProject.id, screen));
  }

  // SCREENS indices: 0=home baseline, 1-3=home variants, 4=pricing baseline, 5-7=pricing variants
  const homeVariantIds = [screens[1].id, screens[2].id, screens[3].id];
  const pricingVariantIds = [screens[5].id, screens[6].id, screens[7].id];

  await upsertExperiment(canvas.id, {
    name: "Kenko homepage — outcome-first vs comparison vs owner-story",
    hypothesis:
      "Kenko's home (compact hero + product split) drives Book-a-Demo. We're side-by-side comparing three alternative framings: a single big outcome stat (A), a problem/solution split-screen (B), and a testimonial-led owner-story (C). Static routes — no live traffic routing yet.",
    posthog_flag_key: "kenko-home-variant-experiment",
    variant_screen_ids: homeVariantIds,
    variant_allocations: { A: 33, B: 33, C: 34 },
    position: { x: 100, y: 950 },
  });

  await upsertExperiment(canvas.id, {
    name: "Kenko pricing — single-tier ROI vs hidden-quote vs outcome-anchored",
    hypothesis:
      "Kenko pricing shows three tiers with crossed-out anchor prices. We're comparing three strategies: one tier with a per-location ROI slider (A), no prices + qualifier form (B), same three tiers but anchored to growth outcomes instead of features (C). Static routes — informational only.",
    posthog_flag_key: "kenko-pricing-variant-experiment",
    variant_screen_ids: pricingVariantIds,
    variant_allocations: { A: 33, B: 33, C: 34 },
    position: { x: 100, y: 2050 },
  });

  const shareUrl = `https://october.dev/shared/${canvas.share_token}`;
  console.log("\n=== DONE ===");
  console.log(`canvas_id      ${canvas.id}`);
  console.log(`share_token    ${canvas.share_token}`);
  console.log(`share_url      ${shareUrl}`);
  console.log(`dash_project   ${dashProject.id}`);
  console.log(`github         ${REPO_URL}`);
  console.log(`screens        ${screens.length}`);
  console.log(`vercel         ${VERCEL_BASE}`);
}

main().catch((err) => {
  console.error("FAIL:", err);
  process.exit(1);
});
