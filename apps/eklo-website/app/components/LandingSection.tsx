import avatarUrl from "@public/landing-avatar.png";
import Image from "next/image";
import { useCallback } from "react";
import css from "./LandingSection.module.scss";
import { EkloButton } from "eklo-ui";

const LandingSection = () => {
  const renderLandingHeadline = useCallback(() => {
    return (
      <div className={css.headline}>
        <h2>Workshop Online</h2>
        <div>Thu 16.06.2021</div>
        <br />
        <EkloButton
          variant="default"
          size="large"
          color="tertiary"
          label=" Tham Gia Ngay"
        />
      </div>
    );
  }, []);

  return (
    <MaxWidthContainer
      backgroundColor="var(--color-eklo-yellow)"
      className={css.landingSection}
      flexDirection="column"
    >
      <Grid
        container
        style={{
          justifyContent: belowMawWidth ? "center" : "space-between",
        }}
      >
        <Grid xs={9} lg={6}>
          <div className={css.avatar}>
            <Image src={avatarUrl} alt="avatar" />
          </div>
        </Grid>
        <Grid xs={10} lg={5}>
          {renderLandingHeadline()}
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KeyboardArrowDownIcon style={{ fontSize: "3rem" }} />
      </div>
    </MaxWidthContainer>
  );
};

export default LandingSection;
