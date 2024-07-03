import React from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Container } from "reactstrap";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Faqs = () => {
  return (
    <UserLayout>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom mt={5}>
          Kids' Corner at Angel Wishes Memory Keeper{" "}
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Welcome to Angel Wishes Memory Keeper, our special place just for
          kids! We understand that sometimes life gives us big challenges, and
          we're here to help alleviate those challenges and help you focus on
          the special moments in life. Let’s explore how we can keep all your
          wonderful memories safe and why it's important for families to save
          special documents and pictures.
        </Typography>
        <Typography variant="h5" gutterBottom mt={5}>
          What We Do Here (new section with image)
        </Typography>
        <Typography variant="h5" gutterBottom mt={5}>
          A Safe Space to Save Your Favorite Memories
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          mt={3}
          sx={{ fontStyle: "italic" }}
        >
          Here at Angel Wishes Memory Keeper, we help you keep all your favorite
          memories safe and sound, from photos of a fun day to a video of your
          birthday party or stories about your adventures safe. It’s like having
          a digital treasure chest to save all the most important things in your
          life! Whether you want to reflect on these memories later or share
          them with someone you love, we ensure they're always there for you.
        </Typography>
        <Typography  mt={2}>
        [Learn More - Go to FAQ Page]

        </Typography>
        <Typography variant="h5" gutterBottom mt={5}>
          Why Memories Matter (new section with image)
        </Typography>
        <Typography variant="h5" gutterBottom mt={5}>
          Keeping Your Stories Alive
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Memories are super important because they tell your story! Think about
          your favorite book or movie; just like those stories, your memories
          tell a wonderful tale about you. Saving these memories means you can
          revisit them anytime you want. It’s like having a book about your life
          that you can read repeatedly. And for kids who are not feeling well,
          it's important to have all their happy moments saved to look at
          whenever they need a smile.
        </Typography>
        <Typography  mt={2}>
        [Learn More - Go to Our Services Page]


        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          How We Help Families (new section with image)
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Gathering Important Stuff in One Place
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          When families go through tough times, like when someone is very sick,
          there are many things to take care of. At Angel Wishes Memory Keeper,
          we help families gather all the essential documents—like doctors’
          notes, pictures, and even your drawings—into one safe spot. This makes
          everyone feel less worried because they know everything necessary is
          kept together and won’t lose it. Let us keep all your favorite digital
          memories and documents safe and in one place.
        </Typography>
        <Typography  mt={2}>
        [Learn More - Go to About Us Page]

      </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Our Special Services for Kids (new section with image)
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Making Each Day Brighter
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          We have some cool tools just for you! You can create your photo album,
          make videos telling your story, or write down your adventures in a
          diary stored safely in the cloud, where only you and your family can
          see it. And if you ever need help or have a question about how to do
          something, our friendly team is here to help you every step of the
          way.
        </Typography>

        <Typography variant="h5" gutterBottom mt={3}>
          Why Join Us?
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Create, Share, and Smile
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          At Angel Wishes Memory Keeper, we believe every child’s story is
          unique and precious. We invite you to start creating your memory
          collection with us. You can start filling your virtual treasure chest
          today and add more smiles and stories whenever possible!
        </Typography>
        <Typography  mt={2}>
        [Start Your Memory Collection - Sign Up Now]


      </Typography>

        <Typography variant="body1" gutterBottom mt={3}>
          Remember, your stories and memories are essential no matter what—they
          are the colorful paints that illustrate your life. Let’s keep them
          safe and sound together so you and your family can enjoy them forever.
          If you want to learn more about how we do this and why it’s so unique,
          click the buttons below!
        </Typography>
        <Typography  mt={2}>
        [Learn More - Go to FAQ Page] [Discover Our Story - Go to About Us Page]


      </Typography>

        <Typography mt={8}></Typography>
      </Container>
    </UserLayout>
  );
};

export default Faqs;
