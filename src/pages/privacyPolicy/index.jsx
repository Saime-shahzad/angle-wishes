import React from "react";
import "./styles.css";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <UserLayout>
      <Box pt={4} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Introduction
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Welcome to Angel Wishes Memory Keeper. We are committed to
            protecting your privacy. This Privacy Policy outlines our practices
            concerning the collection, use, and protection of personal
            information for residents of Nevada, in accordance with applicable
            state laws including the Nevada Revised Statutes (NRS) regarding
            data privacy.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Information We Collect
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Personal Information
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We collect information that can identify you, such as your name,
            email address, telephone number, and other details you provide when
            you use our website or services. This may also include any data you
            enter while using our services or any other interactions with us.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Usage Information
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            When you visit our website, we may collect information about your
            interaction with our site, such as IP addresses, browser type,
            language, access times, and referring website addresses.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Health Information
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            For services tailored to end-of-life planning, we may collect
            sensitive health information with your explicit consent.
            <Typography pt={3} sx={{ fontSize: 18, fontWeight: 600 }}>
              How We Use Your Information
            </Typography>
          </Typography>

          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  To Provide Services:
                </span>
                Your information helps us to personalize and improve our
                services, including maintaining your account, providing customer
                support, and communicating with you about our services.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  For Legal Compliance:
                </span>
                We use your information as necessary to comply with our legal
                obligations, resolve disputes, and enforce our agreements
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  For Marketing Purposes:
                </span>
                With your consent, we may use your information to send you
                promotional communications about new services, features, and
                offers.
              </Typography>
            </li>
          </ul>
        </Box>
        <Typography
          mt={4}
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Sharing Your Information
        </Typography>
        <Box>
          <Typography pt={2}>
            <span style={{ fontWeight: 600, paddingRight: "5px" }}>
              Third-Party Service Providers:
            </span>
            We share information with third-party service providers, such as web
            hosting and analytics, who perform services on our behalf. These
            service providers are bound by contractual obligations to keep
            personal information confidential and use it only for the purposes
            for which we disclose it to them.
          </Typography>
          <Typography pt={2}>
            <span style={{ fontWeight: 600, paddingRight: "5px" }}>
              Legal Requirements:
            </span>
            We may disclose your personal information if required by law or if
            we believe that such action is necessary to comply with a legal
            obligation, protect and defend our rights or property, or protect
            the safety of our users or others.
          </Typography>
          <Typography pt={2}>
            <span style={{ fontWeight: 600, paddingRight: "5px" }}>
              Business Transfers:
            </span>
            Your personal information may be transferred in the event of a
            merger, acquisition, or asset sale. We will provide notice before
            your personal information is transferred and becomes subject to a
            different privacy policy.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Your Privacy Rights
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Under Nevada law, you have the right to access and control your
            personal information. You may request access to, correction of, or
            deletion of your personal information at any time. Nevada residents
            also have the right to opt out of the sale of their personal
            information.
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            To exercise these rights, please contact us using the information
            below.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Data Security
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We implement various security measures to maintain the safety of
            your personal information when you place an order or enter, submit,
            or access it. These include encryption practices, secure servers,
            and limited access to personal information by staff subject to
            strict confidentiality obligations.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Children’s Privacy
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Our website is not intended for children under 13, and we do not
            knowingly collect data from children under this age. If we learn
            that we have collected personal information from a child under 13,
            we will delete that information as quickly as possible.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Changes to This Privacy Policy
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We may update this policy from time to time to reflect changes in
            our practices or relevant laws. We will post any privacy policy
            changes on this page and, if the changes are significant, we will
            provide a more prominent notice.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            If you have any questions about this Privacy Policy or our treatment
            of your personal information, please write to us by email at
            privacy@angelwishesmemorykeeper.com or by mail at:
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Angel Wishes Memory Keeper and Consulting, LLC.
            <br />
            4841 W Craig Road
            <br />
            Las Vegas, Nevada 89130
            <br />
            USA
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
          This Privacy Policy is designed to comply with Nevada privacy laws and to provide full
transparency into our privacy practices, ensuring that users understand how their personal
information is collected, used, and protected.
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default PrivacyPolicy;
