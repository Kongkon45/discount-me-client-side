import React from "react";

const TermsOfUse = () => {
  return (
    <div className="container py-8">
      <h4 className="text-4xl font-bold text-dark-100 pb-4">Terms of use.</h4>
      <p className="text-lg font-normal text-justify text-dark-200">
      Welcome to [Your Company Name]. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and [Your Company Name] (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety
      </p>
      <h4 className="text-4xl font-bold text-dark-100 py-4">→ Scope of Service</h4>
      <ul>
        <li className="text-lg font-normal text-justify text-dark-200">
          a. [Your Company Name] will provide custom logo design services to the
          Client based on the specifications provided by the Client.
        </li>
        <li className="text-lg font-normal text-justify text-dark-200 pt-3">
          b. The Service Provider will deliver the final logo design in the
          agreed-upon format upon completion and full payment of the service
          fee.
        </li>
      </ul>
      <h4 className="text-4xl font-bold text-dark-100 py-4">
        → Copyright and Ownership
      </h4>
      <ul>
        <li className="text-lg font-normal text-justify text-dark-200">
          a. The Client acknowledges that all rights, title, and ownership of
          the final logo design will belong solely to the Client after full
          payment has been received by the Service Provider.
        </li>
        <li className="text-lg font-normal text-justify text-dark-200 py-3">
          b. Final payment ensures that only the agreed design becomes the
          client's property. Any previous ideas/concepts remain the property of
          The Service Provider, unless any prior agreement has been made.
        </li>
        <li className="text-lg font-normal text-justify text-dark-200">
        c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</li>
      </ul>
    </div>
  );
};

export default TermsOfUse;
