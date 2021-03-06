// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

function BigDataPage() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="secondary"
            badgeContent="BigData & AI"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h4" fontWeight="bold">
            Enable the Data-Driven Economy
          </MKTypography>
          <MKTypography variant="body1" color="text">
            분산 데이터 처리를 위한 플랫폼에서 여러 클라우드, 데이터 사일로 및 데이터 레이크에서
            페타바이트 규모의 데이터를 운영하는 방법을 지원합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BigDataPage;
