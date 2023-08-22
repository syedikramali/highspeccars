import { Box, Container, Typography } from "@mui/material";
import { map } from "lodash";
import React, { Children, Fragment } from "react";

function Privacy() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={3}>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
        High Spec Cars LTD ("us," "we," or "our") is committed to protecting the
        privacy and security of your personal information. This Privacy Policy
        explains how we collect, use, disclose, and protect your personal
        information on our website and in our dealership operations.
      </Typography>
      {Children.toArray(
        map(
          [
            {
              title: "Collection of Information",
              description:
                "We collect personal information about you when you provide it to us, such as when you:",
              list: [
                "Visit our website",
                "Request information from us",
                "Purchase or lease a vehicle from us",
                "Apply for financing with us",
                "Schedule a service appointment",
                "Provide us with feedback or contact us",
                "Participate in contests, surveys, or promotions",
              ],
            },
            {
              title: "",
              description:
                "The types of personal information we may collect include:",
              list: [
                "Name, address, and contact information",
                "Vehicle purchase, lease, and service history",
                "Employment and financial information",
                "Driver's license and insurance information",
                "Marketing and communication preferences",
                "We may also collect information automatically when you visit our website, such as your IP address, browser type, operating system, and browsing activity.",
              ],
            },
            {
              title: "Use of Information",
              description: "We use your personal information to:",
              list: [
                "Process and fulfill your requests and orders",
                "Process and fulfill your requests and orders",
                "Provide information and services to you",
                "Manage our dealership operations",
                "Manage our dealership operations",
                "Communicate with you about our products and services",
                "Customize and improve our website and services",
                "Conduct research and analysis",
                "Comply with legal and regulatory requirements",
                "Customize and improve our website and services",
              ],
            },
            {
              title: "Disclosure of Information",
              description:
                "We may disclose your personal information to third parties in the following circumstances:",
              list: [
                "Service providers who perform services on our behalf, such as financing and insurance companies, marketing agencies, and IT providers",
                "Business partners, such as manufacturers and distributors of vehicles and parts",
                "Government authorities, law enforcement agencies, and other third parties as required by law or legal process",
                "Other parties in connection with a corporate transaction, such as a merger, acquisition, or sale of assets",
                "We do not sell or rent your personal information to third parties for marketing purposes.",
              ],
            },
          ],
          ({ title, description, list }) => {
            return (
              <Fragment>
                <Typography variant="h6" color="text.secondary" mt={4}>
                  {title}
                </Typography>
                <Typography variant="body1" mt={1}>{description}</Typography>
                <ul>
                  {Children.toArray(
                    map(list, (text) => {
                      return (
                        <Typography component="li" variant="body2">
                          {text}
                        </Typography>
                      );
                    })
                  )}
                </ul>
              </Fragment>
            );
          }
        )
      )}
      {Children.toArray(
        map(
          [
            {
              title: "Security of Information",
              text: "We have implemented reasonable technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
            },
            {
              title: "Retention of Information",
              text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law or our business requirements.",
            },
            {
              title: "Your Rights",
              text: "You have the right to access, correct, or delete your personal information, and to object to or restrict its processing, subject to applicable law. To exercise your rights or for any questions or concerns regarding our privacy practices, please contact us at the contact information provided below.",
            },
            {
              title: "Changes to the Privacy Policy",
              text: "We may update this Privacy Policy from time to time to reflect changes in our information practices or legal requirements. We will post the updated Privacy Policy on our website, and the revised version will be effective as of the date of posting.",
            },
          ],
          ({ title, text }) => {
            return (
              <Fragment>
                <Typography variant="h6" color="text.secondary" mt={4}>
                  {title}
                </Typography>
                <Typography variant="body2" my={1}>
                  {text}
                </Typography>
              </Fragment>
            );
          }
        )
      )}

      <Typography variant="h6" color="text.secondary" mt={4}>
        Contact Us
      </Typography>
      <Typography my={1}>
        If you have any questions or concerns about our privacy practices or
        this Privacy Policy, please contact us at:
      </Typography>
      <Typography color={"error"}>High Spec Cars LTD</Typography>
      <Typography color={"error"}>
        UNIT 1, CP HOUSE, OTTERSPOOL WAY, WATFORD, WD25 8JJ
      </Typography>
      <Typography color={"error"}>Email: info@highspeccars.com</Typography>
      <Typography color={"error"}>Phone: 07375 370444</Typography>
    </Container>
  );
}

export default Privacy;
