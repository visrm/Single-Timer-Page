import "./App.css";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function App() {
  return (
    <>
      <section>
        <Box
          sx={{
            display: "flex",
            padding: "1.5rem",
            flexDirection: { xs: "column", md: "row" },
            gap: "1rem",
          }}
        >
          {/* First Block  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              gap: "1rem",
              padding: "2rem",
              borderRadius: "1rem",
              minWidth: "35%",
              backgroundColor: "Background",
            }}
          >
            <Stack direction="column" spacing={0.5}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <Typography variant="h5" sx={{ width: "100%" }}>
                  Work in Progress
                </Typography>

                <BsArrowUpRightCircleFill
                  style={{
                    fill: "green",
                    width: "1.75rem",
                    height: "1.75rem",
                  }}
                />
              </div>
              <div>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Enayath
                </Typography>
              </div>
            </Stack>

            <div>
              <Stack
                spacing={2}
                direction="column"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    color="success"
                    variant="determinate"
                    value={100}
                    size={"10rem"}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h5">00:00:00</Typography>
                  </Box>
                </Box>

                <Typography variant="h6" component={"p"}>
                  Pending
                </Typography>
              </Stack>
            </div>

            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "1rem" }}
                color="success"
              >
                Extension
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "1rem" }}>
                Add Service
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "1rem" }}
                color="error"
              >
                End
              </Button>
            </Stack>
          </Box>

          {/* Second Block */}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
              padding: "2rem",
              borderRadius: "1rem",
              backgroundColor: "Background",
            }}
          >
            <Box>
              <Typography variant="h5">Notes</Typography>
              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum asperiores explicabo ipsa quos tempora debitis maxime
                eaque culpa esse est, expedita eum nulla dolorum qui architecto
                pariatur id quod inventore!
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5">Remarks</Typography>
              <Typography variant="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis officia impedit sequi, vitae magnam excepturi
                voluptatum accusamus dolor assumenda esse officiis similique
                quae at praesentium quidem tenetur nisi nihil veritatis.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5">Service</Typography>
              <ol type="1">
                <li>Abc</li>
                <li>ABC</li>
                <li>AbC</li>
                <li>ABc</li>
              </ol>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default App;
