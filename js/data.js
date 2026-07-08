// Source: Lifeline Medical Group Inc. — Recovery Residence Session Summary, July 7, 2026
const TRACKER_DATA = [
  {
    id: "licenses",
    title: "Licenses Needed",
    note: "Lifeline runs the recovery residence on rental properties leased from the market (master-lease model), not on Stephanie's personal home. Her home's disability zoning change does not carry over to a recovery house.",
    items: [
      {
        id: "lic-ddap",
        text: "DDAP license (state) — same statewide in PA. Needed if taking state/federal funding or referrals. About $250.",
        detail: "Phone: 717-783-8675"
      },
      {
        id: "lic-local",
        text: "Local rental license — depends on the town.",
        detail: "Philadelphia uses L&I. Montgomery County has no county-wide license; each town (like Pottstown) issues its own."
      },
      {
        id: "lic-zoning",
        text: "Zoning approval — checked per exact address, every time.",
        detail: null
      }
    ]
  },
  {
    id: "one-rule",
    title: "The One Rule That Protects You",
    note: null,
    items: [
      {
        id: "rule-lease",
        text: "Never sign a lease until zoning is confirmed for that exact address.",
        detail: "See the \"Check Before You Lease\" checklist. (Not included in the source session summary — add its items below once you have them.)"
      }
    ]
  },
  {
    id: "parr-steps",
    title: "PARR Certification — Steps",
    note: "Contact: 215-380-0904, f.way@parronline.org",
    items: [
      {
        id: "parr-1",
        text: "Review the NARR Standard and PARR Code of Ethics; do a self-assessment.",
        detail: null
      },
      {
        id: "parr-2",
        text: "Apply online at parronline.org and pay the membership fee.",
        detail: null
      },
      {
        id: "parr-3",
        text: "Submit your documents (all 12 drafted — see Documents tab).",
        detail: null
      },
      {
        id: "parr-4",
        text: "Pass an on-site inspection with resident/staff interviews.",
        detail: null
      },
      {
        id: "parr-5",
        text: "Get certified; renew yearly.",
        detail: null
      }
    ]
  },
  {
    id: "before-submit",
    title: "Before You Submit",
    note: null,
    items: [
      {
        id: "sub-1",
        text: "Fill in every blank (rent, fees, house manager name, curfew, dates).",
        detail: null
      },
      {
        id: "sub-2",
        text: "Verify your insurance coverage amount with your agent — do not guess.",
        detail: null
      },
      {
        id: "sub-3",
        text: "Remember: DDAP licensing is separate from PARR certification, and often required alongside it.",
        detail: null
      }
    ]
  }
];

const DOCUMENTS = [
  { id: "doc-01", file: "01-house-rules.md", title: "House Rules" },
  { id: "doc-02", file: "02-resident-agreement.md", title: "Resident Agreement" },
  { id: "doc-03", file: "03-resident-rights.md", title: "Resident Rights" },
  { id: "doc-04", file: "04-relapse-discharge-policy.md", title: "Relapse & Discharge Policy" },
  { id: "doc-05", file: "05-governance-structure.md", title: "Governance Structure" },
  { id: "doc-06", file: "06-grievance-procedure.md", title: "Grievance Procedure" },
  { id: "doc-07", file: "07-insurance-record.md", title: "Insurance Record", attachNote: "Attach your policy" },
  { id: "doc-08", file: "08-occupancy-permit-record.md", title: "Occupancy Permit Record", attachNote: "Attach your permits" },
  { id: "doc-09", file: "09-fire-safety-policy-checklist.md", title: "Fire Safety Policy & Checklist" },
  { id: "doc-10", file: "10-financial-policy.md", title: "Financial Policy" },
  { id: "doc-11", file: "11-good-neighbor-policy.md", title: "Good Neighbor Policy" },
  { id: "doc-12", file: "12-code-of-ethics.md", title: "Code of Ethics" }
];
