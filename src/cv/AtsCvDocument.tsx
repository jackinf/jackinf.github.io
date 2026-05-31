/**
 * ATS-friendly CV rendered with @react-pdf/renderer.
 *
 * Unlike CvDocument (the polished, one-page, visually-designed version), this
 * variant is optimised to pass through Applicant Tracking Systems and keyword
 * filters:
 *
 *  - Single column, top-to-bottom flow (multi-column layouts get scrambled by
 *    ATS text extractors).
 *  - Standard, unambiguous section headings ("Professional Experience",
 *    "Technical Skills", "Education", "Certifications").
 *  - Plain black text on white, built-in Helvetica only — real selectable text,
 *    no images, no icons, no decorative glyphs that break parsing.
 *  - Full keyword coverage: every role, every bullet, every skill group, plus a
 *    dedicated "Core Competencies" keyword line. Acronyms are spelled out.
 *  - May run to two pages — ATS does not penalise length; coverage wins.
 *
 * Tailor per application by editing src/data/cv.ts (or the ATS_KEYWORDS list
 * below) so the wording mirrors the specific job description.
 */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  pdf,
} from "@react-pdf/renderer";
import {
  profile,
  experience,
  skills,
  projects,
  education,
  certifications,
  humanLanguages,
} from "../data/cv.ts";

const INK = "#000000";

const s = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: INK,
    lineHeight: 1.25,
  },
  name: { fontSize: 17, fontFamily: "Helvetica-Bold", lineHeight: 1.15 },
  title: { fontSize: 10.5, fontFamily: "Helvetica-Bold", marginTop: 3, lineHeight: 1.2 },
  contact: { fontSize: 9, marginTop: 3, lineHeight: 1.3 },
  summaryLabel: { fontFamily: "Helvetica-Bold" },
  summary: { marginTop: 6, fontSize: 9 },

  sectionTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginTop: 11,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: INK,
  },

  role: { marginTop: 6 },
  roleHead: { flexDirection: "row", justifyContent: "space-between" },
  roleTitle: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  period: { fontSize: 9 },
  roleMeta: { fontSize: 9, marginBottom: 1 },

  bullet: { flexDirection: "row", marginTop: 1 },
  dash: { width: 9, fontSize: 9 },
  bulletText: { flex: 1, fontSize: 9 },

  para: { fontSize: 9, marginTop: 2 },
  skillLine: { fontSize: 9, marginTop: 1.5 },
  label: { fontFamily: "Helvetica-Bold" },
  eduItem: { marginTop: 3 },
  eduDegree: { fontFamily: "Helvetica-Bold", fontSize: 9.5 },
  eduMeta: { fontSize: 9 },
});

/**
 * A flat keyword line that mirrors the language recruiters and ATS scans look
 * for. Spell out acronyms both ways so a match fires either form. Tailor this
 * per application to echo the exact job description.
 */
const ATS_KEYWORDS = [
  "Software Engineer",
  "Backend Engineer",
  "Full-Stack Engineer",
  "Distributed Systems",
  "Microservices",
  "Event-Driven Architecture",
  "Event Sourcing",
  "CQRS",
  "Domain-Driven Design (DDD)",
  "Multi-Tenant SaaS",
  "Scalability",
  "High Availability",
  "Fault Tolerance",
  "REST APIs",
  "Message Queues",
  "Payment Systems",
  "Fintech",
  "SEPA",
  "Strong Customer Authentication (SCA)",
  "3-D Secure",
  "Confirmation of Payee (CoP)",
  "PCI DSS",
  "Cloud (GCP, Azure)",
  "Kubernetes",
  "Docker",
  "Infrastructure as Code (IaC)",
  "Terraform",
  "CI/CD",
  "Observability",
  "On-Call",
  "Agile / Scrum",
  "Team Leadership",
];

function AtsCvDocument() {
  return (
    <Document
      title={`${profile.name} — CV (ATS)`}
      author={profile.name}
      subject="Curriculum Vitae"
      keywords={ATS_KEYWORDS.join(", ")}
    >
      <Page size="A4" style={s.page}>
        {/* Header */}
        <Text style={s.name}>{profile.name}</Text>
        <Text style={s.title}>
          {profile.title} — {profile.tagline}
        </Text>
        <Text style={s.contact}>
          {profile.location} | {profile.email} |{" "}
          <Link src={profile.linkedinUrl}>{profile.linkedin}</Link> |{" "}
          <Link src={profile.githubUrl}>{profile.github}</Link>
        </Text>

        {/* Summary */}
        <Text style={s.sectionTitle}>Professional Summary</Text>
        <Text style={s.summary}>{profile.summary}</Text>

        {/* Core competencies / keyword line */}
        <Text style={s.sectionTitle}>Core Competencies</Text>
        <Text style={s.para}>{ATS_KEYWORDS.join(" • ")}</Text>

        {/* Experience — every role, every bullet */}
        <Text style={s.sectionTitle}>Professional Experience</Text>
        {experience.map((role) => (
          <View key={role.company} style={s.role} wrap={false}>
            <View style={s.roleHead}>
              <Text style={s.roleTitle}>
                {role.role}, {role.company}
              </Text>
              <Text style={s.period}>{role.period}</Text>
            </View>
            <Text style={s.roleMeta}>
              {role.companyNote ? `${role.companyNote} — ` : ""}
              {role.location}
            </Text>
            {role.highlights.map((h) => (
              <View key={h} style={s.bullet}>
                <Text style={s.dash}>-</Text>
                <Text style={s.bulletText}>{h}</Text>
              </View>
            ))}
            {role.stack && role.stack.length > 0 && (
              <Text style={s.skillLine}>
                <Text style={s.label}>Technologies: </Text>
                {role.stack.join(", ")}
              </Text>
            )}
          </View>
        ))}

        {/* Skills — full list, all groups */}
        <Text style={s.sectionTitle}>Technical Skills</Text>
        {skills.map((g) => (
          <Text key={g.label} style={s.skillLine}>
            <Text style={s.label}>{g.label}: </Text>
            {g.items.join(", ")}
          </Text>
        ))}

        {/* Selected projects */}
        <Text style={s.sectionTitle}>Selected Projects</Text>
        {projects.map((p) => (
          <View key={p.name} style={s.bullet}>
            <Text style={s.dash}>-</Text>
            <Text style={s.bulletText}>
              <Text style={s.label}>{p.name}{p.year ? ` (${p.year})` : ""}: </Text>
              {p.description} [{p.tags.join(", ")}]
            </Text>
          </View>
        ))}

        {/* Education */}
        <Text style={s.sectionTitle}>Education</Text>
        {education.map((e) => (
          <View key={e.degree} style={s.eduItem}>
            <Text style={s.eduDegree}>{e.degree}</Text>
            <Text style={s.eduMeta}>
              {e.school} | {e.period}
              {e.note ? ` | ${e.note}` : ""}
            </Text>
          </View>
        ))}

        {/* Certifications */}
        <Text style={s.sectionTitle}>Certifications</Text>
        {certifications.map((c) => (
          <View key={c.name} style={s.bullet}>
            <Text style={s.dash}>-</Text>
            <Text style={s.bulletText}>
              {c.name} — {c.issuer}
              {c.year ? ` (${c.year})` : ""}
            </Text>
          </View>
        ))}

        {/* Languages */}
        <Text style={s.sectionTitle}>Languages</Text>
        <Text style={s.para}>
          {humanLanguages.map((l) => `${l.language} (${l.level})`).join(", ")}
        </Text>
      </Page>
    </Document>
  );
}

/** Builds the ATS-friendly CV as a Blob — deterministic, no Chrome involved. */
export async function buildAtsCvBlob(): Promise<Blob> {
  return pdf(<AtsCvDocument />).toBlob();
}
