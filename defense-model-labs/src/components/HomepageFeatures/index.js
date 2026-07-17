import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const LabList = [
  {
    number: '1A',
    title: 'Introduction to IBM Defense Model with ARGUS AI',
    tools: 'IBM Defense Model, ARGUS AI',
    description:
      'Get started with the IBM Defense Model and explore ARGUS AI capabilities for advanced AI-powered operations.',
    to: '/docs/lab-01a-intro-defense-model/',
  },
  {
    number: '1B',
    title: 'Unstructured Data Processing',
    tools: 'IBM Defense Model',
    description:
      'Learn techniques for processing and analyzing unstructured data using the IBM Defense Model.',
    to: '/docs/lab-01b-unstructured-data/',
  },
  {
    number: '02',
    title: 'IBM Defense Model Factchecker',
    tools: 'IBM Defense Model',
    description:
      'Implement fact-checking capabilities and verification mechanisms to validate information accuracy.',
    to: '/docs/lab-02-factchecker/',
  },
  {
    number: '03',
    title: 'Fine Tuning with IBM Defense Model',
    tools: 'IBM Defense Model',
    description:
      'Learn to fine-tune the IBM Defense Model for specific use cases and optimize performance.',
    to: '/docs/lab-03-fine-tuning/overview',
  },
];

function LabCard({number, title, tools, description, to}) {
  return (
    <div className={clsx('col col--3', styles.labCardCol)}>
      <div className={styles.labCard}>
        <div className={styles.labNumber}>Lab {number}</div>
        <Heading as="h3" className={styles.labTitle}>{title}</Heading>
        <p className={styles.labTools}>{tools}</p>
        <p className={styles.labDescription}>{description}</p>
        <Link className="button button--primary button--sm" to={to}>
          Start Lab →
        </Link>
      </div>
    </div>
  );
}

function ResourcesCard() {
  return (
    <div className={clsx('col col--3', styles.labCardCol)}>
      <div className={styles.labCard}>
        <div className={clsx(styles.labNumber, styles.resourcesBadge)}>Resources</div>
        <Heading as="h3" className={styles.labTitle}>Event Resources</Heading>
        <p className={styles.labTools}>Presentations · Videos · Downloads</p>
        <p className={styles.labDescription}>
          Browse event materials, product documentation, and additional learning content for the bootcamp.
        </p>
        <Link className="button button--outline button--primary button--sm" to="/docs/resources/">
          Explore →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.labs}>
      <div className="container">
        <div className="row">
          {LabList.map((props, idx) => (
            <LabCard key={idx} {...props} />
          ))}
          <ResourcesCard />
        </div>
      </div>
    </section>
  );
}

// Made with Bob
