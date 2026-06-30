// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'what-is-defense-model',
    'what-is-argus-ai',
    'background',
    {
      type: 'category',
      label: 'Lab 1A: Introduction to IBM Defense Model with ARGUS AI',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/lab-setup',
          label: 'Lab Setup',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-01-upload-aar',
          label: 'Step 1: Upload AAR',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-02-request-summary',
          label: 'Step 2: Request Summary',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-03-review-summary',
          label: 'Step 3: Review Summary',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-04-extract-entities',
          label: 'Step 4: Extract Entities',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-05-examine-entities',
          label: 'Step 5: Examine Entities',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-06-entity-enrichment',
          label: 'Step 6: Entity Enrichment',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-06a-vetted-sources',
          label: '🔍 Vetted Information Sources',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-07-generate-schema',
          label: 'Step 7: Generate Schema',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-08-download-json',
          label: 'Step 8: Download JSON',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/step-09-review-json',
          label: 'Step 9: Review JSON',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/data-standards',
          label: '🔍 Common Data Standards',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/key-benefits',
          label: '🔍 Key Benefits',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/completion',
          label: 'Lab Completion',
        },
        {
          type: 'doc',
          id: 'lab-01a-intro-defense-model/technical-reference',
          label: 'Technical Reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Lab 1B: Unstructured Data Processing with IBM Defense Model',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/architecture',
          label: 'System Architecture',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/lab-setup',
          label: 'Lab Setup',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/step-01-query1',
          label: 'Step 1: Query 1',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/step-02-query2',
          label: 'Step 2: Query 2',
        },
        {
          type: 'doc',
          id: 'lab-01b-unstructured-data/completion',
          label: 'Lab Completion',
        },
      ],
    },
    {
      type: 'category',
      label: 'Lab 2: Defense Intelligence Information Checker',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'lab-02-factchecker/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/lab-setup',
          label: 'Lab Setup',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/prompt-management',
          label: 'Prompt Management',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-01-known-true',
          label: 'Step 1: Known True Claim',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-02-implausible',
          label: 'Step 2: Implausible Claim',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-03-operational-status',
          label: 'Step 3: Operational Status',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-04-equipment-id',
          label: 'Step 4: Equipment Identification',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-05-equipment-depth',
          label: 'Step 5: Equipment Depth',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-06-inventory-precision',
          label: 'Step 6: Inventory Precision',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-07-supply-chain',
          label: 'Step 7: Supply Chain Verification',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-08-oob-integrity',
          label: 'Step 8: Order of Battle Integrity',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/step-09-military-group',
          label: 'Step 9: Military Group Verification',
        },
        {
          type: 'doc',
          id: 'lab-02-factchecker/completion',
          label: 'Lab Completion',
        },
      ],
    },
    {
      type: 'category',
      label: 'Lab 3: Fine Tuning with IBM Defense Model',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'lab-03-fine-tuning/index',
          label: 'Overview',
        },
      ],
    },
  ],
  resourcesSidebar: [
    {type: 'autogenerated', dirName: 'resources'},
  ],
};

export default sidebars;

// Made with Bob
