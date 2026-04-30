import React from "react";
import "./Internal-Blog.css";
import { Link } from "react-router-dom";
import cta from "../blogs/blogs-images/Group.png";

export default function Blog40() {
  return (
    <>
      <div className="breach-article-wrapper">
        <div className="breach-article-content">
          <section>
            <p>
              One of your employees can probably approve their own purchase
              orders. In most SAP environments where role design has not been
              actively governed, at least one user has the ability to create and
              approve their own financial transactions.
            </p>
            <p>
              This is not a theory. It is one of the most consistent findings in
              SAP access reviews—and one of the least visible to the
              organisations affected by it. Whether it exists is rarely the real
              question. The question is whether the organisation is aware of it.
            </p>
          </section>

          <section>
            <h2>How it happens</h2>
            <p>
              A user—often a long‑tenured employee whose role has evolved over
              the years—accumulates access to two functions that should never
              sit with one person:
            </p>
            <ul>
              <li>the ability to create a purchase order</li>{" "}
              <li>and the ability to approve it</li>
              Or:
              <li> the ability to create a vendor </li>{" "}
              <li>and the ability to make a payment to that vendor</li>
            </ul>
            <p>
              These are called Segregation of Duties (SoD) conflicts. They are
              the access pattern behind the majority of enterprise financial
              fraud cases—and in many organisations where fraud has not
              occurred, the conditions for it exist unnoticed.
            </p>
            <p>
              They do not happen because someone planned it. They happen because
              SAP roles accumulate over time with no governance model in place.
              A project ends. The access stays. A person changes roles. The old
              permissions remain. Over time, a user gains the ability to start
              and finish a financial transaction without an independent check.
            </p>
          </section>

          <section>
            <h2>What this means for the CFO</h2>
            <p>
              Unmitigated Segregation of Duties conflicts create a real gap in
              financial controls. Whether that gap has been exploited or not, it
              exists—and auditors treat it as such.
            </p>
            <p>
              SOX and COSO‑based internal control frameworks classify these
              situations as material control failures. When personal data is
              involved, they also conflict with GDPR access control
              requirements.
            </p>
            <p>In practice, three outcomes matter:</p>
            <p>
              <strong>
                First, your financial controls are ineffective at a critical
                point in the process.
              </strong>{" "}
              A control designed to prevent error or fraud does not function if
              one user can both initiate and approve a transaction.
            </p>
            <p>
              <strong>Second, auditors will find it.</strong> These conflicts
              frequently surface during SAP access evaluations. When discovered
              as an audit finding, they require a documented remediation
              plan—under time pressure, scrutiny, and with reputational impact.
            </p>
            <p>
              <strong>Third, the exposure continues.</strong> Every financial
              close completed with unresolved SoD conflicts represents a period
              where effective control was missing. If questioned later, that
              reality is difficult to defend.
            </p>
            <p>
              Remediation after an audit finding costs multiples of what
              prevention costs.
            </p>
          </section>

          <section>
            <h2>What this means for the CIO</h2>
            <p>
              This is a governance failure, not a technical one. The SAP system
              is operating as configured. The issue is not the technology—it is
              the absence of a governance model that prevents the accumulation
              of conflicting access over time.
            </p>
            <p>
              <strong>Your name appears on the controls report.</strong>
              When an auditor or a board‑level risk committee asks about the
              effectiveness of SAP access controls, the answer reflects directly
              on the function responsible for maintaining them. An unresolved
              SoD conflict identified in an audit is rarely a system finding. It
              is a finding related to process ownership, decision‑making, and
              accountability.
            </p>
            <p>
              <strong>Timing matters.</strong>
              Identifying and remediating conflicts proactively is a structured,
              manageable task. Doing so reactively—after an audit discovery—is a
              very different experience.
            </p>
          </section>

          <section>
            <h2>Why it persists</h2>
            <p>
              Most organisations are aware of Segregation of Duties as a
              concept. Awareness is not the problem.
              <strong>Ownership is.</strong>
            </p>
            <p>
              Remediation requires a decision. Removing conflicting access
              limits a user’s ability to perform tasks they may have handled for
              years. That decision requires authority—someone who can assess
              what access is appropriate, communicate the change to the
              business, and ensure the same conflict does not reappear six
              months later.
            </p>
            <p>In many organisations, that authority is unclear.</p>
            <ul>
              <li>IT manages the system.</li>
              <li>Compliance tracks the findings.</li>
              <li>The business approves access requests.</li>
            </ul>
            <p>The conflicts persist in the space between those functions.</p>
          </section>

          <section>
            <h2>The fix is not complicated. But it requires a decision.</h2>
            <p>
              Addressing SAP SoD conflicts does not require new technology. It
              requires three things:
            </p>
            <ul>
              <li>
                A clear view of which users have conflicting access, and where
              </li>
              <li>
                A prioritisation model that distinguishes between conflicts
                requiring immediate removal and those that demand compensating
                controls
              </li>
              <li>
                A named owner with the authority and accountability to make
                access decisions and enforce them
              </li>
            </ul>
            <p>
              This is how access is governed at s4access. Not through technical
              configuration alone—but through a governance model that allows you
              to answer, at any point in time, who has access to what, whether
              it is appropriate, and what has changed since it was last
              reviewed.
            </p>
          </section>

          <section>
            <h2>The question worth asking this quarter</h2>
            <p>
              Has your organisation ever mapped which SAP users have conflicting
              financial access?
            </p>
            <p>
              Most have not—not because the question is irrelevant, but because
              no one has asked for an answer.
            </p>
            <p>
              If your last financial close was completed without that
              visibility, the current quarter began in the same position. The
              conflicts that existed then still exist now.
            </p>
          </section>
        </div>
      </div>
      {/* CTA Section */}
      <section className="blog-container">
        <div className="blog-contact-us-section">
          <div className="blog-left-image only-windows">
            <img src={cta} alt="Contact s4access" />
          </div>

          <div className="blog-right-content">
            <div className="blog-right-text">
              <p className="text-white" style={{ fontWeight: 600 }}>
                Unseen SoD conflicts don’t reduce risk, they leave it exposed.
              </p>
            </div>

            <div className="blog-right-button">
              <Link to="/Contact" className="button-green">
                <span>Get Started</span>
                <span>
                  <i className="bi bi-arrow-up"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}