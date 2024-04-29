/** @format */

import React from "react";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { Section } from "@/library/core";
import {
  TestingsVisualizationFlexibility,
  TestingsVisualizationRadar,
  TestingsVisualizationSelectedTestings,
  TestingsVisualizationStability,
  TestingsVisualizationSummary,
  useTestingsSummaryContext,
  useTestingsVisualizationContext,
} from "@/features/testings";
import * as sc from "./DashboardHomeAthleteVisualizationPanel.styled";

const _DashboardHomeAthleteVisualizationPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const visualization = useTestingsVisualizationContext();
  const summary = useTestingsSummaryContext();

  // Checks, if there is anything to show.
  if (!visualization.selectedTestings.length) {
    return (
      <Section.Helper variant="informative">
        {t(
          "To view or compare the testings, please select between 1 and 3 performed tests"
        )}
      </Section.Helper>
    );
  }

  // Checks, when testings summary is still loading and retrieving data.
  if (summary.isLoading || summary.isFetching) {
    return (
      <sc.Loading>
        <sc.Label>{t("Please wait")}</sc.Label>
        <sc.Indicator as={PiCircleNotchBold} />
      </sc.Loading>
    );
  }

  return (
    <React.Fragment>
      <TestingsVisualizationSelectedTestings />
      <Section.Init>
        <sc.Grid>
          <TestingsVisualizationRadar />
          <TestingsVisualizationSummary />
        </sc.Grid>
      </Section.Init>
      <Section.Init>
        <sc.Grid>
          <TestingsVisualizationFlexibility />
          <TestingsVisualizationStability />
        </sc.Grid>
      </Section.Init>
    </React.Fragment>
  );
};

export const DashboardHomeAthleteVisualizationPanel = React.memo(
  _DashboardHomeAthleteVisualizationPanel
);
DashboardHomeAthleteVisualizationPanel.displayName =
  "@/pages/DashboardHomeAthleteVisualizationPanel";
