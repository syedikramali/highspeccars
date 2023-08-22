import { Box, Container, Typography } from "@mui/material";
import { map } from "lodash";
import React, { Children, Fragment } from "react";

function Cookies() {
  return (
    <Container sx={{ pb: 10 }}>
      {Children.toArray(
        map(
          [
            {
              label: "Cookies Policy for High Spec Cars LTD",
              value: `High Spec Cars LTD ("us," "we," or "our") uses cookies and other tracking technologies on our website to improve your browsing experience and to understand how our website is used. This Cookies Policy explains what cookies and other tracking technologies we use and how you can control them.`,
            },
            {
              label: "What are Cookies?",
              value: `Cookies are small data files that are placed on your device (computer, tablet, or smartphone) when you visit a website. Cookies allow the website to remember your actions and preferences (such as language, font size, and login information) over a period of time, so you don't have to keep re-entering them whenever you come back to the website or browse from one page to another.`,
            },
            {
              label: "What Cookies do we use?",
              value: (
                <Fragment>
                  <Typography variant="body1" pt={0.5}>
                    We use the following types of cookies on our website:
                  </Typography>
                  <Typography my={2}>
                    <Typography component={"span"} color="error">
                      Strictly Necessary Cookies:
                    </Typography>{" "}
                    These cookies are essential for the website to function
                    properly and cannot be switched off in our systems. They are
                    usually set in response to actions made by you, such as
                    setting your privacy preferences, logging in, or filling in
                    forms. You can set your browser to block or alert you about
                    these cookies, but some parts of the website may not work
                    then.
                  </Typography>{" "}
                  <Typography my={2}>
                    <Typography component={"span"} color="error">
                      Performance Cookies:
                    </Typography>{" "}
                    These cookies allow us to count visits and traffic sources,
                    so we can measure and improve the performance of our
                    website. They help us to know which pages are the most and
                    least popular and see how visitors move around the website.
                    All information these cookies collect is aggregated and
                    therefore anonymous.
                  </Typography>{" "}
                  <Typography my={2}>
                    <Typography component={"span"} color="error">
                      Functionality Cookies:{" "}
                    </Typography>
                    These cookies enable the website to provide enhanced
                    functionality and personalization, such as remembering your
                    preferences and choices, and customizing content for you.
                    They may be set by us or third-party providers whose
                    services we have added to our pages.
                  </Typography>{" "}
                  <Typography my={2}>
                    <Typography component={"span"} color="error">
                      Targeting Cookies:
                    </Typography>{" "}
                    These cookies may be set through our website by our
                    advertising partners. They may be used by those companies to
                    build a profile of your interests and show you relevant
                    adverts on other sites. They do not store directly personal
                    information but are based on uniquely identifying your
                    browser and device.
                  </Typography>{" "}
                  <Typography my={2}>
                    We also use web beacons (also known as pixel tags or clear
                    GIFs) and similar technologies to collect information about
                    your interactions with our website and to measure the
                    effectiveness of our advertising campaigns.
                  </Typography>
                </Fragment>
              ),
            },
            {
              label: "How to Control Cookies",
              value: (
                <Fragment>
                  <Typography my={1}>
                    You can control cookies and other tracking technologies
                    through your browser settings. Most web browsers
                    automatically accept cookies, but you can usually modify
                    your browser settings to decline cookies if you prefer.
                    However, this may prevent you from taking full advantage of
                    our website.
                  </Typography>
                  <Typography my={1}>
                    You can also opt-out of certain tracking technologies by
                    visiting the Network Advertising Initiative opt-out page or
                    the Digital Advertising Alliance opt-out page.
                  </Typography>
                  <Typography my={1}>
                    Please note that disabling cookies or other tracking
                    technologies may affect the functionality of our website and
                    your ability to access certain features.
                  </Typography>
                </Fragment>
              ),
            },
            {
              label: "Changes to the Cookies Policy",
              value: `We may update this Cookies Policy from time to time to reflect changes in our information practices or legal requirements. We will post the updated Cookies Policy on our website, and the revised version will be effective as of the date of posting.`,
            },
            {
              label: "Contact Us",
              value: (
                <Fragment>
                  <Typography my={2}>
                    If you have any questions or concerns about our use of
                    cookies or this Cookies Policy, please contact us at:
                  </Typography>
                  <Typography color={"error"}>High Spec Cars LTD</Typography>
                  <Typography color={"error"}>
                    UNIT 1, CP HOUSE, OTTERSPOOL WAY, WATFORD, WD25 8JJ
                  </Typography>
                  <Typography color={"error"}>
                    Email: info@highspeccars.com
                  </Typography>
                  <Typography color={"error"}>Phone: 07375 370444</Typography>
                </Fragment>
              ),
            },
          ],
          ({ label, value }) => {
            return (
              <Fragment>
                <Typography variant="h6" color="text.secondary" mt={4}>
                  {label}
                </Typography>
                <Box variant="body1" pt={0.5}>
                  {value}
                </Box>
              </Fragment>
            );
          }
        )
      )}
    </Container>
  );
}

export default Cookies;
