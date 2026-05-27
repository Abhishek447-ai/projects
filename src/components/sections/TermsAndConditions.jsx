export default function TermsAndConditions() {
  return (
    <section className="min-h-screen px-6 py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black text-[#5e4d3f] mb-4">
        Terms & Conditions
      </h1>
      <p className="text-[var(--muted)] mb-12">Last updated: May 2026</p>

      <div className="space-y-10 text-[var(--muted)] leading-8 text-[16px]">

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">1. Introduction</h2>
          <p>
            Welcome to Rising SuN Tech Hub. By accessing or using our website and services,
            you agree to be bound by these Terms and Conditions. Please read them carefully
            before proceeding.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">2. Services</h2>
          <p>
            Rising SuN Tech Hub provides web development, UI/UX design, startup platform
            development, and custom digital solutions. All project scopes, timelines, and
            deliverables are agreed upon before work begins and documented in a project
            agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">3. Payment Terms</h2>
          <p className="mb-6">
            All projects follow a structured 3-stage payment plan to ensure transparency
            and trust for both parties:
          </p>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#f0ebe3] flex items-start gap-4">
              <span className="text-2xl font-black text-[var(--primary)] min-w-[60px]">10%</span>
              <div>
                <p className="font-bold text-[#5e4d3f]">On Order Confirmation</p>
                <p className="text-sm mt-1">Paid when the client confirms the project and work officially begins.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#f0ebe3] flex items-start gap-4">
              <span className="text-2xl font-black text-[var(--primary)] min-w-[60px]">40%</span>
              <div>
                <p className="font-bold text-[#5e4d3f]">At Halfway Milestone</p>
                <p className="text-sm mt-1">Paid when 50% of the project is completed and shared with the client for review.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#f0ebe3] flex items-start gap-4">
              <span className="text-2xl font-black text-[var(--primary)] min-w-[60px]">50%</span>
              <div>
                <p className="font-bold text-[#5e4d3f]">On Final Delivery</p>
                <p className="text-sm mt-1">Paid after the complete project is delivered, reviewed and approved by the client.</p>
              </div>
            </div>
          </div>
          <p className="mt-6">
            All payments are non-refundable once the respective milestone work has commenced.
            Prices are as listed on our website and may vary based on project complexity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">4. Intellectual Property</h2>
          <p>
            Upon full payment, the client owns the final delivered product. Rising Sun Tech
            Hub retains the right to showcase the project in our portfolio unless the client
            requests otherwise in writing. All source code, designs, and assets created
            during the project remain our property until full payment is received.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">5. Revisions & Changes</h2>
          <p>
            Each project includes up to <strong className="text-[#5e4d3f]">3 rounds of revisions</strong> within
            the agreed scope. Additional revisions or scope changes will be billed separately
            at our standard hourly rate. Change requests must be submitted in writing via
            email or WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">6. Timeline & Delivery</h2>
          <p>
            Project timelines are estimates and may vary based on client feedback response
            time and scope changes. Delays caused by the client (late content, feedback, or
            payments) will extend the delivery timeline accordingly. Rising  Sun Tech Hub is
            not liable for delays beyond our control.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">7. Confidentiality</h2>
          <p>
            We respect your privacy. Any business information, ideas, or data shared with
            us during the project will be kept strictly confidential and will not be shared
            with third parties without your written consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">8. Limitation of Liability</h2>
          <p>
            Rising SuN Tech Hub is not liable for any indirect, incidental, or consequential
            damages arising from the use of our services. Our total liability is limited to
            the amount paid for the specific project in question.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">9. Termination</h2>
          <p>
            Either party may terminate a project with written notice. If the client
            terminates the project, the advance payment is non-refundable. If Rising Sun
            Tech Hub terminates the project, a pro-rated refund will be issued based on
            work completed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes
            arising from these terms shall be subject to the jurisdiction of courts in
            India.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#5e4d3f] mb-3">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="mt-4 p-6 rounded-3xl bg-[#f0ebe3] text-[#5e4d3f]">
            <p className="font-bold text-lg">Rising SuN Tech Hub</p>
            <p>Email:risingsuntechhub.com</p>
            <p>WhatsApp: +91 9535554218</p>
            <p>India</p>
          </div>
        </div>

      </div>
    </section>
  )
}