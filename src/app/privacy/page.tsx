
const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
          <p>
            Your privacy is important to us. It is Newslisted's policy to respect your privacy regarding any information we may collect from you across our website,{" "}
            <a href="https://newslisted.com">https://newslisted.com</a>, and other sites we own and operate.
          </p>

          <h2 className="text-2xl font-semibold pt-4">1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The only personal information we might collect is what you voluntarily provide through our contact form, such as your name and email address.
          </p>

          <h2 className="text-2xl font-semibold pt-4">2. Use of Information</h2>
          <p>
            We may use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries, comments, and feedback.</li>
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">3. Log Data and Cookies</h2>
          <p>
            Like most website operators, we collect information that your browser sends whenever you visit our site. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, and other statistics. We do not use cookies to track personal information.
          </p>
          
           <h2 className="text-2xl font-semibold pt-4">4. AI Features</h2>
          <p>
            Our "Suggest" feature uses generative AI to recommend articles. The queries sent to the AI model include your search terms and selected filters but do not include any personal identifying information. The AI service provider may store this anonymized data for a limited period to improve their services, but it is not linked to you.
          </p>

          <h2 className="text-2xl font-semibold pt-4">5. Security</h2>
          <p>
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold pt-4">6. Links to Other Sites</h2>
          <p>
            Our website contains links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>

          <h2 className="text-2xl font-semibold pt-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <p>This policy is effective as of today's date.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
