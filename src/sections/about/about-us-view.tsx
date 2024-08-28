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
    name: "Alice Johnson",
    role: "Founder & CEO",
    image: "/images/alice-johnson.jpg",
    bio: "Alice is an avid cyclist with a passion for sustainable transportation. She founded our bike rental service to make eco-friendly travel accessible to everyone.",
  },
  {
    name: "Bob Martinez",
    role: "Operations Manager",
    image: "/images/bob-martinez.jpg",
    bio: "Bob has over a decade of experience in logistics and operations. He ensures that our fleet of bikes is always ready and available for our customers.",
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
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-9 ">
        {/* Mission Statement */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Our mission is to promote sustainable and healthy transportation by
            offering affordable and convenient bike rental services for
            everyone.
          </Typography>
        </Box>

        {/* Vision Statement */}
        <div className="mb-5 flex flex-col items-center justify-center">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Vision
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className="max-w-md text-center"
          >
            To become the leading bike rental service, known for our commitment
            to eco-friendly transportation and community engagement.
          </Typography>
        </div>

        <Divider sx={{ my: 10 }} />

        {/* Team Section */}
        <Box mb={10}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
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
                <Card className="p-5">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mb: 2, mx: "auto" }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 1, color: "textSecondary" }}
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
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Founded in 2015
                  </Typography>
                  <Typography color="textSecondary">
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
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Expanded to 5 Cities - 2018
                  </Typography>
                  <Typography color="textSecondary">
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
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Fleet Grows to 1,000 Bikes - 2020
                  </Typography>
                  <Typography color="textSecondary">
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
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Community Engagement - 2023
                  </Typography>
                  <Typography color="textSecondary">
                    We launched several community programs, including bike
                    safety workshops and free rides for students.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Divider sx={{ my: 10 }} />

        {/* Contact Information */}
        <Box textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Home />
              <Typography color="textSecondary">
                Sahbag, Dhaka, Bangladesh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone />
              <Typography color="textSecondary">01954057920</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email />
              <Typography color="textSecondary">
                support@bikerentalservice.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AboutUsView;
