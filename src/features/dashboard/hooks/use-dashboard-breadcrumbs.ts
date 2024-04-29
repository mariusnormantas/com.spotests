/** @format */

import { t } from "i18next";
import useReactRouterBreadcrumbs, {
  BreadcrumbData,
} from "use-react-router-breadcrumbs";
import { useAthleteViewContext } from "@/features/athletes";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTeamViewContext } from "@/features/teams";
import { useTrainerViewContext } from "@/features/trainers";

export const useDashboardBreadcrumbs = (): BreadcrumbData<string>[] => {
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();
  const { trainer } = useTrainerViewContext();
  const { athlete } = useAthleteViewContext();
  return useReactRouterBreadcrumbs([
    {
      path: "/",
      breadcrumb: null,
    },
    {
      path: "/dashboard",
      breadcrumb: null,
    },
    {
      path: "/dashboard/app",
      breadcrumb: t("Home"),
    },
    {
      path: "/dashboard/app/testings",
      breadcrumb: t("Testings"),
    },
    {
      path: "/dashboard/app/visualization",
      breadcrumb: t("Visualization"),
    },
    {
      path: "/dashboard/organizations",
      breadcrumb: t("Organizations"),
    },
    {
      path: "/dashboard/organizations/:organizationId",
      breadcrumb: ({ match }) => {
        return organization ? organization.name : match.params.organizationId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams",
      breadcrumb: t("Teams"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId",
      breadcrumb: ({ match }) => {
        return team ? team.name : match.params.teamId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/trainers",
      breadcrumb: t("Trainers"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/trainers/:trainerId",
      breadcrumb: ({ match }) => {
        return trainer ? trainer.name : match.params.trainerId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/trainers/:trainerId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/athletes",
      breadcrumb: t("Athletes"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/athletes/:athleteId",
      breadcrumb: ({ match }) => {
        return athlete ? athlete.name : match.params.athleteId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/athletes/:athleteId/testings",
      breadcrumb: t("Testings"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/athletes/:athleteId/visualization",
      breadcrumb: t("Visualization"),
    },
    {
      path: "/dashboard/organizations/:organizationId/teams/:teamId/athletes/:athleteId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/organizations/:organizationId/trainers",
      breadcrumb: t("Trainers"),
    },
    {
      path: "/dashboard/organizations/:organizationId/trainers/:trainerId",
      breadcrumb: ({ match }) => {
        return trainer ? trainer.name : match.params.trainerId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/trainers/:trainerId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/organizations/:organizationId/athletes",
      breadcrumb: t("Athletes"),
    },
    {
      path: "/dashboard/organizations/:organizationId/athletes/:athleteId",
      breadcrumb: ({ match }) => {
        return athlete ? athlete.name : match.params.athleteId;
      },
    },
    {
      path: "/dashboard/organizations/:organizationId/athletes/:athleteId/testings",
      breadcrumb: t("Testings"),
    },
    {
      path: "/dashboard/organizations/:organizationId/athletes/:athleteId/visualization",
      breadcrumb: t("Visualization"),
    },
    {
      path: "/dashboard/organizations/:organizationId/athletes/:athleteId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/teams",
      breadcrumb: t("Teams"),
    },
    {
      path: "/dashboard/teams/:teamId",
      breadcrumb: ({ match }) => {
        return team ? team.name : match.params.teamId;
      },
    },
    {
      path: "/dashboard/teams/:teamId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/teams/:teamId/trainers",
      breadcrumb: t("Trainers"),
    },
    {
      path: "/dashboard/teams/:teamId/trainers/:trainerId",
      breadcrumb: ({ match }) => {
        return trainer ? trainer.name : match.params.trainerId;
      },
    },
    {
      path: "/dashboard/teams/:teamId/trainers/:trainerId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/teams/:teamId/athletes",
      breadcrumb: t("Athletes"),
    },
    {
      path: "/dashboard/teams/:teamId/athletes/:athleteId",
      breadcrumb: ({ match }) => {
        return athlete ? athlete.name : match.params.athleteId;
      },
    },
    {
      path: "/dashboard/teams/:teamId/athletes/:athleteId/testings",
      breadcrumb: t("Testings"),
    },
    {
      path: "/dashboard/teams/:teamId/athletes/:athleteId/visualization",
      breadcrumb: t("Visualization"),
    },
    {
      path: "/dashboard/teams/:teamId/athletes/:athleteId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/trainers",
      breadcrumb: t("Trainers"),
    },
    {
      path: "/dashboard/trainers/:trainerId",
      breadcrumb: ({ match }) => {
        return trainer ? trainer.name : match.params.trainerId;
      },
    },
    {
      path: "/dashboard/trainers/:trainerId/interactions",
      breadcrumb: t("Interactions"),
    },
    {
      path: "/dashboard/athletes",
      breadcrumb: t("Athletes"),
    },
    {
      path: "/dashboard/athletes/:athleteId",
      breadcrumb: ({ match }) => {
        return athlete ? athlete.name : match.params.athleteId;
      },
    },
    {
      path: "/dashboard/athletes/:athleteId/testings",
      breadcrumb: t("Testings"),
    },
    {
      path: "/dashboard/athletes/:athleteId/visualization",
      breadcrumb: t("Visualization"),
    },
    {
      path: "/dashboard/athletes/:athleteId/interactions",
      breadcrumb: t("Interactions"),
    },
  ]);
};
