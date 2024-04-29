/** @format */

import React from "react";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { Section } from "@/library/core";
import { useAuthContext } from "@/features/auth";
import {
  TestingsVisualizationFlexibility,
  TestingsVisualizationRadar,
  TestingsVisualizationStability,
  TestingsVisualizationSummary,
  useTestingsSummaryContext,
  useTestingsVisualizationContext,
} from "@/features/testings";
import * as sc from "./DashboardVisualizationPanel.styled";

export const DashboardVisualizationPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const authContext = useAuthContext();
  const visualizationContext = useTestingsVisualizationContext();
  const testingsSummaryContext = useTestingsSummaryContext();

  // Renders page only, when athlete is defined and has necessary values.
  if (!authContext.user || !authContext.user._id) return null;

  // Checks, if there is anything to show.
  if (!visualizationContext.selectedTestings.length) {
    return (
      <Section.Helper variant="informative">
        {t(
          "To view or compare the testings, please select between 1 and 3 performed tests"
        )}
      </Section.Helper>
    );
  }

  // Checks, when testings summary is still loading and retrieving data.
  if (testingsSummaryContext.isLoading || testingsSummaryContext.isFetching) {
    return (
      <Section.Init>
        <Section.Header
          title={t("Visualization")}
          description={t(
            "Detailed summary and comparison of the selected testings"
          )}
        />
        <sc.Loading>
          <sc.Label>{t("Please wait")}</sc.Label>
          <sc.Indicator as={PiCircleNotchBold} />
        </sc.Loading>
      </Section.Init>
    );
  }

  return (
    <React.Fragment>
      <Section.Init>
        <Section.Header
          title={t("Visualization")}
          description={t(
            "Detailed summary and comparison of the selected testings"
          )}
        />
        <sc.Grid>
          <TestingsVisualizationRadar />
          <TestingsVisualizationSummary />
        </sc.Grid>
      </Section.Init>
      <Section.Init>
        <Section.Header
          title={t("Stability and flexibility assessment")}
          description={t(
            "Assessment of stability and flexibility in the performed testings"
          )}
        />
        <sc.Wrapper>
          <TestingsVisualizationStability />
          <TestingsVisualizationFlexibility />
        </sc.Wrapper>
      </Section.Init>
    </React.Fragment>
  );
};
