import React from "react";
import footerImg from "../../../assets/footerImg.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Icon } from "@iconify/react";
import { Typography, styled, Box, Link } from "@mui/material";
const FooterContainer = styled(Box)`
  background-color: rgb(13, 63, 138);
  height: 90vh;
`;
const FooterPara = styled(Typography)`
  color: rgb(111, 178, 247);
  font-size: medium;

  & > a {
    color: white;
    font-size: large;
  }
`;

const FooterImg = styled("img")({
  zIndex: "100",
  margin: "60px 80px",
});
const MiddleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: rgb(181, 194, 223);
  margin: -30px 80px 0 60px;

  & > p {
    font-size: small;
  }
`;
const BorderBox = styled(Box)`
  margin: 40px 80px 0 60px;
  width: 90%;
  border-bottom: 0.5px solid gray;
`;
const SocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`;
const Footer = () => {
  return (
    <FooterContainer
      sx={{
        width: { xs: "42.5%", sm: "60%", md: "100%", lg: "1400px", xl: "100%" },
        height: {
          xs: "140vh",
          sm: "90vh",
          md: "90vh",
          lg: "90vh",
          xl: "90vh",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}
      >
        <Box sx={{ margin: "80px 60px" }}>
          <FooterPara
            sx={{
              fontSize: { xs: "small" },
              marginLeft: { xs: "-30px", md: "10px" },
            }}
          >
            For job opportunities, reach out to{" "}
            <Link href="#" underline="none">
              {"pod@arbisoft.com"}
            </Link>
          </FooterPara>
          <FooterPara
            sx={{
              fontSize: { xs: "small" },
              marginLeft: { xs: "-30px", md: "10px" },
            }}
          >
            For business enquiries, reach to{" "}
            <Link href="#" underline="none">
              {"contact@arbisoft.com"}
            </Link>
          </FooterPara>
        </Box>
        <FooterImg
          src={footerImg}
          sx={{
            width: { xs: "150px", sm: "220px", md: "220px" },
            height: { xs: "150px", sm: "220px", md: "220px" },
          }}
        ></FooterImg>
      </Box>
      <MiddleBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          width: {
            xs: "400px",
            sm: "500px",
            md: "1000px",
            lg: "1200px",
            xl: "100%",
          },
        }}
      >
        <Typography>
          +1 (469) 215 2958
          <br />
          2035 Central Cir Suite #201 McKinney, TX 75069
        </Typography>
        <Typography>
          +49 157 39369191
          <br />
          KAYAK Technology Center, Straße der Pariser Kommune 8, 10243 Berlin.
        </Typography>
        <Typography>
          (042) 37498533
          <br />
          25 Canal Rd, Westwood Colony Lahore, Punjab 54000
        </Typography>
        <Typography>
          10-D (West), 1st Floor Taimur Chambers Fazl-ul-Haq Road,
          <br /> Blue Area Islamabad 44010
        </Typography>
      </MiddleBox>
      <BorderBox
        sx={{
          marginLeft: {
            xs: "-10px",
            sm: "60px",
            md: "60px",
            lg: "60px",
            xl: "60px",
          },
        }}
      ></BorderBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },

            width: "100%",
            margin: "50px 0 0 60px",
            fontSize: "small",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              marginLeft: { xs: "-30px", sm: "60px", md: "60px" },
              justifyContent: "space-between",
              width: "80%",
              fontSize: "small",
            }}
          >
            <Link href="#" underline="none" sx={{ color: "rgb(181,194,223)" }}>
              {"© 2023 Arbisoft. All Rights Reserved."}
            </Link>
            <Link href="#" underline="none" sx={{ color: "rgb(181,194,223)" }}>
              {"Privacy Policy"}
            </Link>
            <Link href="#" underline="none" sx={{ color: "rgb(181,194,223)" }}>
              {"Security Policy"}
            </Link>
            <Link href="#" underline="none" sx={{ color: "rgb(181,194,223)" }}>
              {"Imprint"}
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px 75px 0 0",
            fontSize: "small",
            width: "40%",
            marginLeft: { xs: "30px", sm: "60px", md: "60px" },
          }}
        >
          <Typography
            sx={{
              color: "rgb(181,194,223)",
              width: "100px",
              fontSize: "small",
              margin: "15px 0 0 0",
            }}
          >
            Find us on:
          </Typography>
          <SocialLink
            href="#"
            underline="none"
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "DodgerBlue",
              borderRadius: "50%",
              fontSize: "25px",
            }}
          >
            <Icon icon="eva:facebook-outline" />
          </SocialLink>
          <SocialLink
            href="#"
            underline="none"
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "DodgerBlue",
              borderRadius: "50%",
              fontSize: "25px",
            }}
          >
            <Icon icon="mdi:instagram" />
          </SocialLink>
          <SocialLink
            href="#"
            underline="none"
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "DodgerBlue",
              borderRadius: "50%",
              fontSize: "25px",
            }}
          >
            <Icon icon="lucide:linkedin" />
          </SocialLink>
          <SocialLink
            href="#"
            underline="none"
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "DodgerBlue",
              borderRadius: "50%",
              fontSize: "25px",
            }}
          >
            <Icon icon="teenyicons:twitter-outline" />
          </SocialLink>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
