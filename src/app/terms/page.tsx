
const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
          Terms of Service
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
          <p>
            By accessing the website at{" "}
            <a href="https://newslisted.com">https://newslisted.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-semibold pt-4">1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Newslisted's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Newslisted's website;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Newslisted at any time.
          </p>

          <h2 className="text-2xl font-semibold pt-4">2. Disclaimer</h2>
          <p>
            The materials on Newslisted's website are provided on an 'as is' basis. Newslisted makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Newslisted does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. The news sources listed are for informational purposes only. We do not endorse, and are not responsible for, the content of any third-party websites.
          </p>

          <h2 className="text-2xl font-semibold pt-4">3. Limitations</h2>
          <p>
            In no event shall Newslisted or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Newslisted's website, even if Newslisted or a Newslisted authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold pt-4">4. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
