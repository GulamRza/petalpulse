const TermsAndConditions = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 dark:text-gray-100">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-lg mb-4">
            By using our website, you agree to comply with and be bound by the following terms and
            conditions.
          </p>
  
          {/* Section 1: Use of Website */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Use of Our Website</h2>
            <p>
              You agree to use the website only for lawful purposes and in a way that does not infringe the
              rights of others or restrict their use and enjoyment of the website.
            </p>
          </div>
  
          {/* Section 2: Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and logos, is our property or licensed
              to us. You may not reproduce or distribute any content without our written permission.
            </p>
          </div>
  
          {/* Section 3: Liability */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
            <p>
              We are not responsible for any damages or losses arising from the use of our website or its
              content.
            </p>
          </div>
  
          {/* Section 4: Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Continued use of the
              website constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TermsAndConditions;
  