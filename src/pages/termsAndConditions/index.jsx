import React from "react";
import "./styles.css";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <UserLayout>
      <Box pt={4} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Terms and Conditions
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Welcome to Angel Wishes Memory Keeper! You agree to comply with and
            be bound by the following terms and conditions by accessing and
            using our website, services, and tools. Please review these terms
            carefully. If you disagree with these terms, you should not use this
            site or any of its services or contact us with any questions.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Acceptance of Terms
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            By using our website and services, you signify your agreement to
            these terms and conditions and our Privacy Policy. These terms apply
            to all visitors, users, and others who access or use the Service
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Use of the Website
          </Typography>

          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  License to Use Website:
                </span>
                Angel Wishes Memory Keeper grants you a non-exclusive,
                non-transferable, revocable license to use the website strictly
                in accordance with these terms.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  User Conduct:
                </span>
                You agree not to use the site in a way that may impair its
                performance, corrupt its content, or otherwise reduce its
                overall functionality. You also agree not to compromise the
                website's security or attempt to gain access to secured areas or
                sensitive information.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Intellectual Proper
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            The content, layout, design, data, databases, and graphics on this
            website are protected by intellectual property laws. The content is
            solely owned by Angel Wishes Memory Keeper unless otherwise
            indicated. Except as expressly stated herein, you may not reproduce,
            copy, distribute, or create derivative works from this content
            without the express written permission of Angel Wishes Memory
            Keeper.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            User Accounts
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            If you create an account at Angel Wishes Memory Keeper, you are
            responsible for maintaining its security and for all activities that
            occur under it. You must immediately notify us of any unauthorized
            use of your account or other security breaches.
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Links to Other Websites
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by Angel Wishes Memory Keeper. We
            have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party websites or
            services.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Limitation of Liability
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Angel Wishes Memory Keeper will not be liable for any consequential,
            incidental, indirect, exemplary, punitive, or special damages of any
            kind, however, caused, including loss of profits, revenue, data, or
            use, incurred by you, whether under theory of contract, tort
            (including negligence), warranty or otherwise, irrespective of
            whether we have been advised of the possibility of such damages.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Indemnification
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            You agree to indemnify, defend, and hold harmless Angel Wishes
            Memory Keeper, its officers, directors, employees, agents,
            licensors, suppliers, and any third-party information providers to
            the service from and against all losses, expenses, damages, and
            costs, including reasonable attorneys' fees, resulting from any
            violation of these Terms and Conditions by you
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Governing Law
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            These Terms shall be governed and construed in accordance with the
            laws of the state where Angel Wishes Memory Keeper is headquartered,
            without regard to its conflict of law provisions
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            If you have any questions about these Terms, please contact us at:
          </Typography>
          <ul>
            <li>
              <Typography>
                Email: contact@angelwishesmemorykeeper.com
              </Typography>
            </li>
            <li>
              <Typography>Phone: (555) 123-4567</Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default TermsAndConditions;
