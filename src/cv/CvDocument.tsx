/**
 * Deterministic, polished one-page CV rendered with @react-pdf/renderer
 * (pdfkit under the hood) — NOT the browser's "Print to PDF". Uses only the
 * built-in Helvetica family so output is byte-stable and offline.
 *
 * This module is loaded lazily (on click) to keep the renderer out of the
 * initial bundle.
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
  education,
  certifications,
  humanLanguages,
} from "../data/cv.ts";

const ACCENT = "#c4622d";
const INK = "#1a1a1a";
const MUTE = "#6a6a6a";
const LINE = "#dcd6cf";

const s = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 28,
    paddingHorizontal: 38,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: INK,
    lineHeight: 1.4,
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: -0.5, lineHeight: 1.1 },
  title: { fontSize: 11, color: ACCENT, fontFamily: "Helvetica-Bold", marginTop: 4, lineHeight: 1.2 },
  contact: { fontSize: 8.5, color: MUTE, marginTop: 4 },
  summary: { marginTop: 8, color: "#333", fontSize: 9 },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: ACCENT,
    marginBottom: 6,
  },
  section: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: LINE,
    paddingTop: 8,
  },
  role: { marginBottom: 7 },
  roleHead: { flexDirection: "row", justifyContent: "space-between" },
  company: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  roleTitle: { color: "#444", fontSize: 9 },
  period: { color: MUTE, fontSize: 8.5 },
  bullet: { flexDirection: "row", marginTop: 2 },
  dot: { color: ACCENT, marginRight: 4 },
  bulletText: { flex: 1, fontSize: 8.7, color: "#333" },
  earlier: { fontSize: 8.7, color: "#333" },
  twoCol: { flexDirection: "row", gap: 18 },
  col: { flex: 1 },
  skillLine: { marginBottom: 3 },
  skillLabel: { fontFamily: "Helvetica-Bold", fontSize: 8.5 },
  skillItems: { fontSize: 8.5, color: "#444" },
  eduItem: { marginBottom: 4 },
  eduDegree: { fontFamily: "Helvetica-Bold", fontSize: 9 },
  eduMeta: { fontSize: 8.3, color: MUTE },
  inline: { fontSize: 8.5, color: "#444" },
});

/** Latest / most relevant roles, trimmed to fit one page. */
const FEATURED = experience.slice(0, 4);
const MAX_BULLETS = [3, 2, 2, 2];
/** Compact, grouped skills for the print version. */
const PRINT_SKILLS = [
  "Languages",
  "Backend & Frameworks",
  "Architecture & Patterns",
  "Payments & Compliance",
  "Cloud & DevOps",
  "AI-Assisted Engineering",
];

function CvDocument() {
  const featuredKeys = new Set(FEATURED.map((r) => r.company));
  const earlier = experience.filter((r) => !featuredKeys.has(r.company));

  return (
    <Document
      title={`${profile.name} — CV`}
      author={profile.name}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={s.page}>
        <View>
          <Text style={s.name}>{profile.name}</Text>
          <Text style={s.title}>
            {profile.title} · {profile.tagline}
          </Text>
          <Text style={s.contact}>
            {profile.location} · {profile.email} ·{" "}
            <Link src={profile.linkedinUrl}>{profile.linkedin}</Link> ·{" "}
            <Link src={profile.githubUrl}>{profile.github}</Link>
          </Text>
          <Text style={s.summary}>{profile.summary}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Experience</Text>
          {FEATURED.map((role, i) => (
            <View key={role.company} style={s.role} wrap={false}>
              <View style={s.roleHead}>
                <Text style={s.company}>
                  {role.company}
                  <Text style={s.roleTitle}> — {role.role}</Text>
                </Text>
                <Text style={s.period}>{role.period}</Text>
              </View>
              {role.highlights.slice(0, MAX_BULLETS[i]).map((h) => (
                <View key={h} style={s.bullet}>
                  <Text style={s.dot}>›</Text>
                  <Text style={s.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
          <Text style={s.earlier}>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>Earlier: </Text>
            {earlier
              .map((r) => `${r.company} (${r.period.replace(/\s/g, " ")})`)
              .join("  ·  ")}{" "}
            — .NET microservices, GovTech portals, B2B logistics & desktop apps.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Core Skills</Text>
          {skills
            .filter((g) => PRINT_SKILLS.includes(g.label))
            .map((g) => (
              <View key={g.label} style={s.skillLine}>
                <Text>
                  <Text style={s.skillLabel}>{g.label}: </Text>
                  <Text style={s.skillItems}>{g.items.join(" · ")}</Text>
                </Text>
              </View>
            ))}
        </View>

        <View style={s.section}>
          <View style={s.twoCol}>
            <View style={s.col}>
              <Text style={s.sectionTitle}>Education</Text>
              {education.map((e) => (
                <View key={e.degree} style={s.eduItem}>
                  <Text style={s.eduDegree}>{e.degree}</Text>
                  <Text style={s.eduMeta}>
                    {e.school} · {e.period}
                  </Text>
                </View>
              ))}
              <Text style={[s.sectionTitle, { marginTop: 8 }]}>Languages</Text>
              <Text style={s.inline}>
                {humanLanguages.map((l) => `${l.language} (${l.level})`).join(" · ")}
              </Text>
            </View>
            <View style={s.col}>
              <Text style={s.sectionTitle}>Certifications</Text>
              {certifications.slice(0, 6).map((c) => (
                <View key={c.name} style={s.bullet}>
                  <Text style={s.dot}>›</Text>
                  <Text style={s.bulletText}>
                    {c.name}
                    <Text style={s.eduMeta}> — {c.issuer}</Text>
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

/** Builds the CV as a Blob — deterministic, no Chrome involved. */
export async function buildCvBlob(): Promise<Blob> {
  return pdf(<CvDocument />).toBlob();
}
