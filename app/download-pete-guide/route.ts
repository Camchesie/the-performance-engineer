import { Buffer } from "node:buffer";

export const runtime = "nodejs";
export const dynamic = "force-static";

const W = 595.28;
const H = 841.89;
const M = 52;
const GOLD = [0.788, 0.635, 0.153];
const BLACK = [0.03, 0.03, 0.03];
const GRAY = [0.32, 0.32, 0.32];

const guide = [
  {
    number: "01",
    title: "PETE in 60 seconds",
    lead: "PETE is not simply \"send a text and it sticks a trade on\".",
    paragraphs: [
      "The Telegram message is only the front door. Behind it is a customer-directed execution system that connects your instruction to your own MT4 terminal and your own broker account, while adding validation, authorization, installation and broker binding, risk-aware basket execution and lifecycle feedback.",
    ],
  },
  {
    number: "02",
    title: "The complete PETE path",
    lead: "Every live instruction passes through a chain. Understanding that chain is the easiest way to understand the product.",
    bullets: [
      "Telegram is the control surface: you send the instruction and receive PETE feedback.",
      "The Hosted Core is the online control and authorization layer that knows the customer, subscription and paired installation.",
      "The Windows Gateway Agent is the bridge between the hosted service and the customer's local or VPS trading environment.",
      "The PETE MT4 client sits inside MT4 and provides the broker-side execution path.",
      "The broker remains the customer's broker. PETE is not holding the trading account.",
    ],
  },
  {
    number: "03",
    title: "What a PETE trade instruction contains",
    lead: "A typical instruction tells PETE what you want executed. The exact wording can vary within the currently supported parser, but the trade itself is customer-defined.",
    bullets: [
      "The market or symbol you want to trade.",
      "BUY or SELL direction.",
      "Entry information where required by the supported instruction format.",
      "A stop loss that makes structural sense for the trade direction.",
      "One or more supplied targets within the supported beta format.",
      "The requested percentage risk, subject to PETE and broker constraints.",
    ],
    paragraphs: [
      "In the proven four-target demo, PETE accepted a 0.50% GBPJPY SELL instruction, created Basket 003, opened four legs, and later reported the basket closure after the stop was hit. The result was irrelevant to the technical proof; the important point was the complete execution and feedback loop.",
    ],
  },
  {
    number: "04",
    title: "What happens after you press Send",
    lead: "The visible action takes seconds. The important work is what PETE checks and coordinates behind the message.",
    numbered: [
      "Receive the customer instruction - PETE receives the Telegram command through the public Gateway bot.",
      "Associate it with the customer - the live service has an active customer and subscription state and the customer links Telegram to their Gateway identity.",
      "Use the paired installation - the package creates package-local installation state and is paired to the intended broker account and server.",
      "Validate the trade structure - PETE checks the instruction instead of blindly passing malformed trade geometry to the broker.",
      "Check the local MT4 route - preflight verifies Common Files access, MT4 heartbeat, broker binding, MT4 connectivity, trade permission and online authorization.",
      "Route through the Gateway Agent - the running Windows Agent connects the hosted instruction to the local MT4 environment.",
      "Hand the instruction to MT4 - the PETE MT4 client uses the customer's logged-in MT4 and broker session.",
      "Execute with the customer broker - orders are sent to the paired broker account, subject to normal broker acceptance and market conditions.",
      "Report what actually happened - PETE sends acceptance, execution and lifecycle feedback back to Telegram.",
    ],
  },
  {
    number: "05",
    title: "Validation: fail closed, not guess",
    lead: "Execution software should not 'do its best' with a dangerous instruction. Where the meaning or trade geometry is invalid, the safer behaviour is rejection.",
    paragraphs: [
      "A proven example used a SELL instruction with an entry at 207.70 and an SL at 207.50. PETE rejected it because a SELL requires the stop above the entry. The corrected instruction used Entry 207.70 and SL 207.90 and was then accepted and executed.",
      "That distinction is exactly why the Gateway exists: a trade instruction has to make structural sense before it becomes a broker order.",
    ],
  },
  {
    number: "06",
    title: "Risk and multi-leg basket execution",
    lead: "PETE treats a customer instruction as an execution object, not just a single BUY or SELL button press.",
    paragraphs: [
      "The Founding Beta has proven a four-target instruction end to end. The accepted message identified the symbol, direction, basket number, number of targets and percentage risk, then the execution message confirmed that four legs opened as a FULL_BASKET.",
      "The Telegram message is only the instruction. PETE creates and tracks a basket identity and reports what happened to the basket as broker execution progresses.",
    ],
  },
  {
    number: "07",
    title: "The customer stays in control",
    lead: "The core product boundary is deliberate: PETE executes customer-directed instructions on a customer-controlled trading account.",
    bullets: [
      "The customer chooses the broker and logs into that broker through MT4.",
      "The customer chooses the symbol, direction, entry, stop, targets and risk instruction.",
      "The customer controls whether the Gateway Agent is running and whether MT4 is open and connected.",
      "The customer deliberately enables broker writes or hard-arm only after the demo setup has been proven.",
      "The customer can use a Windows PC or a suitable Windows VPS; the optional ForexVPS partner service is not mandatory.",
      "The public Gateway infrastructure is separate from the developer's private PETE, Fred and autonomous trading estate.",
    ],
  },
  {
    number: "08",
    title: "Telegram is the control surface - not the whole product",
    lead: "Telegram makes the system easy to operate, but it is only one layer.",
    paragraphs: [
      "A chat interface is useful because it makes the control surface familiar. The value is that the message is backed by authorization, local installation state, MT4 connectivity checks, broker binding and lifecycle reporting.",
    ],
  },
  {
    number: "09",
    title: "The preflight check",
    lead: "The Founding Beta setup does not assume 'MT4 looks open, so it must be fine'. It has a dedicated preflight stage.",
    bullets: [
      "Common Files read and write.",
      "Current MT4 heartbeat.",
      "Broker account binding.",
      "MT4 connected state.",
      "MT4 trade permission.",
      "Online authorization requirement.",
    ],
    paragraphs: [
      "HF9 also fixed an important real-world case: an expired but otherwise valid Agent session is refreshed automatically in preflight and status, matching the recovery behaviour used by normal run and once operation.",
      "Do not continue to broker writes until PRE-FLIGHT PASSED is shown.",
    ],
  },
  {
    number: "10",
    title: "Installation and first-time setup",
    lead: "The setup order matters because the Gateway expects a real MT4 heartbeat before pairing and preflight can prove the route.",
    numbered: [
      "Subscribe and download the PETE customer ZIP.",
      "Right-click the ZIP and choose Extract All. Do not run PETE from inside the compressed ZIP.",
      "Choose where PETE will run: Windows PC, your own suitable Windows VPS, or the optional ForexVPS service.",
      "Open MT4 first and log into the intended broker account. Use a demo account for the first proof.",
      "Copy PETE_TradeGateway_Client_V1_RC0_8.ex4 into MQL4\\Experts.",
      "Restart MT4 or refresh Expert Advisors, then attach the PETE MT4 client to one chart.",
      "In MT4 Expert Advisor options, allow WebRequest to https://gateway.theperformanceengineer.uk.",
      "Initial EA setup: Allow live trading ON, RequireOnlineAuthorization true, PETE broker writes or hard-arm OFF. DLL imports are not required.",
      "Run 00_CONFIGURE_GATEWAY.bat.",
      "Run 01_PAIR_GATEWAY.bat.",
      "Run 02_PREFLIGHT.bat and stop until PRE-FLIGHT PASSED.",
      "Link Telegram using the supplied /start link and confirm with /settings.",
      "Run 03_RUN_GATEWAY.bat and keep the Gateway window open.",
      "Complete a demo execution.",
      "Only after the full demo path is proven should broker writes or hard-arm be enabled.",
    ],
  },
  {
    number: "11",
    title: "What has to be running day to day",
    lead: "PETE is software infrastructure. Like any execution path, the required components must be available when you expect it to trade.",
    bullets: [
      "The Windows PC or VPS that hosts PETE is switched on and connected.",
      "MT4 is open and logged into the intended broker account.",
      "The PETE MT4 client remains attached to its chart.",
      "The Gateway Agent is running and its window remains open.",
      "The broker and MT4 connection are healthy.",
      "The customer's subscription and online authorization remain valid.",
    ],
  },
  {
    number: "12",
    title: "Broker and symbol realities",
    lead: "PETE sits between an instruction and a real broker. That means broker-specific rules still exist.",
    bullets: [
      "The installation is paired to a broker account and server, not to a generic imaginary account.",
      "MT4 must be logged into the account PETE is intended to use.",
      "Different brokers can use different symbol names and suffixes, so symbol configuration matters.",
      "A broker can reject an order even after PETE has accepted the instruction; PETE reports execution outcomes rather than pretending an order opened when it did not.",
      "The beta is intentionally gathering evidence across different brokers, PCs, VPSs, Windows environments and symbol configurations.",
    ],
  },
  {
    number: "13",
    title: "Billing, access and release integrity",
    lead: "The Founding Beta is a real subscription product, not a loose EX4 passed around in a group chat.",
    bullets: [
      "Founding Beta is currently GBP 9.99 per month.",
      "The intention is that the Founding Beta price remains locked while the subscription remains continuously active.",
      "Customer access is tied into the live subscription and authorization path.",
      "Customer packages are released as sealed, versioned artifacts rather than silently edited in place.",
      "Each release has its own build identity so support can establish exactly what a customer is running.",
    ],
  },
  {
    number: "14",
    title: "Security and authorization boundaries",
    lead: "The useful security story is not a list of buzzwords. It is the set of boundaries PETE actually enforces in the current design.",
    bullets: [
      "A customer has a paired installation identity and broker binding.",
      "Online authorization is required by the MT4 client during the intended setup.",
      "The customer package uses its own local STATE directory, reducing cross-installation collisions on the same Windows machine.",
      "Subscription and customer state exists server-side and is part of the live access path.",
      "Pairing and Telegram linking use one-time or expiring credentials rather than assuming any Telegram user or PC is trusted.",
      "The public customer infrastructure is intentionally separate from the developer's private trading estate.",
    ],
  },
  {
    number: "15",
    title: "What PETE is - and what it is not",
    lead: "This distinction is central to the product.",
    bullets: [
      "PETE IS customer-directed execution and trade-management software.",
      "PETE IS an MT4 execution bridge with validation, authorization, basket identity and lifecycle feedback.",
      "PETE IS software operating through the customer's own broker account.",
      "PETE IS NOT a signals subscription.",
      "PETE IS NOT investment advice.",
      "PETE IS NOT a managed or pooled trading account.",
      "PETE IS NOT a profit guarantee.",
      "PETE public Gateway V1 IS NOT an autonomous public trading strategy.",
    ],
  },
  {
    number: "16",
    title: "Why use PETE instead of manually opening MT4?",
    lead: "If all you want is a BUY button, MT4 already has one. PETE is useful when you want a repeatable, controlled execution workflow around the trade instruction.",
    bullets: [
      "Remote control surface - Telegram gives you a familiar place to issue the instruction and receive the result.",
      "Structured instruction - symbol, side, entry, stop, targets and risk are treated as one trade or basket instruction.",
      "Validation before execution - known-invalid trade geometry can be rejected before it becomes a broker order.",
      "Authorized route - the instruction travels through the customer's paired Gateway and MT4 path.",
      "Basket identity - multi-leg execution is tracked as a basket rather than a pile of unrelated clicks.",
      "Lifecycle feedback - accepted, executed and closed states are reported rather than inferred.",
      "Repeatable setup checks - preflight turns 'I think it is connected' into a defined pass or fail stage.",
      "Release discipline - customers use a known sealed build rather than an ever-changing script folder.",
    ],
  },
  {
    number: "17",
    title: "Founding Beta: what customers are helping prove",
    lead: "The beta is intentionally small - approximately 5 to 10 users - because the purpose is evidence, not hype.",
    bullets: [
      "Can a new customer complete the payment and download route reliably?",
      "Can they extract and install the package without developer hand-holding?",
      "Does pairing work reliably on another Windows machine or VPS?",
      "Does preflight correctly diagnose the MT4 and broker route?",
      "Does Telegram linking and /settings work for a new customer identity?",
      "Can multiple brokers and symbol conventions be handled cleanly?",
      "Does the Agent recover normal session expiry without manual repair?",
      "Can a customer complete demo execution and receive lifecycle feedback?",
      "Are support requests becoming ordinary usage questions rather than software or platform defects?",
    ],
  },
  {
    number: "18",
    title: "Current beta vs planned full-release improvements",
    lead: "Not every good idea belongs in a hotfix. The beta baseline is deliberately frozen unless a genuine safety, capital, state, security or reliability defect justifies changing it.",
    bullets: [
      "Current live-beta defects affecting safety, state, security, execution or reliability can justify a controlled hotfix.",
      "Convenience, parser and user-experience improvements are collected into the planned full-release backlog.",
      "Planned ideas already include showing the actual account-currency amount at risk in feedback.",
      "Planned ideas include making the supplied target count control the maximum leg count automatically.",
      "Planned parser work includes more natural symbol-first or direction-first command wording while still failing closed when meaning is ambiguous.",
    ],
  },
  {
    number: "19",
    title: "Frequently asked questions",
    lead: "The short answers to the questions potential customers usually ask first.",
    bullets: [
      "Does PETE tell me what to buy or sell? No. Public Gateway V1 is customer-directed; you provide the trade instruction.",
      "Does PETE hold my money? No. The trading account remains with your broker and is accessed through your MT4 session.",
      "Do I need a VPS? No. A suitable Windows PC works; a VPS is useful if you want the environment available without leaving your PC on.",
      "Can I run it from the downloaded ZIP? No. Extract the ZIP fully first, then run PETE from the extracted folder.",
      "Do I need DLL imports? No. DLL imports are not required for the proven beta setup.",
      "Should I test on live money first? No. The proven onboarding flow uses a demo account for the first end-to-end test.",
      "What if preflight fails? Do not continue to live broker writes. Fix the failed route or check first.",
      "What if the broker rejects an order? Broker acceptance is still required; PETE reports the execution outcome.",
      "Can PETE run an autonomous strategy for me? Not in public Trade Gateway V1.",
      "Is Founding Beta really GBP 9.99 per month? Yes, with the intention that the price remains locked while the subscription remains continuously active.",
    ],
  },
  {
    number: "20",
    title: "Customer quick-reference checklist",
    lead: "Before expecting PETE to execute:",
    bullets: [
      "The PETE package has been fully extracted.",
      "MT4 is open and logged into the intended broker account.",
      "The PETE MT4 client is installed in MQL4\\Experts and attached to one chart.",
      "WebRequest to https://gateway.theperformanceengineer.uk is allowed.",
      "RequireOnlineAuthorization is true.",
      "01_PAIR_GATEWAY.bat completed successfully.",
      "02_PREFLIGHT.bat says PRE-FLIGHT PASSED.",
      "Telegram is linked and /settings is correct.",
      "03_RUN_GATEWAY.bat is running and the Gateway window remains open.",
      "Demo execution has been completed before enabling live broker writes or hard-arm.",
    ],
  },
  {
    number: "21",
    title: "The point of PETE",
    lead: "PETE is designed to make customer-directed trading execution more structured, controlled and explainable.",
    paragraphs: [
      "The visible interaction is deliberately simple: send an instruction in Telegram. The engineering underneath is deliberately not simple: customer and subscription state, paired installation, broker binding, MT4 heartbeat, preflight, online authorization, validation, Gateway routing, broker execution, basket identity and lifecycle feedback all exist so that a short message can become a controlled trading action on the customer's own broker account.",
      "Founding Beta: GBP 9.99 per month.",
      "Website: https://www.theperformanceengineer.uk",
      "Email: hello@theperformanceengineer.uk",
      "Telegram: @PETEGatewayBot",
      "The Performance Engineer Ltd | Company number 17437264",
      "This guide describes the current PETE Trade Gateway Founding Beta baseline as documented for HF9. Product behaviour may evolve through controlled releases. PETE is customer-directed execution and trade-management software; it is not a signals service, investment-advice service, managed account or profit-guarantee product.",
    ],
  },
];

function pdfEscape(value: string) {
  return String(value)
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/£/g, "GBP ")
    .replace(/©/g, "(c)")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function buildGuidePdf() {
  const pages: string[] = [];
  let commands: string[] = [];
  let pageNumber = 0;
  let y = 0;

  const fill = (c: number[]) => `${c[0]} ${c[1]} ${c[2]} rg`;
  const rect = (x: number, bottom: number, width: number, height: number, c: number[]) => {
    commands.push(`${fill(c)} ${x.toFixed(2)} ${bottom.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`);
  };
  const text = (value: string, x: number, fromTop: number, size = 11, font = "F1", c = BLACK) => {
    commands.push(`${fill(c)} BT /${font} ${size} Tf 1 0 0 1 ${x.toFixed(2)} ${(H - fromTop).toFixed(2)} Tm (${pdfEscape(value)}) Tj ET`);
  };
  const line = (x1: number, top1: number, x2: number, top2: number, width = 1, c = GOLD) => {
    commands.push(`${c[0]} ${c[1]} ${c[2]} RG ${width} w ${x1} ${(H - top1).toFixed(2)} m ${x2} ${(H - top2).toFixed(2)} l S`);
  };
  const wrap = (value: string, size = 11, width = W - 2 * M, factor = 0.52) => {
    const maxChars = Math.max(20, Math.floor(width / (size * factor)));
    const words = value.split(/\s+/);
    const lines: string[] = [];
    let current = "";
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length > maxChars && current) {
        lines.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }
    if (current) lines.push(current);
    return lines;
  };
  const addHeader = () => {
    rect(0, 0, W, H, [1, 1, 1]);
    rect(0, H - 56, W, 56, BLACK);
    text("THE PERFORMANCE ENGINEER", M, 34, 10, "F2", GOLD);
    text("PETE TRADE GATEWAY  |  CUSTOMER GUIDE", W - M - 240, 34, 9, "F1", [0.85, 0.85, 0.85]);
    line(M, 68, W - M, 68, 1, GOLD);
    y = 92;
  };
  const addFooter = () => {
    text("PETE Trade Gateway - Founding Beta", M, H - 28, 8, "F1", [0.45, 0.45, 0.45]);
    text(String(pageNumber), W - M - 10, H - 28, 8, "F2", GOLD);
  };
  const finishPage = () => {
    if (!commands.length) return;
    addFooter();
    pages.push(commands.join("\n"));
    commands = [];
  };
  const startPage = () => {
    finishPage();
    pageNumber += 1;
    addHeader();
  };
  const ensure = (height: number) => {
    if (y + height > H - 62) startPage();
  };
  const heading = (number: string, title: string) => {
    const headingLines = wrap(title.toUpperCase(), 23, W - 2 * M, 0.66);
    ensure(54 + headingLines.length * 30);
    text(number, M, y, 12, "F2", GOLD);
    y += 24;
    for (const headingLine of headingLines) {
      text(headingLine, M, y, 23, "F2", BLACK);
      y += 30;
    }
    line(M, y, W - M, y, 1.5, GOLD);
    y += 18;
  };
  const lead = (value: string) => {
    const lines = wrap(value, 13.5);
    ensure(lines.length * 20 + 10);
    for (const row of lines) {
      text(row, M, y, 13.5, "F2", GRAY);
      y += 20;
    }
    y += 8;
  };
  const paragraph = (value: string) => {
    const lines = wrap(value, 10.8);
    ensure(lines.length * 16 + 10);
    for (const row of lines) {
      text(row, M, y, 10.8, "F1", BLACK);
      y += 16;
    }
    y += 8;
  };
  const bullets = (items: string[]) => {
    for (const item of items) {
      const lines = wrap(item, 10.3, W - 2 * M - 22);
      ensure(lines.length * 15 + 9);
      text("-", M, y, 12, "F2", GOLD);
      lines.forEach((row, index) => text(row, M + 18, y + index * 15, 10.3, "F1", BLACK));
      y += lines.length * 15 + 7;
    }
    y += 4;
  };
  const numbered = (items: string[]) => {
    items.forEach((item, index) => {
      const lines = wrap(item, 10.2, W - 2 * M - 30);
      ensure(lines.length * 15 + 9);
      text(`${index + 1}.`, M, y, 10.2, "F2", GOLD);
      lines.forEach((row, lineIndex) => text(row, M + 26, y + lineIndex * 15, 10.2, "F1", BLACK));
      y += lines.length * 15 + 7;
    });
    y += 4;
  };

  pageNumber = 1;
  rect(0, 0, W, H, BLACK);
  line(M, 112, W - M, 112, 2, GOLD);
  text("THE PERFORMANCE ENGINEER", M, 88, 11, "F2", GOLD);
  text("PETE TRADE", M, 230, 36, "F2", [1, 1, 1]);
  text("GATEWAY", M, 276, 46, "F2", GOLD);
  text("FOUNDING BETA - CUSTOMER GUIDE", M, 330, 14, "F2", [0.8, 0.8, 0.8]);
  let coverY = 422;
  for (const row of wrap("Your trade. Your risk. Your broker. Executed through PETE.", 20)) {
    text(row, M, coverY, 20, "F2", [1, 1, 1]);
    coverY += 28;
  }
  coverY += 34;
  for (const row of wrap("A plain-English explanation of what PETE actually does - from Telegram instruction to broker execution, validation, lifecycle feedback and day-to-day operation.", 11)) {
    text(row, M, coverY, 11, "F1", [0.72, 0.72, 0.72]);
    coverY += 17;
  }
  text("Founding Beta baseline: HF9  |  Guide version 1.1  |  15 September 2026", M, 720, 9, "F1", [0.55, 0.55, 0.55]);
  text("theperformanceengineer.uk", M, 750, 10, "F2", GOLD);
  pages.push(commands.join("\n"));
  commands = [];

  for (const section of guide) {
    startPage();
    heading(section.number, section.title);
    lead(section.lead);
    if (section.paragraphs) section.paragraphs.forEach(paragraph);
    if (section.bullets) bullets(section.bullets);
    if (section.numbered) numbered(section.numbered);
  }
  finishPage();

  const objects: string[] = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  const kids: string[] = [];
  pages.forEach((stream, index) => {
    const pageObject = 5 + index * 2;
    const contentObject = pageObject + 1;
    kids.push(`${pageObject} 0 R`);
    objects[pageObject] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`;
    objects[contentObject] = `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`;
  });
  objects[2] = `<< /Type /Pages /Kids [${kids.join(" ")}] /Count ${pages.length} >>`;

  let output = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets: number[] = [0];
  for (let index = 1; index < objects.length; index += 1) {
    offsets[index] = Buffer.byteLength(output, "latin1");
    output += `${index} 0 obj\n${objects[index]}\nendobj\n`;
  }
  const xref = Buffer.byteLength(output, "latin1");
  output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let index = 1; index < objects.length; index += 1) {
    output += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

  return Buffer.from(output, "latin1");
}

export async function GET() {
  const pdf = buildGuidePdf();
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="PETE_Trade_Gateway_Customer_Guide_v1_1.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
