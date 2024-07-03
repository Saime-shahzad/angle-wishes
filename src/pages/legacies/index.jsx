import React, { useRef } from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Avatar, Box, Typography } from "@mui/material";
import CommonButton from "../../components/other-component/common-button";
import { AuthInputs } from "../../components/other-component/input";
import Images from "../../assets/images";

import Person from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import colors from "../../assets/color/color";
import Phone from "@mui/icons-material/Phone";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

const Legacies = () => {
  const inputRef = useRef(null);
  return (
    <UserLayout>
      <Box pt={4} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 22,
            fontWeight: 600,
          }}
          mb={4}
        >
          Welcome to Our Legacies Page{" "}
        </Typography>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Do You Have a Loved One Who Has Passed Away?
        </Typography>
        <Box>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Losing someone special is never easy, and finding a way to honor
            their memory can be a comforting part of the healing process. At
            Angel Wishes Memory Keeper, we have created this special page for
            your angel, a place dedicated to remembering and celebrating those
            who have passed on. This space allows you to keep their stories
            alive, share cherished moments, and connect with others who
            understand the significance of loss and remembrance.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Why This Page Matters{" "}
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Our Legacies page is more than just a space to share; it's a
            community of memory and legacy. Here, every story told, every
            picture shared, and every video posted serves as a lasting tribute
            to loved ones who, while no longer with us physically, continue to
            inspire and touch our lives. It's a place where memories are
            preserved, the past meets the present, and the essence of a loved
            one's spirit is kept vibrant and alive.
          </Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Celebrate and Share the Stories That Matter Most
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we understand that everyone leaves
            behind a story that deserves to be told and cherished. Our Legacies
            page is a dedicated space where you can celebrate the lives of your
            loved ones who have passed away. Here, you can connect with others,
            share memories, and keep the spirit of your loved ones alive through
            stories, videos, and pictures.
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          How to Share Your Memories
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Creating a Lasting Tribute
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            This page is designed to be a comforting space to honor your loved
            ones by sharing the moments that meant the most. Here’s how you can
            contribute to the Legacies page:
          </Typography>
          <ol>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Post a Comment:</span>
                Share your thoughts, stories, or memories in a written format,
                easily and respectfully.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Upload a Video: </span>
                Videos can capture the essence of moments better than anything
                else. Upload videos of your loved ones to share their life’s
                highlights.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Add Pictures:</span>A picture
                is worth a thousand words. Upload photographs that celebrate the
                life of your loved one, from simple everyday joys to special
                occasions.
              </Typography>
            </li>
          </ol>
        </Box>

        <Typography
          mt={4}
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Guidelines for Posting{" "}
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Maintaining a Respectful Community
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            To ensure that the Legacies page remains a supportive and respectful
            environment, please adhere to the following guidelines:
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Respect Privacy: </span>{" "}
                Always respect the privacy of others. Ensure you can share a
                story, image, or video before posting.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Be Kind and Courteous:</span>
                We are all part of the same community. Please be supportive and
                kind in your interactions.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>
                  No Inappropriate Content:{" "}
                </span>
                Avoid posting anything that is offensive or inappropriate.
                Content that is disrespectful or harmful will be removed.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Explore the Legacies
          </Typography>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Read, Watch, and Connect
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Browse through the posts, watch the videos, and view the images
            others have shared. Each entry is a window into a beautiful story
            that continues to inspire and touch lives even after someone has
            passed away.
          </Typography>
          <Typography pt={1}>[Explore Now - Go to Posts]</Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Share Your Own Story
          </Typography>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Add to the Tapestry of Memories
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Ready to share your story or create a tribute to your loved one?
            Click the button below to begin. Your memories are precious, and
            sharing them can bring comfort and connection to others who
            understand what it means to cherish a legacy.
          </Typography>
          <Typography pt={1}>[Share Your Story - Upload Content]</Typography>
        </Box>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Learn More About Creating a Legacy
          </Typography>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Preserving Memories with Angel Wishes Memory Keeper
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Want to learn more about how to preserve your memories or create a
            digital legacy? Visit our About Us page to understand more about our
            mission and the services we offer that can help you save every
            precious moment.
          </Typography>
          <Typography pt={1}>[Learn More - Go to About Us Page]</Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            The "Legacies" page is crafted to foster a community of remembrance
            and respect, providing users with the tools and space to celebrate
            the lives of those they have lost. This page offers a platform for
            sharing and connecting with others, ensuring that memories continue
            to live on and provide comfort and inspiration
          </Typography>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Commitment to Transparency and Integrity
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we are dedicated to transparency and
            integrity in all our operations. We appreciate your help maintaining
            the quality and safety of our services and your taking the time to
            report your concerns <br /> <br /> This Report a Concern page is
            designed to facilitate an easy and efficient way for users to
            communicate issues, reinforcing Angel Wishes Memory Keeper's
            commitment to transparency, integrity, and responsive customer
            service. Clear instructions and direct communication options ensure
            that users feel supported and valued throughout the process.
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default Legacies;
