import { Container, Typography } from "@mui/material";
import { map } from "lodash";
import React, { Children, Fragment } from "react";

function TermsAndServices() {
  return (
    <Container sx={{ mb: 10 }}>
      {Children.toArray(
        map(
          [
            {
              label: "Terms and conditions",
              value: `These terms and conditions (“Agreement”) set forth the general terms and
        conditions of your use of the highspeccars.com website (“Website” or
        “Service”) and any of its related products and services (collectively,
        “Services”). This Agreement is legally binding between you (“User”,
        “you” or “your”) and high spec car sales and detailing ltd (doing
        business as “High Spec Cars LTD”, “we”, “us” or “our”). If you are
        entering into this agreement on behalf of a business or other legal
        entity, you represent that you have the authority to bind such entity to
        this agreement, in which case the terms “User”, “you” or “your” shall
        refer to such entity. If you do not have such authority, or if you do
        not agree with the terms of this agreement, you must not accept this
        agreement and may not access and use the Website and Services. By
        accessing and using the Website and Services, you acknowledge that you
        have read, understood, and agree to be bound by the terms of this
        Agreement. You acknowledge that this Agreement is a contract between you
        and High Spec Cars LTD, even though it is electronic and is not
        physically signed by you, and it governs your use of the Website and
        Services.`,
            },
            {
              label: "Age requirement",
              value: `You must be at least 16 years of age to use the Website and Services. By
            using the Website and Services and by agreeing to this Agreement you
            warrant and represent that you are at least 16 years of age.`,
            },
            {
              label: "Links to other resources",
              value: `Although the Website and Services may link to other resources (such as
              websites, mobile applications, etc.), we are not, directly or indirectly,
              implying any approval, association, sponsorship, endorsement, or
              affiliation with any linked resource, unless specifically stated herein.
              We are not responsible for examining or evaluating, and we do not warrant
              the offerings of, any businesses or individuals or the content of their
              resources. We do not assume any responsibility or liability for the
              actions, products, services, and content of any other third parties. You
              should carefully review the legal statements and other conditions of use
              of any resource which you access through a link on the Website. Your
              linking to any other off-site resources is at your own risk.`,
            },
            {
              label: "Changes and amendments",
              value: `We reserve the right to modify this Agreement or its terms related to the
            Website and Services at any time at our discretion. When we do, we will
            revise the updated date at the bottom of this page. We may also provide
            notice to you in other ways at our discretion, such as through the contact
            information you have provided. An updated version of this Agreement will
            be effective immediately upon the posting of the revised Agreement unless
            otherwise specified. Your continued use of the Website and Services after
            the effective date of the revised Agreement (or such other act specified
            at that time) will constitute your consent to those changes.`,
            },
            {
              label: "Acceptance of these terms",
              value: `You acknowledge that you have read this Agreement and agree to all its
            terms and conditions. By accessing and using the Website and Services you
            agree to be bound by this Agreement. If you do not agree to abide by the
            terms of this Agreement, you are not authorized to access or use the
            Website and Services. This terms and conditions policy was created with
            the help of https://www.websitepolicies.com/terms-and-conditions-generator`,
            },
            {
              label: "Contacting us",
              value: `If you have any questions, concerns, or complaints regarding this
            Agreement, we encourage you to contact us using the details below:
            info@highspeccars.com This document was last updated on April 19, 2023`,
            },
          ],
          ({ label, value }) => {
            return (
              <Fragment>
                <Typography variant="h6" color="text.secondary" mt={3}>
                  {label}
                </Typography>
                <Typography variant="body1" pt={0.5}>
                  {value}
                </Typography>
              </Fragment>
            );
          }
        )
      )}
    </Container>
  );
}

export default TermsAndServices;
