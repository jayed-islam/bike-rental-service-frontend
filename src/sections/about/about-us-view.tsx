import React from "react";
import {
  Typography,
  Grid,
  Avatar,
  Box,
  Paper,
  Divider,
  Card,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Home, Email, Phone } from "@mui/icons-material";

const teamMembers = [
  {
    name: "Jayed Khan",
    role: "Founder & CEO",
    image: "/images/alice-johnson.jpg",
    bio: "Jayed is an avid cyclist with a passion for sustainable transportation. She founded our bike rental service to make eco-friendly travel accessible to everyone.",
  },
  {
    name: "Imran Hossain",
    role: "Operations Manager",
    image: "/images/bob-martinez.jpg",
    bio: "Imran has over a decade of experience in logistics and operations. He ensures that our fleet of bikes is always ready and available for our customers.",
  },
  {
    name: "Sarah Lee",
    role: "Customer Experience Lead",
    image: "/images/sarah-lee.jpg",
    bio: "Sarah is dedicated to providing the best customer service. She leads our support team to ensure every rider has a smooth and enjoyable experience.",
  },
];

const AboutUsView: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#060417] ">
      <div className="max-w-5xl mx-auto py-9">
        {/* Mission Statement */}
        <div className="px-5 xl:px-0">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, color: "text.primary" }}
            className="dark:text-white"
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, color: "textSecondary" }}
            className="dark:text-gray-400"
          >
            At the heart of our mission is a deep commitment to fostering a
            sustainable future. We aim to revolutionize urban mobility by making
            environmentally friendly transportation accessible to everyone. By
            offering bike rental services that are both affordable and
            convenient, we strive to encourage a healthier lifestyle, reduce
            carbon footprints, and create a cleaner, greener planet.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "textSecondary" }}
            className="dark:text-gray-400"
          >
            We believe that transportation should not only be efficient but also
            sustainable. Our mission is to empower communities by providing a
            seamless, eco-conscious alternative to traditional modes of
            transport, ensuring that everyone has the opportunity to contribute
            to a more sustainable world.
          </Typography>
        </div>

        {/* Vision Statement */}
        <div className="mb-5 flex flex-col items-start justify-center px-5 xl:px-0 mt-16">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, color: "text.primary" }}
            className="dark:text-white"
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, color: "textSecondary" }}
            className="dark:text-gray-400"
          >
            Our vision is to be at the forefront of the global shift towards
            sustainable transportation. We aspire to be recognized as the
            leading bike rental service, synonymous with eco-friendly practices,
            innovation, and community-centric values. Our goal is to inspire a
            cultural transformation where cycling becomes the preferred mode of
            transportation in urban areas, enhancing the quality of life for
            all.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "textSecondary" }}
            className="dark:text-gray-400"
          >
            We see a future where cities are cleaner, streets are safer, and
            communities are more connected. By championing green transportation
            solutions and actively engaging with the communities we serve, we
            aim to pave the way for a world where sustainability is not just an
            option but a standard.
          </Typography>
        </div>

        <Divider sx={{ my: 10 }} className="dark:bg-gray-500" />

        {/* Team Section */}
        <Box mb={10}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
            className="dark:text-white"
          >
            Meet the Team
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Card className="p-5 dark:bg-[#1c1b29]">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mb: 2, mx: "auto" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    className="dark:text-white"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", color: "textSecondary" }}
                    className="dark:text-gray-400"
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="line-clamp-4 text-center mt-2 dark:text-gray-400"
                  >
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 10 }} />

        {/* History & Milestones */}
        <Box mb={10}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
            className="dark:text-white"
          >
            Our Journey
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{ p: 4 }}
                  className="dark:bg-[#1c1b29]"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    className="dark:text-white"
                  >
                    Founded in 2015
                  </Typography>
                  <Typography
                    sx={{ color: "textSecondary" }}
                    className="dark:text-gray-400"
                  >
                    Our bike rental service was launched with a fleet of just 20
                    bikes and a dream to change urban transportation.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{ p: 4 }}
                  className="dark:bg-[#1c1b29]"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    className="dark:text-white"
                  >
                    Expanded to 5 Cities - 2018
                  </Typography>
                  <Typography
                    sx={{ color: "textSecondary" }}
                    className="dark:text-gray-400"
                  >
                    We expanded our services to five major cities, offering more
                    people the convenience of bike rentals.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{ p: 4 }}
                  className="dark:bg-[#1c1b29]"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    className="dark:text-white"
                  >
                    Fleet Grows to 1,000 Bikes - 2020
                  </Typography>
                  <Typography
                    sx={{ color: "textSecondary" }}
                    className="dark:text-gray-400"
                  >
                    Our fleet grew to 1,000 bikes, with a wide range of models
                    to suit all riders.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{ p: 4 }}
                  className="dark:bg-[#1c1b29]"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    className="dark:text-white"
                  >
                    Community Engagement - 2023
                  </Typography>
                  <Typography
                    sx={{ color: "textSecondary" }}
                    className="dark:text-gray-400"
                  >
                    We launched community rides and events to promote cycling
                    and connect with our customers.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Contact Information */}
        <Box className="px-5 xl:px-0 mt-16">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4 }}
            className="dark:text-white"
          >
            Get in Touch
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <Home sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "textSecondary" }}
                  className="dark:text-gray-400"
                >
                  123 Cycling Lane, Bike City, BC 12345
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <Email sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "textSecondary" }}
                  className="dark:text-gray-400"
                >
                  info@bikerentalservice.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <Phone sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "textSecondary" }}
                  className="dark:text-gray-400"
                >
                  +1 (800) 123-4567
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default AboutUsView;
